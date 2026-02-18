"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import educationtitleShape from "../../../../assets/images/education/education-title-shape.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { RiStarFill } from "@remixicon/react";
import quotes from "../../../../assets/images/education/straight-quotes.png";
import rightArrow from "../../../../assets/images/education/education-right-arrows.png";
import leftArrow from "../../../../assets/images/education/education-left-arrows.png";

export const attendesData = [
  {
    message:
      "The conference delivered exceptional insights with well-structured sessions and inspiring speakers. Every interaction felt meaningful, engaging, and professionally curated from start to finish.",
    name: "Ananya Sharma",
    designation: "Academic Program Lead",
    day: "Monday",
  },
  {
    message:
      "An outstanding learning platform that brought together educators, innovators, and industry leaders to exchange ideas, share best practices, and explore future-focused strategies shaping education.",
    name: "Rahul shah",
    designation: " Director of Learning",
    day: "Tuesday",
  },
  {
    message:
      "Every session was thoughtfully curated and highly engaging, offering practical insights, innovative teaching methods, and real-world strategies that educators can confidently apply within their institutions.",
    name: "Neha Kapoor",
    designation: "Senior Educator",
    day: "Friday",
  },
  {
    message:
      "A powerful blend of innovation, and educational leadership that provided valuable exposure to emerging trends, tools, and forward-thinking approaches shaping the future of learning.",
    name: "Siddharth Rao",
    designation: "EdTech Consultant",
    day: "Thursday",
  },
  {
    message:
      "This event set a benchmark for educational conferences by delivering impactful sessions, meaningful networking opportunities, and actionable takeaways that influence our academic strategies.",
    name: "Priya Nair",
    designation: "Head of Academics",
    day: "Monday",
  },
  {
    message:
      "The conference created an inspiring environment for educators and leaders to connect, exchange perspectives, and gain practical insights that support long-term academic growth.",
    name: "Amit Verma",
    designation: "Dean of Studies",
    day: "Saturday",
  },
];

