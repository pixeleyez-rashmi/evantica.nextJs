"use client";

import {
  RiMailAddFill,
  RiPhoneFill,
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiCalendar2Fill,
  RiTimeFill,
} from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import speakerPhoto from "../../../../assets/images/event/con-speaker-main.jpg";

// sessions photos
import image1 from "../../../../assets/images/tech/tech-schedule3.jpg";
import image2 from "../../../../assets/images/education/education-schedule-2.jpg";
import image3 from "../../../../assets/images/business/business-schedule5.jpg";
import image4 from "../../../../assets/images/tech/tech-schedule7.jpg";
export default function SpeakerDetail() {
  // 1. Data Arrays
  const skills = [
    { name: "PRODUCT DESIGN", percentage: "88%", color: "#9dd2ca" },
    { name: "UI/UX DESIGN", percentage: "90%", color: "#ffbc51" },
    { name: "INTERACTIONS DESIGN", percentage: "95%", color: "#d4b9ff" },
    { name: "GRAPHICS DESIGN", percentage: "90%", color: "#ff7f49" },
  ];

  const sessions = [
    {
      title: "Opening Keynote: The Future of Innovation & Leadership",
      date: "24 Jan, 2026",
      time: "10:00 AM – 11:00 AM",
      image: image1,
    },
    {
      title: "Building High-Impact Teams in a Digital World Today",
      date: "24 Jan, 2026",
      time: "11:30 AM – 12:30 PM",
      image: image2,
    },
    {
      title: "Strategies for Sustainable Growth & Business Success",
      date: "24 Jan, 2026",
      time: "02:00 PM – 03:00 PM",
      image: image3,
    },
    {
      title: "Closing Session: Inspiring Change Through Action",
      date: "24 Jan, 2026",
      time: "03:30 PM – 04:30 PM",
      image: image4,
    },
  ];

  const socialLinks = [
    { icon: <RiFacebookFill />, color: "#3b5998", href: "#!" },
    { icon: <RiInstagramFill />, color: "#E1306C", href: "#!" },
    { icon: <RiLinkedinFill />, color: "#0A66C2", href: "#!" },
    { icon: <RiTwitterFill />, color: "#1DA1F2", href: "#!" },
  ];

  return (
    <section className="lg:py-30 py-20">
      <div className="container">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-15">
          <p
            className="mb-2 font-medium uppercase tracking-[1px]"
            data-sal="zoom-in"
          >
            // Speaker Details
          </p>
          <h2
            className="font-bold md:text-5xl leading-snug"
            data-sal="zoom-in"
            data-sal-delay="200"
          >
            Introducing Our Conference Speakers
          </h2>
        </div>

        {/* Main Speaker Card */}
        <div className="grid grid-cols-12 items-center gap-4 xl:gap-0">
          <div className="col-span-12 lg:col-span-3">
            <div
              className="2xl:-me-50 lg:-me-40 relative z-10 py-10 2xl:w-130 2xl:h-130"
              data-sal="slide-right"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              <Image
                src={speakerPhoto}
                alt="Aria Johnson"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <div className="rounded-xl xl:ps-50 lg:ps-42 xl:p-15 xl:py-20 p-5 bg-[#f2f1f8] dark:bg-[#1f1e2c] relative h-full">
              <p className="mb-4 font-medium text-gray-600 dark:text-gray-400 text-lg">
                Lead Speaker :-
              </p>
              <h2 className="text-4xl font-bold mb-5">Aria Johnson</h2>
              <p className="text-gray-600 dark:text-gray-400 border-b pb-8 border-black/20 dark:border-white/20">
                Aria Johnson is an expert in sustainable technology and
                innovation, with over a decade of experience driving
                eco-friendly initiatives across global tech companies. In her
                session, she will share insights on combining innovation with
                sustainability and achieving impactful results. She will also
                provide practical tips on implementing green practices in
                everyday business operations.
              </p>

              {/* Contact Info */}
              <div className="flex flex-col md:flex-row gap-6 mt-8 flex-wrap">
                <div className="flex flex-1 p-5 rounded-xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm items-center gap-4">
                  <div className="bg-white dark:bg-gray-700 rounded-lg size-16 flex items-center justify-center p-4 shrink-0">
                    <RiMailAddFill className="text-3xl text-gray-700 dark:text-gray-200" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                      Email Address
                    </h4>
                    <a
                      href="mailto:eventica@example.com"
                      className="text-gray-600 dark:text-gray-400"
                    >
                      eventica@example.com
                    </a>
                  </div>
                </div>
                <div className="flex flex-1 p-5 rounded-xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm items-center gap-4">
                  <div className="bg-white dark:bg-gray-700 rounded-lg size-16 flex items-center justify-center p-4 shrink-0">
                    <RiPhoneFill className="text-3xl text-gray-700 dark:text-gray-200" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                      Phone Number
                    </h4>
                    <a
                      href="mailto:eventica@example.com"
                      className="text-gray-600 dark:text-gray-400"
                    >
                      +1 (167) (654) (3210)
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Mapping */}
              <div className="flex items-center gap-4 xl:mt-12 mt-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    style={{ borderColor: social.color, color: social.color }}
                    className="border rounded-full size-12 flex items-center justify-center hover:bg-current transition-all duration-300 group"
                  >
                    <span className="group-hover:text-white">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Biography & Skills Mapping */}
        <div className="grid grid-cols-12 gap-6 2xl:gap-10 mt-20">
          <div className="col-span-12 lg:col-span-6">
            <h2
              className="text-4xl border-b pb-6 border-black/20 dark:border-white/20 mb-8"
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              Biography
            </h2>
            <p
              className="text-gray-600 dark:text-gray-400 mb-4"
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              Aria Johnson is a seasoned professional with over a decade of
              experience in digital marketing and event management. She has
              successfully led multiple international conferences, workshops,
              and online campaigns, consistently delivering measurable results
              and memorable experiences.
            </p>
            <p
              className="text-gray-600 dark:text-gray-400 mb-4"
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              Known for her innovative approach and strategic vision, Aria has a
              strong background in content creation, audience engagement, and
              brand storytelling. She thrives in collaborative environments,
              mentoring young professionals while driving projects to success.
            </p>
            <p
              className="text-gray-600 dark:text-gray-400"
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              Outside of work, Aria is passionate about public speaking,
              exploring new technologies, and contributing to community
              initiatives focused on education and creative industries.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <h2
              className="text-4xl border-b pb-6 border-black/20 dark:border-white/20 mb-8"
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              Skills & Abilities
            </h2>
            <div
              className="space-y-6"
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-800 dark:text-gray-300">
                      {skill.name}
                    </span>
                    <span className="font-semibold text-gray-800 dark:text-gray-300">
                      {skill.percentage}
                    </span>
                  </div>
                  <div
                    style={{ borderColor: skill.color }}
                    className="w-full h-4 p-1 border rounded-full overflow-hidden"
                  >
                    <div
                      style={{
                        backgroundColor: skill.color,
                        width: skill.percentage,
                      }}
                      className="h-full rounded-full"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Sessions Mapping */}
        <h2
          className="text-4xl mb-8 mt-20"
          data-sal="slide-up"
          data-sal-duration="800"
          data-sal-delay="200"
        >
          Featured Sessions by Aria Johnson
        </h2>
        <div className="grid grid-cols-12 gap-6">
          {sessions.map((session, index) => (
            <div key={index} className="col-span-12 lg:col-span-6">
              <div
                className="border border-black/20 dark:border-white/20 rounded-xl p-5 flex items-center gap-5 flex-wrap md:flex-nowrap"
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay="200"
              >
                <div className="size-35 shrink-0">
                  <Image
                    src={session.image}
                    alt={session.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-2 border-r border-black/20 dark:border-white/20 pe-5">
                      <RiCalendar2Fill className="text-xl" />
                      <p className="leading-none">{session.date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <RiTimeFill className="text-xl ms-4" />
                      <p className="leading-none">{session.time}</p>
                    </div>
                  </div>
                  <h3 className=" transition-colors">
                    <Link href="#!">{session.title}</Link>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
