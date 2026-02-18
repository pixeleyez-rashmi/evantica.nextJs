'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  RiTimerFill,
  RiArrowRightUpLine,
  RiFacebookFill,
  RiTwitterFill,
  RiLinkedinFill,
  RiShareFill,
} from '@remixicon/react';

// Import schedule images
import schedule1 from '../../../../assets/images/business/business-schedule1.jpg';
import schedule2 from '../../../../assets/images/business/business-schedule2.jpg';
import schedule3 from '../../../../assets/images/business/business-schedule3.jpg';
import schedule4 from '../../../../assets/images/business/business-schedule4.jpg';
import schedule5 from '../../../../assets/images/business/business-schedule5.jpg';
import schedule6 from '../../../../assets/images/business/business-schedule6.jpg';
import schedule7 from '../../../../assets/images/business/business-schedule7.jpg';

interface Event {
  id: number;
  location: string;
  time: string;
  title: string;
  description: string;
  speaker: string;
  image: typeof schedule1;
  imagePosition: 'left' | 'right';
  contentPosition: 'left' | 'right';
}

interface DaySchedule {
  id: number;
  date: string;
  day: string;
  events: Event[];
}

const schedules: DaySchedule[] = [
  {
    id: 1,
    date: 'December 01, 2026',
    day: 'First day',
    events: [
      {
        id: 1,
        location: 'San Francisco, USA',
        time: '9:30 AM - 12:30 PM',
        title: 'Future of Digital Marketing Conference 2026',
        description:
          'Explore new-age marketing strategies, AI-driven automation, and innovative brand engagement frameworks to scale business performance in global markets.',
        speaker: 'Sarah Johnson',
        image: schedule1,
        imagePosition: 'left',
        contentPosition: 'right',
      },
      {
        id: 2,
        location: 'London, UK',
        time: '10:00 AM - 1:45 PM',
        title: 'Business Leadership Summit 2026',
        description:
          'A global networking forum focusing on leadership transformation, strategic planning, corporate innovation, and the future of organizational growth in a digital-first world.',
        speaker: 'Michael Anderson',
        image: schedule2,
        imagePosition: 'right',
        contentPosition: 'left',
      },
    ],
  },
  {
    id: 2,
    date: 'December 02, 2026',
    day: 'Second day',
    events: [
      {
        id: 3,
        location: 'Berlin, Germany',
        time: '10:00 AM - 1:00 PM',
        title: 'AI & Robotics Expo 2026',
        description:
          'Discover the latest in AI, robotics, and automation, featuring live demos, expert panels, and cutting-edge innovations shaping the industry.',
        speaker: 'Laura Schmidt',
        image: schedule4,
        imagePosition: 'left',
        contentPosition: 'right',
      },
      {
        id: 4,
        location: 'Sydney, Australia',
        time: '2:00 PM - 5:30 PM',
        title: 'Global Entrepreneurship Summit 2026',
        description:
          'Connect with global entrepreneurs, investors, and innovators to explore new business models, growth strategies, and emerging market opportunities.',
        speaker: 'Daniel Lee',
        image: schedule3,
        imagePosition: 'right',
        contentPosition: 'left',
      },
    ],
  },
  {
    id: 3,
    date: 'December 03, 2026',
    day: 'Third day',
    events: [
      {
        id: 5,
        location: 'New York, USA',
        time: '9:00 AM - 12:00 PM',
        title: 'Startup & Innovation Expo 2026',
        description:
          'A platform for startups to showcase their products, meet investors, and network with industry leaders in technology, health, and fintech sectors.',
        speaker: 'Olivia Brown',
        image: schedule5,
        imagePosition: 'left',
        contentPosition: 'right',
      },
    ],
  },
  {
    id: 4,
    date: 'December 04, 2026',
    day: 'Fourth day',
    events: [
      {
        id: 6,
        location: 'Dubai, UAE',
        time: '3:00 PM - 6:00 PM',
        title: 'Sustainable Tech & Green Innovation 2026',
        description:
          'Explore innovations in sustainable technology, renewable energy, and green entrepreneurship with leading global experts and innovators.',
        speaker: 'Aisha Al-Mansoori',
        image: schedule6,
        imagePosition: 'left',
        contentPosition: 'right',
      },
      {
        id: 7,
        location: 'Toronto, Canada',
        time: '1:30 PM - 4:30 PM',
        title: 'Future Finance & Blockchain 2026',
        description:
          'Explore the future of finance, blockchain, and digital currencies with global experts, investors, and innovators shaping the next generation of financial solutions.',
        speaker: 'Ethan Wilson',
        image: schedule7,
        imagePosition: 'right',
        contentPosition: 'left',
      },
    ],
  },
];

