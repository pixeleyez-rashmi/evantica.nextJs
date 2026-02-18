"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiCheckboxCircleLine, RiArrowRightUpLine } from "@remixicon/react";

// Import background image
import pricingBg from "../../../../assets/images/freelancer/freelancer-pricing-bg.jpg";

// Import shape images (light mode)
import pricingShape1 from "../../../../assets/images/freelancer/freelancer-pricing-shape1.png";
import pricingShape2 from "../../../../assets/images/freelancer/freelancer-pricing-shape2.png";
import pricingShape3 from "../../../../assets/images/freelancer/freelancer-pricing-shape3.png";

// Import shape images (dark mode)
import pricingDarkShape1 from "../../../../assets/images/freelancer/freelancer-pricing-dark-shape1.png";
import pricingDarkShape2 from "../../../../assets/images/freelancer/freelancer-pricing-dark-shape2.png";
import pricingDarkShape3 from "../../../../assets/images/freelancer/freelancer-pricing-dark-shape3.png";

interface PricingFeature {
  text: string;
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  bgColor: string;
  bgColorDark: string;
  shapeLight: typeof pricingShape1;
  shapeDark: typeof pricingDarkShape1;
  buttonBg: string;
  buttonHoverColor: string;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Basic Package",
    price: "$49",
    description:
      "Perfect for individuals attending general sessions with standard amenities.",
    features: [
      { text: "Access to all general sessions" },
      { text: "Complimentary lunch" },
      { text: "Conference materials" },
      { text: "Standard support" },
      { text: "Free event Wi-Fi access" },
    ],
    bgColor: "#f8ebff",
    bgColorDark: "#4c1d64",
    shapeLight: pricingShape1,
    shapeDark: pricingDarkShape1,
    buttonBg: "#80f8ab",
    buttonHoverColor: "#62abff",
  },
  {
    name: "Standard Package",
    price: "$99",
    description:
      "Great for attendees who want access to extra workshops and networking sessions.",
    features: [
      { text: "All Basic features" },
      { text: "Workshop access" },
      { text: "Reserved seating" },
      { text: "Premium refreshments" },
      { text: "Support desk access" },
    ],
    bgColor: "#ddfff5",
    bgColorDark: "#2aa983",
    shapeLight: pricingShape2,
    shapeDark: pricingDarkShape2,
    buttonBg: "#62abff",
    buttonHoverColor: "#ffa762",
  },
  {
    name: "Premium Package",
    price: "$200",
    description:
      "Ideal for attendees who want access to all sessions, workshops opportunities.",
    features: [
      { text: "All Standard features" },
      { text: "VIP workshop access" },
      { text: "Front Row Access" },
      { text: "Premium conference kit" },
      { text: "Access to recorded sessions" },
    ],
    bgColor: "#fffad6",
    bgColorDark: "#7c6f0a",
    shapeLight: pricingShape3,
    shapeDark: pricingDarkShape3,
    buttonBg: "#ffa762",
    buttonHoverColor: "#80f8ab",
  },
];

