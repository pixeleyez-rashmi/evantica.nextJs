"use client";

import Image from "next/image";

import image1 from "../../../../assets/images/education/education-speaker-1.png";
import image2 from "../../../../assets/images/event/con-speaker-2.png";
import image3 from "../../../../assets/images/education/education-speaker-3.png";
import image4 from "../../../../assets/images/event/con-speaker-4.png";
import image5 from "../../../../assets/images/event/con-speaker-1.png";
import image6 from "../../../../assets/images/education/education-speaker-2.png";
import image7 from "../../../../assets/images/event/con-speaker-3.png";
import image8 from "../../../../assets/images/education/education-speaker-4.png";

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
    class: "overflow-hidden rounded-xl relative bg-[#9DD2CA] group",
    classBg: "#9DD2CA",
  },
  {
    image: image2,
    name: "Arjun Patel",
    designation: "Speaker",
    class: "overflow-hidden rounded-xl relative bg-[#FFBC51] group",
    classBg: "#FFBC51",
  },
  {
    image: image3,
    name: "Nora Ibrahim",
    designation: "Speaker",
    class: "overflow-hidden rounded-xl relative bg-[#6AC3FF] group",
    classBg: "#6AC3FF",
  },
  {
    image: image4,
    name: "Liam Chen",
    designation: "Speaker",
    class: "overflow-hidden rounded-xl relative bg-[#ff7f49] group",
    classBg: "#ff7f49",
  },
  {
    image: image5,
    name: "Emma Williams",
    designation: "Speaker",
    class: "overflow-hidden rounded-xl relative bg-[#F6A5C0] group",
    classBg: "#F6A5C0",
  },
  {
    image: image6,
    name: "Rohan Mehta",
    designation: "Speaker",
    class: "overflow-hidden rounded-xl relative bg-[#D4B9FF] group",
    classBg: "#D4B9FF",
  },
  {
    image: image7,
    name: "Nina Torres",
    designation: "Speaker",
    class: "overflow-hidden rounded-xl relative bg-[#6FCF97] group",
    classBg: "#6FCF97",
  },
  {
    image: image8,
    name: "Lucas Zhang",
    designation: "Speaker",
    class: "overflow-hidden rounded-xl relative bg-[#8f9bff] group",
    classBg: "#8f9bff",
  },
];
export default function SpeakersList() {
  return (
    <section className="lg:py-30 py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-15">
          <p
            className="mb-2 font-medium uppercase tracking-[1px]"
            data-sal="zoom-in"
            data-sal-duration="800"
            data-sal-delay="100"
          >
            // Speakers
          </p>

          <h2
            className="font-bold md:text-5xl leading-snug "
            data-sal="zoom-in"
            data-sal-duration="800"
            data-sal-delay="200"
          >
            Meet Our Conference Speakers Lineup
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {speakerData.map((speaker, index) => (
            <div
              key={index}
              className="col-span-12 lg:col-span-3 md:col-span-6"
            >
              <div
                className={speaker.class}
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay="200"
              >
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full"
                />
                <div className="bg-white dark:bg-black border rounded-lg p-4 overflow-hidden absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[90%] h-23 group-hover:h-40 transition-all duration-500">
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
