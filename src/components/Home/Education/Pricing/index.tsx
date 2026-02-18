"use client";

import {
  RiArrowRightLongFill,
  RiCalendarFill,
  RiExpandRightLine,
  RiRhythmLine,
  RiUserFill,
} from "@remixicon/react";
import Image from "next/image";
import titleShape from "../../../../assets/images/education/education-title-shape.jpg";

export default function PricingSection() {
  // Blog data array with different animation delays for each post
  const passData = [
    {
      class:
        "border rounded-xl border-b-7 border-r-7 bg-[#e8fff7] dark:bg-[#00ffa6] overflow-hidden h-full text-black dark:border-white",
      passType: "Education Summit Pass",
      conference: "Campus Explorer",
      price: "$23",
      days: "One Day · Learning & Innovation",
      featureNumber: ["01", "02", "03", "04", "05"],
      features: [
        "Keynote: Future of Education",
        "Interactive Learning Workshops",
        "Student–Mentor Networking",
        "Career Pathway Sessions",
        "Certificate of Participation",
      ],
      animationDelay: "200",
      animationSide: "slide-right",
    },
    {
      class:
        "border rounded-xl border-b-7 border-r-7 bg-[#eef3ff] dark:bg-[#86a7f5] overflow-hidden h-full text-black dark:border-white",
      passType: "VIP Conference Pass",
      conference: "Education Leader",
      price: "$75",
      days: "All Days · Premium Experience",
      featureNumber: ["01", "02", "03", "04", "05"],
      features: [
        "VIP Front-Row Seating",
        "Private Speaker Meet & Greet",
        "Exclusive Strategy Sessions",
        "Premium Networking Dinner",
        "VIP Certificate & Gifts",
      ],
      badge: "Popular",

      animationDelay: "200",
      animationSide: "slide-up",
    },
    {
      class:
        "border rounded-xl border-b-7 border-r-7 bg-[#fff6e5] dark:bg-[#ffd17b] overflow-hidden h-full text-black dark:border-white",
      passType: "Professional Pass",
      conference: "Knowledge Builder",
      price: "$35",
      days: "Full Day · Skill Advancement",
      featureNumber: ["01", "02", "03", "04", "05"],
      features: [
        "All Conference Sessions",
        "Expert Panel Discussions",
        "Hands-on Skill Workshops",
        "Networking Lunch Access",
        "Digital Learning Resources",
      ],

      animationDelay: "200",
      animationSide: "slide-left",
    },
  ];

  return (
    /* Blog Section start*/
    <section className="lg:py-30 py-20">
      <div className="container">
        {/* title section */}
        <div className="max-w-6xl mx-auto text-center mb-14">
          <div
            className="relative inline-block mb-7"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="200"
          >
            <h2 className="lg:text-7xl md:text-5xl font-bold">
              Simple & Transparent Pricing
            </h2>
            <Image
              src={titleShape}
              alt=""
              className="absolute -top-7 ltr:-right-24 rtl:-left-24 rtl:scale-x-[-1] hidden xl:block dark:invert"
            />
          </div>
          <p
            className="text-gray-700 text-[22px] dark:text-gray-300"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="500"
          >
            Choose the perfect conference pass designed for educators,
            institutions, and industry leaders—no hidden fees, just real value.
          </p>
        </div>
        {/* title section end */}

        {/* body section start */}
        <div className="grid grid-cols-12 gap-6">
          {passData.map((pass, index) => (
            <div
              key={index}
              className="col-span-12 xl:col-span-4 md:col-span-6"
            >
              <div
                className={pass.class}
                data-sal={pass.animationSide}
                data-sal-duration="800"
                data-sal-delay={pass.animationDelay} // Apply dynamic delay
              >
                <div className="p-7 pb-9 relative">
                  <p className="uppercase text-gray-700 text-15 tracking-[1px] mb-1">
                    {pass.passType}
                  </p>
                  <h3 className="font-bold mb-10 text-[25px]">
                    {pass.conference}
                  </h3>
                  <h2 className="font-bold text-[80px] mb-1">{pass.price}</h2>
                  <p className="text-gray-700 text-[20px]">{pass.days}</p>
                  {/* Display badge only for Education Leader */}
                  {pass.conference === "Education Leader" && (
                    <span className="text-sm px-4.5 py-1 rounded-full border border-black bg-white border-b-4 border-r-4 font-semibold absolute top-10 end-10 w-fit whitespace-nowrap">
                      {pass.badge}
                    </span>
                  )}
                </div>

                <div className="relative flex items-center">
                  <span className="absolute -left-4.5 size-8 bg-white dark:bg-black dark:border-white rounded-full border"></span>
                  <span className="absolute -right-4.5 size-8 bg-white rounded-full dark:bg-black dark:border-white border"></span>
                  <div className="w-full border-t border-dashed"></div>
                </div>

                <div className="p-7 pt-9">
                  <ul className="space-y-4 mb-13">
                    {/* Map over the featureNumber and features arrays */}
                    {pass.featureNumber.map((featureNumber, idx) => (
                      <li
                        key={idx}
                        className="font-medium text-gray-800 text-[18px] inline-flex items-center gap-2"
                      >
                        <span className="bg-[#f5e9007a] size-6 rounded-full inline-flex items-center justify-center text-13 shrink-0">
                          {featureNumber}
                        </span>
                        {pass.features[idx]}{" "}
                        {/* Display corresponding feature text */}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#!"
                    className="btn uppercase w-full text-xl font-bold border bg-white dark:bg-black border-black dark:border-white dark:text-white dark:hover:text-black rounded-full border-b-5 px-13 py-4 group relative overflow-hidden z-10"
                  >
                    {/* Hover background effect */}
                    <span className="absolute top-1/2 left-1/2 w-0 h-0 bg-[#f5e900] rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:w-140.5 group-hover:h-140.5 -z-10"></span>

                    {/* Button Text with Arrow */}
                    <span>
                      Reserve Your Seat
                      <RiArrowRightLongFill className="ms-1 inline-block" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* body section end */}
      </div>
    </section>
    // section end
  );
}
