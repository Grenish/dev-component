"use client";

import React, { useState, useCallback } from "react";
import Accordion from "@/app/components/Accordion";
import CodeBig from "@/app/components/CodeBig";
import CodeSmall from "@/app/components/CodeSmall";

const AccordionExample = () => {
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
    {
      title: "Here comes lorem ipsum",
      content: "lorem ipsum dolor sit amet... Just kidding.",
    },
  ];

  const installationCommand = "npm install @your-library/accordion";
  const usageCode = `
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
    </div>
  );
}
`;

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center mb-5">
        <h2 className="text-2xl font-bold">Accordion</h2>
        <p className="text-sm">
          Accordion, open and close the information you need.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center mb-5 p-2 ">
        <h2 className="text-xl font-semibold">Preview</h2>
        {accordionData.map((item, index) => (
          <Accordion
            key={index}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>

      <div className="flex flex-col items-center justify-center  p-2">
        <h2 className="text-xl font-semibold">Code</h2>
        <CodeBig language="tsx" code={usageCode} />
      </div>

      <div className=" w-full ">
        <div className="w-[70%] p-2 mx-auto">
          <h2 className="text-xl font-semibold">Installation</h2>
          <ul className=" list-disc ml-5 mt-2">
            <li>Install tailwindcss and nextui form and set up a project.</li>
            <li>
                Copy the code to directory <code>app/components/Accordion.tsx</code>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AccordionExample;
