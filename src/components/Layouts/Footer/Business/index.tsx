"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  RiFacebookFill,
  RiTwitterXLine,
  RiLinkedinFill,
  RiInstagramLine,
} from "@remixicon/react";

import businessLogoLight from "../../../../assets/images/business/business-logo-light.png";

export default function BusinessFooter() {
  const [currentYear, setCurrentYear] = useState<number>(2024);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative bg-[#0B2C36] text-white overflow-hidden">
      <div className="container">
        <div className="py-16 gap-y-6 md:py-24 lg:py-20 lg:pt-50">
          <div className="grid grid-cols-12 gap-6 2xl:gap-10 items-start">
            {/* About Event Section */}
            <div className="col-span-12 xl:col-span-3 lg:col-span-6">
              <h3 className="mb-5 text-3xl font-semibold">About Event</h3>
              <p className="text-[20px] text-gray-400 leading-relaxed">
                Connect, learn, and innovate at the Business Leadership
                Conference 2026 in Chicago.
              </p>

              {/* Social Links */}
              <div className="flex items-center mt-8 gap-3">
                <Link
                  href="#!"
                  className="size-11 rounded-full border border-white/20 bg-white/10 backdrop-blur flex items-center justify-center transition-all duration-300 hover:bg-[#c0f037] hover:text-black"
                  aria-label="Facebook"
                >
                  <RiFacebookFill className="text-xl" />
                </Link>
                <Link
                  href="#!"
                  className="size-11 rounded-full border border-white/20 bg-white/10 backdrop-blur flex items-center justify-center transition-all duration-300 hover:bg-[#c0f037] hover:text-black"
                  aria-label="Twitter"
                >
                  <RiTwitterXLine className="text-xl" />
                </Link>
                <Link
                  href="#!"
                  className="size-11 rounded-full border border-white/20 bg-white/10 backdrop-blur flex items-center justify-center transition-all duration-300 hover:bg-[#c0f037] hover:text-black"
                  aria-label="LinkedIn"
                >
                  <RiLinkedinFill className="text-xl" />
                </Link>
                <Link
                  href="#!"
                  className="size-11 rounded-full border border-white/20 bg-white/10 backdrop-blur flex items-center justify-center transition-all duration-300 hover:bg-[#c0f037] hover:text-black"
                  aria-label="Instagram"
                >
                  <RiInstagramLine className="text-xl" />
                </Link>
              </div>
            </div>

            {/* Logo and Navigation Section */}
            <div className="col-span-12 xl:col-span-6 lg:col-span-6">
              <div className="md:text-center">
                <Link href="/" className="inline-block">
                  <Image
                    src={businessLogoLight}
                    alt="Business Conference Logo"
                    width={businessLogoLight.width}
                    height={businessLogoLight.height}
                    className="mx-auto"
                    style={{ height: "2.5rem", width: "auto" }}
                  />
                </Link>

                {/* Navigation Links */}
                <ul className="flex flex-wrap md:justify-center gap-6 mt-16">
                  <li className="text-xl border-r border-white/20 pr-5 last:border-0 last:pr-0">
                    <Link href="/" className="hover:text-[#c0f037] transition">
                      Home
                    </Link>
                  </li>
                  <li className="text-xl border-r border-white/20 pr-5 last:border-0 last:pr-0">
                    <Link
                      href="/about-us"
                      className="hover:text-[#c0f037] transition"
                    >
                      About
                    </Link>
                  </li>
                  <li className="text-xl border-r border-white/20 pr-5 last:border-0 last:pr-0">
                    <Link
                      href="/speaker"
                      className="hover:text-[#c0f037] transition"
                    >
                      Speakers
                    </Link>
                  </li>
                  <li className="text-xl border-r border-white/20 pr-5 last:border-0 last:pr-0">
                    <Link
                      href="/schedule"
                      className="hover:text-[#c0f037] transition"
                    >
                      Schedule
                    </Link>
                  </li>
                  <li className="text-xl border-r border-white/20 pr-5 last:border-0 last:pr-0">
                    <Link
                      href="/sponsor"
                      className="hover:text-[#c0f037] transition"
                    >
                      Sponsors
                    </Link>
                  </li>
                  <li className="text-xl">
                    <Link href="#!" className="hover:text-[#c0f037] transition">
                      Register
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Us Section */}
            <div className="col-span-12 xl:col-span-3 lg:col-span-6">
              <h3 className="mb-5 text-3xl font-semibold">Contact Us</h3>

              <ul className="space-y-4 text-lg">
                <li className="flex gap-3 text-[20px]">
                  <span className="shrink-0 font-medium">Email :</span>
                  <Link
                    href="mailto:evantica@gmail.com"
                    className="text-gray-400 hover:text-[#c0f037] transition"
                  >
                    evantica@gmail.com
                  </Link>
                </li>
                <li className="flex gap-3 text-[20px]">
                  <span className="shrink-0 font-medium">Phone :</span>
                  <Link
                    href="tel:+13125557890"
                    className="text-gray-400 hover:text-[#c0f037] transition"
                  >
                    +1 312 555 7890
                  </Link>
                </li>
                <li className="flex gap-3 text-[20px]">
                  <span className="shrink-0 font-medium">Address :</span>
                  <span className="text-gray-400">
                    415 Washington Ave, Chicago, IL - 60601, USA
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-6">
          <div className="text-center text-gray-400 text-[20px]">
            <span>
              &copy; {currentYear} Evantica .Crafted & Designed by{" "}
              <Link
                href="https://1.envato.market/srbthemes"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
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
