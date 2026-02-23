"use client";

import { useState } from "react";
import Image from "next/image";
import {
  RiCalendarEventFill,
  RiExpandRightLine,
  RiTimeFill,
} from "@remixicon/react";

// import bg image
import scheduleBG from "../../../../assets/images/music/music-schedule-bg.jpg";

// Import schedule images
import musicEvent1 from "../../../../assets/images/music/music-event-1.jpg";
import musicEvent2 from "../../../../assets/images/music/music-event-2.jpg";
import musicEvent3 from "../../../../assets/images/music/music-event-3.jpg";
import musicEvent4 from "../../../../assets/images/music/music-event-4.jpg";
import musicEvent5 from "../../../../assets/images/music/music-event-5.jpg";
import musicEvent6 from "../../../../assets/images/music/music-event-6.jpg";
import musicEvent7 from "../../../../assets/images/music/music-event-7.jpg";

interface Event {
  day: string;
  types: string;
}

type Tab = {
  number: string;
  title: string;
  description: string;
  time: string;
  date: string;
  booking: string;
  image: typeof musicEvent1;
  id: string;
};

const scheduleTypes: Event[] = [
  {
    day: "Opening Night",
    types: "DJ & EDM Night",
  },
  {
    day: "Live Concerts",
    types: "Bands & Singers",
  },
  {
    day: "Finale Night",
    types: "Grand DJ Party",
  },
];

// data for events tab
// tab1
const event1: Tab[] = [
  {
    number: "01",
    title: "Opening Keynote & Artist Showcase",
    description:
      "Kick off the event with industry leaders discussing music trends, followed by a live showcase from emerging and featured artists.",
    time: "10:00 AM – 12:00 PM",
    date: "30 May, 2026",
    booking: "Book Now",
    image: musicEvent1,
    id: "1",
  },
  {
    number: "02",
    title: "Music Industry Panel Discussion",
    description:
      "Industry experts, label heads, and creators discuss the future of music distribution, branding, and digital growth.",
    time: "10:00 AM – 12:00 PM",
    date: "30 May, 2026",
    booking: "Book Now",
    image: musicEvent7,
    id: "2",
  },
  {
    number: "03",
    title: "Networking Hour & Live Performances",
    description:
      "Connect with artists, producers, and industry professionals while enjoying curated live performances and DJ sets.",
    time: "10:00 AM – 12:00 PM",
    date: "30 May, 2026",
    booking: "Book Now",
    image: musicEvent3,
    id: "3",
  },
];
// tab2
const event2: Tab[] = [
  {
    number: "01",
    title: "Live DJ Performance & Beat Session",
    description:
      "Experience high-energy DJ sets and live beat mixing sessions with top electronic and underground music producers.",
    time: "01:00 PM – 03:00 PM",
    date: "31 May, 2026",
    booking: "Book Now",
    image: musicEvent4,
    id: "1",
  },
  {
    number: "02",
    title: "Indie Band Live Concert",
    description:
      "Enjoy soulful performances by popular indie bands, blending modern sounds with classic live instruments.",
    time: "04:00 PM – 06:00 PM",
    date: "31 May, 2026",
    booking: "Book Now",
    image: musicEvent5,
    id: "2",
  },
  {
    number: "03",
    title: "Grand Music Night & Finale",
    description:
      "A spectacular closing night featuring headline artists, immersive stage visuals, and an unforgettable music vibe.",
    time: "07:00 PM – 09:30 PM",
    date: "31 May, 2026",
    booking: "Book Now",
    image: musicEvent6,
    id: "3",
  },
];
// tab3
const event3: Tab[] = [
  {
    number: "01",
    title: "Acoustic Jam & Songwriting Circle",
    description:
      "An intimate acoustic session where artists share original songs, stories, and live songwriting techniques.",
    time: "11:00 AM – 01:00 PM",
    date: "01 June, 2026",
    booking: "Book Now",
    image: musicEvent5,
    id: "1",
  },
  {
    number: "02",
    title: "Music Production & Mixing Workshop",
    description:
      "Learn modern music production, mixing, and mastering workflows from professional sound engineers.",
    time: "02:00 PM – 04:00 PM",
    date: "01 June, 2026",
    booking: "Book Now",
    image: musicEvent3,
    id: "2",
  },
  {
    number: "03",
    title: "Electronic Fusion Night",
    description:
      "A high-energy evening blending electronic music with live instruments, visuals, and immersive soundscapes.",
    time: "06:00 PM – 08:00 PM",
    date: "01 June, 2026",
    booking: "Book Now",
    image: musicEvent2,
    id: "3",
  },
];

// Add more event data here...

