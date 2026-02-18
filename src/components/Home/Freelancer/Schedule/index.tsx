"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiTimeLine } from "@remixicon/react";

// Import schedule images
import schedule1 from "../../../../assets/images/freelancer/freelancer-schedule1.jpg";
import schedule2 from "../../../../assets/images/freelancer/freelancer-schedule2.jpg";
import schedule3 from "../../../../assets/images/freelancer/freelancer-schedule3.jpg";
import schedule4 from "../../../../assets/images/freelancer/freelancer-schedule4.jpg";
import schedule5 from "../../../../assets/images/freelancer/freelancer-schedule5.jpg";
import schedule6 from "../../../../assets/images/freelancer/freelancer-schedule6.jpg";
import schedule7 from "../../../../assets/images/freelancer/freelancer-schedule7.jpg";
import schedule8 from "../../../../assets/images/freelancer/freelancer-schedule8.jpg";
import schedule9 from "../../../../assets/images/freelancer/freelancer-schedule9.jpg";

// Import avatar images
import user01 from "../../../../assets/images/avatar/user-01.jpg";
import user02 from "../../../../assets/images/avatar/user-02.jpg";
import user03 from "../../../../assets/images/avatar/user-03.jpg";
import user04 from "../../../../assets/images/avatar/user-04.jpg";
import user05 from "../../../../assets/images/avatar/user-05.jpg";
import user06 from "../../../../assets/images/avatar/user-06.jpg";
import user07 from "../../../../assets/images/avatar/user-07.jpg";
import user08 from "../../../../assets/images/avatar/user-08.jpg";
import user09 from "../../../../assets/images/avatar/user-09.jpg";
import user10 from "../../../../assets/images/avatar/user-10.jpg";
import user11 from "../../../../assets/images/avatar/user-11.jpg";
import user12 from "../../../../assets/images/avatar/user-12.jpg";
import user13 from "../../../../assets/images/avatar/user-13.jpg";
import user14 from "../../../../assets/images/avatar/user-14.jpg";

interface Speaker {
  avatar: typeof user01;
  name: string;
  role: string;
}

interface ScheduleItem {
  image: typeof schedule1;
  time: string;
  title: string;
  speakers: Speaker[];
  description: string;
  bgColor: string;
  bgColorDark: string;
  animation: "slide-right" | "slide-left";
}

interface DaySchedule {
  day: string;
  date: string;
  items: ScheduleItem[];
}

