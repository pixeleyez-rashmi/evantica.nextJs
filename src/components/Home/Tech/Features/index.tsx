"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

// Images
import techTechnology from "../../../../assets/images/tech/tech-technology.png";
import techFutureTechnology from "../../../../assets/images/tech/tech-future-technology.png";
import techBrain from "../../../../assets/images/tech/tech-brain.png";
import techBiotechnology from "../../../../assets/images/tech/tech-biotechnology.png";
import techBusinessIntelligence from "../../../../assets/images/tech/tech-business-intelligence.png";
import techTeam from "../../../../assets/images/tech/tech-team.png";
import techSlideLeft from "../../../../assets/images/tech/tech-slide-left.png";
import techSlideRight from "../../../../assets/images/tech/tech-slide-right.png";

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
}

const featureItems: FeatureItem[] = [
  {
    id: 1,
    title: "Tech Breakthroughs",
    description:
      "Dive into the newest advances in AI, automation, and immersive technologies redefining the digital.",
    image: {
      src: techTechnology.src,
      width: techTechnology.width,
      height: techTechnology.height,
      alt: "Tech Breakthroughs",
    },
  },
  {
    id: 2,
    title: "Future-Ready Solutions",
    description:
      "Discover powerful cloud, data, and security innovations engineered for tomorrow’s global challenges.",
    image: {
      src: techFutureTechnology.src,
      width: techFutureTechnology.width,
      height: techFutureTechnology.height,
      alt: "Future-Ready Solutions",
    },
  },
  {
    id: 3,
    title: "Visionary Industry Leaders",
    description:
      "Gain insights from trailblazers shaping the future of innovation across tech, design, and emerging.",
    image: {
      src: techBrain.src,
      width: techBrain.width,
      height: techBrain.height,
      alt: "Visionary Industry Leaders",
    },
  },
  {
    id: 4,
    title: "Tech Experiences",
    description:
      "Engage with interactive demos, prototypes, and live showcases of next-gen tools and real-world technologies.",
    image: {
      src: techBiotechnology.src,
      width: techBiotechnology.width,
      height: techBiotechnology.height,
      alt: "Tech Experiences",
    },
  },
  {
    id: 5,
    title: "Creative Intelligence Labs",
    description:
      "Explore collaborative spaces blending technology, creativity, and problem-solving for innovation.",
    image: {
      src: techBusinessIntelligence.src,
      width: techBusinessIntelligence.width,
      height: techBusinessIntelligence.height,
      alt: "Creative Intelligence Labs",
    },
  },
  {
    id: 6,
    title: "Global Networking Arena",
    description:
      "Connect with innovators, startups, and industry experts shaping the connected world of 2026.",
    image: {
      src: techTeam.src,
      width: techTeam.width,
      height: techTeam.height,
      alt: "Global Networking Arena",
    },
  },
];

export default function FeaturesSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const prevButtonRef = useRef<HTMLButtonElement | null>(null);
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (swiperRef.current && prevButtonRef.current && nextButtonRef.current) {
      if (
        swiperRef.current.params.navigation &&
        typeof swiperRef.current.params.navigation !== "boolean"
      ) {
        swiperRef.current.params.navigation.prevEl = prevButtonRef.current;
        swiperRef.current.params.navigation.nextEl = nextButtonRef.current;
        swiperRef.current.navigation.init();
        swiperRef.current.navigation.update();
      }
    }
  }, []);

  return (
    <section className="lg:pt-35 lg:pb-30 py-20 overflow-hidden">
      <div className="container">
        <div className="flex items-center gap-2 flex-wrap justify-between lg:mb-15 mb-12">
          <h2
            className="font-fahkwang md:text-5xl leading-snug drop-shadow-[2px_2px_0px_rgba(0,0,0,0.2)]"
            data-sal="slide-right"
            data-sal-duration="800"
            data-sal-delay="200"
          >
            Discover the Features
          </h2>

          <div
            className="inline-flex items-center gap-5"
            data-sal="slide-left"
            data-sal-duration="800"
            data-sal-delay="200"
          >
            <button
              ref={prevButtonRef}
              className="swiper-button-prev-features !block"
              aria-label="Previous feature"
            >
              <Image
                src={techSlideLeft.src}
                alt=""
                width={techSlideLeft.width || 40}
                height={techSlideLeft.height || 40}
                className="dark:invert rtl:scale-x-[-1]"
              />
            </button>
            <button
              ref={nextButtonRef}
              className="swiper-button-next-features !block"
              aria-label="Next feature"
            >
              <Image
                src={techSlideRight.src}
                alt=""
                width={techSlideRight.width || 40}
                height={techSlideRight.height || 40}
                className="dark:invert rtl:scale-x-[-1]"
              />
            </button>
          </div>
        </div>
      </div>

      <div
        className="2xl:ms-60 px-5"
        data-sal="slide-left"
        data-sal-duration="800"
        data-sal-delay="200"
      >
        <Swiper
          dir="ltr"
          className="featureswiper"
          modules={[Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 4 },
          }}
          loop
        >
          {featureItems.map((item) => (
            <SwiperSlide key={item.id} className="overflow-hidden">
              <div className="my-6">
                <div className="bg-gradient-to-b from-[#2e0f53] to-[#592da8] text-white p-7 text-center shadow relative">
                  <h3 className="md:min-h-[63px] 2xl:min-h-[31px]">
                    <span className="font-semibold">{item.title}</span>
                  </h3>
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    <div className="w-[2px] h-7 bg-[#592da8]" />
                    <div className="w-3 h-3 bg-[#592da8] rounded-full" />
                  </div>
                </div>

                <div className="relative group mx-6">
                  <div className="before:content-[''] before:absolute before:bg-gradient-to-b before:from-[#2e0f53] before:to-[#592da8] before:[clip-path:polygon(0_0,100%_0,100%_82%,72%_104%,0_100%,0_50%)] before:h-full before:w-full before:left-[6px] before:top-[6px] before:invisible before:opacity-0 before:transtion-all before:duration-600 before:z-[-2] group-hover:before:opacity-100 group-hover:before:visible" />
                  <div className="absolute top-[-15px] -z-10 left-[-40px] w-0 h-0 border-b-[40px] border-l-[#592da8] border-l-[40px] border-b-transparent scale-x-[-1]" />

                  <div className="bg-[#f8f8f8] dark:bg-[#222222] border-black/10 dark:border-white/10 border text-center group-hover:[clip-path:polygon(0_0,100%_0,100%_82%,72%_104%,0_100%,0_50%)] transition duration-600 ease-in-out relative z-10 md:p-7 p-5">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      width={item.image.width || 100}
                      height={item.image.height || 100}
                      className="mx-auto w-23"
                    />
                    <div className="relative w-[57px] h-[2px] mx-auto my-8 ltr:bg-gradient-to-r rtl:bg-gradient-to-l from-[#2e0f53] to-[#592da8]">
                      <span className="absolute left-1/2 top-1/2 size-2 rotate-[45deg] bg-[#592da8] -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
