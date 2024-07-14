"use client";

import React, { useState, useRef } from "react";
import { Source_Code_Pro } from "next/font/google";

const codeFont = Source_Code_Pro({ subsets: ["latin"] });

const CodeSmall: React.FC<{ content: string }> = ({ content }) => {
  const [showCheck, setShowCheck] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);

  const copyContent = async () => {
    try {
      if (textRef.current) {
        const textToCopy = textRef.current.textContent || "";
        await navigator.clipboard.writeText(textToCopy);
        setShowCheck(true);
        setTimeout(() => {
          setShowCheck(false);
        }, 1000);
      }
    } catch (error) {
      console.error("Copy failed", error);
    }
  };

  return (
    <div>
      <div className="p-2 text-sm bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white rounded-xl min-w-[260px] max-w-full md:max-w-[560px] flex justify-between items-center">
        <div className="flex-1 overflow-x-auto">
          <span
            ref={textRef}
            className={`inline-block whitespace-nowrap mr-2 ${codeFont.className}`}
          >
            {content}
          </span>
        </div>
        <button onClick={copyContent} className="ml-2">
          {showCheck ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M224,48V208a16,16,0,0,1-16,16H136a8,8,0,0,1,0-16h72V48H48v96a8,8,0,0,1-16,0V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM125.66,154.34a8,8,0,0,0-11.32,0L64,204.69,45.66,186.34a8,8,0,0,0-11.32,11.32l24,24a8,8,0,0,0,11.32,0l56-56A8,8,0,0,0,125.66,154.34Z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"></path>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default CodeSmall;
