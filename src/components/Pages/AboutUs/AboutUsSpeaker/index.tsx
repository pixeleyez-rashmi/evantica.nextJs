"use client";

import Image from "next/image";
import image1 from "../../../../assets/images/avatar/user-08.jpg";
import image2 from "../../../../assets/images/avatar/user-13.jpg";
import image3 from "../../../../assets/images/avatar/user-06.jpg";
import image4 from "../../../../assets/images/avatar/user-11.jpg";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinLine,
  RiTwitterLine,
} from "@remixicon/react";

const speakers = [
  {
    name: "Alice Johnson",
    role: "Lead Designer",
    image: image1,
    facebook: "#",
    instagram: "#",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Michael Smith",
    role: "Frontend Developer",
    image: image2,
    facebook: "#",
    instagram: "#",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "Sara Williams",
    role: "Project Manager",
    image: image3,
    facebook: "#",
    instagram: "#",
    twitter: "#",
    linkedin: "#",
  },
  {
    name: "David Brown",
    role: "Marketing Specialist",
    image: image4,
    facebook: "#",
    instagram: "#",
    twitter: "#",
    linkedin: "#",
  },
];

export default function AboutUsSpeaker() {
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
            // speaker
          </p>
          <h2
            className="font-bold md:text-5xl leading-snug"
            data-sal="zoom-in"
            data-sal-duration="800"
            data-sal-delay="500"
          >
            Why You Should Attend This Event Conference In 2026
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="col-span-12 md:col-span-6 xl:col-span-3 lg:col-span-4"
            >
              <div
                className="relative w-full h-100 rounded-xl overflow-hidden shadow-lg group"
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay={100 * (index + 1)}
              >
                <div className="absolute inset-0 bg-black transition-transform duration-500 ease-in-out group-hover:-translate-y-24 z-10">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-50"
                  />
                </div>
                <ul className="absolute inset-0 flex justify-center items-center z-20 space-x-3">
                  <li className="transform translate-y-36 opacity-0 transition-all duration-500 delay-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <a
                      href={speaker.facebook}
                      className="size-12 bg-white text-gray-800 rounded-full flex items-center justify-center transition-transform duration-500 hover:rotate-360"
                    >
                      <RiFacebookFill className="text-xl" />
                    </a>
                  </li>
                  <li className="transform translate-y-36 opacity-0 transition-all duration-500 delay-200 group-hover:translate-y-0 group-hover:opacity-100">
                    <a
                      href={speaker.instagram}
                      className="size-12 bg-white text-gray-800 rounded-full flex items-center justify-center transition-transform duration-500 hover:rotate-360"
                    >
                      <RiInstagramLine className="text-xl" />
                    </a>
                  </li>
                  <li className="transform translate-y-36 opacity-0 transition-all duration-500 delay-400 group-hover:translate-y-0 group-hover:opacity-100">
                    <a
                      href={speaker.twitter}
                      className="size-12 bg-white text-gray-800 rounded-full flex items-center justify-center transition-transform duration-500 hover:rotate-360"
                    >
                      <RiTwitterLine className="text-xl" />
                    </a>
                  </li>
                  <li className="transform translate-y-36 opacity-0 transition-all duration-500 delay-600 group-hover:translate-y-0 group-hover:opacity-100">
                    <a
                      href={speaker.linkedin}
                      className="size-12 bg-white text-gray-800 rounded-full flex items-center justify-center transition-transform duration-500 hover:rotate-360"
                    >
                      <RiLinkedinLine className="text-xl" />
                    </a>
                  </li>
                </ul>
                <div className="absolute bottom-0 left-0 w-full h-24 bg-black text-white dark:bg-white dark:text-black flex flex-col items-center text-center justify-center z-30 p-2 opacity-0 group-hover:opacity-100 select-text transition-opacity duration-500">
                  <h3 className="mb-1">
                    <a href="#!">{speaker.name}</a>
                  </h3>
                  <p className="text-gray-400 dark:text-gray-600">
                    {speaker.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