const scheduleData: DaySchedule[] = [
  {
    day: "Day 01",
    date: "March 10, 2026",
    items: [
      {
        image: schedule1,
        time: "10:00 AM – 11:30 AM",
        title: "BUILDING A FUTURE-READY BRAND FOR THE DIGITAL GENERATION",
        speakers: [
          { avatar: user02, name: "SARAH JOHNSON", role: "Brand Strategist" },
          { avatar: user03, name: "DAVID CLARK", role: "UX Specialist" },
        ],
        description:
          "Explore new frameworks and tools shaping the next era of digital branding.",
        bgColor: "#fff3ee",
        bgColorDark: "#933913",
        animation: "slide-right",
      },
      {
        image: schedule2,
        time: "12:00 PM – 01:15 PM",
        title: "THE POWER OF COLLABORATION FOR FREELANCERS & CREATORS",
        speakers: [
          { avatar: user01, name: "LUCY WARD", role: "Creative Director" },
          { avatar: user04, name: "KEVIN BLAKE", role: "Marketing Expert" },
        ],
        description:
          "How partnerships and networking accelerate success for modern freelancers.",
        bgColor: "#fffad6",
        bgColorDark: "#7c6f0a",
        animation: "slide-left",
      },
      {
        image: schedule3,
        time: "02:00 PM – 03:30 PM",
        title: "DESIGN THINKING & THE EVOLUTION OF MODERN WEB EXPERIENCES",
        speakers: [
          { avatar: user05, name: "MICHAEL ADAMS", role: "Product Designer" },
          { avatar: user06, name: "EMMA BROWNE", role: "Frontend Engineer" },
        ],
        description:
          "A deep dive into usability, micro-interactions, and digital experience innovation.",
        bgColor: "#eef4ff",
        bgColorDark: "#335dab",
        animation: "slide-right",
      },
    ],
  },
  {
    day: "Day 02",
    date: "March 11, 2026",
    items: [
      {
        image: schedule4,
        time: "12:00 PM – 1:15 PM",
        title: "MASTERING CLIENT COMMUNICATION IN A REMOTE-FIRST WORLD",
        speakers: [
          { avatar: user07, name: "EMILY CARTER", role: "Leadership Coach" },
          { avatar: user05, name: "MICHAEL REED", role: "Innovation Lead" },
        ],
        description:
          "Learn how to communicate clearly, professionally, and efficiently in distributed teams.",
        bgColor: "#fff3ee",
        bgColorDark: "#933913",
        animation: "slide-right",
      },
      {
        image: schedule5,
        time: "2:00 PM – 3:30 PM",
        title: "THE FUTURE OF AI TOOLS FOR FREELANCERS & CREATORS",
        speakers: [
          { avatar: user10, name: "JULIA WATERS", role: "AI Researcher" },
          { avatar: user08, name: "ROBERT MILES", role: "Tech Innovator" },
        ],
        description:
          "Discover the newest AI tools reshaping productivity, design, and digital creativity.",
        bgColor: "#fffad6",
        bgColorDark: "#7c6f0a",
        animation: "slide-left",
      },
    ],
  },
  {
    day: "Day 03",
    date: "March 12, 2026",
    items: [
      {
        image: schedule6,
        time: "4:00 PM – 5:20 PM",
        title: "BUILDING A HIGH-INCOME FREELANCE BUSINESS FROM SCRATCH",
        speakers: [
          { avatar: user08, name: "LUCAS MOORE", role: "Entrepreneur" },
          { avatar: user09, name: "ANNA RUSSEL", role: "Marketing Mentor" },
        ],
        description:
          "Step-by-step breakdown of building authority, pricing services, and scaling income.",
        bgColor: "#fff3ee",
        bgColorDark: "#933913",
        animation: "slide-right",
      },
      {
        image: schedule7,
        time: "6:00 PM – 7:30 PM",
        title: "GROWING WITH COMMUNITY: THE POWER OF NETWORKING & COLLABS",
        speakers: [
          { avatar: user10, name: "MEGHNA FORD", role: "Community Builder" },
          { avatar: user11, name: "ADAM PIERCE", role: "Collab Manager" },
        ],
        description:
          "Unlock high-value partnerships and collaborations to boost your freelance growth.",
        bgColor: "#fffad6",
        bgColorDark: "#7c6f0a",
        animation: "slide-left",
      },
      {
        image: schedule9,
        time: "9:00 AM – 10:00 AM",
        title: "CRAFTING HIGH-CONVERTING PORTFOLIOS THAT SELL YOUR SKILLS",
        speakers: [
          { avatar: user12, name: "CHRIS MARTIN", role: "Creative Director" },
          { avatar: user13, name: "NATASHA RAY", role: "Visual Designer" },
        ],
        description:
          "A deep dive into designing a portfolio that attracts clients instantly.",
        bgColor: "#eef4ff",
        bgColorDark: "#335dab",
        animation: "slide-right",
      },
    ],
  },
  {
    day: "Day 04",
    date: "March 13, 2026",
    items: [
      {
        image: schedule8,
        time: "1:00 PM – 2:20 PM",
        title: "ADVANCED SOCIAL MEDIA STRATEGIES FOR FREELANCERS",
        speakers: [
          { avatar: user14, name: "JENNY WILSON", role: "Social Media Expert" },
          { avatar: user09, name: "THOMAS KENT", role: "Content Strategist" },
        ],
        description:
          "Learn how to build reach, authority, and inbound client flow through social growth.",
        bgColor: "#fff3ee",
        bgColorDark: "#933913",
        animation: "slide-right",
      },
    ],
  },
];

