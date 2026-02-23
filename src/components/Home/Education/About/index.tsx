"use client";

import Link from "next/link";
import Image from "next/image";
import {
  RiArrowRightLongFill,
  RiArrowRightDoubleFill,
  RiPhoneLine,
} from "@remixicon/react";

import educationAboutMain from "../../../../assets/images/education/education-about-main.jpg";
import educationAboutShape from "../../../../assets/images/education/education-about-shape.png";
import educationTitleShape from "../../../../assets/images/education/education-title-shape.jpg";

const features = [
  "Expert-led keynote sessions",
  "Hands-on learning experiences",
  "Networking with global educators",
];

export default function AboutSection() {
  return (
    <section className="lg:pb-30 pb-20">
      <div className="container">
        <div className="grid grid-cols-12 2xl:gap-14 gap-6 items-center">
          {/* Left Column - Image */}
          <div className="col-span-12 xl:col-span-6">
            <div className="relative">
              <div
                className="relative z-10 2xl:w-150"
                data-sal="slide-right"
                data-sal-duration="800"
                data-sal-delay="200"
              >
                <Image
                  src={educationAboutMain.src}
                  alt="Education Conference"
                  width={educationAboutMain.width}
                  height={educationAboutMain.height}
                  className="w-full h-full object-cover -[clip-path:polygon(0%_15%,_10%_0%,_90%_0%,_100%_15%,_100%_85%,_90%_100%,_10%_100%,_0%_85%)]"
                />
                <div className="absolute top-2 ltr:left-2 rtl:right-2 bg-[#ffe149] w-full h-full -z-10 -[clip-path:polygon(0%_15%,_10%_0%,_90%_0%,_100%_15%,_100%_85%,_90%_100%,_10%_100%,_0%_85%)]"></div>
              </div>
              <div
                className="absolute top-25 ltr:-left-34 rtl:-right-34 z-10"
                data-sal="slide-down"
                data-sal-duration="800"
                data-sal-delay="300"
              >
                <div className="relative md:inline-block hidden">
                  <Image
                    src={educationAboutShape.src}
                    alt=""
                    width={educationAboutShape.width}
                    height={educationAboutShape.height}
                    className="w-70"
                  />
                  <h5 className="absolute inset-0 flex items-center justify-center text-center top-5 left-5 text-black">
                    15+ Years <br /> Experience
                  </h5>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-span-12 xl:col-span-6">
            <div className="relative inline-block mb-7">
              <h2 className="lg:text-7xl 2xl:text-7xl xl:text-6xl md:text-5xl font-bold">
                Elevating the World of Education.
              </h2>
              <Image
                src={educationTitleShape.src}
                alt=""
                width={educationTitleShape.width}
                height={educationTitleShape.height}
                className="absolute -top-11 ltr:-right-11 rtl:-left-11 rtl:scale-x-[-1] hidden xl:block dark:invert"
              />
            </div>
            <p className="text-gray-700 dark:text-gray-300 md:text-[22px]">
              EduFuture Summit unites 5,000+ passionate educators, policymakers,
              and innovative edtech leaders from 80+ countries to reimagine
              learning in the digital age.
            </p>
            <ul className="mt-7 space-y-2 md:text-[20px] text-gray-700 dark:text-gray-300">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <RiArrowRightDoubleFill className="text-[#481938] shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="flex items-center md:gap-12 mt-13 flex-wrap gap-6">
              <Link
                href="#!"
                dir="ltr"
                className="btn uppercase text-xl font-bold border border-black dark:border-white rounded-full border-b-5 px-13 py-4 group relative overflow-hidden z-10"
              >
                <span className="absolute top-1/2 left-1/2 w-0 h-0 bg-[#f5e900] rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:w-[562px] group-hover:h-[562px] -z-10"></span>
                <span className="dark:group-hover:text-black">
                  Join the Conference
                  <RiArrowRightLongFill className="inline ms-1" />
                </span>
              </Link>
              <div className="flex items-center gap-3">
                <div className="size-15 bg-[#f5e900] rounded-full inline-flex items-center justify-center text-black">
                  <RiPhoneLine className="text-2xl" />
                </div>
                <div>
                  <p className="text-gray-700 font-medium dark:text-gray-300">
                    Need Help?
                  </p>
                  <h4 className="hover:text-[#481938] transition-all duration-300">
                    <Link href="tel:+1912346367456">+19(12346)-367-456</Link>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
