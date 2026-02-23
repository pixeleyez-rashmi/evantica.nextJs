import Image from "next/image";
import medicalVenue from "../../../../assets/images/medical/medical-venue-1.jpg";
import EventSingle from "../../../../assets/images/event/event-single-1.jpg";
import user1 from "../../../../assets/images/avatar/user-02.jpg";
import user2 from "../../../../assets/images/avatar/user-03.jpg";
import user3 from "../../../../assets/images/avatar/user-10.jpg";
import {
  RiArrowRightUpLine,
  RiFacebookFill,
  RiInstagramFill,
  RiLink,
  RiLinkedinFill,
  RiTimeFill,
  RiTwitterXLine,
} from "@remixicon/react";

const eventAgenda = [
  {
    time: "09:00 AM – 10:00 AM",
    description: "Registration & Welcome Networking",
  },
  {
    time: "10:00 AM – 12:00 PM",
    description: "Keynote Sessions & Industry Talks",
  },
  { time: "12:00 PM – 01:00 PM", description: "Lunch Break & Networking" },
  { time: "01:00 PM – 04:00 PM", description: "Workshops & Panel Discussions" },
];

const speakers = [
  {
    name: "Sophia Martinez",
    position: "Chief Innovation Officer",
    image: user1,
    socialLinks: [
      {
        platform: "Facebook",
        link: "#!",
        icon: RiFacebookFill,
        color: "#3b5998",
      },
      {
        platform: "Instagram",
        link: "#!",
        icon: RiInstagramFill,
        color: "#E1306C",
      },
      {
        platform: "LinkedIn",
        link: "#!",
        icon: RiLinkedinFill,
        color: "#0A66C2",
      },
    ],
  },
  {
    name: "Liam Johnson",
    position: "Head of Digital Strategy",
    image: user2,
    socialLinks: [
      {
        platform: "Facebook",
        link: "#!",
        icon: RiFacebookFill,
        color: "#3b5998",
      },
      {
        platform: "Instagram",
        link: "#!",
        icon: RiInstagramFill,
        color: "#E1306C",
      },
      {
        platform: "LinkedIn",
        link: "#!",
        icon: RiLinkedinFill,
        color: "#0A66C2",
      },
    ],
  },
  {
    name: "Olivia Chen",
    position: "Senior Marketing Strategist",
    image: user3,
    socialLinks: [
      {
        platform: "Facebook",
        link: "#!",
        icon: RiFacebookFill,
        color: "#3b5998",
      },
      {
        platform: "Instagram",
        link: "#!",
        icon: RiInstagramFill,
        color: "#E1306C",
      },
      {
        platform: "LinkedIn",
        link: "#!",
        icon: RiLinkedinFill,
        color: "#0A66C2",
      },
    ],
  },
];

// Sidebar information
const sidebarInfo = [
  { label: "Category", value: "Business & Marketing" },
  { label: "Event Date", value: "25 March 2026" },
  { label: "Time", value: "10:00 AM – 4:00 PM" },
  { label: "Venue", value: "Ahmadabad Convention Center" },
  { label: "Organizer", value: "GrowthX Events" },
  { label: "Event Type", value: "Offline / In-Person" },
  { label: "Available Seats", value: "120" },
  { label: "Ticket Price", value: "₹1,499" },
];

