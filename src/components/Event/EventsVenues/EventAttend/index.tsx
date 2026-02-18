"use client";

import {
  RiBuildingLine,
  RiParkingBoxLine,
  RiSoundModuleLine,
  RiWifiLine,
} from "@remixicon/react";

const AttendDat = [
  {
    icon: <RiBuildingLine />,
    name: "Modern Event Halls",
    info: "Spacious and modern halls designed for comfort, fully air-conditioned with flexible layouts to accommodate all event types.",
    BeforeClass:
      "size-19 rounded-xl bg-[#2563EB] text-white inline-flex items-center justify-center relative z-10 transition-all duration-500 group-hover:scale-110",
    AfterClass:
      "size-19 rounded-xl bg-[#2563EB] opacity-30 inset-0 ltr:rotate-34 rtl:rotate-[-34deg] absolute transition-all duration-500 ltr:group-hover:rotate-[-37deg] rtl:group-hover:rotate-37 group-hover:opacity-50",
    TextHoverClass:
      "text-2xl mb-2 transition-colors duration-300 group-hover:text-[#2563EB]",
    hoverColor: "hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100",
  },
  {
    icon: <RiSoundModuleLine />,
    name: "Advanced Audio & Visual",
    info: "Advanced sound systems with clear audio and high-resolution LED screens for immersive event experiences.",
    BeforeClass:
      "size-19 rounded-xl bg-[#16A34A] text-white inline-flex items-center justify-center relative z-10 transition-all duration-500 group-hover:scale-110",
    AfterClass:
      "size-19 rounded-xl bg-[#16A34A] opacity-30 inset-0 ltr:rotate-34 rtl:rotate-[-34deg] absolute transition-all duration-500 ltr:group-hover:rotate-[-37deg] rtl:group-hover:rotate-37 group-hover:opacity-50",
    TextHoverClass:
      "text-2xl mb-2 transition-colors duration-300 group-hover:text-[#16A34A]",
    hoverColor: "hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100",
  },
  {
    icon: <RiWifiLine />,
    name: "High-Speed Wi-Fi",
    info: "Fast and reliable internet across the venue supporting multiple devices seamlessly for all users with high-speed connectivity.",
    BeforeClass:
      "size-19 rounded-xl bg-[#9333EA] text-white inline-flex items-center justify-center relative z-10 transition-all duration-500 group-hover:scale-110",
    AfterClass:
      "size-19 rounded-xl bg-[#9333EA] opacity-30 inset-0 ltr:rotate-34 rtl:rotate-[-34deg] absolute transition-all duration-500 ltr:group-hover:rotate-[-37deg] rtl:group-hover:rotate-37 group-hover:opacity-50",
    TextHoverClass:
      "text-2xl mb-2 transition-colors duration-300 group-hover:text-[#9333EA]",
    hoverColor:
      "hover:bg-gradient-to-r hover:from-purple-50 hover:to-purple-100",
  },
  {
    icon: <RiParkingBoxLine />,
    name: "Parking & Accessibility",
    info: "Ample parking for guests with smooth entry/exit and full accessibility for wheelchair users and differently-abled attendees.",
    BeforeClass:
      "size-19 rounded-xl bg-[#EA580C] text-white inline-flex items-center justify-center relative z-10 transition-all duration-500 group-hover:scale-110",
    AfterClass:
      "size-19 rounded-xl bg-[#EA580C] opacity-30 inset-0 ltr:rotate-34 rtl:rotate-[-34deg] absolute transition-all duration-500 ltr:group-hover:rotate-[-37deg] rtl:group-hover:rotate-37 group-hover:opacity-50",
    TextHoverClass:
      "text-2xl mb-2 transition-colors duration-300 group-hover:text-[#EA580C]",
    hoverColor:
      "hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100",
  },
];

export default function EventAttend() {
  return (
    <>
      <section className="lg:py-30 py-20 bg-[#f4f4f4] dark:bg-[#1F1F1F]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-15">
            <p
              className="mb-2 font-medium uppercase tracking-[1px]"
              data-sal="zoom-in"
              data-sal-duration="800"
              data-sal-delay="100"
            >
              // Event Information
            </p>

            <h2
              className="font-bold md:text-5xl leading-snug"
              data-sal="zoom-in"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              Why You Should Attend This Event Conference In 2026
            </h2>
          </div>
          <div className="grid grid-cols-12 gap-6">
            {AttendDat.map((item, index) => (
              <div
                key={index}
                className="col-span-12 xl:col-span-3 md:col-span-6 lg:col-span-4"
              >
                <div
                  className={`bg-white dark:bg-black p-7 rounded-xl h-full transition-transform duration-500 ease-out hover:scale-105 hover:shadow-2xl ${item.hoverColor} group`}
                  data-sal="flip-up"
                  data-sal-duration="800"
                  data-sal-delay={100 + index * 100}
                >
                  <div className="relative mb-8">
                    <div className={item.BeforeClass}>{item.icon}</div>
                    <div className={item.AfterClass}></div>
                  </div>
                  <h3 className={item.TextHoverClass}>
                    <a href="#1">{item.name}</a>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300 group-hover:text-gray-800">
                    {item.info}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
