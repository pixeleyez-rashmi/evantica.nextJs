import SpeakerHome from "./SpeakerHome/SpeakerHome";
import SpeakersList from "./SpeakersList";

export default function SpeakerIndex() {
  return (
    <>
      <div className="relative font-ibm">
        <SpeakerHome />
        <SpeakersList />
      </div>
    </>
  );
}
