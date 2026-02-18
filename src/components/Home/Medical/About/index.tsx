"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import moment from "moment";
import AboutImage1 from "../../../../assets/images/medical/medical-about-1.jpg";
import AboutImage2 from "../../../../assets/images/medical/medical-about-2.jpg";
import AboutPoint1 from "../../../../assets/images/medical/medical-about-point.png";
import { RiArrowRightLongLine } from "@remixicon/react";

export default function MedicalAboutSection() {
  // State for countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set your target date here (Conference date)
    const targetDate = moment("2026-12-31 00:00:00");

    // Update countdown every second
    const interval = setInterval(() => {
      const now = moment();
      const duration = moment.duration(targetDate.diff(now));

      if (duration.asMilliseconds() > 0) {
        setTimeLeft({
          days: Math.floor(duration.asDays()),
          hours: duration.hours(),
          minutes: duration.minutes(),
          seconds: duration.seconds(),
        });
      } else {
        // Countdown finished
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
      }
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* About Section start */}
      <section className="2xl:mx-10 mx-2 lg:mx-5 mt-8 overflow-hidden">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 xl:col-span-7 lg:col-span-6">
            <div
              className="h-full flex group"
              data-sal="slide-right"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              <div
                className="h-full w-full flex items-center justify-center relative rounded-2xl overflow-hidden min-h-[400px]"
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay="200"
              >
                <Image
                  src={AboutImage1}
                  alt="About Image 1"
                  className="w-full h-full object-cover rounded-2xl transition-opacity duration-1000 ease-in-out group-hover:opacity-0"
                />

                <Image
                  src={AboutImage2}
                  alt="About Image 2"
                  className="w-full h-full object-cover rounded-2xl transition-opacity duration-1000 ease-in-out absolute top-0 left-0 opacity-0 group-hover:opacity-100"
                />
              </div>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-5 lg:col-span-6">
            <div
              className="relative bg-[#F2F3FC] dark:bg-[#15182F] rounded-2xl p-8 overflow-hidden h-full"
              data-sal="slide-left"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              <h2 className="font-chivo md:text-6xl leading-snug mb-5">
                About the Conference
              </h2>
              <p className="text-gray-700 dark:text-gray-300 md:text-[20px] mb-4">
                The International Medical Conference 2026 unites healthcare
                professionals and researchers worldwide to share the latest
                medical innovations, foster collaboration, and advance patient
                care.
              </p>

              <p className="text-gray-700 dark:text-gray-300 md:text-[20px] mb-6">
                Connect with healthcare leaders at the International Medical
                Conference 2026 to discover innovations and advance patient
                care.
              </p>

              <div className="grid md:grid-cols-4 xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 sm:grid-cols-2 gap-4 mb-7 text-center">
                <div className="bg-white/40 backdrop-blur rounded-xl p-4">
                  <h3 className="text-4xl mb-2">{timeLeft.days}</h3>
                  <p className="uppercase tracking-wide text-gray-700 dark:text-gray-300">
                    Days
                  </p>
                </div>

                <div className="bg-white/40 backdrop-blur rounded-xl p-4">
                  <h3 className="text-4xl mb-2">{timeLeft.hours}</h3>
                  <p className="uppercase tracking-wide text-gray-700 dark:text-gray-300">
                    Hours
                  </p>
                </div>

                <div className="bg-white/40 backdrop-blur rounded-xl p-4">
                  <h3 className="text-4xl mb-2">{timeLeft.minutes}</h3>
                  <p className="uppercase tracking-wide text-gray-700 dark:text-gray-300">
                    Minutes
                  </p>
                </div>

                <div className="bg-white/40 backdrop-blur rounded-xl p-4">
                  <h3 className="text-4xl mb-2">{timeLeft.seconds}</h3>
                  <p className="uppercase tracking-wide text-gray-700 dark:text-gray-300">
                    Seconds
                  </p>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="inline-flex items-center gap-2 text-gray-800 dark:text-gray-200">
                  <Image
                    src={AboutPoint1}
                    alt="About Point 1"
                    className="dark:invert rtl:scale-x-[-1]"
                  />
                  Insights into the latest medical research & innovations
                </li>

                <li className="inline-flex items-center gap-2 text-gray-800 dark:text-gray-200">
                  <Image
                    src={AboutPoint1}
                    alt="About Point 1"
                    className="dark:invert rtl:scale-x-[-1]"
                  />
                  Interactive workshops & hands-on clinical sessions
                </li>

                <li className="inline-flex items-center gap-2 text-gray-800 dark:text-gray-200">
                  <Image
                    src={AboutPoint1}
                    alt="About Point 1"
                    className="dark:invert rtl:scale-x-[-1]"
                  />
                  Networking opportunities with healthcare professionals
                </li>
              </ul>

              <div className="flex flex-wrap items-center justify-between gap-5">
                <div>
                  <p className="text-sm uppercase tracking-wider text-gray-700 dark:text-gray-300">
                    📍 Location
                  </p>
                  <p className="font-semibold">New Delhi, India</p>
                </div>

                <a
                  href="#!"
                  className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#1C2359] rounded-md group"
                >
                  <span className="absolute top-0 right-0 inline-block size-4 transition-all duration-500 ease-in-out bg-[#161C47] rounded group-hover:-mr-4 group-hover:-mt-4">
                    <span className="absolute top-0 right-0 size-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#0F1436] rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                  <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white inline-flex items-center gap-1">
                    Register Now
                    <RiArrowRightLongLine className="group-hover:translate-x-1 transition-all duration-400" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}
    </>
  );
}
