import Question from "@/features/question/components/question";
import { PHQ9 } from "@/features/question/utils/utils";
export default function Form() {
  return (
    <div>
      <div className="flex flex-col gap-8">
        {PHQ9.map((item, index) => (
          <Question key={index} question={item.question}></Question>
        ))}
      </div>
    </div>
  );
}
