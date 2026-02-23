"use client";

import Link from "next/link";
import Image from "next/image";
import { RiLightbulbLine, RiBarChartLine, RiTeamLine } from "@remixicon/react";

import aboutPerson1 from "../../../../assets/images/business/business-about-person1.jpg";
import aboutPerson2 from "../../../../assets/images/business/business-about-person2.jpg";
import aboutCircle from "../../../../assets/images/business/business-about-circle.png";

export default function AboutSection() {
  return (
    <section className="lg:py-30 lg:pb-45 py-20 text-white">
      <div className="container">
        <div className="grid grid-cols-12 gap-6 items-center">
          {/* Left Images */}
          <div
            className="col-span-12 xl:col-span-5"
            data-sal="slide-up"
            data-sal-duration="700"
            data-sal-delay="100"
          >
            {/* Parent Container: Ensure overflow is visible so background images can peek out */}
            <div className="relative z-10 inline-block xl:w-full xl:h-160 md:w-160 md:h-130 w-full h-full">
              {/* Primary Image */}
              <Image
                src={aboutPerson2.src}
                alt="Main person"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 640px, 100vw"
                className="object-cover rounded-lg"
              />

              {/* Secondary Image (Background Offset) */}
              <div className="absolute -bottom-15 ltr:-end-19 rtl:-left-19 border-13 border-[#032530] rounded-lg size-80 md:block hidden">
                <Image
                  src={aboutPerson1.src}
                  alt="Background person"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 640px, 100vw"
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Decorative Circle/Element */}
              <div className="absolute -bottom-30 ltr:-left-30 rtl:-right-30 -z-10 xl:block hidden w-95 h-95">
                <Image
                  src={aboutCircle.src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 640px, 100vw"
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          {/* Right Content */}
          <div
            className="col-span-12 xl:col-span-6 xl:col-end-13"
            data-sal="slide-up"
            data-sal-duration="700"
            data-sal-delay="100"
          >
            <p className="mb-3 text-[#c0f037]">[ About Our Business ]</p>

            <h2 className="md:text-5xl mb-5 font-chivo font-medium leading-[1.2]">
              Empowering Businesses With Innovation &amp; Growth
            </h2>

            <p className="text-gray-400 md:text-[20px] mb-3">
              We help entrepreneurs, startups, and established brands turn their
              ideas into powerful business opportunities. Through strategic
              insights, modern tools, and industry expertise, we guide
              businesses toward smarter decisions and sustainable success. With
              a team of experienced strategists, designers, and business
              consultants, we deliver customized solutions tailored to each
              client’s unique challenges.
            </p>

            <p className="text-gray-400 md:text-[20px] mb-7">
              Our goal is to unlock potential, fuel creativity, and support
              organizations with the right resources to innovate, scale, and
              thrive in today’s competitive marketplace.
            </p>

            <div className="mb-12 flex md:gap-6 gap-3 items-center flex-wrap xl:flex-nowrap">
              <div className="inline-flex items-center gap-3 xl:gap-5 rounded-lg bg-[#0B2C36] px-3 p-3">
                <div className="bg-white/10 bacdrop-blur-sm rounded-full size-12 flex items-center justify-center shrink-0">
                  <RiLightbulbLine className="text-xl" />
                </div>
                <h5>Creative Solutions</h5>
              </div>

              <div className="inline-flex items-center gap-3 xl:gap-5 rounded-lg bg-[#0B2C36] px-3 p-3">
                <div className="bg-white/10 bacdrop-blur-sm rounded-full size-12 flex items-center justify-center shrink-0">
                  <RiBarChartLine className="text-xl" />
                </div>
                <h5>Business Growth</h5>
              </div>

              <div className="inline-flex items-center gap-3 xl:gap-5 rounded-lg bg-[#0B2C36] px-3 p-3">
                <div className="bg-white/10 bacdrop-blur-sm rounded-full size-12 flex items-center justify-center shrink-0">
                  <RiTeamLine className="text-xl" />
                </div>
                <h5>Expert Guidance</h5>
              </div>
            </div>

            <Link
              href="#!"
              className="btn rounded-none group text-lg border border-[#c0f037] text-[#c0f037] tracking-[1px] uppercase font-medium relative transition-all duration-300 hover:bg-[#c0f037] hover:text-black inline-block hover:rotate-[2deg]"
            >
              Learn Our Approach
              <span className="bg-[#c0f037] size-3 rotate-[45deg] block absolute ltr:-left-1 rtl:-right-1 -top-1 transition-all duration-300 group-hover:scale-125 group-hover:bg-white" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
