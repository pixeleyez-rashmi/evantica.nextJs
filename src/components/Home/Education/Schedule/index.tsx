"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiTimeLine, RiArrowRightLongFill } from "@remixicon/react";

import educationTitleShape from "../../../../assets/images/education/education-title-shape.jpg";
import educationSchedule1 from "../../../../assets/images/education/education-schedule-1.jpg";
import educationSchedule2 from "../../../../assets/images/education/education-schedule-2.jpg";
import educationSchedule3 from "../../../../assets/images/education/education-schedule-3.jpg";
import educationSchedule4 from "../../../../assets/images/education/education-schedule-4.jpg";

interface ScheduleItem {
  id: number;
  title: string;
  day: string;
  bgColor: string;
  animation: "slide-right" | "slide-left";
  image: typeof educationSchedule1;
  description: string;
  time: string;
  date: string;
}

const scheduleItems: ScheduleItem[] = [
  {
    id: 1,
    title: "Global EdTech Innovations",
    day: "Day 01",
    bgColor: "#ff7f49",
    animation: "slide-right",
    image: educationSchedule1,
    description:
      "Kick off with a deep dive into the latest AI-powered learning tools and interactive classroom tech. Experts share insights on the future of education. Don't miss hands-on demos and live Q&A sessions with top innovators.",
    time: "10.00am - 11.30am",
    date: "Dec 15, 2026",
  },
  {
    id: 2,
    title: "Next-Gen Learning Strategies",
    day: "Day 02",
    bgColor: "#a095ff",
    animation: "slide-left",
    image: educationSchedule2,
    description:
      "Explore gamified learning, virtual labs, and AI-driven assessment techniques to enhance student engagement and retention. Gain insights from leading educators on implementing these strategies effectively.",
    time: "11.45am - 1.00pm",
    date: "Dec 16, 2026",
  },
  {
    id: 3,
    title: "AI in Classroom Management",
    day: "Day 03",
    bgColor: "#a9fb50",
    animation: "slide-right",
    image: educationSchedule3,
    description:
      "Learn how AI tools optimize schedules, track student progress, and provide personalized learning paths for diverse classrooms. Attend live workshops and case studies from schools successfully using AI systems.",
    time: "2.00pm - 3.30pm",
    date: "Dec 17, 2026",
  },
  {
    id: 4,
    title: "Future of EdTech Panel",
    day: "Day 04",
    bgColor: "#ffca28",
    animation: "slide-left",
    image: educationSchedule4,
    description:
      "Join a discussion with EdTech leaders on emerging trends, innovations, and the integration of AI in global education systems. Get actionable insights to take back and implement in your own institution.",
    time: "4.00pm - 5.30pm",
    date: "Dec 18, 2026",
  },
];

export default function ScheduleSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    // Track first interaction to disable animation
    if (!expandedItems.includes(id)) {
      setExpandedItems((prev) => [...prev, id]);
    }

    setOpenItems((prev) => {
      // If the item is already open, close it
      if (prev.includes(id)) {
        return [];
      }
      // Otherwise, open it and close all others (only one can be open at a time)
      return [id];
    });
  };

  return (
    <section className="lg:py-30 py-20 bg-[#481938] overflow-hidden">
      <div className="container">
        <div className="max-w-6xl mx-auto text-center mb-14 text-white">
          <div
            className="relative inline-block mb-7"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="200"
          >
            <h2 className="lg:text-7xl md:text-5xl font-bold">
              Education Conference Agenda
            </h2>
            <Image
              src={educationTitleShape.src}
              alt=""
              width={educationTitleShape.width}
              height={educationTitleShape.height}
              className="absolute -top-7 -right-24 invert hidden xl:block dark:invert"
            />
          </div>
          <p
            className="text-gray-300 text-[22px]"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="500"
          >
            5,000+ educators join a multi-day global education conference with
            keynotes, panels, and workshops, global education conference with
            expert talks, panels, and hands-on workshops.
          </p>
        </div>
        <div className="space-y-3">
          {scheduleItems.map((item) => {
            const isOpen = openItems.includes(item.id);
            const hasBeenExpanded = expandedItems.includes(item.id);
            return (
              <div
                key={item.id}
                className={`border p-7 border-b-7 border-r-6 border-white ${
                  isOpen
                    ? "rounded-[40px] overflow-visible"
                    : "rounded-full overflow-hidden"
                }`}
                style={{ backgroundColor: item.bgColor }}
                {...(!isOpen &&
                  !hasBeenExpanded && {
                    "data-sal": item.animation,
                    "data-sal-duration": "800",
                    "data-sal-delay": "200",
                  })}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="accordion-header w-full px-5 py-3 flex flex-wrap md:flex-nowrap md:text-start gap-4 justify-center md:justify-between items-center focus:outline-none text-black"
                >
                  <h2 className="font-bold text-4xl">{item.title}</h2>
                  <h3 className="text-black uppercase inline-block bg-white rounded-full px-5 py-2 border-b-4 border-r-4 shrink-0">
                    {item.day}
                  </h3>
                </button>
                <div
                  className={`accordion-content max-h-0 h-full overflow-hidden md:px-5 px-3 text-gray-700 transition-all duration-300 ${
                    isOpen ? "max-h-[240px]" : ""
                  }`}
                >
                  <div className="flex items-center justify-center md:justify-between gap-8 py-5 flex-wrap lg:flex-nowrap">
                    <div className="size-50 shrink-0">
                      <Image
                        src={item.image.src}
                        alt={item.title}
                        width={item.image.width}
                        height={item.image.height}
                        className="rounded-xl w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-gray-800">{item.description}</p>
                      <div className="flex items-center gap-5 mt-5 flex-wrap justify-center md:justify-start">
                        <p className="bg-white rounded-xl px-3 py-1 text-black">
                          <RiTimeLine className="inline" /> {item.time}
                        </p>
                        <p className="bg-white rounded-xl px-3 py-1 text-black">
                          <RiTimeLine className="inline" /> {item.date}
                        </p>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <Link
                        href="#!"
                        dir="ltr"
                        className="btn uppercase text-xl font-bold border bg-white text-black border-black rounded-full border-b-5 px-8 py-4 group relative overflow-hidden z-10"
                      >
                        <span className="absolute top-1/2 left-1/2 w-0 h-0 bg-[#f5e900] rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:w-[562px] group-hover:h-[562px] -z-10"></span>
                        <span>
                          Get Your Ticket
                          <RiArrowRightLongFill className="inline ms-1" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
