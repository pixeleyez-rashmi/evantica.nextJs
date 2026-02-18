"use client";

import { RiDoubleQuotesR, RiStarFill } from "@remixicon/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import user1 from "../../../../assets/images/avatar/user-02.jpg";
import user2 from "../../../../assets/images/avatar/user-03.jpg";
import user3 from "../../../../assets/images/avatar/user-04.jpg";
import user4 from "../../../../assets/images/avatar/user-05.jpg";
import user5 from "../../../../assets/images/avatar/user-06.jpg";
// Sample testimonials data
const testimonials = [
  {
    id: 1,
    text: "This conference completely transformed my understanding of cognitive wellness.The speakers were insightful, practical, and deeply inspiring, offering a perfect balance between scientific research and real-world application, **with lasting impact.**",
    name: "Michael Anderson",
    designation: "Neuroscience Researcher",
    image: user1,
  },
  {
    id: 2,
    text: "An exceptional gathering of experts that connected neuroscience theory with practical tools for everyday mental performance. The discussions were engaging, thoughtfully curated, and highly relevant, **driving meaningful change.**",
    name: "Emily Watson",
    designation: "Wellness Strategist",
    image: user2,
  },
  {
    id: 3,
    text: "The depth of insight shared throughout the sessions was remarkable, redefining how I approach brain health and productivity. Each talk delivered clarity, evidence-based guidance, and real inspiration, **with clarity and purpose.**",
    name: "Dr. Arjun Mehta",
    designation: "Cognitive Scientist",
    image: user3,
  },
  {
    id: 4,
    text: "A thoughtfully designed experience that blends research, storytelling, and actionable insights for modern professionals. The balance of science and application made every session valuable, **creating real value, for everyone involved.**",
    name: "Olivia Martinez",
    designation: "UX Psychologist",
    image: user4,
  },
  {
    id: 5,
    text: "An inspiring platform that delivers powerful ideas, practical frameworks, and future-ready thinking for mental wellness. The content was impactful, well-structured, and immediately applicable, **with measurable outcomes. worldwide impact.**",
    name: "Daniel Roberts",
    designation: "Mental Performance Coach",
    image: user5,
  },
];

export default function MedicalTestimonialSection() {
  return (
    <>
      {/* Testimonial Section start */}
      <section
        className="2xl:mx-10 mx-2 lg:mx-5 mt-8"
        data-sal="slide-left"
        data-sal-duration="800"
        data-sal-delay="200"
      >
        <Swiper
          modules={[Autoplay]}
          dir="ltr"
          className="reviewSwiper"
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-[#F2F3FC] dark:bg-[#15182F] rounded-2xl lg:p-10 p-5 relative group">
                <RiDoubleQuotesR className="absolute top-2 text-[#1FC5B1] right-4 text-7xl size-18 opacity-0 -translate-y-5 group-hover:translate-y-0 group-hover:opacity-50 transition-all duration-400" />

                <div className="inline-flex items-center gap-1 mb-4">
                  <RiStarFill className="text-yellow-500 text-xl" />
                  <RiStarFill className="text-yellow-500 text-xl" />
                  <RiStarFill className="text-yellow-500 text-xl" />
                  <RiStarFill className="text-yellow-500 text-xl" />
                  <RiStarFill className="text-yellow-500 text-xl" />
                </div>

                <p className="md:text-2xl italic mb-9 lg:min-h-72 2xl:min-h-48 min-h-65.75 md:min-h-56 font-semibold">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center justify-between flex-wrap gap-3 md:flex-nowrap">
                  <div className="border-l px-4">
                    <h3>{testimonial.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      – {testimonial.designation}
                    </p>
                  </div>
                  <div className="size-18">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/* Testimonial Section end */}
    </>
  );
}
