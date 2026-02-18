"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import {
  RiStarFill,
  RiStarHalfFill,
  RiArrowLeftDoubleFill,
  RiArrowRightDoubleLine,
} from "@remixicon/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import images
import businessMap from "../../../../assets/images/business/business-map.png";
import businessQuote from "../../../../assets/images/business/business-quote.png";
import businessTm1 from "../../../../assets/images/business/business-tm1.jpg";
import businessTm2 from "../../../../assets/images/business/business-tm2.jpg";
import businessTm3 from "../../../../assets/images/business/business-tm3.jpg";
import businessTm4 from "../../../../assets/images/business/business-tm4.jpg";
import user02 from "../../../../assets/images/avatar/user-02.jpg";
import user03 from "../../../../assets/images/avatar/user-03.jpg";
import user04 from "../../../../assets/images/avatar/user-04.jpg";
import user05 from "../../../../assets/images/avatar/user-05.jpg";
import user06 from "../../../../assets/images/avatar/user-06.jpg";
import user07 from "../../../../assets/images/avatar/user-07.jpg";

interface Testimonial {
  name: string;
  role: string;
  avatar: {
    src: string;
    width: number;
    height: number;
  };
  rating: number; // 1-5, can be half stars (e.g., 4.5)
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sophia Turner",
    role: "Marketing Lead",
    avatar: {
      src: user02.src,
      width: user02.width,
      height: user02.height,
    },
    rating: 5,
    text: "The conference exceeded all my expectations — every session was thoughtfully curated and incredibly insightful. The speakers shared practical strategies we could immediately apply in our marketing efforts. It was an inspiring experience that truly pushed our team toward better, smarter growth.",
  },
  {
    name: "Ethan Williams",
    role: "Tech Founder",
    avatar: {
      src: user03.src,
      width: user03.width,
      height: user03.height,
    },
    rating: 5,
    text: "An exceptional event that brought together brilliant minds from across the industry. The networking opportunities were unmatched, and the discussions helped us refine our product direction. This conference is a must-attend for anyone serious about shaping the future of tech.",
  },
  {
    name: "Ava Mitchell",
    role: "Ops Manager",
    avatar: {
      src: user04.src,
      width: user04.width,
      height: user04.height,
    },
    rating: 4.5,
    text: "One of the most impactful conferences I've attended — everything was organized with precision and clarity. The sessions offered fresh perspectives that helped streamline our operations and improve team performance. We left with valuable connections and insights that will influence our strategy all year long.",
  },
];

const avatars = [
  {
    src: user02.src,
    width: user02.width,
    height: user02.height,
    position: "top-20 ltr:left-40 rtl:right-40",
    animation: "animate-float-rotate",
  },
  {
    src: user03.src,
    width: user03.width,
    height: user03.height,
    position: "top-60 ltr:right-32 rtl:left-32",
    animation: "animate-float-right",
  },
  {
    src: user04.src,
    width: user04.width,
    height: user04.height,
    position: "bottom-40 ltr:left-50 rtl:right-50",
    animation: "animate-float-rotate",
  },
  {
    src: user05.src,
    width: user05.width,
    height: user05.height,
    position: "bottom-30 ltr:right-60 rtl:left-60",
    animation: "animate-float-left",
  },
  {
    src: user06.src,
    width: user06.width,
    height: user06.height,
    position: "bottom-50 ltr:left-1/2 rtl:right-1/2",
    animation: "animate-float-rotate",
  },
  {
    src: user07.src,
    width: user07.width,
    height: user07.height,
    position: "top-90 ltr:left-1/3 rtl:right-1/3",
    animation: "animate-float-diagonal",
  },
];

const renderStars = (rating: number) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<RiStarFill key={i} className="text-yellow-400" />);
  }

  if (hasHalfStar) {
    stars.push(<RiStarHalfFill key="half" className="text-yellow-400" />);
  }

  const remainingStars = 5 - Math.ceil(rating);
  for (let i = 0; i < remainingStars; i++) {
    stars.push(
      <RiStarFill key={`empty-${i}`} className="text-yellow-400 opacity-30" />,
    );
  }

  return stars;
};

