"use client";

import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  language: string;
  code: string;
  description?: string;
}

const CodeBig: React.FC<CodeBlockProps> = ({ language, code, description }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const formatCode = (code: string): string => {
    const lines = code.split("\n");
    const nonEmptyLines = lines.filter((line) => line.trim() !== "");

    if (nonEmptyLines.length === 0) return code;

    const minLeadingSpaces = Math.min(
      ...nonEmptyLines.map((line) => line.match(/^ */)?.[0].length ?? 0)
    );

    return lines.map((line) => line.slice(minLeadingSpaces)).join("\n");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 3000);
    });
  };

  return (
    <div className="sm:w-1/2 w-full  p-2">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <div className="bg-gray-800 text-white px-3 py-2 text-sm font-semibold flex justify-between items-center">
          <span className="text-sm">{language.toUpperCase()}</span>
          <button
            onClick={copyToClipboard}
            aria-label="Copy code to clipboard"
            className="focus:outline-none"
          >
            {copySuccess ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path>
              </svg>
            )}
          </button>
        </div>
        <SyntaxHighlighter
          language={language}
          style={atomDark}
          customStyle={{ padding: "10px 20px", margin: "0", "fontSize": "10px" }}
          wrapLines
          showLineNumbers
        >
          {formatCode(code)}
        </SyntaxHighlighter>
        {description && (
          <div className="bg-gray-800 text-white px-3 py-2 text-xs">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeBig;
