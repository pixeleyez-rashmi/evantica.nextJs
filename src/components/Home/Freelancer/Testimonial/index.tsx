'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { RiStarFill, RiDoubleQuotesL, RiPlayFill, RiArrowLeftLine, RiArrowRightLine } from '@remixicon/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import testimonial images
import testimonial1 from '../../../../assets/images/freelancer/freelancer-testimonial1.jpg';
import testimonial2 from '../../../../assets/images/freelancer/freelancer-testimonial2.jpg';
import testimonial3 from '../../../../assets/images/freelancer/freelancer-testimonial3.png';
import testimonialCircle from '../../../../assets/images/freelancer/freelancer-testimonial-circle.png';
import testimonialCircleText from '../../../../assets/images/freelancer/freelancer-testimonial-circletext.png';

// Import avatar images
import user03 from '../../../../assets/images/avatar/user-03.jpg';
import user13 from '../../../../assets/images/avatar/user-13.jpg';
import user14 from '../../../../assets/images/avatar/user-14.jpg';

interface Testimonial {
  name: string;
  role: string;
  avatar: typeof user13;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Emily Parker',
    role: 'Digital Strategist',
    avatar: user13,
    rating: 5,
    text: 'This meetup was incredibly valuable — every talk delivered practical ideas and real industry insights. The mentors shared tactics we could instantly implement in our freelance work. It was motivating, refreshing, and boosted my confidence to scale my projects further.',
  },
  {
    name: 'Ryan Mitchell',
    role: 'Product Manager',
    avatar: user03,
    rating: 5,
    text: 'A fantastic experience from start to finish — the sessions were engaging and packed with helpful content. I met talented freelancers, exchanged ideas, and learned actionable methods to improve my workflow. Truly a standout event that supports both beginners and professionals.',
  },
  {
    name: 'Olivia Bennett',
    role: 'UI/UX Expert',
    avatar: user14,
    rating: 5,
    text: "One of the most insightful events I've joined — every session delivered depth and clarity. The speakers explained complex topics in simple, actionable ways. I gained new perspectives, refined my skills, and left feeling far more inspired than before.",
  },
];

const wavePath = "M265.8 3.5c-10.9 0-15.9 6.2-15.9 6.2s-3.6-3.5-9.2-.9c-9.1 4.1-4.4 13.4-4.4 13.4s-1.2.2-1.9.9c-.6.7-.5 1.9-.5 1.9s-1-.5-2.3-.2c-1.3.3-1.6 1.4-1.6 1.4s.4-3.4-1.5-5c-3.9-3.4-8.3-.2-8.3-.2s-.6-.7-.9-.9c-.4-.2-1.2-.2-1.2-.2s-4.4-3.6-11.5-2.6-10.4 7.9-10.4 7.9-.5-3.3-3.9-4.9c-4.8-2.4-7.4 0-7.4 0s2.4-4.1-1.9-6.4-6.2 1.2-6.2 1.2-.9-.5-2.1-.5-2.3 1.1-2.3 1.1.1-.7-1.1-1.1c-1.2-.4-2 0-2 0s3.6-6.8-3.5-8.9c-6-1.8-7.9 2.6-8.4 4-.1-.3-.4-.7-.9-1.1-1-.7-1.3-.5-1.3-.5s1-4-1.7-5.2c-2.7-1.2-4.2 1.1-4.2 1.1s-3.1-1-5.7 1.4-2.1 5.5-2.1 5.5-.9 0-2.1.7-1.4 1.7-1.4 1.7-1.7-1.2-4.3-1.2c-2.6 0-4.5 1.2-4.5 1.2s-.7-1.5-2.8-2.4c-2.1-.9-4 0-4 0s2.6-5.9-4.7-9c-7.3-3.1-12.6 3.3-12.6 3.3s-.9 0-1.9.2c-.9.2-1.5.9-1.5.9S99.4 3 94.9 3.9c-4.5.9-5.7 5.7-5.7 5.7s-2.8-5-12.3-3.9-11.1 6-11.1 6-1.2-1.4-4-.7c-.8.2-1.3.5-1.8.9-.9-2.1-2.7-4.9-6.2-4.4-3.2.4-4 2.2-4 2.2s-.5-.7-1.2-.7h-1.4s-.5-.9-1.7-1.4-2.4 0-2.4 0-2.4-1.2-4.7 0-3.1 4.1-3.1 4.1-1.7-1.4-3.6-.7c-1.9.7-1.9 2.8-1.9 2.8s-.5-.5-1.7-.2c-1.2.2-1.4.7-1.4.7s-.7-2.3-2.8-2.8c-2.1-.5-4.3.2-4.3.2s-1.7-5-11.1-6c-3.8-.4-6.6.2-8.5 1v21.2h283.5V11.1c-.9.2-1.6.4-1.6.4s-5.2-8-16.1-8z";

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <RiStarFill key={i} className="text-yellow-400" />
  ));
};

