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
import schedule1 from "../../../../assets/images/medical/medical-schedule-1.jpg";
import schedule2 from "../../../../assets/images/medical/medical-schedule-2.jpg";
import schedule3 from "../../../../assets/images/medical/medical-schedule-3.jpg";
import schedule4 from "../../../../assets/images/medical/medical-schedule-4.jpg";
import schedule5 from "../../../../assets/images/medical/medical-schedule-5.jpg";
import schedule6 from "../../../../assets/images/medical/medical-schedule-6.jpg";
import schedule7 from "../../../../assets/images/medical/medical-schedule-7.jpg";
import schedule8 from "../../../../assets/images/medical/medical-schedule-8.jpg";
import schedule9 from "../../../../assets/images/medical/medical-schedule-9.jpg";

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
  type: string;
  image: typeof schedule1 | typeof schedule2 | typeof schedule3;
  badge: string;
}

const scheduleDays: ScheduleDay[] = [
  {
    day: "Day 01",
    date: "November 10, 2026",
  },
  {
    day: "Day 02",
    date: "November 11, 2026",
  },
  {
    day: "Day 03",
    date: "November 12, 2026",
  },
];

// Day 1 Schedule Items
const day1Items: ScheduleItem[] = [
  {
    number: "01",
    title: "Lifestyle Medicine & Preventive Care for Long-Term Wellness",
    description:
      "Practical insights into sleep, physical activity, stress management, and preventive strategies for sustainable health outcomes.",
    time: "09:30 AM – 04:30 PM",
    location: "Wellness Auditorium",
    type: "Workshops & Expert Talks",
    image: schedule1,
    badge: "Day 01 · Preventive Health",
  },
  {
    number: "02",
    title: "Nutrition, Metabolic Health & Disease Prevention Strategies",
    description:
      "Exploring the role of balanced nutrition, metabolic regulation, and evidence-based interventions in reducing chronic disease risks.",
    time: "10:00 AM – 05:00 PM",
    location: "Clinical Research Hall",
    type: "Keynotes & Case Discussions",
    image: schedule2,
    badge: "Day 01 · Medical Innovation",
  },
  {
    number: "03",
    title: "Integrative Mental Health, Stress Resilience & Mind–Body Care",
    description:
      "Addressing mental well-being through integrative therapies, stress resilience techniques, and holistic mind–body interventions.",
    time: "09:00 AM – 03:30 PM",
    location: "Mindfulness & Therapy Wing",
    type: "Panels & Guided Sessions",
    image: schedule3,
    badge: "Day 01 · Mental Wellness",
  },
];

// Day 2 Schedule Items
const day2Items: ScheduleItem[] = [
  {
    number: "01",
    title: "Advanced Cardiovascular Health & Preventive Strategies",
    description:
      "Focusing on heart health, cardiovascular risk reduction, and latest preventive care protocols.",
    time: "09:00 AM – 04:00 PM",
    location: "Cardiology Hall",
    type: "Keynotes & Workshops",
    image: schedule4,
    badge: "Day 02 · cardiovascular Health",
  },
  {
    number: "02",
    title: "Neuroscience, Cognitive Wellness & Brain Optimization",
    description:
      "Exploring the latest in brain health, cognitive performance, and interventions to enhance mental function.",
    time: "10:30 AM – 05:00 PM",
    location: "Neurology Auditorium",
    type: "Panels & Case Studies",
    image: schedule5,
    badge: "Day 02 · Neurology Health",
  },
  {
    number: "03",
    title: "Innovative Approaches in Immunology & Preventive Medicine",
    description:
      "Discussing emerging preventive strategies, immunology breakthroughs, and their impact on public health.",
    time: "09:30 AM – 03:30 PM",
    location: "Immunology Hall",
    type: "Workshops & Expert Sessions",
    image: schedule6,
    badge: "Day 02 · Immunology & preventive Care",
  },
];

