"use client";

import Link from "next/link";
import {
  RiVipCrown2Line,
  RiShieldStarLine,
  RiDiamondLine,
  RiBuilding4Line,
  RiCheckboxCircleFill,
  RiArrowRightDoubleFill,
} from "@remixicon/react";

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
}

const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "Basic Plan",
    description: "Perfect for individuals starting out",
    price: "$12",
    badge: "Save 10%",
    icon: RiVipCrown2Line,
  },
  {
    id: "standard",
    name: "Standard Plan",
    description: "Great for freelancers & small teams",
    price: "$29",
    badge: "Save 15%",
    icon: RiShieldStarLine,
  },
  {
    id: "premium",
    name: "Premium Plan",
    description: "Ideal for growing businesses",
    price: "$49",
    badge: "Popular",
    icon: RiDiamondLine,
  },
  {
    id: "enterprise",
    name: "Enterprise Plan",
    description: "For organizations with custom needs",
    price: "$99",
    badge: "Best Value",
    icon: RiBuilding4Line,
  },
];

const conferencePassFeatures = [
  "Full-day access to all keynote and breakout sessions.",
  "Entry to networking zones and discussion panels.",
  "Conference kit including badge, schedule, and swag.",
  "Refreshments and lunch during the event.",
  "Access to recorded sessions after the conference.",
];

export default function PricingSection() {
  return (
    <section className="lg:py-30 py-20">
      <div className="container">
        <h2
          className="font-fahkwang mb-6 md:text-5xl leading-snug text-center mb-12 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.2)]"
          data-sal="slide-up"
          data-sal-duration="800"
          data-sal-delay="200"
        >
          Select Your Ideal Ticket Plan
        </h2>

        <div className="grid grid-cols-12 2xl:gap-15 gap-6 items-center">
          {/* Plan list */}
          <div className="col-span-12 xl:col-span-6 space-y-6">
            {pricingPlans.map((plan) => {
              const IconComponent = plan.icon;
              return (
                <div
                  key={plan.id}
                  className="group p-6 px-7 relative bg-[#fff] dark:bg-[#000] border dark:border-white/50 flex items-center gap-5 justify-between flex-wrap md:flex-nowrap"
                >
                  <div className="absolute bg-gradient-to-b from-[#2e0f53] to-[#592da8] -z-10 w-full h-full right-[6px] top-[6px] group-hover:top-0 group-hover:right-0 transition-all duration-300" />
                  <div className="flex gap-7 items-center">
                    <div className="relative z-10 size-15 rounded-full flex items-center justify-center bg-gradient-to-b from-[#2e0f53] to-[#592da8] shrink-0">
                      <IconComponent className="text-white text-2xl" />
                      <span className="absolute border border-[#592da8] rounded-full h-full w-full ltr:left-[4px] rtl:right-[4px] top-[4px] -z-10" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{plan.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {plan.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-7 items-center">
                    <span className="bg-red-50 rounded-lg text-red-600 text-sm p-1 px-2">
                      {plan.badge}
                    </span>
                    <h3 className="text-3xl font-semibold">
                      {plan.price}{" "}
                      <span className="text-lg dark:text-gray-400 text-gray-600 font-medium">
                        /month
                      </span>
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Standard Conference Pass card */}
          <div className="col-span-12 xl:col-span-6">
            <div className="bg-[#fff] dark:bg-[#000] border-[#592da8] border p-7 relative">
              {/* Corners */}
              <div className="absolute w-[16px] h-[16px] border border-[#592da8] z-[1] left-[-16px] top-[-16px] border-l-0 border-t-0 after:content-[''] after:w-[6px] after:h-[6px] after:bg-gradient-to-b after:from-[#2e0f53]  after:to-[#592da8] after:rotate-[42deg] after:absolute after:right-[-4px] after:bottom-[-4px]" />
              <div className="absolute w-[16px] h-[16px] border border-[#592da8] z-[1] right-[-16px] top-[-16px] border-r-0 border-t-0 after:content-[''] after:w-[6px] after:h-[6px] after:bg-gradient-to-b  after:from-[#2e0f53]  after:to-[#592da8] after:rotate-[42deg] after:absolute after:left-[-4px] after:bottom-[-4px]" />
              <div className="absolute w-[16px] h-[16px] border border-[#592da8] z-[1] right-[-16px] bottom-[-16px] border-r-0 border-b-0 after:content-[''] after:w-[6px] after:h-[6px] after:bg-gradient-to-b  after:from-[#2e0f53]  after:to-[#592da8] after:rotate-[42deg] after:absolute after:left-[-4px] after:top-[-4px]" />
              <div className="absolute w-[16px] h-[16px] border border-[#592da8] z-[1] left-[-16px] bottom-[-16px] border-l-0 border-b-0 after:content-[''] after:w-[6px] after:h-[6px] after:bg-gradient-to-b  after:from-[#2e0f53]  after:to-[#592da8] after:rotate-[42deg] after:absolute after:right-[-4px] after:top-[-4px]" />

              <h2 className="mb-6">Standard Conference Pass</h2>

              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Perfect for professionals and creators attending the conference
                to learn, connect, and gain actionable insights from industry
                leaders.
              </p>

              <ul className="space-y-4 mb-7">
                {conferencePassFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <RiCheckboxCircleFill className="text-[#592da8] text-xl" />
                    <p className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>

              <Link
                href="#!"
                className="btn rounded-none text-xl p-4 px-8 bg-[#592da8] text-white relative group inline-block"
              >
                <span className="inline-flex items-center gap-2">
                  Book Your Seat <RiArrowRightDoubleFill />
                </span>
                <span className="absolute border w-full h-full top-[7px] left-[7px] border-[#592da8] group-hover:top-[-7px] group-hover:left-[-7px] transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
