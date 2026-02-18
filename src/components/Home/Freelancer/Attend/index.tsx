"use client";

import Image from "next/image";
import Link from "next/link";

import freelancerFlower from "../../../../assets/images/freelancer/freelancer-flower.png";
import freelancerCoding from "../../../../assets/images/freelancer/freelancer-coding.png";
import freelancerWebDesign from "../../../../assets/images/freelancer/freelancer-web-design.png";
import freelancerDigitalCampaign from "../../../../assets/images/freelancer/freelancer-digital-campaign.png";
import freelancerWriter from "../../../../assets/images/freelancer/freelancer-writer.png";
import freelancerOwner from "../../../../assets/images/freelancer/freelancer-owner.png";
import freelancerProject from "../../../../assets/images/freelancer/freelancer-project.png";
import freelancerVideoEditing from "../../../../assets/images/freelancer/freelancer-video-editing.png";
import freelancerPhotographer from "../../../../assets/images/freelancer/freelancer-photographer.png";

interface AttendeeCard {
  icon: typeof freelancerCoding;
  title: string;
  description: string;
  hoverColor: string;
}

const attendeeCards: AttendeeCard[] = [
  {
    icon: freelancerCoding,
    title: "Developers",
    description:
      "Perfect for software builders looking to network, collaborate & learn the latest tools.",
    hoverColor: "#FFA800",
  },
  {
    icon: freelancerWebDesign,
    title: "UI/UX Designers",
    description:
      "Ideal for creatives wanting to improve workflows, share portfolios & gain project insights.",
    hoverColor: "#FF2DAC",
  },
  {
    icon: freelancerDigitalCampaign,
    title: "Digital Marketers",
    description:
      "Great for strategists exploring new trends, funnels, growth hacks & social media tools.",
    hoverColor: "#007BFF",
  },
  {
    icon: freelancerWriter,
    title: "Content Creators",
    description:
      "For writers, vloggers, and storytellers seeking collaboration & content improvement tips.",
    hoverColor: "#7E3AF2",
  },
  {
    icon: freelancerOwner,
    title: "Business Owners",
    description:
      "Perfect for entrepreneurs looking for freelancers, collaboration opportunities & scaling ideas.",
    hoverColor: "#21C45D",
  },
  {
    icon: freelancerProject,
    title: "Project Managers",
    description:
      "Ideal for organizers coordinating teams, improving workflows & hiring freelancers.",
    hoverColor: "#11B8A5",
  },
  {
    icon: freelancerVideoEditing,
    title: "Video Editors",
    description:
      "Great for editors seeking inspiration, project tips, and new collaboration partners.",
    hoverColor: "#FF3B3B",
  },
  {
    icon: freelancerPhotographer,
    title: "Photographers",
    description:
      "For creative shooters looking to connect, share gear tips, and explore freelancing gigs.",
    hoverColor: "#FF7A00",
  },
];

const wavePath =
  "M265.8 3.5c-10.9 0-15.9 6.2-15.9 6.2s-3.6-3.5-9.2-.9c-9.1 4.1-4.4 13.4-4.4 13.4s-1.2.2-1.9.9c-.6.7-.5 1.9-.5 1.9s-1-.5-2.3-.2c-1.3.3-1.6 1.4-1.6 1.4s.4-3.4-1.5-5c-3.9-3.4-8.3-.2-8.3-.2s-.6-.7-.9-.9c-.4-.2-1.2-.2-1.2-.2s-4.4-3.6-11.5-2.6-10.4 7.9-10.4 7.9-.5-3.3-3.9-4.9c-4.8-2.4-7.4 0-7.4 0s2.4-4.1-1.9-6.4-6.2 1.2-6.2 1.2-.9-.5-2.1-.5-2.3 1.1-2.3 1.1.1-.7-1.1-1.1c-1.2-.4-2 0-2 0s3.6-6.8-3.5-8.9c-6-1.8-7.9 2.6-8.4 4-.1-.3-.4-.7-.9-1.1-1-.7-1.3-.5-1.3-.5s1-4-1.7-5.2c-2.7-1.2-4.2 1.1-4.2 1.1s-3.1-1-5.7 1.4-2.1 5.5-2.1 5.5-.9 0-2.1.7-1.4 1.7-1.4 1.7-1.7-1.2-4.3-1.2c-2.6 0-4.5 1.2-4.5 1.2s-.7-1.5-2.8-2.4c-2.1-.9-4 0-4 0s2.6-5.9-4.7-9c-7.3-3.1-12.6 3.3-12.6 3.3s-.9 0-1.9.2c-.9.2-1.5.9-1.5.9S99.4 3 94.9 3.9c-4.5.9-5.7 5.7-5.7 5.7s-2.8-5-12.3-3.9-11.1 6-11.1 6-1.2-1.4-4-.7c-.8.2-1.3.5-1.8.9-.9-2.1-2.7-4.9-6.2-4.4-3.2.4-4 2.2-4 2.2s-.5-.7-1.2-.7h-1.4s-.5-.9-1.7-1.4-2.4 0-2.4 0-2.4-1.2-4.7 0-3.1 4.1-3.1 4.1-1.7-1.4-3.6-.7c-1.9.7-1.9 2.8-1.9 2.8s-.5-.5-1.7-.2c-1.2.2-1.4.7-1.4.7s-.7-2.3-2.8-2.8c-2.1-.5-4.3.2-4.3.2s-1.7-5-11.1-6c-3.8-.4-6.6.2-8.5 1v21.2h283.5V11.1c-.9.2-1.6.4-1.6.4s-5.2-8-16.1-8z";

