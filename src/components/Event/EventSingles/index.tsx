import EventHome from "./EventHome";
import EventInfo from "./EventInfo";
import EventSingle from "./EventSingle";

export default function EventSingleIndex() {
  return (
    <>
      <div className="relative font-ibm">
        <EventHome />
        <EventSingle />
        <EventInfo />
      </div>
    </>
  );
}
