"use client";

import Image from "next/image";

import sponsor1 from "../../../../assets/images/freelancer/freelancer-sponsor-1.png";
import sponsor2 from "../../../../assets/images/freelancer/freelancer-sponsor-2.png";
import sponsor3 from "../../../../assets/images/freelancer/freelancer-sponsor-3.png";
import sponsor4 from "../../../../assets/images/freelancer/freelancer-sponsor-4.png";
import sponsor5 from "../../../../assets/images/freelancer/freelancer-sponsor-5.png";
import sponsor6 from "../../../../assets/images/freelancer/freelancer-sponsor-6.png";
import sponsor7 from "../../../../assets/images/freelancer/freelancer-sponsor-7.png";
import sponsor8 from "../../../../assets/images/freelancer/freelancer-sponsor-8.png";
import sponsor9 from "../../../../assets/images/freelancer/freelancer-sponsor-9.png";
import sponsor10 from "../../../../assets/images/freelancer/freelancer-sponsor-10.png";
import sponsor11 from "../../../../assets/images/freelancer/freelancer-sponsor-11.png";
import sponsor12 from "../../../../assets/images/freelancer/freelancer-sponsor-12.png";

const sponsorColumns = [
  {
    className:
      "col-span-12 xl:col-span-2 lg:col-span-3 md:col-span-4 sm:col-span-6 space-y-6 xl:space-y-0",
    items: [
      { img: sponsor1, extraClass: "xl:mt-6" },
      { img: sponsor2, extraClass: "xl:mt-6" },
    ],
  },
  {
    className:
      "col-span-12 xl:col-span-2 lg:col-span-3 md:col-span-4 sm:col-span-6 space-y-6 2xl:space-y-0",
    items: [
      { img: sponsor3, extraClass: "" },
      { img: sponsor4, extraClass: "xl:mt-6" },
    ],
  },
  {
    className:
      "col-span-12 xl:col-span-2 lg:col-span-3 md:col-span-4 sm:col-span-6 space-y-6 2xl:space-y-0",
    items: [
      { img: sponsor5, extraClass: "xl:mt-6" },
      { img: sponsor6, extraClass: "xl:mt-6" },
    ],
  },
  {
    className:
      "col-span-12 xl:col-span-2 lg:col-span-3 md:col-span-4 sm:col-span-6 space-y-6 2xl:space-y-0",
    items: [
      { img: sponsor7, extraClass: "" },
      { img: sponsor8, extraClass: "xl:mt-6" },
    ],
  },
  {
    className:
      "col-span-12 xl:col-span-2 lg:col-span-3 md:col-span-4 sm:col-span-6 space-y-6 2xl:space-y-0",
    items: [
      { img: sponsor9, extraClass: "xl:mt-6" },
      { img: sponsor10, extraClass: "xl:mt-6" },
    ],
  },
  {
    className:
      "col-span-12 xl:col-span-2 lg:col-span-3 md:col-span-4 sm:col-span-6 space-y-6 2xl:space-y-0",
    items: [
      { img: sponsor11, extraClass: "" },
      { img: sponsor12, extraClass: "xl:mt-6" },
    ],
  },
];

export default function SponsorSection() {
  return (
    <section className="lg:pb-30 pb-20">
      <div className="2xl:px-40 lg:px-10 px-5">
        <h2
          className="xl:text-6xl md:text-5xl uppercase text-center font-anton font-medium tracking-[2px] mb-12 leading-snug"
          data-sal="slide-up"
          data-sal-duration="800"
          data-sal-delay="200"
        >
          OFFICIAL SPONSORS
        </h2>

        <div className="grid grid-cols-12 gap-6">
          {sponsorColumns.map((column, colIndex) => (
            <div key={colIndex} className={column.className}>
              {column.items.map((item, idx) => (
                <div
                  key={idx}
                  className={`border rounded-xl p-3 w-full h-30 inline-flex items-center justify-center border-l-4 border-b-4 ${item.extraClass}`}
                  data-sal="flip-up"
                  data-sal-duration="800"
                  data-sal-delay="200"
                >
                  <Image
                    src={item.img.src}
                    alt=""
                    width={item.img.width}
                    height={item.img.height}
                    className="dark:invert"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
