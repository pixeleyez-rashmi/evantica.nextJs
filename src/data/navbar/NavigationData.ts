import type { NavbarConfig } from "../../types/navigation";

import businessLogoLight from "../../assets/images/business/business-logo-light.png";
import businessLogoDark from "../../assets/images/business/business-logo-dark.png";
import homeBusiness from "../../assets/images/home-business.png";
import homeFreelancer from "../../assets/images/home-freelancer.png";
import homeTech from "../../assets/images/home-tech.png";
import homeEducation from "../../assets/images/home-education.png";
import homeMedical from "../../assets/images/home-medical.png";
import homeMusic from "../../assets/images/home-music.png";

export const navigationData: NavbarConfig = {
  logo: {
    light: businessLogoLight.src,
    dark: businessLogoDark.src,
    alt: "logo",
    width: businessLogoLight.width,
    height: businessLogoLight.height,
  },
  menus: [
    {
      label: "Home",
      megaMenu: [
        {
          image: homeBusiness.src,
          imageAlt: "Business Forum",
          label: "Business Forum",
          href: "/",
        },
        {
          image: homeFreelancer.src,
          imageAlt: "Freelancer Meetup",
          label: "Freelancer Meetup",
          href: "/home-freelancer",
        },
        {
          image: homeTech.src,
          imageAlt: "Tech Conference",
          label: "Tech Conference",
          href: "/home-tech",
        },
        {
          image: homeEducation.src,
          imageAlt: "Education Conference",
          label: "Education Conference",
          href: "/home-education",
        },
        {
          image: homeMedical.src,
          imageAlt: "Medical Conference",
          label: "Medical Conference",
          href: "/home-medical",
        },
        {
          image: homeMusic.src,
          imageAlt: "Music Event",
          label: "Music Event",
          href: "/home-music",
        },
      ],
    },
    {
      label: "Events",
      items: [
        {
          label: "Event Venue",
          href: "/event-venue",
        },
        {
          label: "Event Gallery",
          href: "/event-gallery",
        },
        {
          label: "Event Single",
          href: "/event-single",
        },
      ],
    },
    {
      label: "Pages",
      items: [
        {
          label: "About Us",
          href: "/about-us",
        },
        {
          label: "Our Sponsors",
          href: "/sponsor",
        },
        {
          label: "Ticket Pricing",
          href: "/ticket-pricing",
        },
        {
          label: "FAQ",
          href: "/faq",
        },
        {
          label: "Schedule",
          href: "/schedule",
        },
        {
          label: "Contact",
          href: "/contact",
        },
        {
          label: "404",
          href: "/404",
        },
        {
          label: "Coming Soon",
          href: "/coming-soon",
        },
      ],
    },
    {
      label: "Speakers",
      items: [
        {
          label: "Speakers",
          href: "/speaker",
        },
        {
          label: "Speaker Details",
          href: "/speaker-details",
        },
      ],
    },
    {
      label: "Blog",
      items: [
        {
          label: "Blog List",
          href: "/blog-list",
        },
        {
          label: "Blog Grid",
          href: "/blog-grid",
        },
        {
          label: "Blog Details",
          href: "/blog-details",
        },
      ],
    },
  ],
  socialLinks: [
    {
      name: "Facebook",
      href: "#!",
      icon: "RiFacebookFill",
      ariaLabel: "Facebook",
    },
    {
      name: "Instagram",
      href: "#!",
      icon: "RiInstagramLine",
      ariaLabel: "Instagram",
    },
    {
      name: "Twitter",
      href: "#!",
      icon: "RiTwitterLine",
      ariaLabel: "Twitter",
    },
  ],
};
