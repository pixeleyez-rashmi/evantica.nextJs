import TechHomeSection from "./Home";
import FeaturesSection from "./Features";
import AboutSection from "./About";
import ScheduleSection from "./Schedule";
import PricingSection from "./Pricing";
import TestimonialSection from "./Testimonial";
import SpeakerSection from "./Speaker";
import ContactSection from "./Contact";

export default function Index() {
  return (
    <>
      <div className="relative">
        <TechHomeSection />
        <FeaturesSection />
        <AboutSection />
        <ScheduleSection />
        <PricingSection />
        <TestimonialSection />
        <SpeakerSection />
        <ContactSection />
      </div>
    </>
  );
}