import SpeakerDetail from "./SpeakerDetail";
import SpeakerDetailsHome from "./SpeakerDetalisHome";

export default function SpeakerDetailsIndex() {
  return (
    <>
      <div className="relative font-ibm">
        <SpeakerDetailsHome />
        <SpeakerDetail />
      </div>
    </>
  );
}
