"use client";

import Image from "next/image";
import image1 from "../../../../assets/images/business/business-gallery-1.jpg";
import image2 from "../../../../assets/images/freelancer/freelancer-gallery2.jpg";
import image3 from "../../../../assets/images/education/education-schedule-3.jpg";
import image4 from "../../../../assets/images/freelancer/freelancer-gallery4.jpg";
import image5 from "../../../../assets/images/freelancer/freelancer-gallery5.jpg";
import image6 from "../../../../assets/images/music/music-blog-2.jpg";
import image7 from "../../../../assets/images/freelancer/freelancer-gallery7.jpg";
import image8 from "../../../../assets/images/freelancer/freelancer-gallery6.jpg";
import { RiCameraFill } from "@remixicon/react";

import { useEffect } from "react";
import "glightbox/dist/css/glightbox.min.css";

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
  {
    src: image3,
    badge: "Luxury Poolside Venue",
    dataSal: "slide-right",
    dataSalDelay: "300",
  },
];
const colData2 = [
  {
    src: image4,
    badge: "Heritage Event Location",
    dataSal: "slide-up",
    dataSalDelay: "100",
    class: "relative overflow-hidden z-9 2xl:h-130 rounded-xl",
  },
  {
    src: image5,
    badge: "Heritage Event Location",
    dataSal: "slide-up",
    dataSalDelay: "200",
    class: "relative overflow-hidden z-9 2xl:h-100 rounded-xl",
  },
];

const colData3 = [
  {
    src: image6,
    badge: "Grand Banquet Hall",
    dataSal: "slide-left",
    dataSalDelay: "100",
  },
  {
    src: image7,
    badge: "Event Conference hall",
    dataSal: "slide-left",
    dataSalDelay: "200",
  },
  {
    src: image8,
    badge: "Event Conference hall",
    dataSal: "slide-left",
    dataSalDelay: "200",
  },
];

export default function EventGallery() {
  useEffect(() => {
    // Dynamically import GLightbox only on client side
    import("glightbox").then((GLightboxModule) => {
      const GLightbox = GLightboxModule.default;

      const lightbox = GLightbox({
        selector: ".glightbox",
        touchNavigation: true,
        loop: true,
        autoplayVideos: true,
      });

      return () => {
        lightbox.destroy();
      };
    });
  }, []);

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
                <span className="absolute inset-0 w-1/2 h-full bg-purple-500/50  ltr:-translate-x-full rtl:translate-x-full ltr:rotate-15 rtl:rotate-[-15deg] opacity-0 invisible transition-all duration-400 ease-in-out group-hover:translate-x-0 group-hover:rotate-0 group-hover:opacity-100 group-hover:visible"></span>
                <span className="absolute inset-0 ltr:right-0 rtl:left-0 ltr:left-auto rtl:right-auto w-1/2 h-full bg-purple-500/50 ltr:translate-x-full rtl:-translate-x-full ltr:rotate-[-15deg] rtl:rotate-15 opacity-0 invisible transition-all duration-400 ease-in-out group-hover:translate-x-0 group-hover:rotate-0 group-hover:opacity-100 group-hover:visible"></span>
                <Image
                  src={item.src}
                  alt={item.badge}
                  className="w-full h-full object-cover block"
                />
                <a
                  href={item.src.src}
                  className="glightbox absolute left-1/2 -top-25 -translate-x-1/2 -translate-y-1/2 opacity-0 invisible text-white z-999 transition-all duration-400 ease-in-out group-hover:top-1/2 group-hover:opacity-100 group-hover:visible"
                  data-gallery="event-gallery"
                >
                  <RiCameraFill className="text-4xl" />
                </a>
              </div>
            ))}
          </div>
          {/* col2 */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            {colData2.map((item, index) => (
              <div
                key={index}
                className="relative group"
                data-sal={item.dataSal}
                data-sal-duration="800"
                data-sal-delay={item.dataSalDelay}
              >
                <div className={item.class}>
                  <span className="absolute inset-0 w-1/2 h-full bg-purple-500/50  ltr:-translate-x-full rtl:translate-x-full ltr:rotate-15 rtl:rotate-[-15deg] opacity-0 invisible transition-all duration-400 ease-in-out group-hover:translate-x-0 group-hover:rotate-0 group-hover:opacity-100 group-hover:visible"></span>
                  <span className="absolute inset-0 ltr:right-0 rtl:left-0 ltr:left-auto rtl:right-auto w-1/2 h-full bg-purple-500/50 ltr:translate-x-full rtl:-translate-x-full ltr:rotate-[-15deg] rtl:rotate-15 opacity-0 invisible transition-all duration-400 ease-in-out group-hover:translate-x-0 group-hover:rotate-0 group-hover:opacity-100 group-hover:visible"></span>
                  <Image
                    src={item.src}
                    alt={item.badge}
                    className="w-full h-full object-cover block"
                  />
                  <a
                    href={item.src.src}
                    className="glightbox absolute left-1/2 -top-25 -translate-x-1/2 -translate-y-1/2 opacity-0 invisible text-white z-999 transition-all duration-400 ease-in-out group-hover:top-1/2 group-hover:opacity-100 group-hover:visible"
                    data-gallery="event-gallery"
                    data-glightbox={`title: ${item.badge}`}
                  >
                    <RiCameraFill className="text-4xl" />
                  </a>
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
                <span className="absolute inset-0 w-1/2 h-full bg-purple-500/50  ltr:-translate-x-full rtl:translate-x-full ltr:rotate-15 rtl:rotate-[-15deg] opacity-0 invisible transition-all duration-400 ease-in-out group-hover:translate-x-0 group-hover:rotate-0 group-hover:opacity-100 group-hover:visible"></span>
                <span className="absolute inset-0 ltr:right-0 rtl:left-0 ltr:left-auto rtl:right-auto w-1/2 h-full bg-purple-500/50 ltr:translate-x-full rtl:-translate-x-full ltr:rotate-[-15deg] rtl:rotate-15 opacity-0 invisible transition-all duration-400 ease-in-out group-hover:translate-x-0 group-hover:rotate-0 group-hover:opacity-100 group-hover:visible"></span>
                <Image
                  src={item.src}
                  alt={item.badge}
                  className="w-full h-full object-cover block"
                />
                <a
                  href={item.src.src}
                  className="glightbox absolute left-1/2 -top-25 -translate-x-1/2 -translate-y-1/2 opacity-0 invisible text-white z-999 transition-all duration-400 ease-in-out group-hover:top-1/2 group-hover:opacity-100 group-hover:visible"
                  data-gallery="event-gallery"
                >
                  <RiCameraFill className="text-4xl" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
