"use client";

import { useEffect, useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  RiFacebookFill,
  RiTwitterFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiArrowRightLongLine,
} from "@remixicon/react";

import educationLogoLight from "../../../../assets/images/education/education-logo-light.png";
import educationLogoDark from "../../../../assets/images/education/education-logo-dark.png";
import educationSchedule3 from "../../../../assets/images/education/education-schedule-3.jpg";
import educationSchedule4 from "../../../../assets/images/education/education-schedule-4.jpg";

export default function EducationFooter() {
  const [currentYear, setCurrentYear] = useState<number>(2024);
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <footer className="relative bg-black dark:bg-white text-white dark:text-black overflow-hidden">
      <div className="container">
        <div className="lg:py-30 py-20">
          {/* Email Subscription CTA */}
          <div
            className="bg-[#f5e900] border rounded-[40px] border-b-7 border-white dark:border-black border-r-7 p-9 py-15 flex flex-wrap lg:flex-nowrap gap-2 items-center justify-between text-black mb-20"
            data-sal="zoom-in"
            data-sal-duration="800"
            data-sal-delay="200"
          >
            <h2 className="font-public font-bold md:text-6xl">
              Join the Conference!
            </h2>
            <form
              onSubmit={handleSubmit}
              className="relative max-w-2xl flex items-center gap-7 border rounded-xl p-2 ps-6"
            >
              <input
                type="email"
                placeholder="Enter Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-full outline-none shadow-none font-semibold text-[20px] text-black pe-20 placeholder:text-black"
                required
              />
              <button
                type="submit"
                className="btn bg-black text-white p-3 inline-flex items-center justify-center transition-all duration-300 hover:bg-[#481938] rounded-lg"
                aria-label="Subscribe"
              >
                <RiArrowRightLongLine className="size-8" />
              </button>
            </form>
          </div>

          {/* Footer Content */}
          <div className="grid grid-cols-12 gap-6 2xl:gap-10">
            {/* Logo and Description */}
            <div className="col-span-12 lg:col-span-4">
              <div>
                <Link href="/">
                  <Image
                    src={educationLogoLight.src}
                    alt="logo"
                    width={educationLogoLight.width}
                    height={educationLogoLight.height}
                    className="md:h-10 h-8 object-cover w-auto dark:hidden"
                  />
                </Link>
                <Link href="/">
                  <Image
                    src={educationLogoDark.src}
                    alt="logo"
                    width={educationLogoDark.width}
                    height={educationLogoDark.height}
                    className="md:h-10 h-8 object-cover w-auto hidden dark:block"
                  />
                </Link>
              </div>
              <p className="text-gray-300 dark:text-gray-700 mt-7">
                LearnSphere Summit connects global educators, edtech leaders,
                and academic visionaries to reimagine teaching, learning, and
                innovation in education.
              </p>

              {/* Social Links with Special Animations */}
              <div className="flex items-center gap-2 mt-10">
                <Link
                  href="#!"
                  className="group relative size-14 overflow-hidden rounded-full bg-white dark:bg-black border-b-4 border-r-4 border-[#f5e900] transition-all duration-300 hover:bg-[#f5e900]"
                  aria-label="Facebook"
                >
                  <div className="absolute inset-0 flex items-center justify-center text-black opacity-0 transition-all duration-[1500ms] group-hover:opacity-100">
                    <RiFacebookFill className="text-xl" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center text-black dark:text-white transition-all duration-500 group-hover:scale-[5] group-hover:rotate-[360deg] group-hover:opacity-0">
                    <RiFacebookFill className="text-xl" />
                  </div>
                </Link>
                <Link
                  href="#!"
                  className="group relative size-14 overflow-hidden rounded-full bg-white dark:bg-black border-b-4 border-r-4 border-[#f5e900] transition-all duration-300 hover:bg-[#f5e900]"
                  aria-label="Twitter"
                >
                  <div className="absolute inset-0 flex items-center justify-center text-black opacity-0 transition-all duration-[1500ms] group-hover:opacity-100">
                    <RiTwitterFill className="text-xl" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center text-black dark:text-white transition-all duration-500 group-hover:scale-[5] group-hover:rotate-[360deg] group-hover:opacity-0">
                    <RiTwitterFill className="text-xl" />
                  </div>
                </Link>
                <Link
                  href="#!"
                  className="group relative size-14 overflow-hidden rounded-full bg-white dark:bg-black border-b-4 border-r-4 border-[#f5e900] transition-all duration-300 hover:bg-[#f5e900]"
                  aria-label="Instagram"
                >
                  <div className="absolute inset-0 flex items-center justify-center text-black opacity-0 transition-all duration-[1500ms] group-hover:opacity-100">
                    <RiInstagramFill className="text-xl" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center text-black dark:text-white transition-all duration-500 group-hover:scale-[5] group-hover:rotate-[360deg] group-hover:opacity-0">
                    <RiInstagramFill className="text-xl" />
                  </div>
                </Link>
                <Link
                  href="#!"
                  className="group relative size-14 overflow-hidden rounded-full bg-white dark:bg-black border-b-4 border-r-4 border-[#f5e900] transition-all duration-300 hover:bg-[#f5e900]"
                  aria-label="LinkedIn"
                >
                  <div className="absolute inset-0 flex items-center justify-center text-black opacity-0 transition-all duration-[1500ms] group-hover:opacity-100">
                    <RiLinkedinFill className="text-xl" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center text-black dark:text-white transition-all duration-500 group-hover:scale-[5] group-hover:rotate-[360deg] group-hover:opacity-0">
                    <RiLinkedinFill className="text-xl" />
                  </div>
                </Link>
              </div>
            </div>

            {/* Summit Links */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-2">
              <h3 className="font-public text-[27px] font-bold mb-6">Summit</h3>
              <ul className="space-y-4">
                {[
                  { label: "About the Summit", href: "/about-us" },
                  { label: "Expert Speakers", href: "/speaker" },
                  { label: "Event Schedule", href: "/schedule" },
                  { label: "Tickets & Passes", href: "/tickit-pricing" },
                  { label: "Summit Highlights", href: "#!" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="relative inline-block group text-gray-300 dark:text-gray-700 text-[19px]"
                    >
                      <span className="before:content-[''] before:absolute before:top-[97%] before:left-1/2 before:-translate-x-1/2 before:size-3 before:rounded-full before:bg-[#f5e900] before:scale-0 before:transition-transform before:duration-300 group-hover:before:scale-100"></span>
                      <span className="relative z-10 transition-all duration-300 group-hover:text-[#f5e900]">
                        {item.label}
                      </span>
                      <span className="after:content-[''] after:absolute after:top-[113%] after:left-1/2 after:-translate-x-1/2 after:w-full after:inline-block after:h-[2px] after:bg-[#f5e900] after:scale-x-0 after:origin-center after:transition-transform after:duration-300 group-hover:after:scale-x-100"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Attendees Links */}
            <div className="col-span-12 sm:col-span-6 lg:col-span-2">
              <h3 className="font-public text-[27px] font-bold mb-6">
                Attendees
              </h3>
              <ul className="space-y-4">
                {[
                  { label: "Networking", href: "#!" },
                  { label: "Benefits", href: "#!" },
                  { label: "Community", href: "#!" },
                  { label: "Sessions", href: "#!" },
                  { label: "Join us", href: "#!" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="relative inline-block group text-gray-300 dark:text-gray-700 text-[19px]"
                    >
                      <span className="before:content-[''] before:absolute before:top-[97%] before:left-1/2 before:-translate-x-1/2 before:size-3 before:rounded-full before:bg-[#f5e900] before:scale-0 before:transition-transform before:duration-300 group-hover:before:scale-100"></span>
                      <span className="relative z-10 transition-all duration-300 group-hover:text-[#f5e900]">
                        {item.label}
                      </span>
                      <span className="after:content-[''] after:absolute after:top-[113%] after:left-1/2 after:-translate-x-1/2 after:w-full after:inline-block after:h-[2px] after:bg-[#f5e900] after:scale-x-0 after:origin-center after:transition-transform after:duration-300 group-hover:after:scale-x-100"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Insights & Stories */}
            <div className="col-span-12 lg:col-span-4">
              <h3 className="font-public text-[27px] font-bold mb-6">
                Insights & Stories
              </h3>

              <div className="flex items-center gap-5">
                <div className="size-25 shrink-0">
                  <Image
                    src={educationSchedule3.src}
                    alt="Blog post thumbnail"
                    width={educationSchedule3.width}
                    height={educationSchedule3.height}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div>
                  <h4 className="hover:text-[#f5e900] transition mb-1">
                    <Link href="#!">
                      How AI is reshaping classrooms worldwide
                    </Link>
                  </h4>
                  <p className="text-gray-300 dark:text-gray-700 text-[1rem]">
                    Dec 12, 2025
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5 mt-5">
                <div className="size-25 shrink-0">
                  <Image
                    src={educationSchedule4.src}
                    alt="Blog post thumbnail"
                    width={educationSchedule4.width}
                    height={educationSchedule4.height}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div>
                  <h4 className="hover:text-[#f5e900] transition mb-1">
                    <Link href="#!">
                      Top learning trends educators must watch in 2025
                    </Link>
                  </h4>
                  <p className="text-gray-300 dark:text-gray-700 text-[1rem]">
                    Dec 17, 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/70 dark:border-black/70 py-6">
          <div className="text-center text-gray-300 dark:text-gray-700">
            <span>
              &copy; {currentYear} Evantica . Crafted & Designed by{" "}
              <Link
                href="https://1.envato.market/srbthemes"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white dark:hover:text-black"
              >
                SRBThemes
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
