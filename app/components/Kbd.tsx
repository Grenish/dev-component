"use client";

import { Kbd } from "@nextui-org/kbd";
import React from "react";

type KbdKey =
  | "command"
  | "shift"
  | "ctrl"
  | "option"
  | "enter"
  | "delete"
  | "escape"
  | "tab"
  | "capslock"
  | "up"
  | "right"
  | "down"
  | "left"
  | "pageup"
  | "pagedown"
  | "home"
  | "end"
  | "help"
  | "space";

interface KbdTagProps {
  keys: KbdKey[];
  cont: string;
  classname?: string;
}

const KbdTag: React.FC<KbdTagProps> = ({ keys, cont, classname }) => {
  return (
    <Kbd keys={keys} className={classname}>
      {cont}
    </Kbd>
  );
};

export default KbdTag;
