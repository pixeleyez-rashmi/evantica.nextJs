"use client";

import { useState, useEffect } from "react";

export default function AboutUsCountdown() {
  const eventDate = new Date("2026-03-14T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  return (
    <section className="relative text-white lg:py-60 py-20 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 from-35% to-transparent z-5" />

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://assets.mixkit.co/videos/13192/13192-720.mp4"
          type="video/mp4"
        />
      </video>

      <div className="container relative z-10">
        <div className="max-w-4xl mb-15">
          <p
            className="mb-2 font-medium uppercase tracking-[1px]"
            data-sal="slide-right"
            data-sal-duration="800"
            data-sal-delay="100"
          >
            // Upcoming Event
          </p>

          <h2
            className="font-bold xl:text-5xl md:text-3xl text-2xl leading-snug mb-4"
            data-sal="slide-right"
            data-sal-duration="800"
            data-sal-delay="200"
          >
            The Event Begins In
          </h2>
        </div>

        <div className="flex items-center gap-8 flex-wrap">
          {/* Days Circle */}
          <div
            className="rounded-full w-28 h-28 outline-3 outline-offset-8 outline-[#ff6b6b] bg-white/20 backdrop-blur-sm text-center flex flex-col justify-center items-center"
            data-sal="slide-right"
            data-sal-duration="800"
            data-sal-delay="300"
          >
            <h2 className="font-bold text-3xl md:text-4xl mb-1">
              {isMounted ? timeLeft.days : 0}
            </h2>
            <p className="text-[10px] uppercase tracking-wider text-gray-300">
              Days
            </p>
          </div>

          {/* Hours Circle */}
          <div
            className="rounded-full w-28 h-28 outline-3 outline-offset-8 outline-[#ffb84d] bg-white/20 backdrop-blur-sm text-center flex flex-col justify-center items-center"
            data-sal="slide-right"
            data-sal-duration="800"
            data-sal-delay="400"
          >
            <h2 className="font-bold text-3xl md:text-4xl mb-1">
              {isMounted ? timeLeft.hours : 0}
            </h2>
            <p className="text-[10px] uppercase tracking-wider text-gray-300">
              Hours
            </p>
          </div>

          {/* Minutes Circle */}
          <div
            className="rounded-full w-28 h-28 outline-3 outline-offset-8 outline-[#4dd2ff] bg-white/20 backdrop-blur-sm text-center flex flex-col justify-center items-center"
            data-sal="slide-right"
            data-sal-duration="800"
            data-sal-delay="500"
          >
            <h2 className="font-bold text-3xl md:text-4xl mb-1">
              {isMounted ? timeLeft.minutes : 0}
            </h2>
            <p className="text-[10px] uppercase tracking-wider text-gray-300">
              Minutes
            </p>
          </div>

          {/* Seconds Circle */}
          <div
            className="rounded-full w-28 h-28 outline-3 outline-offset-8 outline-[#9b59b6] bg-white/20 backdrop-blur-sm text-center flex flex-col justify-center items-center"
            data-sal="slide-right"
            data-sal-duration="800"
            data-sal-delay="600"
          >
            <h2 className="font-bold text-3xl md:text-4xl mb-1">
              {isMounted ? timeLeft.seconds : 0}
            </h2>
            <p className="text-[10px] uppercase tracking-wider text-gray-300">
              Seconds
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
