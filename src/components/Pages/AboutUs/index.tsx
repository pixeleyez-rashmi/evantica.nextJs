import AboutUSAbout from "./AboutUsAbout";
import AboutUsCountdown from "./AboutUsCountdown";
import AboutUsHome from "./AboutUsHome";
import AboutUsSpeaker from "./AboutUsSpeaker";

export default function AboutUsIndex() {
  return (
    <>
      <div className="relative font-ibm">
        <AboutUsHome />
        <AboutUSAbout />
        <AboutUsCountdown />
        <AboutUsSpeaker />
      </div>
    </>
  );
}
