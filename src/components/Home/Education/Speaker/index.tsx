"use client";

import Image from "next/image";
import educationTitle from "../../../../assets/images/education/education-title-shape.jpg";

import image1 from "../../../../assets/images/education/education-speaker-1.png";
import image2 from "../../../../assets/images/education/education-speaker-2.png";
import image3 from "../../../../assets/images/education/education-speaker-3.png";
import image4 from "../../../../assets/images/education/education-speaker-4.png";
import {
  RiFacebookBoxFill,
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterFill,
} from "@remixicon/react";

// speakers data
export const speakerData = [
  {
    image: image1,
    name: "Sofia Mends",
    designation: "Speaker",
    class:
      "border border-b-6 border-r-6 overflow-hidden rounded-xl relative bg-[#9DD2CA] group",
    classBg: "#9DD2CA",
  },
  {
    image: image2,
    name: "John Doe",
    designation: "Speaker",
    class:
      "border border-b-6 border-r-6 overflow-hidden rounded-xl relative bg-[#FFBC51] group",
    classBg: "#FFBC51",
  },
  {
    image: image3,
    name: "Emma Smith",
    designation: "Speaker",
    class:
      "border border-b-6 border-r-6 overflow-hidden rounded-xl relative bg-[#6AC3FF] group",
    classBg: "#6AC3FF",
  },
  {
    image: image4,
    name: "James Wilson",
    designation: "Speaker",
    class:
      "border border-b-6 border-r-6 overflow-hidden rounded-xl relative bg-[#ff7f49] group",
    classBg: "#ff7f49",
  },
];

export default function SpeakerSection() {
  return (
    <section className="lg:pb-30 pb-20">
      <div className="container">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <div
            className="relative inline-block mb-7"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="200"
          >
            <h2 className="lg:text-7xl md:text-5xl font-bold">
              Meet Our Visionary Speakers
            </h2>
            <Image
              src={educationTitle}
              alt=""
              className="absolute -top-7 ltr:-right-24 rtl:-left-24 rtl:scale-x-[-1] hidden xl:block dark:invert"
            ></Image>
          </div>
          <p
            className="text-gray-700 text-[22px] dark:text-gray-300"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="500"
          >
            Learn from global educators, policymakers, and edtech leaders
            shaping the future of learning. Insights from visionary educators,
            policymakers, and edtech innovators worldwide.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {speakerData.map((speaker, index) => (
            <div
              key={index}
              className="col-span-12 lg:col-span-3 md:col-span-6"
            >
              <div className={speaker.class}>
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full"
                />
                <div className="bg-white dark:bg-black border rounded-lg p-4 overflow-hidden absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[90%] border-b-4 border-r-4 h-23 group-hover:h-40 transition-all duration-500">
                  <h3
                    className="font-bold transition-all duration-300"
                    style={
                      {
                        "--hover-color": speaker.classBg,
                      } as React.CSSProperties
                    }
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = speaker.classBg)
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                  >
                    <a href="#!">{speaker.name}</a>
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {speaker.designation}
                  </p>
                  <div className="flex items-center gap-2 mt-4">
                    <a
                      className="size-10 hover:bg-[#9DD2CA] border border-b-3 border-r-3 transition-all duration-300 rounded-full flex items-center justify-center"
                      href="#!"
                    >
                      <RiFacebookFill />
                    </a>
                    <a
                      href="#!"
                      className="size-10 hover:bg-[#FFBC51] border border-b-3 border-r-3 transition-all duration-300 rounded-full flex items-center justify-center"
                    >
                      <RiInstagramFill />
                    </a>

                    <a
                      href="#!"
                      className="size-10 hover:bg-[#6AC3FF] border border-b-3 border-r-3 transition-all duration-300 rounded-full flex items-center justify-center"
                    >
                      <RiLinkedinFill />
                    </a>

                    <a
                      href="#!"
                      className="size-10 hover:bg-[#ff7f49] border border-b-3 border-r-3 transition-all duration-300 rounded-full flex items-center justify-center"
                    >
                      <RiTwitterFill />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
