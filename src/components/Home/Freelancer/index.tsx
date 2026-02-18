import HomeSection from "./Home";
import AboutSection from "./About";
import SponsorSection from "./Sponsor";
import AttendSection from "./Attend";
import ScheduleSection from "./Schedule";
import PricingSection from "./Pricing";
import GallerySection from "./Gallery";
import TestimonialSection from "./Testimonial";
import BlogSection from "./Blog";

export default function Index() {
  return (
    <>
      <div className="relative">
        <HomeSection />
        <AboutSection />
        <SponsorSection />
        <AttendSection />
        <ScheduleSection />
        <PricingSection />
        <GallerySection />
        <TestimonialSection />
        <BlogSection />
      </div>
    </>
  );
}
