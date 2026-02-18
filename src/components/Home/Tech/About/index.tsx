"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { RiPlayFill, RiArrowRightDoubleFill } from "@remixicon/react";

import techAbout from "../../../../assets/images/tech/tech-about.jpg";
import techAboutText from "../../../../assets/images/tech/tech-about-text.png";
import techAboutCircleText from "../../../../assets/images/tech/tech-about-circletext.png";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const targetDate = new Date("2026-08-10T09:00:00Z");

function getTimeLeft(): TimeLeft {
  const now = new Date().getTime();
  const distance = targetDate.getTime() - now;

  if (distance <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

export default function AboutSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const openVideo = () => setIsVideoOpen(true);
  const closeVideo = () => setIsVideoOpen(false);

  return (
    <section className="lg:py-30 py-20 xl:pt-45 bg-[#f2f2f2] dark:bg-[#1a1a1a] overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-12 gap-6 lg:gap-15 items-center">
          {/* Left column - Image & video trigger */}
          <div className="col-span-12 xl:col-span-6">
            <div
              className="xl:h-180 relative group"
              data-sal="slide-right"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              <Image
                src={techAbout.src}
                alt=""
                width={techAbout.width}
                height={techAbout.height}
                className="rounded-t-full h-full w-full object-cover"
              />
              <span className="border border-[#592da8] absolute top-[13px] ltr:left-[13px] rtl:right-[13px] w-full h-full rounded-t-full group-hover:left-0 group-hover:top-0 transtion-all duration-300" />
              <Image
                src={techAboutText.src}
                alt=""
                width={techAboutText.width}
                height={techAboutText.height}
                className="absolute top-23 ltr:-left-64 rtl:-right-64 ltr:2xl:rotate-[-56deg] rtl:2xl:rotate-[56deg] ltr:xl:rotate-[-61deg] rtl:xl:rotate-[61deg] hidden xl:block"
              />

              <div className="absolute xl:top-2 ltr:xl:right-7 rtl:xl:left-7 top-0 ltr:-right-4 rtl:-left-4 xl:flex items-center justify-center z-20 hidden">
                <div className="relative size-40">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="200"
                    height="200"
                    viewBox="0 0 200 200"
                    fill="none"
                    className="absolute inset-0 size-40"
                  >
                    <path
                      className="fill-[#fff] dark:fill-[#000]"
                      d="M93.8771 2.53621C96.8982 1.28483 98.4087 0.659138 100 0.659138C101.591 0.659138 103.102 1.28483 106.123 2.5362L164.588 26.7531C167.609 28.0045 169.119 28.6302 170.245 29.7554C171.37 30.8806 171.995 32.3912 173.247 35.4123L197.464 93.8771C198.715 96.8982 199.341 98.4087 199.341 100C199.341 101.591 198.715 103.102 197.464 106.123L173.247 164.588C171.995 167.609 171.37 169.119 170.245 170.245C169.119 171.37 167.609 171.995 164.588 173.247L106.123 197.464C103.102 198.715 101.591 199.341 100 199.341C98.4087 199.341 96.8982 198.715 93.8771 197.464L35.4123 173.247C32.3912 171.995 30.8806 171.37 29.7554 170.245C28.6302 169.119 28.0045 167.609 26.7531 164.588L2.53621 106.123C1.28483 103.102 0.659138 101.591 0.659138 100C0.659138 98.4087 1.28483 96.8982 2.5362 93.8771L26.7531 35.4123C28.0045 32.3912 28.6302 30.8806 29.7554 29.7554C30.8806 28.6302 32.3912 28.0045 35.4123 26.7531L93.8771 2.53621Z"
                    />
                  </svg>
                  <Image
                    src={techAboutCircleText.src}
                    alt=""
                    width={techAboutCircleText.width}
                    height={techAboutCircleText.height}
                    className="absolute inset-0 m-auto object-cover w-full h-full animate-[spin_12s_linear_infinite] p-3 dark:invert"
                  />
                  <button
                    type="button"
                    onClick={openVideo}
                    className="absolute inset-0 flex items-center justify-center"
                    aria-label="Play video"
                  >
                    <div className="size-12 -bg-gradient-to-b from-[#2e0f53] to-[#592da8] rounded-full flex items-center justify-center shadow-lg">
                      <RiPlayFill className="text-white text-2xl ml-1" />
                    </div>
                  </button>
                </div>
              </div>

              {/* Video Modal */}
              {isVideoOpen && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center">
                  <div className="relative bg-white rounded-xl overflow-hidden w-[90%] max-w-3xl">
                    <button
                      type="button"
                      onClick={closeVideo}
                      className="absolute top-3 right-3 text-black text-3xl z-50"
                      aria-label="Close video"
                    >
                      &times;
                    </button>
                    <iframe
                      className="w-full h-[400px]"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                      title="Tech Summit Video"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right column - Content & countdown */}
          <div className="col-span-12 xl:col-span-6">
            <h2 className="font-fahkwang mb-6 md:text-5xl drop-shadow-[2px_2px_0px_rgba(0,0,0,0.2)] leading-snug">
              Shaping Tomorrow’s Technology Landscape
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mb-5 md:text-[20px]">
              Join industry leaders, innovators, and future-focused creators as
              we explore cutting-edge technologies reshaping the digital world.
              From AI breakthroughs to next-gen cloud ecosystems, the future of
              tech begins here.
            </p>

            <p className="text-gray-600 dark:text-gray-400 md:text-[20px]">
              Discover insights, strategies, and hands-on experiences designed
              to empower businesses and professionals in an evolving tech-driven
              era.
            </p>

            <div className="flex items-center gap-6 mt-9 mb-5 flex-wrap md:flex-nowrap">
              <div className="border border-black/20 dark:border-white/20 border-b-[#592da8] dark:border-b-[#592da8] border-b-3 w-100 p-5 text-center">
                <h3 className="mb-2 text-[#592da8] text-3xl font-semibold">
                  {timeLeft.days}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                  Days
                </p>
              </div>

              <div className="border border-black/20 dark:border-white/20 border-t-[#592da8] dark:border-t-[#592da8] border-t-3 w-100 p-5 text-center">
                <h3 className="mb-2 text-[#592da8] text-3xl font-semibold">
                  {timeLeft.hours}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                  Hours
                </p>
              </div>

              <div className="border border-black/20 dark:border-white/20 border-b-[#592da8] dark:border-b-[#592da8] border-b-3 w-100 p-5 text-center">
                <h3 className="mb-2 text-[#592da8] text-3xl font-semibold">
                  {timeLeft.minutes}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                  Minutes
                </p>
              </div>

              <div className="border border-black/20 dark:border-white/20 border-t-[#592da8] dark:border-t-[#592da8] border-t-3 w-100 p-5 text-center">
                <h3 className="mb-2 text-[#592da8] text-3xl font-semibold">
                  {timeLeft.seconds}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                  Seconds
                </p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-9">
              Be part of the global movement shaping the next chapter of
              innovation, collaboration, and digital transformation.
            </p>

            <button
              type="button"
              className="btn rounded-none text-xl bg-[#592da8] p-4 px-8 text-white relative group"
            >
              Discover now <RiArrowRightDoubleFill className="inline ms-2" />
              <span className="absolute border w-full h-full top-[7px] left-[7px] border-[#592da8] -group-hover:top-[-7px] -group-hover:left-[-7px] transition-all duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
