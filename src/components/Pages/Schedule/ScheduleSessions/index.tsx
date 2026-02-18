"use client";

import { useState } from "react";
import Image from "next/image";
import {
  RiArrowRightUpLongLine,
  RiMapPinLine,
  RiTimeLine,
  RiUserVoiceLine,
} from "@remixicon/react";

// Import schedule images
import schedule1 from "../../../../assets/images/business/business-schedule2.jpg";
import schedule2 from "../../../../assets/images/business/business-schedule4.jpg";
import schedule3 from "../../../../assets/images/freelancer/freelancer-schedule7.jpg";
import schedule4 from "../../../../assets/images/music/music-schedule-bg.jpg";
import schedule5 from "../../../../assets/images/freelancer/freelancer-gallery6.jpg";
import schedule6 from "../../../../assets/images/business/business-gallery-6.jpg";
import schedule7 from "../../../../assets/images/freelancer/freelancer-blog-1.jpg";
import schedule8 from "../../../../assets/images/business/business-gallery-5.jpg";
import schedule9 from "../../../../assets/images/medical/medical-schedule-2.jpg";

interface ScheduleDay {
  day: string;
  date: string;
}

interface ScheduleItem {
  number: string;
  title: string;
  description: string;
  time: string;
  location: string;
  //   type: string;
  image: typeof schedule1;
  badge: string;
}

const scheduleDays: ScheduleDay[] = [
  { day: "Day 01", date: "November 10, 2026" },
  { day: "Day 02", date: "November 11, 2026" },
  { day: "Day 03", date: "November 12, 2026" },
];

// Day 1 Schedule Items
const day1Items: ScheduleItem[] = [
  {
    number: "01",
    title: "Opening Ceremony & Global Conference Inauguration",
    description:
      "A grand opening session introducing the conference vision,keynote speakers, and the agenda for an impactful multi-day event.",
    time: "09:00 AM – 10:30 AM",
    location: "Main Convention Hall",
    image: schedule1,
    badge: "Day 01 · Opening Ceremony",
  },
  {
    number: "02",
    title: "Industry Panels, Innovation Talks & Expert Discussions",
    description:
      "Engaging panel discussions with industry leaders covering innovation,emerging trends, and real-world conference insights.",
    time: "11:00 AM – 02:30 PM",
    location: "Panel Discussion Hall",
    image: schedule2,
    badge: "Day 01 · Innovation Panels",
  },
  {
    number: "03",
    title: "Networking Sessions, Workshops & Closing Ceremony",
    description:
      "Interactive workshops, valuable networking opportunities,and a memorable closing ceremony wrapping up the conference.",
    time: "03:00 PM – 06:00 PM",
    location: "Networking & Workshop Zone",
    image: schedule3,
    badge: "Day 01 · Conference Finale",
  },
];

// Day 2 Schedule Items
const day2Items: ScheduleItem[] = [
  {
    number: "01",
    title: "Welcome & Opening: Kickstart the Music Festival",
    description:
      " Start the festival with an energetic welcome, introducing the lineup, main stage highlights, and today’s music sessions.",
    time: "09:00 AM – 10:30 AM",
    location: "Main Stage",
    image: schedule4,
    badge: "Day 02 · Festival Opening",
  },
  {
    number: "02",
    title: " Expert Sessions & Panel Discussions Highlights",
    description:
      " Dive deep into industry expertise with engaging panels, knowledge sharing, and insights from domain leaders.",
    time: "10:30 AM – 01:30 PM",
    location: " Conference Hall B",
    image: schedule5,
    badge: "Day 02 · Interactive Workshops",
  },
  {
    number: "03",
    title: " Closing Remarks & Networking Session Highlights",
    description:
      " Wrap up the day with closing thoughts, key takeaways, and opportunities to network with peers and speakers.",
    time: "02:00 PM – 05:00 PM",
    location: "Networking Lounge",
    image: schedule6,
    badge: "Day 02 · Closing & Networking",
  },
];

