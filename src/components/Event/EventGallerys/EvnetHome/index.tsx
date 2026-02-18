"use client";

import Image from "next/image";

import galleryBg from "../../../../assets/images/event/main-banner-bg.jpg";

import arrowRight from "../../../../assets/images/event/right-arrow.png";
import arrowDown from "../../../../assets/images/event/icons8-arrow-down.gif";

export default function EventHome() {
  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <>
      <section
        className="lg:py-70 py-40 lg:mx-7 mx-2 rounded-3xl bg-[url(/assets/images/event/main-banner-bg.jpg)] bg-fixed bg-cover bg-center text-center text-white relative mt-5 md:mb-15 mb-10"
        style={{ backgroundImage: `url(${galleryBg.src})` }}
      >
        <div className="absolute bg-[radial-gradient(circle_at_left_bottom,transparent_20px,#fff_20px)]  dark:bg-[radial-gradient(circle_at_left_bottom,transparent_20px,#000_20px)] size-7 2xl:-top-2 2xl:left-46 z-10 md:left-2 md:-top-1 -top-2 left-0"></div>
        <div className="absolute bg-[radial-gradient(circle_at_right_bottom,transparent_20px,#fff_20px)] dark:bg-[radial-gradient(circle_at_right_bottom,transparent_20px,#000_20px)] size-7 2xl:-top-2 2xl:right-46 z-10 md:right-2 md:-top-1 -top-2 right-0"></div>
        <div className="absolute inset-0 w-full h-full bg-black/30 rounded-3xl"></div>
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="xl:text-7xl md:text-5xl leading-snug font-bold tracking-[1px] mb-4"
              data-sal="zoom-in"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              Event Gallery
            </h2>

            <p
              className="text-[20px] text-gray-200 max-w-2xl mx-auto"
              data-sal="slide-right"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              Explore highlights from our past events through captivating
              moments, speaker sessions, audience interactions, and
              unforgettable experiences captured throughout the event.
            </p>
            <div
              className="flex items-center justify-center gap-4 text-[22px] mt-6"
              data-sal="slide-left"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              <p>
                <a href="index.html">Home</a>
              </p>
              <Image src={arrowRight} alt="" className="invert" />
              <p>Event Gallery</p>
            </div>
          </div>
        </div>
        <div
          className="absolute -bottom-22 left-1/2 -translate-x-1/2"
          data-sal="slide-up"
          data-sal-duration="800"
          data-sal-delay="200"
        >
          <div
            id="scrollDownBtn"
            className="relative w-40 h-40 flex items-center justify-center rounded-full bg-black dark:bg-white border-10 border-white dark:border-black cursor-pointer"
            onClick={handleScrollDown}
          >
            <Image
              src={arrowDown}
              alt="Scroll Down"
              className="absolute w-10 h-10 invert dark:invert-0 z-10"
            />

            <svg
              viewBox="0 0 100 100"
              className="w-full h-full absolute animate-[spin_12s_linear_infinite]"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                />
              </defs>

              <text
                fontSize="6"
                fontWeight="600"
                letterSpacing="2"
                className="uppercase fill-white dark:fill-black"
              >
                <textPath
                  href="#circlePath"
                  startOffset="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  SCROLL DOWN • SCROLL DOWN • SCROLL DOWN •
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}
