"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  RiMapPinLine,
  RiPhoneLine,
  RiMailLine,
  RiTimeLine,
} from "@remixicon/react";

import freelancerLogoDark from "../../../../assets/images/freelancer/freelancer-logo-dark.png";
import freelancerLogoLight from "../../../../assets/images/freelancer/freelancer-logo-light.png";

interface FooterLink {
  text: string;
  href: string;
}

const meetupLinks: FooterLink[] = [
  { text: "About the Event", href: "/about-meetup" },
  { text: "Speakers", href: "/speakers" },
  { text: "Agenda", href: "/agenda" },
  { text: "Why Attend", href: "/why-attend" },
  { text: "Past Meetups", href: "/gallery" },
];

const attendeeHelpLinks: FooterLink[] = [
  { text: "Ticket Information", href: "/tickets" },
  { text: "Venue Details", href: "/venue" },
  { text: "FAQs", href: "/faq" },
  { text: "Code of Conduct", href: "/code-of-conduct" },
  { text: "Contact Organizers", href: "/contact" },
];

const wavePath =
  "M265.8 3.5c-10.9 0-15.9 6.2-15.9 6.2s-3.6-3.5-9.2-.9c-9.1 4.1-4.4 13.4-4.4 13.4s-1.2.2-1.9.9c-.6.7-.5 1.9-.5 1.9s-1-.5-2.3-.2c-1.3.3-1.6 1.4-1.6 1.4s.4-3.4-1.5-5c-3.9-3.4-8.3-.2-8.3-.2s-.6-.7-.9-.9c-.4-.2-1.2-.2-1.2-.2s-4.4-3.6-11.5-2.6-10.4 7.9-10.4 7.9-.5-3.3-3.9-4.9c-4.8-2.4-7.4 0-7.4 0s2.4-4.1-1.9-6.4-6.2 1.2-6.2 1.2-.9-.5-2.1-.5-2.3 1.1-2.3 1.1.1-.7-1.1-1.1c-1.2-.4-2 0-2 0s3.6-6.8-3.5-8.9c-6-1.8-7.9 2.6-8.4 4-.1-.3-.4-.7-.9-1.1-1-.7-1.3-.5-1.3-.5s1-4-1.7-5.2c-2.7-1.2-4.2 1.1-4.2 1.1s-3.1-1-5.7 1.4-2.1 5.5-2.1 5.5-.9 0-2.1.7-1.4 1.7-1.4 1.7-1.7-1.2-4.3-1.2c-2.6 0-4.5 1.2-4.5 1.2s-.7-1.5-2.8-2.4c-2.1-.9-4 0-4 0s2.6-5.9-4.7-9c-7.3-3.1-12.6 3.3-12.6 3.3s-.9 0-1.9.2c-.9.2-1.5.9-1.5.9S99.4 3 94.9 3.9c-4.5.9-5.7 5.7-5.7 5.7s-2.8-5-12.3-3.9-11.1 6-11.1 6-1.2-1.4-4-.7c-.8.2-1.3.5-1.8.9-.9-2.1-2.7-4.9-6.2-4.4-3.2.4-4 2.2-4 2.2s-.5-.7-1.2-.7h-1.4s-.5-.9-1.7-1.4-2.4 0-2.4 0-2.4-1.2-4.7 0-3.1 4.1-3.1 4.1-1.7-1.4-3.6-.7c-1.9.7-1.9 2.8-1.9 2.8s-.5-.5-1.7-.2c-1.2.2-1.4.7-1.4.7s-.7-2.3-2.8-2.8c-2.1-.5-4.3.2-4.3.2s-1.7-5-11.1-6c-3.8-.4-6.6.2-8.5 1v21.2h283.5V11.1c-.9.2-1.6.4-1.6.4s-5.2-8-16.1-8z";

