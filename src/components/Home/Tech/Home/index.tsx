"use client";

import Link from "next/link";
import Image from "next/image";
import { RiArrowRightDoubleFill } from "@remixicon/react";

// Import images
import techHomeGirl from "../../../../assets/images/tech/tech-home-girl.jpg";
import techHomeShape from "../../../../assets/images/tech/tech-home-shape.jpg";
import techSlideRight from "../../../../assets/images/tech/tech-slide-right.png";
import user09 from "../../../../assets/images/avatar/user-09.jpg";
import user02 from "../../../../assets/images/avatar/user-02.jpg";

export default function TechHomeSection() {
  return (
    <section className="relative">
      <div className="xl:ps-15 lg:ps-7 px-5 pt-30 lg:pt-0">
        <div className="grid grid-cols-12 gap-6 xl:gap-15 items-center">
          {/* Left Column - Content */}
          <div className="col-span-12 xl:col-span-6">
            <div className="lg:pt-40 relative">
              <h2
                className="uppercase mb-6 2xl:text-7xl md:text-5xl font-bold font-fahkwang leading-snug"
                data-sal="zoom-in"
                data-sal-duration="800"
                data-sal-delay="200"
              >
                GLOBAL CREATIVE TECH SUMMIT 2026.
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-[22px]">
                Discover the future of design, creativity, and innovation as
                industry leaders share insights, trends, and breakthrough
                solutions shaping tomorrow's digital experiences.
              </p>

              {/* Buttons */}
              <div className="inline-flex lg:gap-2 xl:gap-6 gap-6 xl:items-center mt-6 flex-col md:flex-row">
                <Link
                  href="#!"
                  dir="ltr"
                  className="relative inline-flex items-center gap-1 font-medium mt-[30px] me-5 text-white border-2 border-black/40 dark:border-white/40 px-[34px] py-[14px] bg-[#592da8] hover:bg-white dark:hover:bg-black hover:text-[#592da8] transition-all duration-300
                  before:content-[''] before:absolute before:top-[-16px] before:h-[14px] before:w-[calc(100%+3px)] before:left-[5px] before:skew-x-[-45deg] before:border-2 before:border-black/40 dark:before:border-white/40 before:border-b-0 before:transition-all before:duration-300 before:ease-in-out hover:before:bg-[#592da8] hover:before:border-[#592da8]
                  after:content-[''] after:absolute after:right-[-16px] after:h-[calc(100%+3px)] after:w-[15px] after:top-[-8px] after:skew-y-[-45deg] after:border-2 after:border-black/40 dark:after:border-white/40 after:border-l-0 after:border-t-0 after:transition-all after:duration-300 after:ease-in-out hover:after:bg-[#592da8] hover:after:border-[#592da8]"
                >
                  <span>Explore Highlights</span>
                  <RiArrowRightDoubleFill />
                </Link>
                <Link
                  href="#!"
                  className="group text-xl font-medium inline-flex items-center gap-2 relative"
                >
                  <span className="transition-all duration-300 group-hover:tracking-wide">
                    Secure Your Spot
                  </span>
                  <span className="relative size-10 overflow-hidden flex items-center justify-center">
                    <Image
                      src={techSlideRight.src}
                      alt=""
                      width={40}
                      height={40}
                      className="absolute transition-all duration-300 group-hover:translate-x-full group-hover:opacity-0 dark:invert"
                    />
                    <Image
                      src={techSlideRight.src}
                      alt=""
                      width={40}
                      height={40}
                      className="absolute -translate-x-full opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 dark:invert"
                    />
                  </span>
                </Link>
              </div>

              {/* Stats Section */}
              <div className="border-t border-b xl:py-7 py-3 md:flex relative hidden 2xl:mx-10 xl:mt-40 mt-15 gap-6">
                <div className="flex gap-6 items-center">
                  <div className="flex -space-x-8">
                    <div className="size-14">
                      <Image
                        src={user09.src}
                        alt=""
                        width={56}
                        height={56}
                        className="w-full h-full object-cover rounded-full border-3 border-white dark:border-black"
                      />
                    </div>
                    <div className="size-14">
                      <Image
                        src={user02.src}
                        alt=""
                        width={56}
                        height={56}
                        className="w-full h-full object-cover rounded-full border-3 border-white dark:border-black"
                      />
                    </div>
                    <div className="size-14 rounded-full bg-gradient-to-b from-[#2e0f53] to-[#592da8] text-white flex items-center justify-center font-bold border-3 border-white dark:border-black">
                      <p>12+</p>
                    </div>
                  </div>
                  <p className="text-gray-800 dark:text-gray-300">
                    Creative professionals registered for the summit
                  </p>
                </div>

                <div className="flex gap-6 items-center relative ps-4">
                  <h2>93%</h2>
                  <p className="text-gray-800 dark:text-gray-300">
                    Participants believe the summit boosts their industry
                    knowledge
                  </p>
                  <span className="absolute ltr:left-0 rtl:right-0 top-1/2 -translate-y-1/2 w-px xl:h-28 md:h-26 lg:h-20 bg-black dark:bg-white"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="col-span-12 xl:col-span-6">
            <div className="xl:h-235 relative z-10">
              <Image
                src={techHomeGirl.src}
                alt="Tech summit"
                width={techHomeGirl.width || 600}
                height={techHomeGirl.height || 800}
                className="w-auto xl:w-full h-full object-cover"
              />
              <Image
                src={techHomeShape.src}
                alt=""
                width={techHomeShape.width || 600}
                height={techHomeShape.height || 800}
                className="w-auto xl:w-full h-full object-cover absolute ltr:-left-10 rtl:-right-10 rtl:scale-x-[-1] top-10 -z-10 hidden md:block dark:invert"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