export default function PricingSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date (you can customize this)
    const targetDate = new Date("2026-03-10T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (value: number) => {
    return value.toString().padStart(2, "0");
  };

  const countdownItems = [
    {
      id: "days",
      value: timeLeft.days,
      label: "Days",
      outlineColor: "#ff8c94",
    },
    {
      id: "hours",
      value: timeLeft.hours,
      label: "Hrs",
      outlineColor: "#8caaff",
    },
    {
      id: "minutes",
      value: timeLeft.minutes,
      label: "Mins",
      outlineColor: "#94ffc2",
    },
    {
      id: "seconds",
      value: timeLeft.seconds,
      label: "Secs",
      outlineColor: "#fffad6",
    },
  ];

  return (
    <section
      className="lg:py-40 py-20 bg-cover relative z-10"
      style={{
        backgroundImage: `url(${pricingBg.src})`,
      }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(84deg,rgba(0,0,0,0.8)_30.66%,rgba(0,0,0,0.46)_85.87%)] -z-10" />
      <div className="absolute bottom-0 left-0 w-full h-110 bg-white dark:bg-black" />

      <div className="container">
        <div className="grid grid-cols-12 gap-6 lg:mb-25 mb-12 items-center text-white">
          <div
            className="col-span-12 lg:col-span-5"
            data-sal="slide-right"
            data-sal-duration="800"
            data-sal-delay="200"
          >
            <h2 className="xl:text-6xl md:text-5xl uppercase font-anton font-medium tracking-[2px] mb-4 leading-snug">
              Pick the Right Pass for Our Events
            </h2>
            <p className="text-gray-300">
              Join our Freelancer Meetups and choose a pass that fits your
              needs. Explore our pricing tiers and secure your spot today!
            </p>
          </div>

          <div
            className="col-span-12 lg:col-span-6 lg:col-end-13"
            data-sal="slide-left"
            data-sal-duration="800"
            data-sal-delay="200"
          >
            <div className="flex items-center gap-10 lg:justify-end flex-wrap">
              {countdownItems.map((item) => (
                <div
                  key={item.id}
                  className="outline-3 outline-offset-8 rounded-full xl:size-28 size-28 lg:size-22 text-center flex items-center justify-center flex-col bg-white/30 backdrop-blur-sm shadow-md"
                  style={{
                    outlineColor: item.outlineColor,
                  }}
                >
                  <h2
                    id={item.id}
                    className="font-anton font-medium tracking-[2px] leading-snug"
                  >
                    {formatTime(item.value)}
                  </h2>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="grid grid-cols-12 gap-6"
          data-sal="slide-up"
          data-sal-duration="800"
          data-sal-delay="200"
        >
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="col-span-12 lg:col-span-4 md:col-span-6"
            >
              <div
                className="relative lg:p-9 p-5 h-full transition-colors duration-300 bg-[var(--bg-plan-light)] dark:bg-[var(--bg-plan-dark)]"
                style={
                  {
                    "--bg-plan-light": plan.bgColor,
                    "--bg-plan-dark": plan.bgColorDark,
                  } as React.CSSProperties
                }
              >
                {/* Decorative shapes - Light mode */}
                <Image
                  src={plan.shapeLight.src}
                  alt=""
                  width={plan.shapeLight.width}
                  height={plan.shapeLight.height}
                  className="absolute -top-9 left-0 hidden xl:block dark:hidden"
                />
                <Image
                  src={plan.shapeLight.src}
                  alt=""
                  width={plan.shapeLight.width}
                  height={plan.shapeLight.height}
                  className="absolute -bottom-9 left-0 scale-[-1] hidden xl:block dark:hidden"
                />

                {/* Decorative shapes - Dark mode */}
                <Image
                  src={plan.shapeDark.src}
                  alt=""
                  width={plan.shapeDark.width}
                  height={plan.shapeDark.height}
                  className="absolute -top-9 left-0 hidden xl:dark:block"
                />
                <Image
                  src={plan.shapeDark.src}
                  alt=""
                  width={plan.shapeDark.width}
                  height={plan.shapeDark.height}
                  className="absolute -bottom-9 left-0 scale-[-1] hidden xl:dark:block"
                />

                {/* Header Section */}
                <div className="text-center pb-6 border-b border-black/20 dark:border-white/30 border-dotted text-black dark:text-white">
                  <h3 className="mb-2 uppercase font-anton font-medium tracking-[1px] leading-snug">
                    {plan.name}
                  </h3>
                  <h2>
                    {plan.price}{" "}
                    <span className="text-lg text-gray-600 dark:text-white/60">
                      /per day
                    </span>
                  </h2>
                </div>

                {/* Features Section */}
                <div className="mt-7 text-black dark:text-white">
                  <h5 className="font-medium mb-3 uppercase font-anton tracking-[1px] leading-snug">
                    What's included
                  </h5>
                  <p className="text-gray-700 dark:text-white/80 mb-4">
                    {plan.description}
                  </p>
                  <ul className="mt-6 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="mb-2 flex items-center gap-2"
                      >
                        <RiCheckboxCircleLine className="shrink-0" />
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <Link
                    href="#!"
                    className="relative inline-flex overflow-hidden px-9 py-4 text-xl rounded-full text-black font-medium group"
                    style={{ backgroundColor: plan.buttonBg }}
                  >
                    {[0, 1, 2, 3].map((i) => (
                      <span
                        key={i}
                        className="absolute inset-y-0 translate-y-[150%] transition-all duration-500 group-hover:translate-y-0 group-hover:scale-200"
                        style={{
                          left: `${i * 25}%`,
                          width: "25%",
                          backgroundColor: plan.buttonHoverColor,
                          transitionDelay: `${i * 100}ms`,
                        }}
                      />
                    ))}
                    <span className="relative z-10 inline-flex items-center gap-2">
                      Choose Plan <RiArrowRightUpLine />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
