"use client";

import Image from "next/image";
import logoLight from "../../.././../assets/images/logo-light.png";
import logoDark from "../../.././../assets/images/logo-dark.png";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiMailLine,
  RiMapPinFill,
  RiPhoneFill,
  RiTwitterFill,
} from "@remixicon/react";

export default function EventFooter() {
  return (
    <>
      <footer className="relative bg-black dark:bg-white dark:text-black overflow-hidden text-white lg:mx-7 mx-2 rounded-3xl mb-7">
        <div className="container">
          <div className="text-center mx-auto max-w-5xl py-20">
            <h2
              className="md:text-6xl xl:text-8xl uppercase font-bold mb-6"
              data-sal="slide-right"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              Subscribe to Our Newsletter
            </h2>
            <form
              action="#"
              className="relative max-w-2xl flex items-center mx-auto md:gap-7 gap-3 border rounded-xl p-2 ps-6 flex-wrap md:flex-nowrap"
              data-sal="slide-left"
              data-sal-duration="800"
              data-sal-delay="400"
            >
              <input
                type="email"
                placeholder="Enter Your email address"
                className="w-full h-full outline-none shadow-none font-semibold text-[20px] text-white pe-20 placeholder:text-white dark:placeholder:text-black"
              />
              <button className="btn bg-[#f2c944] text-black text-xl font-medium">
                Subscribe
              </button>
            </form>
          </div>
          <div className="py-20 border-t border-white/20 dark:border-black/20">
            <div className="grid grid-cols-12 lg:gap-10 gap-6">
              <div
                className="col-span-12 xl:col-span-4 lg:col-span-4 md:col-span-6"
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay="200"
              >
                <div>
                  <a href="index.html" className="inline-block mb-4">
                    <Image
                      src={logoLight}
                      alt="Tech Innovators Summit Logo"
                      className="h-10 mx-auto dark:hidden"
                    />
                  </a>
                  <a href="index.html" className="inline-block mb-4">
                    <Image
                      src={logoDark}
                      alt="Tech Innovators Summit Logo"
                      className="h-10 mx-auto dark:block hidden"
                    />
                  </a>
                </div>
                <p className="text-gray-300 dark:text-gray-600 text-xl">
                  Stay updated on the latest event news, keynote speeches,
                  workshops, networking opportunities, and expert insights from
                  industry leaders.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <a
                    href="#!"
                    className="relative size-10 flex items-center justify-center rounded-full border border-gray-400 overflow-hidden group"
                  >
                    <RiFacebookFill className="z-10" />
                    <span className="absolute inset-0 rounded-full border-2 border-gray-400 scale-0 group-hover:scale-110 transition-transform duration-500"></span>
                  </a>

                  <a
                    href="#!"
                    className="relative size-10 flex items-center justify-center rounded-full border border-gray-400 overflow-hidden group"
                  >
                    <RiInstagramFill className="z-10" />
                    <span className="absolute inset-0 rounded-full border-2 border-gray-400 scale-0 group-hover:scale-110 transition-transform duration-500"></span>
                  </a>

                  <a
                    href="#!"
                    className="relative size-10 flex items-center justify-center rounded-full border border-gray-400 overflow-hidden group"
                  >
                    <RiTwitterFill className="z-10" />
                    <span className="absolute inset-0 rounded-full border-2 border-gray-400 scale-0 group-hover:scale-110 transition-transform duration-500"></span>
                  </a>

                  <a
                    href="#!"
                    className="relative size-10 flex items-center justify-center rounded-full border border-gray-400 overflow-hidden group"
                  >
                    <RiLinkedinFill className="z-10" />
                    <span className="absolute inset-0 rounded-full border-2 border-gray-400 scale-0 group-hover:scale-110 transition-transform duration-500"></span>
                  </a>
                </div>
              </div>

              <div
                className="col-span-12 xl:col-span-2 lg:col-span-4 md:col-span-6"
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay="200"
              >
                <h3 className="mb-5">Explore</h3>
                <ul className="space-y-1">
                  <li>
                    <a
                      href="#!"
                      className="relative text-xl text-gray-300 dark:text-gray-600 inline-block overflow-hidden group"
                    >
                      <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                        Our Story
                      </span>
                      <span className="absolute left-0 top-full block transition-transform duration-500 group-hover:-translate-y-full">
                        Our Story
                      </span>
                      <span className="absolute left-0 bottom-0 w-full h-px bg-current scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#!"
                      className="relative text-xl text-gray-300 dark:text-gray-600 inline-block overflow-hidden group"
                    >
                      <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                        Featured Speakers
                      </span>
                      <span className="absolute left-0 top-full block transition-transform duration-500 group-hover:-translate-y-full">
                        Featured Speakers
                      </span>
                      <span className="absolute left-0 bottom-0 w-full h-px bg-current scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#!"
                      className="relative text-xl text-gray-300 dark:text-gray-600 inline-block overflow-hidden group"
                    >
                      <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                        Event Agenda
                      </span>
                      <span className="absolute left-0 top-full block transition-transform duration-500 group-hover:-translate-y-full">
                        Event Agenda
                      </span>
                      <span className="absolute left-0 bottom-0 w-full h-px bg-current scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#!"
                      className="relative text-xl text-gray-300 dark:text-gray-600 inline-block overflow-hidden group"
                    >
                      <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                        Register
                      </span>
                      <span className="absolute left-0 top-full block transition-transform duration-500 group-hover:-translate-y-full">
                        Register
                      </span>
                      <span className="absolute left-0 bottom-0 w-full h-px bg-current scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#!"
                      className="relative text-xl text-gray-300 dark:text-gray-600 inline-block overflow-hidden group"
                    >
                      <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                        Support
                      </span>
                      <span className="absolute left-0 top-full block transition-transform duration-500 group-hover:-translate-y-full">
                        Support
                      </span>
                      <span className="absolute left-0 bottom-0 w-full h-px bg-current scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
                    </a>
                  </li>
                </ul>
              </div>

              <div
                className="col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-6"
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay="200"
              >
                <div className="xl:ps-13 xl:pe-7">
                  <h3 className="mb-5">Event Hours</h3>
                  <ul className="space-y-3">
                    <li className="text-xl text-gray-300 dark:text-gray-600">
                      Monday - Thursday: 10:00 AM - 06:00 PM
                    </li>
                    <li className="text-xl text-gray-300 dark:text-gray-600">
                      Friday: 10:00 AM - 04:00 PM
                    </li>
                    <li className="text-xl text-gray-300 dark:text-gray-600">
                      Saturday: Special Sessions
                    </li>
                    <li className="text-xl text-gray-300 dark:text-gray-600">
                      Sunday: Closed
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6"
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay="200"
              >
                <h3 className="mb-5">Contact Info</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 text-gray-300 dark:text-gray-600 text-xl">
                    <span className="border rounded-full size-13 flex items-center justify-center shrink-0">
                      <RiMapPinFill className="text-xl" />
                    </span>
                    456 Innovation Blvd, San Francisco, CA 94107, USA
                  </li>
                  <li className="flex items-center gap-4 text-gray-300 dark:text-gray-600 text-xl">
                    <span className="border border-current rounded-full size-13 flex items-center justify-center shrink-0">
                      <RiMailLine className="text-xl" />
                    </span>

                    <a
                      href="mailto:evantica23@gmail.com"
                      className="relative inline-block overflow-hidden group"
                    >
                      <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                        evantica23@gmail.com
                      </span>
                      <span className="absolute left-0 top-full block transition-transform duration-500 group-hover:-translate-y-full">
                        evantica23@gmail.com
                      </span>
                      <span className="absolute left-0 bottom-0 w-full h-px bg-current scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
                    </a>
                  </li>

                  <li className="flex items-center gap-4 text-gray-300 dark:text-gray-600 text-xl">
                    <span className="border border-current rounded-full size-13 flex items-center justify-center shrink-0">
                      <RiPhoneFill className="text-xl" />
                    </span>

                    <a
                      href="tel:+14085550123"
                      className="relative inline-block overflow-hidden group"
                    >
                      <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                        +1 (408) 555-0123
                      </span>
                      <span className="absolute left-0 top-full block transition-transform duration-500 group-hover:-translate-y-full">
                        +1 (408) 555-0123
                      </span>
                      <span className="absolute left-0 bottom-0 w-full h-px bg-current scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- Copyright --> */}
          <div className="py-8 border-t border-white/20 dark:border-black/20">
            <div className="flex flex-wrap justify-between gap-2">
              <p
                className="text-gray-300 dark:text-gray-600 text-xl"
                data-sal="slide-right"
                data-sal-duration="800"
                data-sal-delay="200"
              >
                &copy; <span id="currentYearFooter"></span> Evantica . Crafted &
                Designed by{" "}
                <a
                  href="https://1.envato.market/srbthemes"
                  target="_blank"
                  className="hover:text-white"
                >
                  SRBThemes
                </a>
              </p>
              <div
                className="flex items-center gap-4 flex-wrap"
                data-sal="slide-left"
                data-sal-duration="800"
                data-sal-delay="200"
              >
                <a
                  href="#!"
                  className="relative inline-block overflow-hidden group text-xl text-gray-300 dark:text-gray-600 ltr:sm:border-r rtl:sm:border-l pe-4"
                >
                  <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                    Privacy Policy
                  </span>
                  <span className="absolute left-0 top-full block transition-transform duration-500 group-hover:-translate-y-full">
                    Privacy Policy
                  </span>
                  <span className="absolute left-0 bottom-0 w-full h-px bg-current scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
                </a>

                <a
                  href="#!"
                  className="relative inline-block overflow-hidden group text-xl text-gray-300 dark:text-gray-600"
                >
                  <span className="block transition-transform duration-500 group-hover:-translate-y-full">
                    Terms & Condition
                  </span>
                  <span className="absolute left-0 top-full block transition-transform duration-500 group-hover:-translate-y-full">
                    Terms & Condition
                  </span>
                  <span className="absolute left-0 bottom-0 w-full h-px bg-current scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
