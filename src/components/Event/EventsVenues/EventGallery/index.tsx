"use client";

import Image from "next/image";
import image1 from "../../../../assets/images/event/event-gallery-1.jpg";
import image2 from "../../../../assets/images/event/event-gallery-2.jpg";
import image3 from "../../../../assets/images/event/event-gallery-3.jpg";
import image4 from "../../../../assets/images/event/event-gallery-4.jpg";
import image5 from "../../../../assets/images/event/event-gallery-5.jpg";

// Image paths and titles col1

const colData1 = [
  {
    src: image1,
    badge: "Royal Dining Hall",
    dataSal: "slide-right",
    dataSalDelay: "100",
  },
  {
    src: image2,
    badge: "Luxury Poolside Venue",
    dataSal: "slide-right",
    dataSalDelay: "200",
  },
];
const colData2 = [
  {
    src: image3,
    badge: "Heritage Event Location",
    dataSal: "slide-up",
    dataSalDelay: "200",
  },
];

const colData3 = [
  {
    src: image4,
    badge: "Grand Banquet Hall",
    dataSal: "slide-left",
    dataSalDelay: "100",
  },
  {
    src: image5,
    badge: "Event Conference hall",
    dataSal: "slide-left",
    dataSalDelay: "200",
  },
];

export default function EventGallery() {
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
            // Event Gallery
          </p>

          <h2
            className="font-bold md:text-5xl leading-snug"
            data-sal="zoom-in"
            data-sal-duration="800"
            data-sal-delay="200"
          >
            Explore Highlights From Our Event Locations in 2026
          </h2>
        </div>

        {/* Grid section for gallery images */}
        <div className="grid grid-cols-12 gap-6 items-center">
          {/* col1 */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            {colData1.map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl group"
                data-sal={item.dataSal}
                data-sal-duration="800"
                data-sal-delay={item.dataSalDelay}
              >
                <Image
                  src={item.src}
                  alt={item.badge}
                  className="w-full h-full object-cover block"
                />
                <div className="absolute inset-0 before:content-[''] before:absolute before:top-0 ltr:before:left-[-80%] rtl:before:right-[-80%] before:w-1/2 before:h-full ltr:before:bg-linear-to-r rtl:before:bg-linear-to-l before:from-transparent before:to-white/40 before:skew-x-[-25deg] before:transition-all before:duration-700 ltr:group-hover:before:left-[130%] rtl:group-hover:before:right-[130%]">
                  <h3 className="absolute top-[20%] ltr:left-0 rtl:right-0 w-[320px] bg-black/60 text-white p-4 transform ltr:-translate-x-175 rtl:translate-x-175 scale-[0.1] skew-x-95 transition-all duration-700 group-hover:translate-x-0 group-hover:scale-100 group-hover:skew-x-0">
                    {item.badge}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          {/* col2 */}
          <div className="col-span-12 lg:col-span-4">
            {colData2.map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl group"
                data-sal={item.dataSal}
                data-sal-duration="800"
                data-sal-delay={item.dataSalDelay}
              >
                <Image
                  src={item.src}
                  alt={item.badge}
                  className="w-full h-full object-cover block"
                />
                <div className="absolute inset-0 before:content-[''] before:absolute before:top-0 ltr:before:left-[-80%] rtl:before:right-[-80%] before:w-1/2 before:h-full ltr:before:bg-linear-to-r rtl:before:bg-linear-to-l before:from-transparent before:to-white/40 before:skew-x-[-25deg] before:transition-all before:duration-700 ltr:group-hover:before:left-[130%] rtl:group-hover:before:right-[130%]">
                  <h3 className="absolute top-[20%] ltr:left-0 rtl:right-0 w-[320px] bg-black/60 text-white p-4 transform ltr:-translate-x-175 rtl:translate-x-175 scale-[0.1] skew-x-95 transition-all duration-700 group-hover:translate-x-0 group-hover:scale-100 group-hover:skew-x-0">
                    {item.badge}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          {/* col3 */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            {colData3.map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl group"
                data-sal={item.dataSal}
                data-sal-duration="800"
                data-sal-delay={item.dataSalDelay}
              >
                <Image
                  src={item.src}
                  alt={item.badge}
                  className="w-full h-full object-cover block"
                />
                <div className="absolute inset-0 before:content-[''] before:absolute before:top-0 ltr:before:left-[-80%] rtl:before:right-[-80%] before:w-1/2 before:h-full ltr:before:bg-linear-to-r rtl:before:bg-linear-to-l before:from-transparent before:to-white/40 before:skew-x-[-25deg] before:transition-all before:duration-700 ltr:group-hover:before:left-[130%] rtl:group-hover:before:right-[130%]">
                  <h3 className="absolute top-[20%] ltr:left-0 rtl:right-0 w-[320px] bg-black/60 text-white p-4 transform ltr:-translate-x-175 rtl:translate-x-175 scale-[0.1] skew-x-95 transition-all duration-700 group-hover:translate-x-0 group-hover:scale-100 group-hover:skew-x-0">
                    {item.badge}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
