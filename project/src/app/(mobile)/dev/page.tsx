import Question from "@/features/question/components/question";
import Footer from "@/features/footer/components/footer";

export default function Dev() {
  return (
    <div>
      <div className="text-lg text-secondary font-bold pb-8">
        Please answer the questions
      </div>
      <div className="pb-6">
        Over the last two weeks, how often have you been bothered by any of the
        following problems?
      </div>
      <Question question="How often do you feel sad"></Question>

      <Footer />
    </div>
  );
}
