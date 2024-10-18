"use client";

import Question from "@/features/question/components/question";
import { PHQ9 } from "@/features/question/utils/utils";
import { ChevronLeft } from "lucide-react";

import { useState } from "react";

export type SelectQuestion = {
	question: string;
	answer: number | null;
};

type InputQuestion = {
	question: string | null;
	answer: string | null;
};

type DataType = {
	phq9: SelectQuestion[];
	gad7: SelectQuestion[];
	custom: InputQuestion[];
};

const defaultData: DataType = {
	phq9: [
		{
			question: "Little interest or pleasure in doing things",
			answer: null,
		},
		{
			question: "Feeling down, depressed, or hopeless",
			answer: null,
		},
		{
			question: "Trouble falling or staying asleep, or sleeping too much",
			answer: null,
		},
		{
			question: "Feeling tired or having little energy",
			answer: null,
		},
		{
			question: "Poor appetite or overeating",
			answer: null,
		},
		{
			question:
				"Feeling bad about yourself — or that you are a failure or have let yourself or your family down",
			answer: null,
		},
		{
			question:
				"Trouble concentrating on things, such as reading the newspaper or watching television",
			answer: null,
		},
		{
			question:
				"Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual",
			answer: null,
		},
		{
			question:
				"Thoughts that you would be better off dead or of hurting yourself in some way",
			answer: null,
		},
	],
	gad7: [
		{
			question: "Feeling nervous, anxious, or on edge",
			answer: null,
		},
		{
			question: "Not being able to stop or control worrying",
			answer: null,
		},
		{
			question: "Worrying too much about different things",
			answer: null,
		},
		{
			question: "Trouble relaxing",
			answer: null,
		},
		{
			question: "Being so restless that it is hard to sit still",
			answer: null,
		},
		{
			question: "Becoming easily annoyed or irritable",
			answer: null,
		},
		{
			question: "Feeling afraid, as if something awful might happen",
			answer: null,
		},
	],
	custom: [
		{
			question: null,
			answer: null,
		},
		{
			question: null,
			answer: null,
		},
		{
			question: null,
			answer: null,
		},
	],
};

export default function MentalHealth() {
	const [screen, setScreen] = useState<number>(0);
	const [data, setData] = useState<DataType>(defaultData);

	let toDisplay: JSX.Element;

	if (screen === 0) {
		toDisplay = (
			<>
				<h2 className="pt-12 font-medium text-secondary">
					Over the last two weeks, how often have you been bothered by
					any of the following problems?
				</h2>
				<div className="pt-12 flex flex-col gap-8">
					{data.phq9.map((item) => (
						<Question
							key={item.question}
							question={item.question}
							answer={item.answer}
							onClick={(answer) => {
								setData({
									...data,
									phq9: data.phq9.map((phqItem) => {
										return {
											...phqItem,
											answer:
												phqItem.question ===
												item.question
													? answer
													: phqItem.answer,
										};
									}),
								});
							}}
						/>
					))}
				</div>
				<button
					onClick={() => setScreen(screen + 1)}
					className="mt-12 w-full py-2 rounded-full bg-primary text-white font-medium"
				>
					Next
				</button>
			</>
		);
	} else if (screen === 1) {
		toDisplay = (
			<>
				<h2 className="pt-12 font-medium text-secondary">
					Over the last two weeks, how often have you been bothered by
					any of the following problems?
				</h2>
				<div className="pt-12 flex flex-col gap-8">
					{data.gad7.map((item) => (
						<Question
							key={item.question}
							question={item.question}
							answer={item.answer}
							onClick={(answer) => {
								setData({
									...data,
									gad7: data.gad7.map((gad7Item) => {
										return {
											...gad7Item,
											answer:
												gad7Item.question ===
												item.question
													? answer
													: gad7Item.answer,
										};
									}),
								});
							}}
						/>
					))}
				</div>
				<button
					onClick={() => setScreen(screen + 1)}
					className="mt-12 w-full py-2 rounded-full bg-primary text-white font-medium"
				>
					Next
				</button>
			</>
		);
	} else {
		toDisplay = <></>;
	}

	console.log(data);

	return (
		<div className="pt-16 px-4 pb-8">
			<div className="flex flex-col gap-6">
				<div className="flex items-center gap-2">
					<ChevronLeft className="h-5 w-5 stroke-primary" />
					<span className="text-primary font-medium">Back</span>
				</div>
				<h1 className="font-bold text-2xl text-secondary">
					Please answer the questions
				</h1>
			</div>
			{toDisplay}
		</div>
	);
}