export default function EventSection() {
  const [activeTab, setActiveTab] = useState(1);

  const activeSchedule = schedules.find((schedule) => schedule.id === activeTab) || schedules[0];

  return (
    <section className="lg:py-30 py-20 relative text-white bg-[#0B2C36]">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-15">
          <p
            className="mb-3 text-[#c0f037]"
            data-sal="slide-up"
            data-sal-duration="700"
            data-sal-delay="100"
          >
            [ Event Timeline ]
          </p>
          <h2
            className="md:text-5xl font-chivo font-medium leading-[1.2]"
            data-sal="slide-up"
            data-sal-duration="700"
            data-sal-delay="200"
          >
            Plan Your Day with Our Exciting Sessions
          </h2>
        </div>

        {/* Tabs */}
        <nav aria-label="Tabs">
          <ul
            role="tablist"
            className="flex gap-6 justify-center flex-wrap"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="300"
          >
            {schedules.map((schedule) => (
              <li key={schedule.id} role="presentation">
                <button
                  role="tab"
                  aria-selected={activeTab === schedule.id}
                  id={`tab-${schedule.id}`}
                  onClick={() => setActiveTab(schedule.id)}
                  className={`tab-btn px-16 py-5 bg-white/10 backdrop-blur-sm text-white rounded-lg font-medium transition-all ${
                    activeTab === schedule.id
                      ? 'bg-[#c0f037]/20 border border-[#c0f037]'
                      : 'hover:bg-white/20'
                  }`}
                >
                  <p className="mb-2 text-[#c0f037]">{schedule.date}</p>
                  <h2 className="text-3xl">{schedule.day}</h2>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Tab Content */}
        <div className="lg:mt-20 mt-5">
          {schedules.map((schedule) => (
            <div
              key={schedule.id}
              id={`panel-${schedule.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${schedule.id}`}
              className={`transition-all duration-500 ${
                activeTab === schedule.id
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4 hidden'
              }`}
            >
              {schedule.events.map((event, eventIndex) => (
                <div
                  key={event.id}
                  className={`relative z-10 lg:p-10 p-2 ${
                    eventIndex > 0 ? 'lg:mt-10 mt-5' : ''
                  }`}
                  data-sal="slide-up"
                  data-sal-duration="800"
                  data-sal-delay="200"
                >
                  {/* Border decoration */}
                  <div
                    className={`before:content-[''] before:absolute before:top-0 before:bottom-0 before:border before:border-white/30 before:-z-10 hidden lg:block ${
                      event.imagePosition === 'left'
                        ? 'ltr:before:left-[190px] rtl:before:left-0 ltr:before:right-0 rtl:before:right-[190px]'
                        : 'ltr:before:right-[190px] rtl:before:right-0 rtl:before:left-[190px] ltr:before:left-0'
                    }`}
                  ></div>

                  <div className="grid grid-cols-12 gap-6 items-center relative">
                    {/* Image */}
                    {event.imagePosition === 'left' && (
                      <div className="col-span-12 lg:col-span-5">
                        <div className="clip-shape-left md:h-90 overflow-hidden">
                          <Image
                            src={event.image.src}
                            alt={event.title}
                            width={event.image.width || 500}
                            height={event.image.height || 360}
                            className="w-full h-full object-cover transition-all duration-500 ease-out hover:scale-110 hover:rotate-2"
                          />
                        </div>
                      </div>
                    )}

                    {/* Content */}
                    <div
                      className={`col-span-12 ${
                        event.imagePosition === 'left'
                          ? 'lg:col-span-7 xl:col-span-6 xl:col-end-13'
                          : 'xl:col-span-6 lg:col-span-7'
                      }`}
                    >
                      <div
                        className={`flex justify-between gap-5 flex-wrap md:flex-nowrap ${
                          event.contentPosition === 'right' ? '' : 'md:flex-row-reverse'
                        }`}
                      >
                        {/* Main Content */}
                        <div className={event.contentPosition === 'right' ? '' : 'md:text-end'}>
                          <span className="bg-white/10 backdrop-blur-sm p-3 px-5 inline-block">
                            {event.location}
                          </span>
                          <p className="text-gray-400 mt-8 mb-5">
                            <RiTimerFill className="inline me-1 text-[#c0f037]" />
                            {event.time}
                          </p>
                          <h2>
                            <Link
                              href="#!"
                              className="font-semibold leading-snug hover:text-[#c0f037] transition duration-300"
                            >
                              {event.title}
                            </Link>
                          </h2>
                          <p className="text-gray-400 mt-5 md:text-[20px]">{event.description}</p>
                          <p className="uppercase tracking-widest bg-[#c0f037] inline-block p-2 px-5 text-black font-medium text-sm mt-5 [clip-path:polygon(100%_0%,0%_0%,5%_100%,100%_100%,95%_50%)]">
                            {event.speaker}
                          </p>
                        </div>

                        {/* Sidebar Actions */}
                        <div className="shrink-0 text-center">
                          <Link
                            href="#!"
                            className="text-[#c0f037] block group"
                          >
                            Get Tickets{' '}
                            <RiArrowRightUpLine className="inline-block group-hover:rotate-[45deg] transition-all duration-300" />
                          </Link>
                          <div className="flex md:flex-col mt-6 gap-3 items-center flex-row">
                            <Link
                              href="#!"
                              className="size-10 bg-white/10 backdrop-blur-sm rounded-full text-white inline-flex items-center justify-center hover:bg-[#c0f037] hover:text-black transition duration-300"
                            >
                              <RiFacebookFill />
                            </Link>
                            <Link
                              href="#!"
                              className="size-10 bg-white/10 backdrop-blur-sm rounded-full text-white inline-flex items-center justify-center hover:bg-[#c0f037] hover:text-black transition duration-300"
                            >
                              <RiTwitterFill />
                            </Link>
                            <Link
                              href="#!"
                              className="size-10 bg-white/10 backdrop-blur-sm rounded-full text-white inline-flex items-center justify-center hover:bg-[#c0f037] hover:text-black transition duration-300"
                            >
                              <RiLinkedinFill />
                            </Link>
                          </div>
                          <button
                            type="button"
                            className="size-10 border border-white/20 text-[#c0f037] mt-4 md:mt-18 inline-flex items-center justify-center hover:bg-[#c0f037] hover:text-black hover:border-[#c0f037] transition duration-300"
                          >
                            <RiShareFill className="text-xl" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Image Right */}
                    {event.imagePosition === 'right' && (
                      <div className="col-span-12 lg:col-span-5 lg:col-end-13">
                        <div className="clip-shape-right md:h-90 overflow-hidden">
                          <Image
                            src={event.image.src}
                            alt={event.title}
                            width={event.image.width || 500}
                            height={event.image.height || 360}
                            className="w-full h-full object-cover transition-all duration-500 ease-out hover:scale-110 hover:rotate-2"
                          />
                        </div>
                      </div>
                    )}
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

