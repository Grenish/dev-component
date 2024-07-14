"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface LinkPreviewProps {
  text: string;
  url: string;
  previewImage: string;
  classname?: string;
}

const LinkPreview: React.FC<LinkPreviewProps> = ({
  text,
  url,
  previewImage,
  classname,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (event: React.MouseEvent) => {
    setIsHovered(true);
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
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
      >
        {text}
      </a>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          style={{
            position: "fixed",
            top: mousePosition.y + 10,
            left: mousePosition.x + 10,
            pointerEvents: "none",
            zIndex: 99999,
          }}
          className="bg-white border rounded-lg shadow-lg p-1"
        >
          <img
            src={previewImage}
            alt="Link preview"
            className=" w-36 h-auto object-cover rounded-md"
          />
        </motion.div>
      )}
    </div>
  );
};

export default LinkPreview;
