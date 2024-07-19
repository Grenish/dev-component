"use client";

import Accordion from "../components/Accordion";
import CodeBig from "../components/CodeBig";
import CodeSmall from "../components/CodeSmall";

import React, { useState } from "react";
import LinkPreview from "../components/LinkPreview";

export default function TestPage() {
  const code = "npm create vite@latest . --template react-ts";

  const rustExe = `
    fn main() {
      println!("Hello, World!");
    }
  `;

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="h-screen justify-center items-center flex flex-col">
      <CodeSmall content={code} />
      <CodeBig language="rust" code={rustExe} />
      <Accordion
        isOpen={openIndex === 0}
        onToggle={() => handleToggle(0)}
        title="Title One"
        content="Content for the first accordion goes here."
      />
      <Accordion
        isOpen={openIndex === 1}
        onToggle={() => handleToggle(1)}
        title="Title Ona"
        content="Content for the first accordion goes here."
      />
      <Accordion
        isOpen={openIndex === 2}
        onToggle={() => handleToggle(2)}
        title="Title Ons"
        content="Content for the first accordion goes here."
      />
      <LinkPreview
        url="https://example.com"
        previewImage="https://ipfs.filebase.io/ipfs/QmcToifmSHqGBnCKRWKJ72MWNrEaJ2X4d44wZHPss9LNoR"
      >
        SnugNest
      </LinkPreview>
    </div>
  );
}
