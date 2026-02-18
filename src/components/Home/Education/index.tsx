import HomeSection from "./Home";
import CountdownSection from "./Countdown";
import FeaturesSection from "./Features";
import AboutSection from "./About";
import ScheduleSection from "./Schedule";
import SponsorSection from "./Sponsor";
import SpeakerSection from "./Speaker";
import AttendeesSection from "./testimonial";
import PricingSection from "./Pricing";

export default function Index() {
  return (
    <>
      <HomeSection />
      <CountdownSection />
      <FeaturesSection />
      <AboutSection />
      <ScheduleSection />
      <SponsorSection />
      <SpeakerSection />
      <AttendeesSection />
      <PricingSection />
    </>
  );
}