export default function ScheduleSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="xl:pt-60 xl:pb-30 lg:py-30 py-20 overflow-hidden">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2
            className="xl:text-6xl md:text-5xl uppercase text-center font-anton font-medium tracking-[2px] leading-snug"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="200"
          >
            YOUR ROADMAP TO THE FREELANCER MEETUP EXPERIENCE
          </h2>
        </div>

        <nav
          aria-label="Tabs"
          data-sal="slide-up"
          data-sal-duration="800"
          data-sal-delay="300"
        >
          <ul role="tablist" className="flex gap-6 justify-center flex-wrap">
            {scheduleData.map((day, index) => (
              <li key={index} role="presentation">
                <button
                  role="tab"
                  aria-selected={activeTab === index}
                  id={`tab-${index + 1}`}
                  onClick={() => setActiveTab(index)}
                  className={`tab-btn border px-12 p-5 rounded-md transition-all ${
                    activeTab === index
                      ? "bg-[#a0ffc2] border-[#a0ffc2] text-black" // Active: Green background, Black text
                      : "bg-transparent border-black/10 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:dark:text-white" // Inactive: Dimmed text, White on hover
                  }`}
                >
                  {/* Use specific dark:text-black if active to override global text colors */}
                  <h6
                    className={`mb-1 text-xl uppercase font-anton font-medium tracking-[1px] leading-snug ${
                      activeTab === index
                        ? "text-black"
                        : "text-black dark:text-white"
                    }`}
                  >
                    {day.day}
                  </h6>
                  <p
                    className={`${activeTab === index ? "text-black/70" : "text-gray-600 dark:text-gray-400"}`}
                  >
                    {day.date}
                  </p>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Tab Content */}
        <div className="lg:mt-15 mt-5">
          {scheduleData.map((day, dayIndex) => (
            <div
              key={dayIndex}
              id={`panel-${dayIndex + 1}`}
              role="tabpanel"
              aria-labelledby={`tab-${dayIndex + 1}`}
              className={`space-y-6 ${activeTab !== dayIndex ? "hidden" : ""}`}
            >
              {day.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="p-7 rounded-xl flex lg:gap-15 gap-6 items-center flex-wrap lg:flex-nowrap relative transition-colors duration-300 bg-[var(--bg-light)] dark:bg-[var(--bg-dark)]"
                  style={
                    {
                      "--bg-light": item.bgColor,
                      "--bg-dark": item.bgColorDark,
                    } as React.CSSProperties
                  }
                  data-sal={item.animation}
                  data-sal-duration="800"
                  data-sal-delay="200"
                >
                  {/* Decorative cut-out circles */}
                  <span className="size-10 absolute top-1/2 -translate-y-1/2 -left-5 bg-white dark:bg-black rounded-full z-10 flex" />
                  <span className="size-10 absolute top-1/2 -translate-y-1/2 -right-5 bg-white dark:bg-black rounded-full z-10 flex" />

                  {/* Image Container */}
                  <div className="lg:w-80 h-60 w-full shrink-0 relative overflow-hidden rounded-xl">
                    <Image
                      src={item.image.src}
                      alt=""
                      width={item.image.width}
                      height={item.image.height}
                      className="w-full h-full object-cover rounded-xl hover:scale-[1.1] transition-all duration-400"
                    />
                    <span className="absolute bg-[#a0ffc2] rounded-full p-1 px-5 bottom-0 left-0 m-2 text-gray-800 text-sm flex items-center gap-1 font-medium">
                      <RiTimeLine />
                      {item.time}
                    </span>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <div className="max-w-xl">
                      <h2>
                        <Link
                          href="#!"
                          className="uppercase font-anton font-medium leading-snug tracking-[0.7px] text-black dark:text-white"
                        >
                          {item.title}
                        </Link>
                      </h2>
                    </div>

                    <div className="flex items-center lg:gap-10 gap-6 border-t mt-7 pt-7 border-dashed border-black/20 dark:border-white/30 flex-wrap md:flex-nowrap">
                      <div className="flex items-center lg:gap-8 gap-4 md:shrink-0 flex-wrap">
                        {item.speakers.map((speaker, speakerIndex) => (
                          <div
                            key={speakerIndex}
                            className="flex gap-2 items-center"
                          >
                            <Image
                              src={speaker.avatar.src}
                              alt={speaker.name}
                              width={speaker.avatar.width}
                              height={speaker.avatar.height}
                              className="size-12 rounded-full object-cover border-2 border-white/20"
                            />
                            <div>
                              <h6 className="font-anton font-medium tracking-[1px] uppercase text-black dark:text-white">
                                {speaker.name}
                              </h6>
                              <p className="text-gray-700 dark:text-white/70 text-sm">
                                {speaker.role}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="border-l h-10 border-black/20 dark:border-white/20 hidden md:block" />
                      <p className="text-gray-700 dark:text-white/80 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
