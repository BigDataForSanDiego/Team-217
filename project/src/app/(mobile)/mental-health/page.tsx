import Question from "@/features/question/components/question";
import { PHQ9 } from "@/features/question/utils/utils";
import { ChevronLeft } from "lucide-react";

export default function MentalHealth() {
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
			<h2 className="pt-12 font-medium text-secondary">
				Over the last two weeks, how often have you been bothered by any
				of the following problems?
			</h2>
			<div className="pt-12 flex flex-col gap-8">
				{PHQ9.map((item) => (
					<Question key={item.question} question={item.question} />
				))}
			</div>
			<button className="mt-12 w-full py-2 rounded-full bg-primary text-white font-medium">
				Next
			</button>
		</div>
	);
}
