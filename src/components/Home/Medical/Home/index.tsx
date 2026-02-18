"use client";

import medicalHomeBg from "../../../../assets/images/medical/medical-home-bg.png";
import { RiArrowRightLine } from "@remixicon/react";

export default function MedicalHomeSection() {
  return (
    <>
      {/* Hero Section start */}
      <section
        className="lg:py-30 py-20 2xl:mx-10 mx-2 lg:mx-5 mt-8 lg:px-15 px-7 rounded-2xl bg-cover bg-center relative z-10 overflow-hidden text-white mb-2"
        style={{ backgroundImage: `url(${medicalHomeBg.src})` }}
      >
        <div className="absolute w-full h-full inset-0 ltr:bg-linear-to-r rtl:bg-linear-to-l from-[#1C2359] to-transparent"></div>
        <div className="grid grid-cols-12 relative z-10">
          <div className="col-span-12 xl:col-span-8">
            <p
              className="mb-4 uppercase tracking-[2px]"
              data-sal="slide-right"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              Medical Conference 2026
            </p>
            <h2
              className="font-chivo font-bold 2xl:text-[120px] md:text-[70px] leading-[1.1] mb-5"
              data-sal="slide-left"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              Global Healthcare & Innovation summit
            </h2>

            <p
              className="md:text-[24px] text-gray-200 max-w-4xl mb-9"
              data-sal="slide-right"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              Join leading doctors, researchers, and healthcare professionals to
              explore the future of medicine and clinical innovation.
            </p>
            <a
              href="#!"
              className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#1FC5B1] rounded-md group"
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              <span className="absolute top-0 right-0 inline-block size-4 transition-all duration-500 ease-in-out bg-[#18A99A] rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 size-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#118C80] rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
              <span
                className="relative w-full text-left text-black transition-colors duration-200 ease-in-out
                  inline-flex items-center gap-1"
              >
                Join Medical Meet
                <RiArrowRightLine className="group-hover:translate-x-1 transition-all duration-400" />
              </span>
            </a>
          </div>
        </div>
      </section>
      {/* Hero Section End */}
    </>
  );
}
