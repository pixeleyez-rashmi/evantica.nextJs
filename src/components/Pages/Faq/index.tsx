import FaqHome from "./FaqHome";
import FaqQuestion from "./FaqQuestions";

export default function FaqIndex() {
  return (
    <>
      <div className="relative font-ibm">
        <FaqHome />
        <FaqQuestion />
      </div>
    </>
  );
}
