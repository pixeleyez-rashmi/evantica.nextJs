"use client";

import Image from "next/image";

import BlogGridBg from "../../../../assets/images/event/main-banner-bg.jpg";

import arrowRight from "../../../../assets/images/event/event-arrow-right.png";
import arrowDown from "../../../../assets/images/event/icons8-arrow-down.gif";

export default function BlogGridHome() {
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
        style={{ backgroundImage: `url(${BlogGridBg.src})` }}
      >
        <div className="absolute bg-[radial-gradient(circle_at_left_bottom,transparent_20px,#fff_20px)]  dark:bg-[radial-gradient(circle_at_left_bottom,transparent_20px,#000_20px)] size-7 2xl:-top-2 2xl:left-46 z-10 md:left-2 md:-top-1 -top-2 left-0"></div>
        <div className="absolute bg-[radial-gradient(circle_at_right_bottom,transparent_20px,#fff_20px)] dark:bg-[radial-gradient(circle_at_right_bottom,transparent_20px,#000_20px)] size-7 2xl:-top-2 2xl:right-46 z-10 md:right-2 md:-top-1 -top-2 right-0"></div>
        <div className="absolute inset-0 w-full h-full bg-black/30 rounded-3xl"></div>
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="xl:text-7xl md:text-5xl leading-snug font-bold tracking-[1px] mb-6"
              data-sal="zoom-in"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              Blog Grid
            </h2>
            <form
              action="#"
              method="GET"
              className="flex justify-center items-center"
              data-sal="slide-right"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              <div className="relative w-full max-w-xl">
                <input
                  type="text"
                  name="query"
                  placeholder="Search for anything..."
                  className="w-full pl-4 pr-24 py-3 rounded-full border border-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-white placeholder-white/70 rtl:pr-4 rtl:pl-24 rtl:text-right"
                />
                <button
                  type="submit"
                  className="absolute right-1 rtl:right-auto rtl:left-1 top-1/2 -translate-y-1/2 bg-white text-black px-6 py-2 rounded-full whitespace-nowrap"
                >
                  Search
                </button>
              </div>
            </form>

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
              <p>Blog grid</p>
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
