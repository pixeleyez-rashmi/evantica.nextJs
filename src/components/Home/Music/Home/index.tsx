"use client";

import { RiExpandRightLine } from "@remixicon/react";

export default function MusicHomeSection() {
  return (
    <>
      {/* Hero Section start */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/music-home.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container  lg:px-20 relative z-10 py-45">
          <div className="max-w-6xl mx-auto text-center">
            <h1
              className="xl:text-[180px] md:text-[100px] lg:text-[150px] uppercase font-bold tracking-[1px] mb-5"
              data-sal="zoom-in"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              <span className="bg-linear-to-b from-[#caf0f8] via-[#00b4d8] to-[#03045e] bg-clip-text text-transparent drop-shadow-[0_4px_0_#03045e]">
                music Festival
              </span>
            </h1>
            <h3
              className="text-white xl:text-6xl md:text-3xl lg:text-5xl md:mb-16 mb-8"
              data-sal="zoom-in"
              data-sal-duration="800"
              data-sal-delay="400"
            >
              Electric Beats: Dance Under the Stars
            </h3>
            <a
              href="#!"
              className="relative px-8 py-4 font-semibold text-xl text-white group inline-flex items-center gap-3"
              data-sal="zoom-in"
              data-sal-duration="800"
              data-sal-delay="600"
            >
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
              <span className="absolute bottom-0 left-0 hidden w-12 h-24 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
              <span className="absolute bottom-0 right-0 hidden w-12 h-24 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
              <span className="relative flex items-center gap-2">
                Reserve Your Spot <RiExpandRightLine />
              </span>
            </a>
          </div>
        </div>
      </section>
      {/* Hero Section end */}
    </>
  );
}
