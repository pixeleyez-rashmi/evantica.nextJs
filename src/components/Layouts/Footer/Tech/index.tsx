"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterXFill,
  RiLinkedinFill,
} from "@remixicon/react";

import techLogoLight from "../../../../assets/images/tech/tech-logo-light.png";
import techSchedule3 from "../../../../assets/images/tech/tech-schedule3.jpg";
import techSchedule8 from "../../../../assets/images/tech/tech-schedule8.jpg";

export default function TechFooter() {
  const [currentYear, setCurrentYear] = useState<number>(2024);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative bg-linear-to-b from-[#2e0f53] to-[#592da8] text-white overflow-hidden">
      <div className="container">
        {/* Top logo line */}
        <div className="flex items-center pb-3 pt-15">
          <Link
            href="/home-tech"
            className="shrink-0"
            data-sal="slide-right"
            data-sal-duration="800"
            data-sal-delay="200"
          >
            <Image
              src={techLogoLight.src}
              alt="Tech Summit Logo"
              width={techLogoLight.width}
              height={techLogoLight.height}
              className="md:h-10 h-8 object-cover w-auto"
            />
          </Link>
          <div
            className="reltive border border-white/40 border-dashed w-full ms-1"
            data-sal="slide-left"
            data-sal-duration="800"
            data-sal-delay="200"
          />
          <div className="bg-white/40 rotate-45 size-2" />
        </div>

        {/* Main grid */}
        <div className="py-14 relative border-b border-dashed border-white/40">
          <div className="absolute bg-white/40 rotate-45 size-2 -left-2 -bottom-1" />
          <div className="absolute bg-white/40 rotate-45 size-2 -right-2 -bottom-1" />

          <div className="grid grid-cols-12 lg:gap-10 gap-6">
            {/* Stay Connected */}
            <div
              className="col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-6"
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              <h3 className="mb-5">Stay Connected</h3>
              <p className="text-gray-300">
                Follow us for updates on speakers, schedules, and insights from
                the global tech community.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Link
                  href="#!"
                  className="border size-10 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-white hover:text-[#592da8]"
                  aria-label="Facebook"
                >
                  <RiFacebookFill />
                </Link>
                <Link
                  href="#!"
                  className="border size-10 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-white hover:text-[#592da8]"
                  aria-label="Instagram"
                >
                  <RiInstagramFill />
                </Link>
                <Link
                  href="#!"
                  className="border size-10 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-white hover:text-[#592da8]"
                  aria-label="Twitter"
                >
                  <RiTwitterXFill />
                </Link>
                <Link
                  href="#!"
                  className="border size-10 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-white hover:text-[#592da8]"
                  aria-label="LinkedIn"
                >
                  <RiLinkedinFill />
                </Link>
              </div>
            </div>

            {/* Event Venue */}
            <div
              className="col-span-12 xl:col-span-4 lg:col-span-4 md:col-span-6"
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              <div className="xl:ps-13 xl:pe-7">
                <h3 className="mb-5">Event Venue</h3>
                <p className="text-gray-300 mb-2">
                  TechSphere Convention Center, San Francisco, CA 94103
                </p>
                <p className="mb-4">Open: 9:00 AM – 7:00 PM</p>
                <p className="text-gray-300 mb-2">
                  Exhibitor Hall – Innovation Avenue
                </p>
                <p>Open: 10:00 AM – 6:00 PM</p>
              </div>
            </div>

            {/* Quick Links */}
            <div
              className="col-span-12 xl:col-span-2 lg:col-span-4 md:col-span-6"
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              <h3 className="mb-5">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#!"
                    className="text-xl text-gray-300 hover:text-white hover:tracking-[.4px] transtion-all duration-600"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#!"
                    className="text-xl text-gray-300 hover:text-white hover:tracking-[.4px] transtion-all duration-600"
                  >
                    Speakers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#!"
                    className="text-xl text-gray-300 hover:text-white hover:tracking-[.4px] transtion-all duration-600"
                  >
                    Agenda
                  </Link>
                </li>
                <li>
                  <Link
                    href="#!"
                    className="text-xl text-gray-300 hover:text-white hover:tracking-[.4px] transtion-all duration-600"
                  >
                    Tickets
                  </Link>
                </li>
                <li>
                  <Link
                    href="#!"
                    className="text-xl text-gray-300 hover:text-white hover:tracking-[.4px] transtion-all duration-600"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Latest Updates */}
            <div
              className="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6"
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              <h3 className="mb-5">Latest Updates</h3>
              <div className="flex gap-5 items-center">
                <Image
                  src={techSchedule3.src}
                  alt="AI Summit Keynote"
                  width={techSchedule3.width || 80}
                  height={techSchedule3.height || 80}
                  className="size-20 object-cover"
                />
                <div>
                  <p>15 Feb, 2026</p>
                  <p className="text-16 text-gray-300">
                    AI Summit Keynote Revealed – Meet Our Lead Speaker!
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-center mt-4">
                <Image
                  src={techSchedule8.src}
                  alt="Emerging Technologies"
                  width={techSchedule8.width || 80}
                  height={techSchedule8.height || 80}
                  className="size-20 object-cover"
                />
                <div>
                  <p>10 Feb, 2026</p>
                  <p className="text-16 text-gray-300">
                    5 Emerging Technologies Set to Dominate 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6">
          <div className="flex flex-wrap justify-between gap-2">
            <p className="text-gray-300 text-[18px]">
              &copy; {currentYear} Evantica . Crafted &amp; Designed by{" "}
              <Link
                href="https://1.envato.market/srbthemes"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                SRBThemes
              </Link>
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <Link
                href="#!"
                className="text-lg text-gray-300 ltr:sm:border-r rtl:sm:border-l pe-4 hover:text-white hover:tracking-[.4px] transtion-all duration-600"
              >
                Privacy Policy
              </Link>
              <Link
                href="#!"
                className="text-lg text-gray-300 hover:text-white hover:tracking-[.4px] transtion-all duration-600"
              >
                Terms &amp; Condition
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