export default function AttendeesSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiperInstance = swiperRef.current;

    // Function to update active slide classes
    const updateSlideClasses = () => {
      const slides = swiperInstance.slides;
      slides.forEach((slide) => {
        const htmlSlide = slide as HTMLElement;
        if (htmlSlide.classList.contains("swiper-slide-active")) {
          // Active slide - remove opacity and scale
          htmlSlide.classList.remove("opacity-50", "scale-[0.8]");
          htmlSlide.classList.add("opacity-100", "scale-100");
          // Make sure overflow is visible
          htmlSlide.style.overflow = "visible";
        } else {
          // Inactive slides
          htmlSlide.classList.remove("opacity-100", "scale-100");
          htmlSlide.classList.add("opacity-50", "scale-[0.8]");
          htmlSlide.style.overflow = "visible";
        }
      });
    };

    // Initial update
    updateSlideClasses();

    // Update on slide change
    swiperInstance.on("slideChange", updateSlideClasses);
    swiperInstance.on("transitionEnd", updateSlideClasses);

    const slides = swiperInstance.slides;
    slides.forEach((slide) => {
      slide.addEventListener("click", (e) => {
        const isActive = (slide as HTMLElement).classList.contains(
          "swiper-slide-active",
        );
        const link = (slide as HTMLElement).querySelector("a");

        if (!isActive) {
          e.preventDefault();
          const slideIndex = parseInt(
            (slide as HTMLElement).getAttribute("data-swiper-slide-index") ||
              "0",
            10,
          );
          swiperInstance.slideToLoop(slideIndex);
        } else if (link) {
          window.location.href = link.href;
        }
      });
    });

    return () => {
      swiperInstance.off("slideChange", updateSlideClasses);
      swiperInstance.off("transitionEnd", updateSlideClasses);
      slides.forEach((slide) => {
        slide.replaceWith(slide.cloneNode(true));
      });
    };
  }, []);

  return (
    <section className="bg-[#fef3f4] dark:bg-[#ffe9eb] lg:py-30 py-20 overflow-hidden text-black">
      <div className="container">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <div
            className="relative inline-block mb-7"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="200"
          >
            <h2 className="lg:text-7xl md:text-5xl font-bold text-black">
              What Our Attendees Say
            </h2>
            <Image
              alt=""
              src={educationtitleShape}
              className="absolute -top-7 ltr:-right-24 rtl:-left-24 rtl:scale-x-[-1] hidden xl:block dark:invert"
            />
          </div>
          <p
            className="text-gray-700 text-[22px]"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="500"
          >
            Hear genuine experiences from educators, leaders, and innovators who
            found inspiration, insights, and real impact at our education
            summit.
          </p>
        </div>
      </div>
      <div
        dir="ltr"
        className="menu-swiper w-screen relative opacity-0 transition-opacity duration-700 overflow-visible lg:px-0 px-5"
        data-sal="zoom-in"
        data-sal-duration="700"
        data-sal-delay="100"
      >
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation, Autoplay]}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={24}
          loop={true}
          grabCursor={true}
          pagination={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 12,
              centeredSlides: false,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 16,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 18,
              centeredSlides: true,
            },
            980: {
              slidesPerView: 3,
              spaceBetween: 20,
              centeredSlides: true,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="mb-15 -!overflow-visible"
        >
          {attendesData.map((attendee, index) => (
            <SwiperSlide
              key={index}
              className="opacity-50 scale-[0.8] transition-all duration-300 cursor-grab -!overflow-visible pb-12"
            >
              <div className="border rounded-xl md:p-9 p-5 h-full border-r-6 border-b-6 relative bg-white">
                <div className="before:content-[''] before:absolute before:right-16 before:-bottom-10.25 before:border-b-49 before:border-b-black before:border-l-10 before:border-l-transparent before:border-r-11 before:border-r-transparent before:rotate-136"></div>
                <div className="after:content-[''] after:absolute after:right-16 after:-bottom-8.75 after:border-b-48 after:border-b-white after:border-l-10 after:border-l-transparent after:border-r-15 after:border-r-transparent after:rotate-143"></div>
                <div className="flex justify-between gap-4 items-center border-black/30 border-b border-dashed pb-7 mb-7">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <RiStarFill className="text-2xl text-[#f5e900]" />
                      <RiStarFill className="text-2xl text-[#f5e900]" />
                      <RiStarFill className="text-2xl text-[#f5e900]" />
                      <RiStarFill className="text-2xl text-[#f5e900]" />
                      <RiStarFill className="text-2xl text-[#f5e900]" />
                    </div>
                  </div>
                  <div className="size-14 border border-black border-b-4 border-r-4 text-2xl flex items-center justify-center rounded-full">
                    <Image src={quotes} alt="" className="w-5" />
                  </div>
                </div>
                <p className="xl:text-[25px] md:text-[18px] font-semibold pb-9">
                  "{attendee.message}"
                </p>
                <p className="text-gray-700">
                  <strong className="text-black">{attendee.name},</strong>{" "}
                  {attendee.designation}, {attendee.day}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between gap-5 mt-10 p-5 relative lg:px-18 px-10">
          <span className="h-px w-full bg-black/30 hidden md:block"></span>
          <div className="flex items-center justify-center gap-3">
            <button className="swiper-button-prev-custom relative group border size-17 inline-flex items-center justify-center rounded-full border-b-4 border-l-4 hover:bg-[#ffe149] transition-all duration-300">
              <Image src={leftArrow} alt="" />
            </button>
            <button className="swiper-button-next-custom relative group border size-17 inline-flex items-center justify-center rounded-full border-b-4 border-r-4 hover:bg-[#ffe149] transition-all duration-300">
              <Image src={rightArrow} alt="" />
            </button>
          </div>
          <span className="h-px w-full bg-black/30 hidden md:block"></span>
        </div>
      </div>
    </section>
  );
}
