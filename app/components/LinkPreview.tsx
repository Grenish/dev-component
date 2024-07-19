"use client";

import React, { useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface LinkPreviewProps {
  url: string;
  previewImage: string;
  classname?: string;
  children: ReactNode;
}

const LinkPreview: React.FC<LinkPreviewProps> = ({
  url,
  previewImage,
  classname,
  children,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ left: true, top: true });

  const handleMouseEnter = (event: React.MouseEvent) => {
    setIsHovered(true);
    updateMousePosition(event);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    updateMousePosition(event);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const updateMousePosition = (event: React.MouseEvent) => {
    const x = event.clientX;
    const y = event.clientY;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const left = x + 150 <= windowWidth; // assuming preview width of 150px
    const top = y + 100 <= windowHeight; // assuming preview height of 100px

    setMousePosition({ x, y });
    setPosition({ left, top });
  };

  return (
    <div className="relative inline-block">
      <a
        href={url}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={classname}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          style={{
            position: "fixed",
            top: position.top ? mousePosition.y + 10 : mousePosition.y - 110, // Adjust based on preview height
            left: position.left ? mousePosition.x + 10 : mousePosition.x - 160, // Adjust based on preview width
            pointerEvents: "none",
            zIndex: 99999,
          }}
          className="bg-white border rounded-lg shadow-lg p-1"
        >
          <img
            src={previewImage}
            alt="Link preview"
            className="w-36 h-auto object-cover rounded-md"
          />
        </motion.div>
      )}
    </div>
  );
};

export default LinkPreview;
