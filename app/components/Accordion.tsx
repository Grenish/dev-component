import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionProps {
  isOpen: boolean;
  onToggle: () => void;
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({
  isOpen,
  onToggle,
  title,
  content,
}) => {
  return (
    <motion.div className="border-b-2 border-gray-600 w-full md:w-1/4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3 focus:outline-none"
      >
        <span>{title}</span>
        <motion.span
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? -90 : 0 }}
          className="transform"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-3 text-sm">{content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Accordion;