export default function AttendSection() {
  return (
    <section className="lg:py-30 py-20 xl:mt-37 bg-[#f8ebff] dark:bg-[#4c1d64] relative">
      {/* Top SVG Wave */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 283.5 27.8"
        preserveAspectRatio="xMidYMax slice"
        className="absolute -top-37 hidden 2xl:block"
      >
        <path className="fill-[#f8ebff] dark:fill-[#4c1d64]" d={wavePath} />
      </svg>

      <div className="2xl:px-40 lg:px-10 px-5">
        <div className="grid grid-cols-12 gap-6 lg:mb-15 mb-10">
          <div className="col-span-12 xl:col-span-9">
            <h2
              className="lg:text-6xl uppercase font-anton font-medium tracking-[1px] leading-snug"
              data-sal="slide-right"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              EMPOWERING FREELANCERS, CREATORS & BUILDERS TO CONNECT, SHARE, AND
              ELEVATE THEIR PROFESSIONAL JOURNEY TOGETHER.
            </h2>
          </div>
          <div className="col-span-12 xl:col-span-2 xl:col-end-13">
            <Image
              src={freelancerFlower.src}
              alt=""
              width={freelancerFlower.width}
              height={freelancerFlower.height}
              className="w-40 opacity-60 ms-auto animate-[spin_12s_linear_infinite] hidden xl:block"
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          {attendeeCards.map((card, index) => (
            <div
              key={index}
              className="col-span-12 xl:col-span-3 md:col-span-6 lg:col-span-4"
            >
              <div
                className="relative p-9 z-[1] group h-full"
                data-sal="flip-up"
                data-sal-duration="800"
                data-sal-delay="200"
              >
                <div
                  className="absolute inset-0 rounded-xl bg-white dark:bg-black -z-10 transition-all duration-300 transform-[perspective(200px)_rotateX(4deg)_translateY(0)] group-hover:transform-[perspective(200px)_rotateX(-4deg)_translateY(17px)] group-hover:bg-[var(--hover-bg)]"
                  style={
                    { "--hover-bg": card.hoverColor } as React.CSSProperties
                  }
                />

                <Image
                  src={card.icon.src}
                  alt=""
                  width={card.icon.width}
                  height={card.icon.height}
                  className="mb-5 group-hover:brightness-0 group-hover:invert size-14"
                />
                <h4>
                  <Link
                    href="#!"
                    className="uppercase font-anton font-medium tracking-[1px] leading-snug group-hover:text-white"
                  >
                    {card.title}
                  </Link>
                </h4>
                <p className="mt-3 text-gray-600 dark:text-gray-400 group-hover:text-gray-100">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom SVG Wave */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 283.5 27.8"
        preserveAspectRatio="xMidYMin slice"
        className="absolute -bottom-37 rotate-180 w-full hidden 2xl:block"
      >
        <path className="fill-[#f8ebff] dark:fill-[#4c1d64]" d={wavePath} />
      </svg>
    </section>
  );
}