export default function TestimonialSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

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
    <section className="lg:py-30 lg:pb-90 py-20 relative overflow-hidden text-white">
      {/* Background Map */}
      <div className="testimonial-bg-map before:content-[''] before:bg-no-repeat before:bg-center before:opacity-50 before:absolute before:inset-0">
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .testimonial-bg-map::before {
              background-image: url(${businessMap.src});
            }
          `,
          }}
        />
      </div>

      {/* Floating Avatars */}
      {avatars.map((avatar, index) => (
        <div
          key={index}
          className={`size-14 absolute ${avatar.position} ${avatar.animation} hidden 2xl:block`}
        >
          <Image
            src={avatar.src}
            alt=""
            width={avatar.width}
            height={avatar.height}
            className="w-full h-full object-cover rounded-full border-4 border-[#c0f03770] shadow-md"
          />
        </div>
      ))}

      <div className="container">
        <div className="text-center max-w-3xl mx-auto md:mb-40 mb-12 relative z-10">
          <p
            className="mb-3 text-[#c0f037]"
            data-sal="slide-up"
            data-sal-duration="700"
            data-sal-delay="100"
          >
            [ Testimonial ]
          </p>
          <h2
            className="md:text-6xl font-chivo font-medium leading-[1.2]"
            data-sal="slide-up"
            data-sal-duration="700"
            data-sal-delay="200"
          >
            What Attendees Said About the Conference
          </h2>
        </div>

        <div className="grid grid-cols-12 2xl:gap-17 gap-6 items-center">
          {/* Left Side - Rotated Images */}
          <div className="col-span-12 lg:col-span-6">
            <div
              className="relative"
              data-sal="slide-right"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              <div className="hidden md:block rotate-[45deg] rounded-md overflow-hidden size-100 p-4 border border-white/30 md:mx-auto lg:mx-0">
                <Image
                  src={businessTm4.src}
                  alt=""
                  width={businessTm4.width}
                  height={businessTm4.height}
                  className="w-full h-full object-cover rounded-md shadow-md"
                />
              </div>
              <div className="hidden xl:block rotate-[45deg] rounded-md overflow-hidden size-60 p-4 border border-white/30 -mt-7 ltr:ms-66 rtl:-ms-25">
                <Image
                  src={businessTm2.src}
                  alt=""
                  width={businessTm2.width}
                  height={businessTm2.height}
                  className="w-full h-full object-cover rounded-md shadow-md"
                />
              </div>
              <div className="hidden xl:block rotate-[45deg] rounded-md overflow-hidden size-40 p-4 border border-white/30 absolute top-59 ltr:2xl:right-31 ltr:xl:right-4 rtl:2xl:-right-45 rtl:xl:-right-46">
                <Image
                  src={businessTm3.src}
                  alt=""
                  width={businessTm3.width}
                  height={businessTm3.height}
                  className="w-full h-full object-cover rounded-md shadow-md"
                />
              </div>
              <div className="hidden xl:block rounded-md overflow-hidden w-165 h-30 rotate-[45deg] p-4 border border-white/30 ltr:-ms-58 ltr:-mt-47 rtl:-mt-[185px] rtl:-mr-[-0px]">
                <Image
                  src={businessTm1.src}
                  alt=""
                  width={businessTm1.width}
                  height={businessTm1.height}
                  className="w-full h-full object-cover rounded-md shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Testimonials Swiper */}
          <div className="col-span-12 lg:col-span-6">
            <div dir="ltr" className="relative">
              <Swiper
                className="reviwe-swiper"
                modules={[Navigation]}
                navigation={{
                  prevEl: prevButtonRef.current,
                  nextEl: nextButtonRef.current,
                }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                loop
                spaceBetween={30}
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div>
                      <Image
                        src={businessQuote.src}
                        alt="Quote"
                        width={businessQuote.width}
                        height={businessQuote.height}
                      />
                      <div className="mt-8 mb-6 flex items-center justify-between">
                        <div>
                          <h3 className="mb-1">{testimonial.name}</h3>
                          <p className="text-gray-400">{testimonial.role}</p>
                        </div>
                        <div className="size-20">
                          <Image
                            src={testimonial.avatar.src}
                            alt={testimonial.name}
                            width={testimonial.avatar.width}
                            height={testimonial.avatar.height}
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                      </div>
                      <div className="mb-5 text-yellow-400 flex gap-1">
                        {renderStars(testimonial.rating)}
                      </div>
                      <p className="text-gray-400 md:text-[22px]">
                        &quot;{testimonial.text}&quot;
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <div className="flex items-center gap-6 mt-10 pt-20 p-5 border-t border-white/40">
                <button
                  ref={prevButtonRef}
                  className="swiper-button-prev-custom border size-12 flex items-center justify-center text-[#c0f037] hover:bg-[#c0f037] hover:text-[#032530] transition duration-300 rotate-45 rounded-md"
                  aria-label="Previous testimonial"
                >
                  <RiArrowLeftDoubleFill className="text-xl -rotate-45" />
                </button>
                <button
                  ref={nextButtonRef}
                  className="swiper-button-next-custom border size-12 flex items-center justify-center text-[#c0f037] hover:bg-[#c0f037] hover:text-[#032530] transition duration-300 rotate-45 rounded-md"
                  aria-label="Next testimonial"
                >
                  <RiArrowRightDoubleLine className="text-xl -rotate-45" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
