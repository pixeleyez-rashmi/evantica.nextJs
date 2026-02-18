"use client";

import { usePathname } from "next/navigation";
import BusinessFooter from "./Business";
import EducationFooter from "./Education";
import TechFooter from "./Tech";
import FreelancerFooter from "./Freelancer";
import MedicalFooter from "./Medical";
import MusicFooter from "./Music";
import EventFooter from "./Event";

// Footer configuration: Map routes to footer components
const footerConfig: Record<
  string,
  | "business"
  | "education"
  | "event"
  | "freelancer"
  | "medical"
  | "music"
  | "tech"
> = {
  "/": "business", // Home page uses Business footer
  "/home-freelancer": "freelancer", // Freelancer page uses Freelancer footer
  "/home-tech": "tech", // Tech page uses Tech footer
  "/home-education": "education", // Education page uses Education footer
  "/home-medical": "medical", // Medical page uses Medical footer
  "/home-music": "music", // Music page uses Music footer
  "/home-event": "event", // Event page uses Event footer
  // "/event-venue": "event",

  // Events dropdown pages
  "/event-venue": "event",
  "/event-gallery": "event",
  "/event-single": "event",

  // Pages dropdown pages
  "/about-us": "event",
  "/sponsor": "event",
  "/ticket-pricing": "event",
  "/faq": "event",
  "/schedule": "event",
  "/contact": "event",

  // Speakers dropdown pages
  "/speaker": "event",
  "/speaker-details": "event",

  // Blog dropdown pages
  "/blog-list": "event",
  "/blog-grid": "event",
  "/blog-details": "event",
};

// Pages where footer should be hidden
const NO_FOOTER_PAGES = ["/404", "/coming-soon"];

// Default footer (used when route is not in config)
const DEFAULT_FOOTER = "business";

export default function FooterWrapper() {
  const pathname = usePathname();

  // Hide footer on specific pages
  if (NO_FOOTER_PAGES.includes(pathname)) {
    return null;
  }

  // Get the footer type for current route
  let footerType = footerConfig[pathname];

  // If not found in config, check if path starts with certain prefixes
  if (!footerType) {
    if (
      pathname.startsWith("/event") ||
      pathname.startsWith("/speaker") ||
      pathname.startsWith("/blog") ||
      pathname.startsWith("/about") ||
      pathname.startsWith("/sponsor") ||
      pathname.startsWith("/ticket") ||
      pathname.startsWith("/faq") ||
      pathname.startsWith("/schedule") ||
      pathname.startsWith("/contact")
    ) {
      footerType = "event";
    } else if (pathname.startsWith("/home-freelancer")) {
      footerType = "freelancer";
    } else if (pathname.startsWith("/home-tech")) {
      footerType = "tech";
    } else if (pathname.startsWith("/home-education")) {
      footerType = "education";
    } else if (pathname.startsWith("/home-medical")) {
      footerType = "medical";
    } else if (pathname.startsWith("/home-music")) {
      footerType = "music";
    } else {
      footerType = DEFAULT_FOOTER;
    }
  }

  // Render the appropriate footer component
  switch (footerType) {
    case "business":
      return <BusinessFooter />;
    case "education":
      return <EducationFooter />;
    case "event":
      return <EventFooter />;
    case "freelancer":
      return <FreelancerFooter />;
    case "medical":
      return <MedicalFooter />;
    case "music":
      return <MusicFooter />;
    case "tech":
      return <TechFooter />;
    default:
      return <BusinessFooter />;
  }
}