// Day 3 Schedule Items
const day3Items: ScheduleItem[] = [
  {
    number: "01",
    title: "Pediatric Care & Child Development Excellence",
    description:
      "Insights into child health, early detection of disorders, and proactive preventive measures.",
    time: "09:00 AM – 03:00 PM",
    location: "Pediatric Center Hall",
    type: "Workshops & Panels",
    image: schedule7,
    badge: "Day 03 · Pediatric Health",
  },
  {
    number: "02",
    title: "Orthopedic Surgery & Rehabilitation Techniques",
    description:
      "Advancements in orthopedic surgery, rehabilitation, and patient-centered care strategies.",
    time: "10:00 AM – 04:30 PM",
    location: "Orthopedic Wing",
    type: "Keynotes & Case Presentations",
    image: schedule9,
    badge: "Day 03 · Orthopedic Innovation",
  },
  {
    number: "03",
    title: "Public Health & Community Wellness Initiatives",
    description:
      "Strategies to improve community health, preventive care programs, and public wellness campaigns.",
    time: "09:30 AM – 03:00 PM",
    location: "Public Health Hall",
    type: "Panels & Interactive Sessions",
    image: schedule8,
    badge: "Day 03 · Public Health",
  },
];

export default function MedicalScheduleSection() {
  const [activeTab, setActiveTab] = useState(0);

  // Get current day's items
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
    <>
      {/* Schedule Section start */}
      <section className="2xl:mx-10 mx-2 lg:mx-5 mt-8 space-y-6 overflow-hidden">
        <div className="flex items-center justify-between gap-4 flex-wrap mb-12">
          <h2
            className="font-chivo md:text-6xl leading-snug max-w-3xl"
            data-sal="slide-right"
            data-sal-duration="800"
            data-sal-delay="200"
          >
            Official Conference Schedule
          </h2>
          <nav
            className="border-t border-b border-black/40"
            aria-label="Conference Days"
            data-sal="slide-left"
            data-sal-duration="800"
            data-sal-delay="200"
          >
            <ul role="tablist" className="flex gap-6 justify-center flex-wrap">
              {scheduleDays.map((day, index) => (
                <li
                  key={index}
                  role="presentation"
                  className={`relative ${index !== scheduleDays.length - 1 ? "pr-3" : ""}`}
                >
                  {index !== scheduleDays.length - 1 && (
                    <div className="absolute right-0 top-1/2 h-26 w-px transform -translate-y-1/2 -skew-x-12 border-r border-black/40"></div>
                  )}
                  <button
                    role="tab"
                    aria-selected={activeTab === index}
                    aria-controls={`panel-${index + 1}`}
                    id={`tab-${index + 1}`}
                    onClick={() => setActiveTab(index)}
                    className={`tab-btn p-4 text-center transition-all font-semibold  ${
                      activeTab === index
                        ? ""
                        : "text-gray-500 dark:text-gray-200"
                    }`}
                  >
                    <h2 className="font-chivo mb-2">{day.day}</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                      {day.date}
                    </p>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* tab content start */}
        <div>
          <div
            role="tabpanel"
            id={`panel-${activeTab + 1}`}
            aria-labelledby={`tab-${activeTab + 1}`}
            className="tab-panel space-y-6"
          >
            {getCurrentItems().map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-12 gap-6 2xl:items-center bg-[#F2F3FC] dark:bg-[#15182F] rounded-2xl overflow-hidden"
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay="200"
              >
                {/* Conditionally render image and text based on index */}
                {index % 2 === 1 ? (
                  <>
                    {/* Image first for odd index items (02, 04, etc.) */}
                    <div className="col-span-12 lg:col-span-5">
                      <div className="2xl:h-100 relative overflow-hidden group h-full">
                        <span className="before:content-[''] before:absolute before:top-0 before:right-0 before:bg-white before:opacity-70 before:w-0 before:h-0 before:z-10 before:transition-all before:duration-1300 group-hover:before:w-full group-hover:before:h-full group-hover:before:opacity-0"></span>
                        <span className="after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-white after:opacity-70 after:w-0 after:h-0 after:z-10 after:transition-all after:duration-1300 group-hover:after:w-full group-hover:after:h-full group-hover:after:opacity-0"></span>
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute bottom-6 left-6 bg-white/90 dark:bg-black/90 backdrop-blur px-5 py-2 rounded-full text-sm font-semibold">
                          {item.badge}
                        </span>
                      </div>
                    </div>

                    {/* Text after image */}
                    <div className="col-span-12 lg:col-span-7">
                      <div className="p-7">
                        <div className="flex items-center justify-between gap-3 mb-6">
                          <p className="text-4xl font-bold">{item.number}</p>
                          <a
                            href="#!"
                            className="relative group size-15 rounded-full inline-flex items-center justify-center overflow-hidden"
                          >
                            <span className="absolute top-full left-0 w-full h-full bg-[#1FC5B1] transition-all duration-500 group-hover:top-0"></span>

                            <RiArrowRightUpLongLine className="text-2xl relative z-10 transition-all duration-500 group-hover:text-white group-hover:[transform:rotateY(360deg)]" />
                          </a>
                        </div>

                        <h3 className="font-chivo md:text-4xl max-w-2xl mb-4">
                          <a
                            href="#!"
                            className="hover:underline hover:text-[#1C2359] transition duration-300"
                          >
                            {item.title}
                          </a>
                        </h3>

                        <p className="md:text-[26px] text-gray-700 dark:text-gray-300 mb-6">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-3">
                          <p className="bg-[#1C2359] text-white rounded-full px-4 py-2 flex items-center gap-2">
                            <RiTimeLine />
                            {item.time}
                          </p>

                          <p className="bg-[#1C2359] text-white rounded-full px-4 py-2 flex items-center gap-2">
                            <RiMapPinLine />
                            {item.location}
                          </p>

                          <p className="bg-[#1C2359] text-white rounded-full px-4 py-2 flex items-center gap-2">
                            <RiUserVoiceLine />
                            {item.type}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Default behavior for even index items (01, 03, etc.) */}
                    <div className="col-span-12 lg:col-span-7">
                      <div className="p-7">
                        <div className="flex items-center justify-between gap-3 mb-6">
                          <p className="text-4xl font-bold">{item.number}</p>
                          <a
                            href="#!"
                            className="relative group size-15 rounded-full inline-flex items-center justify-center overflow-hidden"
                          >
                            <span className="absolute top-full left-0 w-full h-full bg-[#1FC5B1] transition-all duration-500 group-hover:top-0"></span>

                            <RiArrowRightUpLongLine className="text-2xl relative z-10 transition-all duration-500 group-hover:text-white group-hover:[transform:rotateY(360deg)]" />
                          </a>
                        </div>

                        <h3 className="font-chivo md:text-4xl max-w-2xl mb-4">
                          <a
                            href="#!"
                            className="hover:underline hover:text-[#1C2359] transition duration-300"
                          >
                            {item.title}
                          </a>
                        </h3>

                        <p className="md:text-[26px] text-gray-700 dark:text-gray-300 mb-6">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-3">
                          <p className="bg-[#1C2359] text-white rounded-full px-4 py-2 flex items-center gap-2">
                            <RiTimeLine />
                            {item.time}
                          </p>

                          <p className="bg-[#1C2359] text-white rounded-full px-4 py-2 flex items-center gap-2">
                            <RiMapPinLine />
                            {item.location}
                          </p>

                          <p className="bg-[#1C2359] text-white rounded-full px-4 py-2 flex items-center gap-2">
                            <RiUserVoiceLine />
                            {item.type}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-12 lg:col-span-5">
                      <div className="2xl:h-100 relative overflow-hidden group h-full">
                        <span className="before:content-[''] before:absolute before:top-0 before:right-0 before:bg-white before:opacity-70 before:w-0 before:h-0 before:z-10 before:transition-all before:duration-1300 group-hover:before:w-full group-hover:before:h-full group-hover:before:opacity-0"></span>
                        <span className="after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-white after:opacity-70 after:w-0 after:h-0 after:z-10 after:transition-all after:duration-1300 group-hover:after:w-full group-hover:after:h-full group-hover:after:opacity-0"></span>
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute bottom-6 left-6 bg-white/90 dark:bg-black/90 backdrop-blur px-5 py-2 rounded-full text-sm font-semibold">
                          {item.badge}
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Schedule Section end */}
    </>
  );
}
