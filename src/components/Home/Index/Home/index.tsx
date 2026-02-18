"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { RiCalendarCheckFill, RiMapPinLine } from "@remixicon/react";

// Import Swiper styles (core + fade effect)
import "swiper/css";
import "swiper/css/effect-fade";

// Import images
import businessHomeBg from "../../../../assets/images/business/business-home-bg.jpg";
import businessHomeShape from "../../../../assets/images/business/business-home-shape.jpg";
import businessHomePerson1 from "../../../../assets/images/business/business-home-person1.png";
import businessHomePerson2 from "../../../../assets/images/business/business-home-person2.png";
import businessHomePerson3 from "../../../../assets/images/business/business-home-person3.png";

interface HeroSlide {
  title: string;
  description: string;
  number: string;
  buttonText: string;
  buttonHref: string;
  date: string;
  location: string;
  personImage: {
    src: string;
    width: number;
    height: number;
    alt: string;
    flip?: boolean;
  };
}

const heroSlides: HeroSlide[] = [
  {
    title: "Summit 2026",
    description:
      "Join industry leaders, innovators, and entrepreneurs for a 3-day immersive experience focused on growth strategies, digital transformation, and modern business solutions.",
    number: "22",
    buttonText: "Join Conference",
    buttonHref: "#!",
    date: "12–14 August 2026",
    location: "Silicon Avenue, San Francisco, USA",
    personImage: {
      src: businessHomePerson1.src,
      width: businessHomePerson1.width,
      height: businessHomePerson1.height,
      alt: "Business person",
    },
  },
  {
    title: "Biz Expo",
    description:
      "Discover breakthrough ideas, powerful tools, and future-driven business models crafted to elevate brands and reshape global markets.",
    number: "25",
    buttonText: "Register Now",
    buttonHref: "#!",
    date: "15–17 July 2026",
    location: "Expo City Convention Hall, Dubai",
    personImage: {
      src: businessHomePerson2.src,
      width: businessHomePerson2.width,
      height: businessHomePerson2.height,
      alt: "Business person",
      flip: true,
    },
  },
  {
    title: "FutureCon",
    description:
      "Discover breakthrough ideas, global insights, and high-impact strategies designed to empower leaders and accelerate business transformation.",
    number: "14",
    buttonText: "Discover More",
    buttonHref: "#!",
    date: "12–14 November 2026",
    location: "International Convention Plaza, Tokyo, Japan",
    personImage: {
      src: businessHomePerson3.src,
      width: businessHomePerson3.width,
      height: businessHomePerson3.height,
      alt: "Business person",
      flip: true,
    },
  },
];

export default function HomeSection() {
  return (
    <section
      className="relative lg:pt-30 lg:pb-0 pb-10 pt-30 text-white bg-cover overflow-hidden"
      style={{
        backgroundImage: `url(${businessHomeBg.src})`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(100deg,#032530f2_26%,#0325306e_68%)]"></div>

      {/* Background Shape */}
      <Image
        src={businessHomeShape.src}
        alt=""
        width={businessHomeShape.width}
        height={businessHomeShape.height}
        className="absolute inset-0 opacity-60 hidden xl:block w-full h-full object-cover"
      />

      <div className="lg:px-20 px-5 relative z-10">
        <Swiper
          dir="ltr"
          className="heroswiper"
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          loop
          speed={800}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-12 gap-6 items-center">
                <div className="col-span-12 2xl:col-span-8">
                  <h1
                    className="xl:text-[clamp(60px,14vw,130px)] md:text-6xl md:mb-7 mb-4 leading-[100%] uppercase font-bold text-transparent [-webkit-text-stroke:2px_#fff]"
                    data-sal="flip-up"
                    data-sal-duration="1000"
                    data-sal-delay="200"
                  >
                    {slide.title}
                  </h1>

                  <h2 className="lg:text-7xl md:text-5xl font-sail font-medium leading-[1.2]">
                    {index === 0 && (
                      <>
                        Empower Your{" "}
                        <span className="bg-white/20 backdrop-blur-sm md:px-5 px-4 md:p-1 inline-block border border-[#c0f037]">
                          Business
                        </span>{" "}
                        for the Future
                      </>
                    )}
                    {index === 1 && (
                      <>
                        Ignite Your{" "}
                        <span className="bg-white/20 backdrop-blur-sm md:px-5 px-4 md:p-1 inline-block border border-[#c0f037]">
                          Enterprise
                        </span>{" "}
                        Growth For Tomorrow
                      </>
                    )}
                    {index === 2 && (
                      <>
                        Build a{" "}
                        <span className="bg-white/20 backdrop-blur-sm md:p-1 px-4 inline-block border border-[#c0f037]">
                          Smarter
                        </span>{" "}
                        Tomorrow With Innovation
                      </>
                    )}
                  </h2>

                  <div className="flex md:mt-10 mt-4 md:gap-30 gap-5 items-center mb-10 flex-wrap md:flex-nowrap">
                    <p className="max-w-xl text-gray-300 text-xl">
                      {slide.description}
                    </p>

                    <h3 className="lg:text-8xl md:text-6xl text-4xl font-bold">
                      &quot;{slide.number}&quot;
                    </h3>
                  </div>

                  <div className="flex items-center lg:gap-12 gap-5 ps-3 flex-wrap md:flex-nowrap">
                    <Link
                      href={slide.buttonHref}
                      className="btn text-lg rounded-none group border hover:border-[#c0f037] hover:text-[#c0f037] text-black tracking-[1px] uppercase font-medium relative transition-all duration-300 bg-[#c0f037] hover:bg-transparent inline-block hover:rotate-[2deg]"
                    >
                      {slide.buttonText}
                      <span className="group-hover:bg-[#c0f037] size-3 rotate-[45deg] block absolute ltr:-left-1 rtl:-right-1 -top-1 transition-all duration-300 group-hover:scale-125 bg-white"></span>
                    </Link>

                    <div className="flex lg:gap-10 flex-wrap md:flex-nowrap gap-3">
                      <p>
                        <RiCalendarCheckFill className="inline me-1" />
                        {slide.date}
                      </p>
                      <div className="border border-white/50"></div>
                      <p>
                        <RiMapPinLine className="inline me-1" />
                        {slide.location}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 xl:col-span-4">
                  <Image
                    src={slide.personImage.src}
                    alt={slide.personImage.alt}
                    width={slide.personImage.width}
                    height={slide.personImage.height}
                    className={`w-full h-full object-cover 2xl:block hidden ${slide.personImage.flip ? "scale-x-[-1]" : ""}`}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
