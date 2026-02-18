'use client';

import { useState } from 'react';
import Image from 'next/image';

import schedule1 from '../../../../assets/images/tech/tech-schedule1.jpg';
import schedule2 from '../../../../assets/images/tech/tech-schedule2.jpg';
import schedule3 from '../../../../assets/images/tech/tech-schedule3.jpg';
import schedule4 from '../../../../assets/images/tech/tech-schedule4.jpg';
import schedule5 from '../../../../assets/images/tech/tech-schedule5.jpg';
import schedule6 from '../../../../assets/images/tech/tech-schedule6.jpg';
import schedule7 from '../../../../assets/images/tech/tech-schedule7.jpg';
import schedule8 from '../../../../assets/images/tech/tech-schedule8.jpg';

type Session = {
  speaker: string;
  title: string;
  description: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  dateLabel: string;
};

type DaySchedule = {
  id: number;
  label: string;
  sessions: Session[];
};

const daySchedules: DaySchedule[] = [
  {
    id: 1,
    label: 'Day 01',
    sessions: [
      {
        speaker: 'Amelia Carter',
        title: 'AI in 2026: The Future of Human-Tech Collaboration',
        description:
          'Explore how AI and automation are transforming industries worldwide. This session uncovers the latest breakthroughs shaping the future of intelligent systems.',
        image: {
          src: schedule3.src,
          width: schedule3.width,
          height: schedule3.height,
        },
        dateLabel: '12, Oct - 2026',
      },
      {
        speaker: 'Marcus Reynolds',
        title: 'Building Scalable Cloud Infrastructure',
        description:
          'Learn the strategies behind designing cloud platforms that scale effortlessly. Discover techniques used by leading tech companies to optimize performance.',
        image: {
          src: schedule2.src,
          width: schedule2.width,
          height: schedule2.height,
        },
        dateLabel: '13, Oct - 2026',
      },
      {
        speaker: 'Sarah Mitchell',
        title: 'Cybersecurity Trends & Threats to Watch',
        description:
          'Stay updated on evolving cyber threats impacting global digital ecosystems. Learn the critical security practices organizations must adopt for 2026 and beyond.',
        image: {
          src: schedule4.src,
          width: schedule4.width,
          height: schedule4.height,
        },
        dateLabel: '14, Oct - 2026',
      },
    ],
  },
  {
    id: 2,
    label: 'Day 02',
    sessions: [
      {
        speaker: 'Olivia Johnson',
        title: 'Emerging Tech in 2026: Trends & Innovations',
        description:
          'Discover cutting-edge technologies shaping industries worldwide. Dive into interactive sessions and hands-on demonstrations to understand the future of tech innovation.',
        image: {
          src: schedule1.src,
          width: schedule1.width,
          height: schedule1.height,
        },
        dateLabel: '12, Dec - 2026',
      },
      {
        speaker: 'Lucas Bennett',
        title: 'Next-Gen Cloud & Scalable Infrastructure',
        description:
          'Learn how to build highly scalable cloud architectures with real-world examples. Explore strategies to optimize performance and handle enterprise-level workloads efficiently.',
        image: {
          src: schedule5.src,
          width: schedule5.width,
          height: schedule5.height,
        },
        dateLabel: '13, Dec - 2026',
      },
      {
        speaker: 'Emma Wilson',
        title: 'Cybersecurity & Data Protection 2026',
        description:
          'Explore the latest cybersecurity threats and protection strategies. Gain insights into emerging defense technologies that ensure safety for enterprises and individuals alike.',
        image: {
          src: schedule6.src,
          width: schedule6.width,
          height: schedule6.height,
        },
        dateLabel: '14, Dec - 2026',
      },
    ],
  },
  {
    id: 3,
    label: 'Day 03',
    sessions: [
      {
        speaker: 'Henry Adams',
        title: 'Virtual Reality & Immersive Experiences',
        description:
          'Dive into VR applications in education, healthcare, and entertainment. Explore how immersive technology is redefining human experiences in multiple industries.',
        image: {
          src: schedule8.src,
          width: schedule8.width,
          height: schedule8.height,
        },
        dateLabel: '15, Dec - 2026',
      },
      {
        speaker: 'Sophia Clarke',
        title: 'AI Ethics & Responsible Innovation',
        description:
          'Understand ethical frameworks in AI development. Learn how companies implement responsible AI practices for transparency, fairness, and safety.',
        image: {
          src: schedule7.src,
          width: schedule7.width,
          height: schedule7.height,
        },
        dateLabel: '16, Dec - 2026',
      },
      {
        speaker: 'Jack Thompson',
        title: 'Future of Robotics & Automation',
        description:
          'Gain insights into robotics innovation and automation strategies. Learn how industries are deploying robots to optimize efficiency, safety, and productivity.',
        image: {
          src: schedule1.src,
          width: schedule1.width,
          height: schedule1.height,
        },
        dateLabel: '17, Dec - 2026',
      },
    ],
  },
  {
    id: 4,
    label: 'Day 04',
    sessions: [
      {
        speaker: 'Ethan Parker',
        title: 'Blockchain Beyond Cryptocurrency',
        description:
          'Explore blockchain applications in supply chain, finance, and digital identity. Understand how distributed ledger technology is transforming business processes.',
        image: {
          src: schedule2.src,
          width: schedule2.width,
          height: schedule2.height,
        },
        dateLabel: '18, Dec - 2026',
      },
      {
        speaker: 'Mia Roberts',
        title: 'Advanced IoT & Smart Cities',
        description:
          'Learn how IoT innovations are driving smart city projects, enhancing connectivity, and improving urban living experiences with intelligent data solutions.',
        image: {
          src: schedule4.src,
          width: schedule4.width,
          height: schedule4.height,
        },
        dateLabel: '19, Dec - 2026',
      },
      {
        speaker: 'Liam Scott',
        title: 'Next-Level Quantum Computing',
        description:
          'Explore quantum computing breakthroughs, practical applications, and its potential to revolutionize data processing, cryptography, and complex problem solving.',
        image: {
          src: schedule5.src,
          width: schedule5.width,
          height: schedule5.height,
        },
        dateLabel: '20, Dec - 2026',
      },
    ],
  },
];

