"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import aboutMain from "../../../../assets/images/music/music-about-main.jpg";
import { RiExpandRightLine } from "@remixicon/react";

export default function MusicAboutSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventDate = new Date("2026-10-31T18:00:00").getTime();

    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        clearInterval(countdown);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(countdown);
  }, []);

  // Format number to always show 2 digits (for days and seconds)
  const formatTime = (time: number) => {
    return time.toString().padStart(2, "0");
  };

  return (
    <>
      {/* About Section start */}
      <section className="text-white">
        <div className="grid grid-cols-12">
          <div className="col-span-12 xl:col-span-6">
            <div className="2xl:p-20 p-5">
              <p
                className="relative mb-4 px-14 inline-block font-semibold tracking-[1px] text-xl"
                data-sal="slide-right"
                data-sal-duration="800"
                data-sal-delay="200"
              >
                <span className="before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-px before:w-11 -before:bg-gradient-to-r before:from-[#e0c3fc] before:via-[#a259ff] before:to-[#4b0082] before:animate-[borderAnim_2s_ease-in-out_infinite_alternate]"></span>
                About Us
                <span className="after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-px after:w-11 -after:bg-gradient-to-l after:from-[#e0c3fc] after:via-[#a259ff] after:to-[#4b0082] after:animate-[borderAnim_2s_ease-in-out_infinite_alternate]"></span>
              </p>
              <h2
                className="xl:text-6xl md:text-5xl uppercase mb-10"
                data-sal="slide-right"
                data-sal-duration="800"
                data-sal-delay="200"
              >
                The sound of the night
              </h2>
              <p
                className="text-gray-300 md:text-[22px] mb-6"
                data-sal="slide-right"
                data-sal-duration="800"
                data-sal-delay="200"
              >
                Our Music Event & Conference is a dynamic platform bringing
                together artists, producers, labels, music technologists, and
                creative leaders from across the industry. It's a space to
                learn, perform, collaborate, and shape the future of music.
              </p>
              <div
                className="grid lg:grid-cols-3 gap-6"
                data-sal="slide-right"
                data-sal-duration="800"
                data-sal-delay="200"
              >
                <div className="p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg">
                  <h3 className="mb-4">Live Performances</h3>
                  <p className="text-gray-300">
                    Experience curated live showcases featuring emerging talent
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg">
                  <h3 className="mb-4">Knowledge Sessions</h3>
                  <p className="text-gray-300">
                    Engage in keynote talks, panel discussions, and workshops
                    led
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg">
                  <h3 className="mb-4">Music Collaboration</h3>
                  <p className="text-gray-300">
                    Collaborate with creative artists and music professionals.
                  </p>
                </div>
              </div>
              <div
                className="mt-8 rounded-xl p-6 border border-white/10 bg-white/5 backdrop-blur-lg text-center"
                data-sal="slide-right"
                data-sal-duration="800"
                data-sal-delay="200"
              >
                <div className="grid md:grid-cols-4 grid-cols-2 gap-4 text-center">
                  <div className="ltr:border-r rtl:border-l border-white/10">
                    <h4 className="text-4xl font-bold">
                      {formatTime(timeLeft.days)}
                    </h4>
                    <p className="text-gray-300">Days</p>
                  </div>
                  <div className="ltr:border-r rtl:border-l border-white/10">
                    <h4 className="text-4xl font-bold">{timeLeft.hours}</h4>
                    <p className="text-gray-300">Hours</p>
                  </div>
                  <div className="ltr:border-r rtl:border-l border-white/10">
                    <h4 className="text-4xl font-bold">{timeLeft.minutes}</h4>
                    <p className="text-gray-300">Minutes</p>
                  </div>
                  <div>
                    <h4 className="text-4xl font-bold">
                      {formatTime(timeLeft.seconds)}
                    </h4>
                    <p className="text-gray-300">Seconds</p>
                  </div>
                </div>
              </div>
              <a
                href="#!"
                dir="ltr"
                className="inline-flex items-center gap-2 mt-10 text-white font-medium tracking-wide hover:text-purple-500 transition-colors duration-300 group"
                data-sal="slide-right"
                data-sal-duration="800"
                data-sal-delay="200"
              >
                Explore Event Highlights
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  <RiExpandRightLine />
                </span>
              </a>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-6">
            <div className="h-full relative">
              <Image
                src={aboutMain}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* about section end */}
    </>
  );
}