export default function FreelancerFooter() {
  const [currentYear, setCurrentYear] = useState<number>(2024);
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle email subscription
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <footer className="relative bg-[#f8ebff] dark:bg-[#4c1d64]">
      {/* Top SVG Wave */}
      <div className="z-20 absolute w-full -top-2 left-0 scale-[-1]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 283.5 27.8"
          preserveAspectRatio="xMidYMax slice"
          className="fill-white dark:fill-black"
        >
          <path d={wavePath} />
        </svg>
      </div>

      <div className="container">
        <div className="grid grid-cols-12 py-16 md:py-24 lg:pb-30 lg:pt-60 2xl:gap-10 gap-6">
          {/* Brand / About */}
          <div className="col-span-12 sm:col-span-6 xl:col-span-5 lg:col-span-6">
            <Link href="/">
              <Image
                src={freelancerLogoDark.src}
                alt="logo"
                width={freelancerLogoDark.width}
                height={freelancerLogoDark.height}
                className="md:h-10 h-8 object-cover w-auto dark:hidden"
              />
              <Image
                src={freelancerLogoLight.src}
                alt="logo"
                width={freelancerLogoLight.width}
                height={freelancerLogoLight.height}
                className="md:h-10 h-8 object-cover w-auto dark:block hidden"
              />
            </Link>

            <p className="text-gray-600 dark:text-gray-300 mb-6 mt-7 text-[18px]">
              Freelancer Creators Meetup is a community-driven event where
              designers, developers, marketers, and creators connect,
              collaborate, and grow through real conversations, talks, and
              networking sessions.
            </p>

            <div className="mt-15">
              <form
                onSubmit={handleSubmit}
                className="relative max-w-md flex flex-wrap md:flex-nowrap items-center md:gap-7 gap-2 border border-black/20 dark:border-white/30 rounded-xl md:p-1 md:ps-4 p-2"
              >
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-full outline-none shadow-none text-black dark:text-white placeholder-black/50 dark:placeholder-white bg-transparent"
                  required
                />
                <button
                  className="btn bg-purple-400 hover:bg-purple-500 text-lg shrink-0 text-white"
                  type="submit"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>

          {/* Meetup */}
          <div className="col-span-12 sm:col-span-6 xl:col-span-2 lg:col-span-3">
            <h3 className="mb-4 font-anton font-medium tracking-[1px] uppercase leading-snug">
              Meetup
            </h3>

            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              {meetupLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="relative inline-block text-[18px] transition-all duration-300 hover:text-purple-500 hover:pl-2 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Attendee Help */}
          <div className="col-span-12 sm:col-span-6 xl:col-span-2 lg:col-span-3">
            <h3 className="mb-4 font-anton font-medium tracking-[1px] uppercase leading-snug">
              Attendee Help
            </h3>

            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              {attendeeHelpLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="relative inline-block text-[18px] transition-all duration-300 hover:text-purple-500 hover:pl-2 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Event Location & Contact */}
          <div className="col-span-12 sm:col-span-6 xl:col-span-3 lg:col-span-4">
            <h3 className="mb-4 font-anton font-medium tracking-[1px] uppercase leading-snug">
              Event Location
            </h3>

            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-3 text-[18px]">
                <RiMapPinLine className="text-xl text-purple-400 shrink-0 mt-1" />
                <span>
                  Freelancer Creators Meetup,
                  <br />
                  Creative Hub, Andheri East,
                  <br />
                  Mumbai, India
                </span>
              </li>

              <li className="flex items-center gap-3 text-[18px]">
                <RiPhoneLine className="text-xl text-purple-400 shrink-0" />
                <Link
                  href="tel:+919876543210"
                  className="hover:text-black dark:hover:text-white"
                >
                  +91 [875] [648] [123]
                </Link>
              </li>

              <li className="flex items-center gap-3 text-[18px]">
                <RiMailLine className="text-xl text-purple-400 shrink-0" />
                <Link
                  href="mailto:meetup@freelancercreators.com"
                  className="hover:text-black dark:hover:text-white"
                >
                  meetup@gmail.com
                </Link>
              </li>

              <li className="flex items-start gap-3 text-[18px]">
                <RiTimeLine className="text-xl text-purple-400 shrink-0 mt-1" />
                <span>Saturday • 10:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-black/10 dark:border-white/10 py-6">
          <div className="text-center text-gray-600 dark:text-gray-300 text-[18px]">
            <span>
              &copy; {currentYear} Paxvent .Crafted & Designed by{" "}
              <Link href="https://1.envato.market/srbthemes" target="_blank">
                SRBThemes
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
