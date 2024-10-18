"use client";

import { SelectQuestion } from "@/app/(mobile)/mental-health/page";

const options: string[] = [
	"Not at all",
	"Several days",
	"More than half the days",
	"Nearly every day",
];

type QuestionProps = SelectQuestion & {
	onClick: (answer: number) => void;
};

export default function Question({ question, answer, onClick }: QuestionProps) {
	console.log(answer);
	return (
		<div>
			<div className="text-secondary font-bold pb-2">{question}</div>
			<div className="grid grid-cols-4 gap-1">
				{options.map((option, index) => (
					<div className="flex flex-col items-center">
						<button
							key={option}
							className={`flex gap-2 h-16 w-full px-4 justify-between items-center ${
								answer === index
									? "bg-primary"
									: "bg-secondaryLight"
							} ${
								index === 0
									? "rounded-l-2xl"
									: index === options.length - 1
									? "rounded-r-2xl"
									: "rounded-none"
							}`}
							onClick={() => onClick(index)}
						></button>
						<span
							className={`text-center text-sm font-medium mt-2 ${
								answer === index
									? "text-primary"
									: "text-secondary"
							}`}
						>
							{option}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}
