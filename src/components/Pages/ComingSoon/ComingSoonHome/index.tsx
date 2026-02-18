"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import ComingSoonBg from "../../../../assets/images/event/event-coming-soon.jpg";
import logo from "../../../../assets/images/logo-light.png";

export default function ComingSoonHome() {
  // Initialize state with "00"
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const launchDate = new Date("2026-11-01T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      // Calculations
      const d = Math.floor(distance / (1000 * 60 * 60 * 24));
      const h = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((distance % (1000 * 60)) / 1000);

      // Update State
      setTimeLeft({
        days: String(d).padStart(2, "0"),
        hours: String(h).padStart(2, "0"),
        minutes: String(m).padStart(2, "0"),
        seconds: String(s).padStart(2, "0"),
      });
    }, 1000);

    // Cleanup the interval if the user leaves the page
    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <section
        className="min-h-screen py-20 bg-[url(/assets/images/event/event-coming-soon.jpg)] bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url(${ComingSoonBg.src})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container relative z-10 px-4">
          <div
            className="text-center rounded-2xl md:p-10 p-5 bg-white/20 backdrop-blur-md text-white max-w-5xl mx-auto"
            data-sal="zoom-in"
            data-sal-duration="800"
            data-sal-delay="100"
          >
            <a href="index.html" className="inline-block">
              <Image src={logo} alt="Logo" className="h-10 mx-auto" />
            </a>
            <h2
              className="mt-1 font-bold leading-snug mb-6 lg:text-9xl md:text-8xl tracking-[2px]"
              data-sal="zoom-in"
              data-sal-duration="800"
              data-sal-delay="300"
            >
              Coming Soon
            </h2>
            <p className="text-gray-200 md:text-[22px] max-w-3xl mx-auto">
              We’re upgrading the experience — our next-generation platform will
              be live very soon.
            </p>
            <div className="flex items-center justify-center gap-4 mt-10 flex-wrap">
              <div className="bg-white text-black rounded-xl p-6 w-32">
                <h3 id="days" className="mb-2 text-4xl font-bold">
                  {timeLeft.days}
                </h3>
                <p className="text-gray-600 text-[20px]">Days</p>
              </div>
              <div className="bg-white text-black rounded-xl p-6 w-32">
                <h3 id="hours" className="mb-2 text-4xl font-bold">
                  {timeLeft.hours}
                </h3>
                <p className="text-gray-600 text-[20px]">Hours</p>
              </div>
              <div className="bg-white text-black rounded-xl p-6 w-32">
                <h3 id="minutes" className="mb-2 text-4xl font-bold">
                  {timeLeft.minutes}
                </h3>
                <p className="text-gray-600 text-[20px]">Minutes</p>
              </div>
              <div className="bg-white text-black rounded-xl p-6 w-32">
                <h3 id="seconds" className="mb-2 text-4xl font-bold">
                  {timeLeft.seconds}
                </h3>
                <p className="text-gray-600 text-[20px]">Seconds</p>
              </div>
            </div>
            <form className="relative max-w-2xl flex items-center mx-auto mt-10 md:gap-7 gap-3 border border-white/40 rounded-xl p-2 ps-6 flex-wrap md:flex-nowrap">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-transparent outline-none font-semibold text-[20px] text-white placeholder:text-gray-200"
              />
              <button className="bg-[#f2c944] text-black text-xl font-medium px-8 py-3 rounded-lg whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
