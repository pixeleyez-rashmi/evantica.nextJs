import EventAttend from "./EventAttend";
import EventGallery from "./EventGallery";
import EventHome from "./EventHome";
import EventMap from "./EventMap";
import EventVenue from "./EventVenue";

export default function EventVenueIndex() {
  return (
    <>
      <div className="relative font-ibm">
        <EventHome />
        <EventVenue />
        <EventAttend />
        <EventGallery />
        <EventMap />
      </div>
    </>
  );
}
