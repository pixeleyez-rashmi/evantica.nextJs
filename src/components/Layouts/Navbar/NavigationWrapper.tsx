"use client";

import { usePathname } from "next/navigation";
import BusinessNavbar from "./Business";
import EducationNavbar from "./Education";
import EventNavbar from "./Event";
import FreelancerNavbar from "./Freelancer";
import MedicalNavbar from "./Medical";
import MusicNavbar from "./Music";
import TechNavbar from "./Tech";

// Navigation configuration: Map routes to navbar components
const navigationConfig: Record<
  string,
  | "business"
  | "education"
  | "event"
  | "pages"
  | "freelancer"
  | "medical"
  | "music"
  | "tech"
> = {
  "/": "business", // Home page uses Business navbar
  "/home-freelancer": "freelancer", // Freelancer page uses Freelancer navbar
  "/home-tech": "tech", // Tech page uses Tech navbar
  "/home-education": "education", // Education page uses Education navbar
  "/home-medical": "medical", // Medical page uses Medical navbar
  "/home-music": "music", // Music page uses Music navbar
  // "/home-pages": "pages",

  // Events dropdown pages
  "/event-venue": "event",
  "/event-gallery": "event",
  "/event-single": "event",

  // Pages dropdown pages
  "/page": "event",
  "/sponsor": "event",
  "/ticket-pricing": "event",
  "/faq": "event",
  "/schedule": "event",
  "/contact": "event",

  // Speakers dropdown pages
  "/speakers": "event",
  "/speaker-details": "event",

  // Blog dropdown pages
  "/blog-list": "event",
  "/blog-grid": "event",
  "/blog-details": "event",
  "/blog": "event",
};

// Pages where navbar should be hidden
const NO_NAVBAR_PAGES = ["/404", "/coming-soon"];

// Default navbar (used when route is not in config)
const DEFAULT_NAVBAR = "business";

export default function NavigationWrapper() {
  const pathname = usePathname();

  // ✅ Hide navbar on 404 and coming-soon pages
  if (NO_NAVBAR_PAGES.includes(pathname)) {
    return null;
  }

  // Get the navbar type for current route
  let navbarType = navigationConfig[pathname];

  // If not found in config, check if path starts with certain prefixes
  if (!navbarType) {
    if (
      pathname.startsWith("/event") ||
      pathname.startsWith("/speakers") ||
      pathname.startsWith("/speaker") ||
      pathname.startsWith("/blog") ||
      pathname.startsWith("/about") ||
      pathname.startsWith("/sponsor") ||
      pathname.startsWith("/ticket") ||
      pathname.startsWith("/faq") ||
      pathname.startsWith("/schedule") ||
      pathname.startsWith("/contact")
    ) {
      navbarType = "event";
    } else if (pathname.startsWith("/home-freelancer")) {
      navbarType = "freelancer";
    } else if (pathname.startsWith("/home-tech")) {
      navbarType = "tech";
    } else if (pathname.startsWith("/home-education")) {
      navbarType = "education";
    } else if (pathname.startsWith("/home-medical")) {
      navbarType = "medical";
    } else if (pathname.startsWith("/home-music")) {
      navbarType = "music";
    } else {
      navbarType = DEFAULT_NAVBAR;
    }
  }

  // Render the appropriate navbar component
  switch (navbarType) {
    case "business":
      return <BusinessNavbar />;
    case "education":
      return <EducationNavbar />;
    case "event":
      return <EventNavbar />;
    case "freelancer":
      return <FreelancerNavbar />;
    case "medical":
      return <MedicalNavbar />;
    case "music":
      return <MusicNavbar />;
    case "tech":
      return <TechNavbar />;
    default:
      return <BusinessNavbar />;
  }
}