export default function TestimonialSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const swiperRef = useRef<SwiperType | null>(null);
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (swiperRef.current && prevButtonRef.current && nextButtonRef.current) {
      if (swiperRef.current.params.navigation && typeof swiperRef.current.params.navigation !== 'boolean') {
        swiperRef.current.params.navigation.prevEl = prevButtonRef.current;
        swiperRef.current.params.navigation.nextEl = nextButtonRef.current;
        swiperRef.current.navigation.init();
        swiperRef.current.navigation.update();
      }
    }
  }, []);

  const openVideoModal = () => {
    // Replace with your actual video URL (YouTube, Vimeo, etc.)
    setVideoUrl('https://www.youtube.com/embed/dQw4w9WgXcQ');
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setVideoUrl('');
  };

  useEffect(() => {
    if (isVideoModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVideoModalOpen]);

  return (
    <section className="py-20 xl:my-37 bg-[#f8ebff] dark:bg-[#4c1d64] relative">
      {/* Top SVG Wave */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 283.5 27.8"
        preserveAspectRatio="xMidYMax slice"
        className="absolute -top-45 hidden 2xl:block"
      >
        <path
          className="fill-[#f8ebff] dark:fill-[#4c1d64]"
          d={wavePath}
        />
      </svg>

      <div className="container">
        <div className="grid grid-cols-12 xl:gap-15 gap-6 items-center">
          {/* Left Side - Images Grid */}
          <div
            className="col-span-12 lg:col-span-6"
            data-sal="slide-right"
            data-sal-duration="800"
            data-sal-delay="200"
          >
            <div className="grid grid-cols-12 gap-6 relative">
              {/* Video Modal Trigger - Hidden on mobile, shown on md+ */}
              <div className="absolute inset-0 md:flex items-center justify-center z-20 hidden">
                <div className="relative size-40">
                  <Image
                    src={testimonialCircle.src}
                    alt=""
                    width={testimonialCircle.width}
                    height={testimonialCircle.height}
                    className="absolute inset-0 size-40"
                  />
                  <Image
                    src={testimonialCircleText.src}
                    alt=""
                    width={testimonialCircleText.width}
                    height={testimonialCircleText.height}
                    className="absolute inset-0 m-auto size-32 object-contain animate-[spin_12s_linear_infinite]"
                  />
                  <button
                    onClick={openVideoModal}
                    className="absolute inset-0 flex items-center justify-center"
                    aria-label="Open video"
                  >
                    <div className="size-12 bg-[#acaaff] rounded-full flex items-center justify-center shadow-lg">
                      <RiPlayFill className="text-white text-2xl ml-1" />
                    </div>
                  </button>
                </div>
              </div>

              {/* Testimonial Images */}
              <div className="col-span-12 md:col-span-6 space-y-6">
                <div className="h-70">
                  <Image
                    src={testimonial1.src}
                    alt=""
                    width={testimonial1.width}
                    height={testimonial1.height}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="h-70">
                  <Image
                    src={testimonial2.src}
                    alt=""
                    width={testimonial2.width}
                    height={testimonial2.height}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>

              <div className="col-span-12 md:col-span-6">
                <div className="h-full">
                  <Image
                    src={testimonial3.src}
                    alt=""
                    width={testimonial3.width}
                    height={testimonial3.height}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Testimonials Swiper */}
          <div className="col-span-12 lg:col-span-6">
            <h2 className="xl:text-6xl md:text-5xl uppercase font-anton font-medium tracking-[2px] leading-snug mb-12">
              What Our Attendees Say
            </h2>

            <div dir="ltr" className="relative">
              <Swiper
                className="reviewswiper"
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
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <h4 className="mb-1">{testimonial.name}</h4>
                        <p className="text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                      </div>
                      <div className="flex -space-x-8 items-center">
                        <div className="size-19">
                          <Image
                            src={testimonial.avatar.src}
                            alt={testimonial.name}
                            width={testimonial.avatar.width}
                            height={testimonial.avatar.height}
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                        <div className="bg-[#ffa762] rounded-full size-18 flex items-center justify-center">
                          <RiDoubleQuotesL className="text-4xl" />
                        </div>
                      </div>
                    </div>

                    <div className="mb-5 text-yellow-400 flex gap-1">
                      {renderStars(testimonial.rating)}
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-[20px]">
                      &quot;{testimonial.text}&quot;
                    </p>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <div className="flex items-center gap-3 mt-10">
                <button
                  ref={prevButtonRef}
                  className="swiper-button-prev-custom size-12 flex items-center justify-center bg-[#a0ffc2] text-black rounded-full transition-all duration-300 hover:bg-black hover:text-white"
                  aria-label="Previous testimonial"
                >
                  <RiArrowLeftLine className="text-xl" />
                </button>
                <button
                  ref={nextButtonRef}
                  className="swiper-button-next-custom size-12 flex items-center justify-center bg-[#a0ffc2] text-black rounded-full transition-all duration-300 hover:bg-black hover:text-white"
                  aria-label="Next testimonial"
                >
                  <RiArrowRightLine className="text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={closeVideoModal}
        >
          <div
            className="relative bg-white rounded-xl overflow-hidden w-[90%] max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideoModal}
              className="absolute top-3 right-3 text-black dark:text-white text-3xl z-50 hover:opacity-70"
              aria-label="Close video"
            >
              &times;
            </button>
            <iframe
              className="w-full h-[400px]"
              src={videoUrl}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Video player"
            />
          </div>
        </div>
      )}

      {/* Bottom SVG Wave */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 283.5 27.8"
        preserveAspectRatio="xMidYMin slice"
        className="absolute -bottom-45 rotate-180 w-full hidden 2xl:block"
      >
        <path
          className="fill-[#f8ebff] dark:fill-[#4c1d64]"
          d={wavePath}
        />
      </svg>
    </section>
  );
}
