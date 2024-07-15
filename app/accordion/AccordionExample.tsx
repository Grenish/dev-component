"use client";

import React, { useState, useCallback } from "react";
import Accordion from "@/app/components/Accordion";

export default function AccordionExample() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = useCallback((index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  }, []);

  const accordionData = [
    { title: "I guess this is cool", content: "I guess it is..." },
    { title: "So much freedom", content: "And many more..." },
    {
      title: "Copy and paste, you say?",
      content: "Yes.. just copy and paste.",
    },
  ];

  return (
    <div className="m-auto mt-5">
      {accordionData.map((item, index) => (
        <Accordion
          key={index}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
          title={item.title}
          content={item.content}
        />
      ))}

      The Rest Is your Imagination
    </div>
  );
}
