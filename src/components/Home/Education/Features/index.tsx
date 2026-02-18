"use client";

import Link from "next/link";
import Image from "next/image";
import {
  RiGraduationCapFill,
  RiTeamFill,
  RiLightbulbFlashFill,
  RiEarthFill,
  RiChatVoiceFill,
  RiPresentationFill,
} from "@remixicon/react";

import educationTitleShape from "../../../../assets/images/education/education-title-shape.jpg";

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  iconBgColor: string;
  hoverBorderColor: string;
}

const features: Feature[] = [
  {
    icon: RiGraduationCapFill,
    title: "Keynote Presentations",
    description:
      "Listen to world-renowned educators and policymakers sharing the latest advancements shaping the future of learning.",
    iconBgColor: "#a9fb50",
    hoverBorderColor: "#a9fb50",
  },
  {
    icon: RiTeamFill,
    title: "Collaborative Workshops",
    description:
      "Participate in hands-on workshops designed to improve teaching strategies, digital skills, and student engagement.",
    iconBgColor: "#ff7f49",
    hoverBorderColor: "#ff7f49",
  },
  {
    icon: RiLightbulbFlashFill,
    title: "Innovative EdTech",
    description:
      "Discover cutting-edge tools, AI solutions, and classroom technologies transforming modern education systems.",
    iconBgColor: "#8f9bff",
    hoverBorderColor: "#8f9bff",
  },
  {
    icon: RiEarthFill,
    title: "Global Education Trends",
    description:
      "Explore international learning models, global success stories, and future-ready educational innovations.",
    iconBgColor: "#46c1a3",
    hoverBorderColor: "#46c1a3",
  },
  {
    icon: RiChatVoiceFill,
    title: "Panel Discussions",
    description:
      "Experience dynamic conversations between experts discussing challenges, reforms, and future solutions in education.",
    iconBgColor: "#ffb84f",
    hoverBorderColor: "#ffb84f",
  },
  {
    icon: RiPresentationFill,
    title: "Showcase & Exhibitions",
    description:
      "Visit interactive booths featuring new learning platforms, digital solutions, books, and smart educational products.",
    iconBgColor: "#b97bff",
    hoverBorderColor: "#b97bff",
  },
];

export default function FeaturesSection() {
  return (
    <section className="lg:py-30 py-20">
      <div className="container">
        <div
          className="relative inline-block md:mb-14 mb-10"
          data-sal="slide-right"
          data-sal-duration="800"
          data-sal-delay="200"
        >
          <h2 className="lg:text-7xl md:text-5xl font-bold">
            Conference Features
          </h2>
          <Image
            src={educationTitleShape.src}
            alt=""
            width={educationTitleShape.width}
            height={educationTitleShape.height}
            className="absolute -top-7 ltr:-right-24 rtl:-left-24 rtl:scale-x-[-1] hidden xl:block dark:invert"
          />
        </div>
        <div className="grid grid-cols-12 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="col-span-12 lg:col-span-4 md:col-span-6"
              >
                <div
                  className="border p-7 h-full -transition-all -duration-300 ease-linear rounded-xl ltr:border-r-6 rtl:border-l-6 border-b-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                  style={
                    {
                      "--hover-color": feature.hoverBorderColor,
                    } as React.CSSProperties & { "--hover-color": string }
                  }
                  data-sal="slide-up"
                  data-sal-duration="800"
                  data-sal-delay="200"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor =
                      feature.hoverBorderColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "";
                  }}
                >
                  <div
                    className="inline-flex items-center justify-center size-20 rounded-full mb-7 border-b-4 border-r-4 text-black"
                    style={{
                      backgroundColor: feature.iconBgColor,
                    }}
                  >
                    <IconComponent className="text-3xl" />
                  </div>
                  <h3 className="mb-4 font-bold text-3xl transition-all duration-300">
                    <Link href="#!">{feature.title}</Link>
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