// Day 3 Schedule Items
const day3Items: ScheduleItem[] = [
  {
    number: "01",
    title: "Industry Trends, Insights & Strategies Panel",
    description:
      "Explore the latest trends and developments across the industry with expert panelists sharing key insights and predictions.",
    time: "10:30 AM – 12:00 PM",
    location: "Conference Hall B",
    image: schedule7,
    badge: "Day 03 · Panel Discussion",
  },
  {
    number: "02",
    title: "Innovation, Technology & Leadership Talks",
    description:
      "Gain insights into the latest trends in innovation and technology through interactive talks and demonstrations.",
    time: "10:00 AM – 12:00 PM",
    location: "Conference Hall A",
    image: schedule8,
    badge: "Day 03 · Expert Panels",
  },
  {
    number: "03",
    title: "Evening Networking & Clinical Case Discussions",
    description:
      " Wrap up the day with interactive clinical case discussions led by medical experts and network with fellow professionals.",
    time: "05:00 PM – 07:00 PM",
    location: "Conference Hall C",
    image: schedule9,
    badge: "Day 03 · Clinical Session",
  },
];

export default function ScheduleSessions() {
  const [activeTab, setActiveTab] = useState(0);

  const getCurrentItems = () => {
    switch (activeTab) {
      case 0:
        return day1Items;
      case 1:
        return day2Items;
      case 2:
        return day3Items;
      default:
        return day1Items;
    }
  };

  return (
    <section className="lg:py-30 py-20 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 lg:col-span-5">
            <p
              className="mb-2 font-medium uppercase tracking-[1px]"
              data-sal="slide-right"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              // Schedule Highlights
            </p>
            <h2
              className="font-bold md:text-5xl leading-snug"
              data-sal="slide-right"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              Key Sessions and Workshops in 2026
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-end-13">
            <nav
              aria-label="Conference Days"
              className="border-t border-b border-black/40"
              data-sal="slide-left"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              <ul
                role="tablist"
                className="flex gap-6 justify-center flex-wrap"
              >
                {scheduleDays.map((day, index) => (
                  <li
                    key={index}
                    role="presentation"
                    className={index === 1 ? "relative" : ""}
                  >
                    {index === 1 && (
                      <span className="absolute inset-0 border-l border-r border-black/40 dark:border-white -skew-x-12 -z-10 hidden md:block"></span>
                    )}
                    <button
                      role="tab"
                      aria-selected={activeTab === index}
                      aria-controls={`panel-${index + 1}`}
                      id={`tab-${index + 1}`}
                      onClick={() => setActiveTab(index)}
                      className={`tab-btn ${index === 1 ? "p-4 px-6" : "p-4"} text-center transition-all font-semibold ${
                        activeTab === index
                          ? "text-black dark:text-white"
                          : "text-gray-500"
                      }`}
                    >
                      <h2 className="mb-2">{day.day}</h2>
                      <p className="text-gray-700 dark:text-gray-400">
                        {day.date}
                      </p>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Tab Contents */}
        <div className="mt-16">
          <div
            role="tabpanel"
            id={`panel-${activeTab + 1}`}
            aria-labelledby={`tab-${activeTab + 1}`}
            className="tab-panel space-y-6"
          >
            {getCurrentItems().map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-12 gap-6 border border-black/40 dark:border-white/40 rounded-2xl overflow-hidden"
                data-sal={index % 2 === 0 ? "slide-right" : "slide-left"}
                data-sal-duration="800"
                data-sal-delay="200"
              >
                {index % 2 === 0 ? (
                  <>
                    {/* Text first for even items (01, 03) */}
                    <div className="col-span-12 lg:col-span-7">
                      <div className="p-7">
                        <div className="flex items-center justify-between gap-3 mb-6">
                          <p className="text-4xl font-bold">{item.number}</p>
                          <a
                            href="#!"
                            className="relative group size-15 rounded-full inline-flex items-center justify-center overflow-hidden"
                          >
                            <span className="absolute top-full left-0 w-full h-full bg-[#f2c944] transition-all duration-500 group-hover:top-0"></span>
                            <RiArrowRightUpLongLine className="text-2xl transition-transform duration-500 group-hover:rotate-y-360 rtl:scale-x-[-1]" />
                          </a>
                        </div>

                        <h3 className="md:text-4xl max-w-2xl mb-4">
                          <a
                            href="#!"
                            className="hover:underline transition duration-300"
                          >
                            {item.title}
                          </a>
                        </h3>

                        <p className="md:text-[26px] text-gray-700 mb-6 dark:text-gray-400">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-3">
                          <p className="bg-[#F8EBFF] rounded-full px-4 py-2 flex items-center gap-2 text-black">
                            <RiTimeLine />
                            {item.time}
                          </p>
                          <p className="bg-[#FFFAD6] rounded-full px-4 py-2 flex items-center gap-2 text-black">
                            <RiMapPinLine />
                            {item.location}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Image second */}
                    <div className="col-span-12 lg:col-span-5">
                      <div className="2xl:h-100 relative overflow-hidden group h-full">
                        <span className="before:content-[''] before:absolute before:top-0 before:right-0 before:bg-white before:opacity-70 before:w-0 before:h-0 before:z-10 before:transition-all before:duration-1300 group-hover:before:w-full group-hover:before:h-full group-hover:before:opacity-0"></span>
                        <span className="after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-white after:opacity-70 after:w-0 after:h-0 after:z-10 after:transition-all after:duration-1300 group-hover:after:w-full group-hover:after:h-full group-hover:after:opacity-0"></span>
                        <Image
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute bottom-6 ltr:left-6 rtl:right-6 bg-white/90 backdrop-blur px-5 py-2 rounded-full text-sm font-semibold text-black w-fit whitespace-nowrap">
                          {item.badge}
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Image first for odd items (02) */}
                    <div className="col-span-12 lg:col-span-5">
                      <div className="2xl:h-100 relative overflow-hidden group h-full">
                        <span className="before:content-[''] before:absolute before:top-0 before:right-0 before:bg-white before:opacity-70 before:w-0 before:h-0 before:z-10 before:transition-all before:duration-1300 group-hover:before:w-full group-hover:before:h-full group-hover:before:opacity-0"></span>
                        <span className="after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-white after:opacity-70 after:w-0 after:h-0 after:z-10 after:transition-all after:duration-1300 group-hover:after:w-full group-hover:after:h-full group-hover:after:opacity-0"></span>
                        <Image
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute bottom-6 ltr:left-6 rtl:right-6 bg-white/90 backdrop-blur px-5 py-2 rounded-full text-sm font-semibold text-black w-fit whitespace-nowrap">
                          {item.badge}
                        </span>
                      </div>
                    </div>

                    {/* Text second */}
                    <div className="col-span-12 lg:col-span-7">
                      <div className="p-7">
                        <div className="flex items-center justify-between gap-3 mb-6">
                          <p className="text-4xl font-bold">{item.number}</p>
                          <a
                            href="#!"
                            className="relative group size-15 rounded-full inline-flex items-center justify-center overflow-hidden"
                          >
                            <span className="absolute top-full left-0 w-full h-full bg-[#f2c944] transition-all duration-500 group-hover:top-0"></span>
                            <RiArrowRightUpLongLine className="text-2xl transition-transform duration-500 group-hover:rotate-y-360 rtl:scale-x-[-1]" />
                          </a>
                        </div>

                        <h3 className="md:text-4xl max-w-2xl mb-4">
                          <a
                            href="#!"
                            className="hover:underline transition duration-300"
                          >
                            {item.title}
                          </a>
                        </h3>

                        <p className="md:text-[26px] text-gray-700 mb-6 dark:text-gray-400">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-3">
                          <p className="bg-[#F8EBFF] rounded-full px-4 py-2 flex items-center gap-2 text-black">
                            <RiTimeLine />
                            {item.time}
                          </p>
                          <p className="bg-[#FFFAD6] rounded-full px-4 py-2 flex items-center gap-2 text-black">
                            <RiMapPinLine />
                            {item.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