export default function MusicScheduleSection() {
  const [activeTab, setActiveTab] = useState(0);

  const getCurrentItems = () => {
    switch (activeTab) {
      case 0:
        return event1;
      case 1:
        return event2;
      case 2:
        return event3;
      default:
        return event1;
    }
  };

  return (
    // schedule section start
    <section className="lg:py-30 py-20 text-white relative">
      <div
        className="absolute inset-0 bg-cover bg-fixed opacity-20"
        style={{ backgroundImage: `url(${scheduleBG.src})` }}
      ></div>
      <div className="container relative z-10">
        <div className="flex items-center justify-between mb-12 flex-wrap lg:flex-nowrap gap-3">
          <div>
            <p
              className="relative mb-4 px-14 inline-block font-semibold tracking-[1px] text-xl"
              data-sal="slide-right"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              <span className="before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-px before:w-11 before:bg-linear-to-r before:from-[#e0c3fc] before:via-[#a259ff] before:to-[#4b0082] before:animate-[borderAnim_2s_ease-in-out_infinite_alternate]"></span>
              Event Schedule
              <span className="after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-px after:w-11 after:bg-linear-to-l after:from-[#e0c3fc] after:via-[#a259ff] after:to-[#4b0082] after:animate-[borderAnim_2s_ease-in-out_infinite_alternate]"></span>
            </p>
            <h2 className="xl:text-6xl md:text-5xl uppercase mb-6">
              Live beats schedule
            </h2>
          </div>
          <nav
            aria-label="Festival Days"
            data-sal="slide-left"
            data-sal-duration="800"
            data-sal-delay="200"
          >
            <ul
              role="tablist"
              className="flex gap-6 lg:justify-center flex-wrap"
            >
              {scheduleTypes.map((day, index) => (
                <li
                  key={index}
                  role="presentation"
                  className={`${index !== 0 ? "border-s border-white/20 ps-6" : ""}`}
                >
                  <button
                    role="tab"
                    aria-selected={activeTab === index}
                    aria-controls={`panel-${index + 1}`}
                    id={`tab-${index + 1}`}
                    onClick={() => setActiveTab(index)}
                    className="tab-btn"
                  >
                    <h3 className="font-chivo mb-2">{day.day}</h3>
                    <p className="text-gray-300">{day.types}</p>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Tab Contents */}
        <div>
          <div
            role="tabpanel"
            id={`panel-${activeTab + 1}`}
            aria-labelledby={`tab-${activeTab + 1}`}
            className={`tab-panel space-y-6`}
          >
            {getCurrentItems().map((item) => (
              <div
                key={item.id}
                className="bg-white/15 backdrop-blur-sm md:p-7 p-5 rounded-xl border border-white/10"
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay="200"
              >
                <div className="flex items-center gap-6 flex-wrap xl:flex-nowrap">
                  {/* Image first for all items */}
                  <div className="md:shrink-0">
                    <div className="ltr:xl:border-r rtl:xl:border-l border-white/30 pe-5 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        className="rounded-xl w-120 h-50 object-cover"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="ltr:xl:border-r rtl:xl:border-l border-white/30 pe-5">
                      <div className="flex items-center md:gap-5 mb-5 flex-wrap gap-3">
                        <div className="flex gap-2 items-center text-gray-300">
                          <RiCalendarEventFill />
                          <p>{item.date}</p>
                        </div>
                        <div className="flex gap-2 items-center text-gray-300">
                          <RiTimeFill />
                          <p>{item.time}</p>
                        </div>
                      </div>
                      <h3 className="uppercase md:text-4xl mb-4">
                        <a href="#!">{item.title}</a>
                      </h3>
                      <p className="text-gray-300 text-[20px]">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0">
                    <a
                      href="#!"
                      className="relative px-7 py-3 font-semibold text-xl text-white group inline-flex items-center gap-3"
                    >
                      {/* <!-- Background layers --> */}
                      <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-[#11112c] group-hover:bg-[#1a1a50] group-hover:skew-x-12"></span>
                      <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-[#1a1a50] group-hover:bg-[#11112c] group-hover:-skew-x-12"></span>

                      {/* <!-- Decorative corners --> */}
                      <span className="absolute bottom-0 left-0 hidden w-12 h-24 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-[#222240] -rotate-12"></span>
                      <span className="absolute bottom-0 right-0 hidden w-12 h-24 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-[#33335a] -rotate-12"></span>

                      {/* <!-- Text --> */}
                      <span
                        className="relative flex items-center gap-2"
                        dir="ltr"
                      >
                        Book Ticket Now <RiExpandRightLine />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    // sechudel section end
  );
}
