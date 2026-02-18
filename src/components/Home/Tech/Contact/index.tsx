"use client";

import Link from "next/link";
import Image from "next/image";
import {
  RiPhoneLine,
  RiMailLine,
  RiArrowRightDoubleFill,
} from "@remixicon/react";

import techContact from "../../../../assets/images/tech/tech-contact.png";

export default function ContactSection() {
  return (
    <section className="lg:py-30 py-20">
      <div className="container">
        <h2
          className="font-fahkwang mb-6 md:text-5xl mb-12 text-center drop-shadow-[2px_2px_0px_rgba(0,0,0,0.2)] leading-snug"
          data-sal="slide-up"
          data-sal-duration="800"
          data-sal-delay="200"
        >
          Connect for Conference Updates
        </h2>

        <div className="grid grid-cols-12 gap-6 border border-black/30 dark:border-white/30 relative items-center bg-[#fff] dark:bg-black">
          <div className="absolute top-[8px] ltr:left-[8px] rtl:right-[8px]  w-full h-full -bg-gradient-to-b from-[#2e0f53] to-[#592da8] -z-10" />

          {/* Left contact info */}
          <div className="col-span-12 lg:col-span-4">
            <div className="p-8 pb-0 bg-[#f2f2f2] dark:bg-[#1a1a1a] h-full">
              <div className="flex gap-6 items-center flex-wrap xl:flex-nowrap">
                <div className="-bg-gradient-to-b from-[#2e0f53] to-[#592da8] text-white z-10 relative w-16 h-16 flex items-center justify-center">
                  <div className="absolute w-full h-full border-[#592da8] -z-10 top-[4px] left-[4px] border" />
                  <RiPhoneLine className="text-2xl" />
                </div>
                <div>
                  <h4>+1 809 120 6705</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Call our 24/7 Tech Conference Support
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-center flex-wrap xl:flex-nowrap mt-6">
                <div className="-bg-gradient-to-b from-[#2e0f53] to-[#592da8] text-white z-10 relative w-16 h-16 flex items-center justify-center">
                  <div className="absolute w-full h-full border-[#592da8] -z-10 top-[4px] left-[4px] border" />
                  <RiMailLine className="text-2xl" />
                </div>
                <div>
                  <h4>
                    <Link href="#!" className="font-semibold">
                      info@conference.com
                    </Link>
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Send us an email for inquiries or registration
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <Image
                  src={techContact.src}
                  alt=""
                  width={techContact.width || 400}
                  height={techContact.height || 300}
                  className="lg:mx-auto"
                />
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="col-span-12 lg:col-span-8">
            <form className="p-8 h-full">
              <div className="grid grid-cols-12 md:gap-8 gap-6">
                <div className="col-span-12 md:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="sm:w-full bg-[#f2f2f2] dark:bg-[#1a1a1a] p-3 focus:outline-none focus:border-[#592da8]"
                    placeholder="First name"
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="sm:w-full bg-[#f2f2f2] dark:bg-[#1a1a1a] p-3 focus:outline-none focus:border-[#592da8]"
                    placeholder="Last name"
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    className="sm:w-full bg-[#f2f2f2] dark:bg-[#1a1a1a] p-3 focus:outline-none focus:border-[#592da8]"
                    placeholder="Company or organization"
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Area of Interest
                  </label>
                  <input
                    type="text"
                    className="sm:w-full bg-[#f2f2f2] dark:bg-[#1a1a1a] p-3 focus:outline-none focus:border-[#592da8]"
                    placeholder="Area of Interest"
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="sm:w-full bg-[#f2f2f2] dark:bg-[#1a1a1a] p-3 focus:outline-none focus:border-[#592da8]"
                    placeholder="Email address"
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <label className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="sm:w-full bg-[#f2f2f2] dark:bg-[#1a1a1a] p-3 focus:outline-none focus:border-[#592da8]"
                    placeholder="Phone number"
                  />
                </div>
                <div className="col-span-12">
                  <label className="block text-sm font-medium mb-2">
                    Message / Inquiry
                  </label>
                  <textarea
                    rows={4}
                    className="sm:w-full bg-[#f2f2f2] dark:bg-[#1a1a1a] p-3 focus:outline-none focus:border-[#592da8]"
                    placeholder="Message"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn rounded-none text-xl bg-[#592da8] p-4 px-8 text-white relative group mt-8"
              >
                <span className="inline-flex items-center gap-2">
                  Submit Inquiry <RiArrowRightDoubleFill />
                </span>
                <span className="absolute border w-full h-full top-[7px] left-[7px] border-[#592da8] -group-hover:top-[-7px] -group-hover:left-[-7px] transition-all duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
