"use client";

import { useState } from "react";
import { RiDragMove2Fill } from "@remixicon/react";

interface PricingPlan {
  title: string;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  color: string;
  bgColor: string;
  borderColor: string;
  delay: string;
  mt: string;
  features: string[];
}

const pricingData: PricingPlan[] = [
  {
    title: "Conference Pass (Standard)",
    monthlyPrice: 199,
    yearlyPrice: 953,
    description: "Access to all main sessions",
    color: "#FF7F49",
    bgColor: "#FFF0EA",
    borderColor: "#FF7F49",
    delay: "100",
    mt: "xl:mt-20",
    features: [
      "Keynote Sessions",
      "Networking Opportunities",
      "Panel Discussions",
      "Workshops & Seminars",
      "Digital Materials",
    ],
  },
  {
    title: "Conference Pass (Premium)",
    monthlyPrice: 149,
    yearlyPrice: 872,
    description: "Access to all sessions + VIP perks",
    color: "#065039",
    bgColor: "#E8FFF7",
    borderColor: "#065039",
    delay: "200",
    mt: "",
    features: [
      "Keynote Sessions",
      "Networking Opportunities",
      "Panel Discussions",
      "Workshops & Seminars",
      "VIP Lounge Access",
    ],
  },
  {
    title: "Conference Pass (VIP)",
    monthlyPrice: 99,
    yearlyPrice: 456,
    description: "All-access + exclusive sessions",
    color: "#9a5dff",
    bgColor: "#e3d2ff",
    borderColor: "#9a5dff",
    delay: "100",
    mt: "xl:mt-20",
    features: [
      "Keynote Sessions",
      "Networking Opportunities",
      "Panel Discussions",
      "Workshops & Seminars",
      "Meet & Greet with Speakers",
    ],
  },
];

export default function TicketPricingPlan() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="lg:py-30 py-20">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-15">
          <p
            className="mb-2 font-medium uppercase tracking-[1px]"
            data-sal="zoom-in"
            data-sal-duration="800"
            data-sal-delay="100"
          >
            // pricing Plan
          </p>
          <h2
            className="font-bold md:text-5xl leading-snug"
            data-sal="zoom-in"
            data-sal-duration="800"
            data-sal-delay="200"
          >
            Simple Pricing, Flexible Options for Every Attendee
          </h2>
        </div>

        {/* Billing Toggle */}
        <div
          className="max-w-4xl mx-auto text-center mb-12 flex flex-wrap justify-center items-center md:gap-6 gap-3"
          data-sal="zoom-in"
          data-sal-duration="800"
          data-sal-delay="200"
        >
          <button
            onClick={() => setIsYearly(false)}
            className={`text-[20px] font-semibold transition-colors duration-200 ${
              !isYearly
                ? "text-black dark:text-white"
                : "text-gray-400 dark:text-gray-500"
            }`}
          >
            Billed Monthly
          </button>

          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isYearly}
              onChange={() => setIsYearly((prev) => !prev)}
              className="sr-only peer"
            />
            <div className="w-14 h-8 bg-black dark:bg-white rounded-full transition-all"></div>
            <div className="absolute left-1 top-1 w-6 h-6 bg-white dark:bg-black rounded-full shadow-md transition-all peer-checked:translate-x-6"></div>
          </label>

          <button
            onClick={() => setIsYearly(true)}
            className={`text-[20px] transition-colors duration-200 ${
              isYearly
                ? "text-black dark:text-white font-semibold"
                : "text-gray-400 dark:text-gray-500"
            }`}
          >
            Billed Yearly
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-12 2xl:gap-10 gap-6">
          {pricingData.map((plan, index) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

            return (
              <div
                key={index}
                className="col-span-12 xl:col-span-4 md:col-span-6"
              >
                <div
                  className={`overflow-hidden ${plan.mt}`}
                  data-sal="slide-up"
                  data-sal-duration="800"
                  data-sal-delay={plan.delay}
                >
                  {/* Card Header */}
                  <div
                    style={{ backgroundColor: plan.color }}
                    className="text-white text-center shadow relative"
                  >
                    <div className="p-7 border-b border-white/40">
                      <h3 className="text-2xl font-semibold">{plan.title}</h3>
                    </div>
                    <div className="p-7">
                      <h2 className="text-6xl md:text-7xl font-bold mb-1 transition-all duration-300">
                        ${price}
                      </h2>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="relative md:mx-6 mx-4">
                    {/* The Folded Corner (Triangle) */}
                    <div
                      style={{
                        borderBottomColor: "transparent",
                        borderLeftColor: plan.color,
                      }}
                      className={`absolute -top-[15px] -z-10 w-0 h-0 border-b-[40px] border-l-[40px] 
      ltr:-left-10 ltr:scale-x-[-1] 
      rtl:-right-10 rtl:scale-x-[1]`}
                    ></div>

                    {/* The Main Content Box with Clip Path */}
                    <div
                      style={{ backgroundColor: plan.bgColor }}
                      className="transition duration-600 ease-in-out relative z-10 xl:p-10 p-6
      ltr:[clip-path:polygon(0_0,100%_0,100%_85%,75%_100%,0_100%)] 
      rtl:[clip-path:polygon(0_0,100%_0,100%_100%,25%_100%,0_85%)]"
                    >
                      <ul className="flex flex-col gap-6 mb-10 text-gray-700 text-[20px] items-start">
                        {plan.features.map((feature, fIndex) => (
                          <li
                            key={fIndex}
                            className="inline-flex items-center gap-2"
                          >
                            <RiDragMove2Fill />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <a
                        href="#!"
                        className="relative inline-block text-xl font-semibold border text-black border-black rounded-xl lg:px-12 lg:py-4 p-3 overflow-hidden group transition-all duration-300 hover:text-white"
                      >
                        <span className="relative z-10">
                          Book Your Pass{" "}
                          <i className="ri-expand-right-line"></i>
                        </span>
                        <span
                          style={{ backgroundColor: plan.color }}
                          className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out rounded-xl"
                        ></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
