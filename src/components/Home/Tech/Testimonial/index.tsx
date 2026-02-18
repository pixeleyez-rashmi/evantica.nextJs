'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { RiStarSFill, RiDoubleQuotesL } from '@remixicon/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import techTestimonial from '../../../../assets/images/tech/tech-testimonial.jpg';
import techSlideLeft from '../../../../assets/images/tech/tech-slide-left.png';
import techSlideRight from '../../../../assets/images/tech/tech-slide-right.png';

interface Testimonial {
  id: string;
  text: string;
  name: string;
  role: string;
  rating: number;
  ratingText: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    text: 'The conference offered powerful insights into the future of technology. Every session felt meaningful and filled with real innovation. I had the chance to connect with inspiring industry leaders. It was a truly motivating and career-enhancing experience.',
    name: 'Aarav Sharma',
    role: 'Senior Developer',
    rating: 5,
    ratingText: '4.9 Excellent',
  },
  {
    id: '2',
    text: 'This event brought together some of the brightest minds in tech. The sessions delivered clear, practical, and future-ready ideas. I met professionals who are shaping the next generation of innovation. A conference that truly pushes creativity and growth forward.',
    name: 'Sophia Patel',
    role: 'Tech Entrepreneur',
    rating: 5,
    ratingText: '4.8 Excellent',
  },
  {
    id: '3',
    text: 'The conference exceeded all my expectations with its bold ideas. Each presentation highlighted emerging tools and technologies. I gained valuable insights that will directly impact my work. It was an energizing and deeply informative experience.',
    name: 'Michael Tan',
    role: 'AI Researcher',
    rating: 5,
    ratingText: '4.8 Excellent',
  },
  {
    id: '4',
    text: 'One of the most impactful tech events I have attended. Discussions on AI, cloud, and digital innovation were outstanding. The environment encouraged collaboration and future thinking. This conference truly represents the next chapter of technology.',
    name: 'Emma Johnson',
    role: 'CTO, InnovateX',
    rating: 5,
    ratingText: '4.9 Excellent',
  },
];

const renderStars = (rating: number) => {
  return Array.from({ length: rating }, (_, i) => (
    <RiStarSFill key={i} className="text-yellow-500" />
  ));
};

export default function TestimonialSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (swiperRef.current && prevButtonRef.current && nextButtonRef.current) {
      if (
        swiperRef.current.params.navigation &&
        typeof swiperRef.current.params.navigation !== 'boolean'
      ) {
        swiperRef.current.params.navigation.prevEl = prevButtonRef.current;
        swiperRef.current.params.navigation.nextEl = nextButtonRef.current;
        swiperRef.current.navigation.init();
        swiperRef.current.navigation.update();
      }
    }
  }, []);

  return (
    <section className="lg:pt-30 pt-20 bg-[#f2f2f2] dark:bg-[#1a1a1a]">
      <div
        className="bg-cover pb-20 relative"
        style={{
          backgroundImage: `url(${techTestimonial.src})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="container">
          <div
            className="max-w-2xl bg-gradient-to-b from-[#2e0f53] to-[#592da8] text-white md:p-11 p-6 relative -translate-y-[40px] lg:ms-40"
            data-sal="slide-right"
            data-sal-duration="800"
            data-sal-delay="200"
          >
            <div className="absolute top-0 z-10 ltr:left-[-40px] rtl:right-[-40px] w-0 h-0 border-b-[40px] border-b-[#592da8] ltr:border-l-[40px] ltr:border-l-transparent rtl:border-r-[40px] rtl:border-r-transparent" />

            <h2 className="font-fahkwang mb-6 md:text-5xl mb-12 leading-snug drop-shadow-[2px_2px_0px_rgba(255,255,255,0.15)]">
              What Tech Leaders Say About Conference
            </h2>

            <Swiper
              dir="ltr"
              className="reviewswiper"
              modules={[Navigation, Pagination]}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              loop
              spaceBetween={30}
              pagination={{
                clickable: true,
                el: '.swiper-pagination',
              }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <RiDoubleQuotesL className="text-5xl mb-6" />
                  <p className="text-gray-300 mb-7 text-[20px]">
                    {testimonial.text}
                  </p>
                  <p className="border-b border-white/40 pb-8">
                    {testimonial.name},{' '}
                    <span className="text-gray-300">{testimonial.role}</span>
                  </p>
                  <div className="flex justify-between items-center mt-8">
                    <p className="text-xl">{testimonial.ratingText}</p>
                    <div className="flex text-yellow-500">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex items-center justify-between gap-4 mt-8">
              <button
                ref={prevButtonRef}
                className="swiper-button-prev-custom"
                aria-label="Previous testimonial"
              >
                <Image
                  src={techSlideLeft.src}
                  alt=""
                  width={techSlideLeft.width || 40}
                  height={techSlideLeft.height || 40}
                  className="invert"
                />
              </button>
              <div>
                <div className="swiper-pagination" />
              </div>
              <button
                ref={nextButtonRef}
                className="swiper-button-next-custom"
                aria-label="Next testimonial"
              >
                <Image
                  src={techSlideRight.src}
                  alt=""
                  width={techSlideRight.width || 40}
                  height={techSlideRight.height || 40}
                  className="invert"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
