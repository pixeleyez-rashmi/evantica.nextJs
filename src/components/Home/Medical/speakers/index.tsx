"use client";

import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
} from "@remixicon/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import arrowLeft from "../../../../assets/images/medical/arrow-left.png";
import arrowRight from "../../../../assets/images/medical/arrow-right.png";

// Import speaker images
import doctor1 from "../../../../assets/images/medical/medical-doctor-1.jpg";
import doctor2 from "../../../../assets/images/medical/medical-doctor-2.jpg";
import doctor3 from "../../../../assets/images/medical/medical-doctor-3.jpg";
import doctor4 from "../../../../assets/images/medical/medical-doctor-4.jpg";
import doctor5 from "../../../../assets/images/medical/medical-doctor-5.jpg";

// speakers data
const speakers = [
  {
    id: 1,
    name: "Dr. Rohan Shah",
    image: doctor2,
    socialLink: "#!",
    type: "Consultant Psychiatrist",
  },
  {
    id: 2,
    name: "Dr. Anjali Mehta",
    image: doctor1,
    socialLink: "#!",
    type: "Neuropsychology",
  },
  {
    id: 3,
    name: "Dr. Sameer Kapoor",
    image: doctor4,
    socialLink: "#!",
    type: "Cognitive Neuroscientist",
  },
  {
    id: 4,
    name: "Dr. Priya Verma",
    image: doctor3,
    socialLink: "#!",
    type: "Behavioral Therapist",
  },
  {
    id: 5,
    name: "Dr. Neha Kapoor",
    image: doctor5,
    socialLink: "#!",
    type: "CogniCore Specialist",
  },
];

export default function MedicalSpeakersSection() {
  return (
    //   speakers section start
    <section
      className="2xl:mx-10 mx-2 lg:mx-5 mt-8 py-20 rounded-2xl bg-[#1C2359] relative z-10 overflow-hidden text-white"
      data-sal="zoom-in"
      data-sal-duration="800"
      data-sal-delay="100"
    >
      <div className="container">
        <h2
          className="font-chivo md:text-6xl leading-snug xl:mb-16 mb-12 text-center"
          data-sal="zoom-in"
          data-sal-duration="800"
          data-sal-delay="200"
        >
          World-Class Medical Speakers
        </h2>

        {/* Swiper component for the slider with autoplay, pagination, and navigation */}
        <Swiper
          modules={[Autoplay, Navigation]}
          dir="ltr"
          className="speakerSwiper"
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2.5,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {/* Loop through the speakers array and display each speaker in a SwiperSlide */}
          {speakers.map((speaker) => (
            <SwiperSlide key={speaker.id}>
              <div className="md:p-6 p-4 bg-white/20 backdrop-blur-sm rounded-xl overflow-hidden text-center">
                <div className="overflow-hidden h-70 rounded-xl relative">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="md:p-6 p-4">
                  <h3 className="mb-1 font-chivo">
                    <a href="#!">{speaker.name}</a>
                  </h3>
                  <p className="mb-4 text-gray-200">{speaker.type}</p>

                  <div className="flex items-center justify-center gap-3">
                    <a
                      href={speaker.socialLink}
                      className="relative group border border-white/50 rounded-full inline-flex items-center justify-center size-10 overflow-hidden"
                    >
                      <span className="absolute top-full left-0 w-full h-full bg-[#1FC5B1] transition-all duration-500 group-hover:top-0"></span>
                      <RiFacebookBoxFill className="text-lg text-white transition-transform duration-500 group-hover:rotate-360" />
                    </a>
                    <a
                      href={speaker.socialLink}
                      className="relative group border border-white/50 rounded-full inline-flex items-center justify-center size-10 overflow-hidden"
                    >
                      <span className="absolute top-full left-0 w-full h-full bg-[#1FC5B1] transition-all duration-500 group-hover:top-0"></span>
                      <RiInstagramFill className="text-lg text-white transition-transform duration-500 group-hover:rotate-360" />
                    </a>
                    <a
                      href={speaker.socialLink}
                      className="relative group border border-white/50 rounded-full inline-flex items-center justify-center size-10 overflow-hidden"
                    >
                      <span className="absolute top-full left-0 w-full h-full bg-[#1FC5B1] transition-all duration-500 group-hover:top-0"></span>
                      <RiLinkedinBoxFill className="text-lg text-white transition-transform duration-500 group-hover:rotate-360" />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="flex items-center justify-end gap-5 mt-10 p-5 relative">
            <span className="h-px w-full hidden md:block bg-linear-to-l from-white/60 to-transparent"></span>
            <div className="flex items-center justify-end gap-5">
              {/* Previous button */}
              <button className="swiper-button-prev-custom relative group border overflow-hidden border-white outline outline-offset-4 outline-white size-15 inline-flex items-center justify-center rounded-full">
                <span className="absolute top-full left-0 w-full h-full bg-[#1FC5B1] transition-all duration-500 group-hover:top-0"></span>
                <Image
                  src={arrowLeft}
                  alt="Previous speaker"
                  className="invert transition-transform duration-500 group-hover:rotate-360"
                />
              </button>

              {/* Next button */}
              <button className="swiper-button-next-custom relative group border overflow-hidden border-white outline outline-offset-4 outline-white size-15 inline-flex items-center justify-center rounded-full">
                <span className="absolute top-full left-0 w-full h-full bg-[#1FC5B1] transition-all duration-500 group-hover:top-0"></span>
                <Image
                  src={arrowRight}
                  alt="Next speaker"
                  className="invert transition-transform duration-500 group-hover:rotate-360"
                />
              </button>
            </div>
            <span className="h-px w-120 hidden md:block bg-linear-to-r from-white/60 to-transparent"></span>
          </div>
        </Swiper>
      </div>
    </section>
    // speakers section end
  );
}
