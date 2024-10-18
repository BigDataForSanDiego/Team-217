"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { QuestionInfo } from "../types/types";

export default function Question({ question }: QuestionInfo) {
  const [selected, setSelected] = useState<number | null>(null);

  const options = [0, 1, 2, 3];

  const scale = [
    "Not at all",
    "Several days",
    "More than half the days",
    "Nearly every day",
  ];

  return (
    <div className="p-4">
      <div className="text-secondary font-bold pb-2">{question}</div>
      <div className="grid grid-cols-4 gap-1">
        {options.map((option, index) => (
          <div className="flex flex-col items-center">
            <button
              key={option}
              className={`flex gap-2 h-16 w-full px-4 justify-between items-center ${
                selected === option ? "bg-primary" : "bg-secondaryLight"
              } ${
                index === 0
                  ? "rounded-l-2xl"
                  : index === options.length - 1
                  ? "rounded-r-2xl"
                  : "rounded-none"
              }`}
              onClick={() => setSelected(option)}
            ></button>
            <span
              className={`text-center text-sm font-medium mt-2 ${
                selected === option ? "text-primary" : "text-secondary"
              }`}
            >
              {scale[index]}
            </span>
          </div>
        ))}
      </div>
      <div>{selected}</div>
    </div>
  );
}
