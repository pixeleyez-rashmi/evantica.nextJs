import EventGallery from "./EventGallery";
import EventHome from "./EvnetHome";

export default function EventGalleryIndex() {
  return (
    <>
      <div className="relative font-ibm">
        <EventHome />
        <EventGallery />
      </div>
    </>
  );
}
