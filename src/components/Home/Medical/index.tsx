import MedicalHomeSection from "./Home";
import MedicalAboutSection from "./About";
import MedicalSponsorSection from "./Sponsor";
import MedicalScheduleSection from "./schedule";
import MedicalSpeakersSection from "./speakers";
import MedicalTestimonialSection from "./Testimonial";
import MedicalFAQSection from "./faq";
import MedicalVenueSection from "./venue";

export default function MedicalHomeIndex() {
  return (
    <div className="relative overflow-hidden">
      <MedicalHomeSection />
      <MedicalAboutSection />
      <MedicalSponsorSection />
      <MedicalScheduleSection />
      <MedicalSpeakersSection />
      <MedicalTestimonialSection />
      <MedicalFAQSection />
      <MedicalVenueSection />
    </div>
  );
}
