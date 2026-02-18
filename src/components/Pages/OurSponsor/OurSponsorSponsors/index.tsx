"use client";

import Image from "next/image";

import image1 from "../../../../assets/images/education/education-sponsor-1.png";
import image2 from "../../../../assets/images/education/education-sponsor-2.png";
import image3 from "../../../../assets/images/education/education-sponsor-3.png";
import image4 from "../../../../assets/images/education/education-sponsor-4.png";
import image5 from "../../../../assets/images/education/education-sponsor-5.png";
import image6 from "../../../../assets/images/education/education-sponsor-6.png";
import image7 from "../../../../assets/images/education/education-sponsor-7.png";
import image8 from "../../../../assets/images/education/education-sponsor-8.png";
import image9 from "../../../../assets/images/education/education-sponsor-9.png";
import image10 from "../../../../assets/images/education/education-sponsor-10.png";
import image11 from "../../../../assets/images/education/education-sponsor-11.png";
import image12 from "../../../../assets/images/education/education-sponsor-12.png";

// Array of sponsor image sources
const sponsors = [
  { src: image1, dataSal: "flip-left", hoverColor: "#6AC3FF" },
  { src: image2, dataSal: "flip-left", hoverColor: "#6AFFB7" },
  { src: image3, dataSal: "flip-right", hoverColor: "#FFD66A" },
  { src: image4, dataSal: "flip-right", hoverColor: "#FF9AA2" },
  { src: image5, dataSal: "flip-left", hoverColor: "#B28DFF" },
  { src: image6, dataSal: "flip-left", hoverColor: "#6AE3FF" },
  { src: image7, dataSal: "flip-right", hoverColor: "#FFB86A" },
  { src: image8, dataSal: "flip-right", hoverColor: "#7CFF6A" },
  { src: image9, dataSal: "flip-left", hoverColor: "#FF6AD5" },
  { src: image10, dataSal: "flip-left", hoverColor: "#6A7BFF" },
  { src: image11, dataSal: "flip-right", hoverColor: "#FFE66A" },
  { src: image12, dataSal: "flip-right", hoverColor: "#6AFFE8" },
];

export default function OurSponsorSponsor() {
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
            // Our Sponsors
          </p>
          <h2
            className="font-bold md:text-5xl leading-snug "
            data-sal="zoom-in"
            data-sal-duration="800"
            data-sal-delay="200"
          >
            Meet the Organizations Powering Our Event
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="col-span-12 lg:col-span-3 md:col-span-6"
            >
              <div
                className={`border rounded-xl p-9 border-r-6 border-b-6 transition-all duration-300 hover:bg-[${sponsor.hoverColor}]`}
                data-sal={sponsor.dataSal}
                data-sal-duration="800"
                data-sal-delay="200"
              >
                <Image
                  src={sponsor.src}
                  alt={`Sponsor ${index + 1}`}
                  className="dark:invert"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