export default function ScheduleSection() {
  const [activeDayId, setActiveDayId] = useState<number>(1);

  const activeDay =
    daySchedules.find((day) => day.id === activeDayId) ?? daySchedules[0];

  return (
    <section className="lg:py-30 py-20 bg-gradient-to-b from-[#2e0f53] to-[#592da8] text-white">
      <div className="container">
        <h2
          className="font-fahkwang mb-6 md:text-5xl relative text-white mb-12 leading-snug drop-shadow-[2px_2px_0px_rgba(255,255,255,0.15)]"
          data-sal="slide-right"
          data-sal-duration="800"
          data-sal-delay="200"
        >
          Official Schedule Overview
        </h2>

        <div
          className="border border-white/40 relative"
          data-sal="slide-up"
          data-sal-duration="800"
          data-sal-delay="200"
        >
          {/* Corner decorations */}
          <div className="absolute w-[16px] h-[16px] border border-white/40 z-[1] left-[-16px] top-[-16px] border-l-0 border-t-0 after:content-[''] after:w-[6px] after:h-[6px] after:bg-white/40 after:rotate-[42deg] after:absolute after:right-[-4px] after:bottom-[-4px]" />
          <div className="absolute w-[16px] h-[16px] border border-white/40 z-[1] right-[-16px] top-[-16px] border-r-0 border-t-0 after:content-[''] after:w-[6px] after:h-[6px] after:bg-white/40 after:rotate-[42deg] after:absolute after:left-[-4px] after:bottom-[-4px]" />
          <div className="absolute w-[16px] h-[16px] border border-white/40 z-[1] right-[-16px] bottom-[-16px] border-r-0 border-b-0 after:content-[''] after:w-[6px] after:h-[6px] after:bg-white/40 after:rotate-[42deg] after:absolute after:left-[-4px] after:top-[-4px]" />
          <div className="absolute w-[16px] h-[16px] border border-white/40 z-[1] left-[-16px] bottom-[-16px] border-l-0 border-b-0 after:content-[''] after:w-[6px] after:h-[6px] after:bg-white/40 after:rotate-[42deg] after:absolute after:right-[-4px] after:top-[-4px]" />

          {/* Tabs */}
          <nav aria-label="Tabs" className="border-b border-white/40">
            <ul
              role="tablist"
              className="flex justify-between flex-wrap md:flex-nowrap"
            >
              {daySchedules.map((day, index) => (
                <li
                  key={day.id}
                  role="presentation"
                  className="border-r border-white/40 w-full text-center"
                >
                  <button
                    role="tab"
                    id={`tab-${day.id}`}
                    aria-selected={activeDayId === day.id}
                    onClick={() => setActiveDayId(day.id)}
                    className={`tab-btn p-5 w-full uppercase font-fahkwang ${
                      activeDayId === day.id ? 'bg-white/10' : ''
                    }`}
                  >
                    <h3>{day.label}</h3>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Tab content */}
          <div className="lg:p-10 lg:py-15 p-5">
            <div
              id={`panel-${activeDay.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeDay.id}`}
            >
              {activeDay.sessions.map((session, idx) => {
                const isFirst = idx === 0;
                const isLast = idx === activeDay.sessions.length - 1;

                return (
                  <div
                    key={session.title + session.speaker}
                    className={`flex border-dashed border-white/40 relative group flex-wrap md:flex-nowrap gap-6 lg:gap-0 ${
                      !isLast ? 'border-b mt-5 md:mt-0' : 'mt-5 md:mt-0'
                    }`}
                  >
                    {/* bottom corner dots for middle rows / first row */}
                    <div className="absolute bg-white/40 rotate-[45deg] size-2 left-[-8px] bottom-[-4px]" />
                    <div className="absolute bg-white/40 rotate-[45deg] size-2 right-[-8px] bottom-[-4px]" />

                    {/* Speaker column */}
                    <div
                      className={`flex flex-col justify-center md:text-end w-[210px] ltr:md:border-r rtl:md:border-l border-dashed border-white/40 pe-[35px] shrink-0 relative ${
                        isFirst ? '' : ''
                      }`}
                    >
                      {isFirst && (
                        <div className="absolute bg-white/40 rotate-[45deg] size-2 top-[-8px] ltr:right-[-4px] rtl:left-[-4px] hidden md:block" />
                      )}
                      {isLast && (
                        <div className="absolute bg-white/40 rotate-[45deg] size-2 bottom-[-8px] ltr:right-[-4px] rtl:left-[-4px] hidden md:block" />
                      )}
                      <p className="text-gray-300 text-[20px]">Speaker</p>
                      <h4>{session.speaker}</h4>
                    </div>

                    {/* Content row */}
                    <div
                      className={`flex gap-5 flex-wrap lg:flex-nowrap items-center ${
                        isFirst
                          ? 'lg:ps-[35px] lg:pb-[43px] pb-5'
                          : isLast
                          ? 'lg:ps-[35px] lg:pt-[43px] md:pt-5'
                          : 'lg:ps-[35px] lg:py-[43px] pb-5 md:py-5'
                      }`}
                    >
                      <div className="size-30 shrink-0 relative overflow-hidden">
                        <div className="after:content-[''] after:absolute after:top-0 after:left-[-75%] after:h-full after:w-1/2 after:skew-x-[-25deg] after:bg-[linear-gradient(90deg,#fff0_0,#ffffff4d)] after:z-[1] group-hover:after:animate-[shine_.75s_linear]" />
                        <Image
                          src={session.image.src}
                          alt={session.title}
                          width={session.image.width || 300}
                          height={session.image.height || 300}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div>
                        <h3 className="font-semibold">
                          <span>{session.title}</span>
                        </h3>
                        <p className="text-gray-300 mt-2 text-[20px]">
                          {session.description}
                        </p>
                      </div>

                      <p className="bg-[#f2f2f2] text-black lg:scale-[-1] text-center p-2 inline-block lg:[writing-mode:vertical-lr] px-3">
                        {session.dateLabel}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

