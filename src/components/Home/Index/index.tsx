import HomeSection from "./Home";
import AboutSection from "./About";
import SponsorsSection from "./Sponsors";
import SpeakerSection from "./Speaker";
import EventSection from "./Event";
import PricingSection from "./Pricing";
import GallerySection from "./Gallery";
import TestimonialSection from "./Testimonial";
import CtaSection from "./Cta";

export default function Index() {
    return (
        <>
            <div className="bg-[#032530]">
                <HomeSection />
                <AboutSection />
                <SponsorsSection />
                <SpeakerSection />
                <EventSection />
                <GallerySection />
                <PricingSection />
                <TestimonialSection />
                <CtaSection />
            </div>
        </>
    );
}