export default function EventInfo() {
  return (
    <>
      {/* Left side info */}
      <section className="lg:py-30 py-20">
        <div className="container">
          <div className="grid grid-cols-12 gap-6 2xl:gap-15">
            <div className="col-span-12 xl:col-span-8">
              <p className="text-gray-600 dark:text-gray-400 text-xl mb-5">
                This event brings together professionals, innovators, and
                industry experts to share ideas, insights, and experiences
                across various domains. It serves as a platform to explore
                emerging trends, practical strategies, and real-world solutions
                shaping today’s evolving industries. Through engaging sessions
                and interactive discussions, participants gain valuable
                knowledge, fresh perspectives, and meaningful connections that
                support long-term growth.
              </p>

              <p className="text-gray-600 dark:text-gray-400 text-xl mb-5">
                Attendees can expect engaging sessions, meaningful networking
                opportunities, and valuable takeaways designed to inspire
                growth, collaboration, and long-term success. The experience is
                crafted to encourage knowledge sharing, professional
                connections, and actionable insights that can be applied beyond
                the event.
              </p>

              <h2
                className="mt-7 mb-6"
                data-sal="slide-right"
                data-sal-duration="800"
                data-sal-delay="100"
              >
                Why You Should Attend
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <p className="flex gap-3 text-xl">
                  <i className="ri-arrow-right-line text-2xl"></i>
                  Gain practical insights and actionable knowledge from
                  experienced speakers
                </p>

                <p className="flex gap-3 text-xl">
                  <i className="ri-arrow-right-line text-2xl"></i>
                  Explore the latest trends, tools, and ideas shaping modern
                  industries
                </p>

                <p className="flex gap-3 text-xl">
                  <i className="ri-arrow-right-line text-2xl"></i>
                  Connect and network with like-minded professionals and thought
                  leaders
                </p>

                <p className="flex gap-3 text-xl">
                  <i className="ri-arrow-right-line text-2xl"></i>
                  Participate in interactive sessions, discussions, and hands-on
                  activities
                </p>
              </div>

              <div className="flex items-center gap-6 mt-9 flex-wrap md:flex-nowrap">
                <div className="h-90 w-full">
                  <Image
                    src={medicalVenue}
                    alt="Event Gallery Image"
                    className="rounded-xl object-cover w-full h-full"
                  />
                </div>
                <div className="h-90 w-full">
                  <Image
                    src={EventSingle}
                    alt="Event Gallery Image"
                    className="rounded-xl object-cover w-full h-full"
                  />
                </div>
              </div>

              <h2
                className="mt-7 mb-6"
                data-sal="slide-right"
                data-sal-duration="800"
                data-sal-delay="100"
              >
                Event Agenda Overview
              </h2>

              <div className="space-y-4">
                {eventAgenda.map((agenda, index) => (
                  <p key={index} className="flex gap-3 text-xl flex-wrap">
                    <RiTimeFill className="text-2xl" />
                    <strong>{agenda.time}:</strong> {agenda.description}
                  </p>
                ))}
              </div>

              <h2
                className="mt-7 mb-6"
                data-sal="slide-right"
                data-sal-duration="800"
                data-sal-delay="100"
              >
                Challenges We Address
              </h2>

              <p className="text-gray-600 dark:text-gray-400 text-xl">
                Modern businesses face challenges such as rapid technological
                change, evolving customer expectations, and increasing
                competition. This event focuses on solving these problems by
                sharing practical solutions, real success stories, and
                forward-thinking strategies.
              </p>

              <div className="border border-black/30 dark:border-white/30 rounded-xl p-9 mt-7">
                <h3 className="mb-9">Meet Our Speakers</h3>
                {speakers.map((speaker, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between gap-4 border-b pb-6 border-black/30 dark:border-white/30 flex-wrap lg:flex-nowrap"
                  >
                    <div className="flex items-center gap-6 flex-wrap">
                      <Image
                        src={speaker.image}
                        alt="Speaker"
                        className="size-20 object-cover rounded-full"
                      />
                      <div>
                        <h4>
                          <a href="#!">{speaker.name}</a>
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {speaker.position}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">Social</p>
                      <div className="flex items-center gap-1">
                        {speaker.socialLinks.map((social, idx) => (
                          <a
                            key={idx}
                            href={social.link}
                            className={`border border-[${social.color}] text-[${social.color}] rounded-full size-10 flex items-center justify-center hover:bg-[${social.color}] hover:text-white transition`}
                          >
                            <social.icon className="text-xl" />
                          </a>
                        ))}
                      </div>
                    </div>
                    <a
                      href="#!"
                      dir="ltr"
                      className="relative inline-block text-xl font-semibold border border-black dark:border-white text-black dark:text-white rounded-full px-7 py-3 overflow-hidden group hover:border-[#f2c944] dark:hover:text-black"
                    >
                      <span className="relative z-10 inline-flex items-center gap-1">
                        View Session <RiArrowRightUpLine />
                      </span>
                      <span className="absolute inset-0 bg-[#f2c944] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out rounded-full"></span>
                    </a>
                  </div>
                ))}
              </div>

              <h2
                className="mt-7 mb-6"
                data-sal="slide-right"
                data-sal-duration="800"
                data-sal-delay="100"
              >
                Event Overview
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-xl">
                The Digital Business & Innovation Summit 2026 is more than an
                event — it is a platform for collaboration, learning, and
                growth. Join us to gain clarity, confidence, and connections
                that will help you lead your business into the future.
              </p>
            </div>

            {/* Right Side info */}
            <div className="col-span-12 xl:col-span-4">
              <div className="space-y-6 sticky top-5">
                <div className="border border-black/30 dark:border-white/30 rounded-xl p-7">
                  <h3 className="mb-5">
                    Event Information
                    <span className="flex gap-2 mt-1">
                      <span className="h-0.5 w-8 bg-current"></span>
                      <span className="h-0.5 w-4 bg-current"></span>
                    </span>
                  </h3>
                  <ul className="space-y-2">
                    {sidebarInfo.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between border-b flex-wrap border-black/20 py-3"
                      >
                        <span className="font-semibold">{item.label}:</span>
                        <span className="text-gray-600 dark:text-gray-400">
                          {item.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Registration */}
                <div className="border border-black/30 dark:border-white/30 rounded-xl p-7">
                  <h3 className="mb-5">
                    Registration
                    <span className="flex gap-2 mt-1">
                      <span className="h-0.5 w-8 bg-current"></span>
                      <span className="h-0.5 w-4 bg-current"></span>
                    </span>
                  </h3>
                  <p className="text-gray-600 mb-4 dark:text-gray-400">
                    Limited seats available. Don’t miss this opportunity to
                    learn from industry experts.
                  </p>
                </div>

                {/* Share Event */}
                <div className="border border-black/30 dark:border-white/30 rounded-xl p-6">
                  <h3 className="mb-5">
                    Share Event
                    <span className="flex gap-2 mt-1">
                      <span className="h-0.5 w-8 bg-current"></span>
                      <span className="h-0.5 w-4 bg-current"></span>
                    </span>
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href="#!"
                      className="size-10 rounded-full border border-black/30 dark:border-white/30 flex items-center justify-center hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white transition"
                    >
                      <RiFacebookFill />
                    </a>
                    <a
                      href="#!"
                      className="size-10 rounded-full border border-black/30 dark:border-white/30 flex items-center justify-center hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white transition"
                    >
                      <RiTwitterXLine />
                    </a>
                    <a
                      href="#!"
                      className="size-10 rounded-full border border-black/30 dark:border-white/30 flex items-center justify-center hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white transition"
                    >
                      <RiLinkedinFill />
                    </a>
                    <a
                      href="#!"
                      className="size-10 rounded-full border border-black/30 dark:border-white/30 flex items-center justify-center hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white transition"
                    >
                      <RiLink />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
