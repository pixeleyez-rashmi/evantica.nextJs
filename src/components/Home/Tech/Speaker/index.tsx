'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import techSlideLeft from '../../../../assets/images/tech/tech-slide-left.png';
import techSlideRight from '../../../../assets/images/tech/tech-slide-right.png';
import techSpeaker1 from '../../../../assets/images/tech/tech-speaker1.png';
import techSpeaker2 from '../../../../assets/images/tech/tech-speaker2.png';
import techSpeaker3 from '../../../../assets/images/tech/tech-speaker3.png';
import techSpeaker4 from '../../../../assets/images/tech/tech-speaker4.png';
import techSpeaker5 from '../../../../assets/images/tech/tech-speaker5.png';

interface Speaker {
  id: string;
  name: string;
  role: string;
  image: {
    src: string;
    width: number;
    height: number;
    className: string;
  };
}

const speakers: Speaker[] = [
  {
    id: 'aarav-mehta',
    name: 'Aarav Mehta',
    role: 'Tech Innovation Strategist',
    image: {
      src: techSpeaker2.src,
      width: techSpeaker2.width,
      height: techSpeaker2.height,
      className: '-mt-10 mx-auto',
    },
  },
  {
    id: 'maya-kapoor',
    name: 'Maya Kapoor',
    role: 'AI Research Lead',
    image: {
      src: techSpeaker1.src,
      width: techSpeaker1.width,
      height: techSpeaker1.height,
      className: '-mt-9 mx-auto',
    },
  },
  {
    id: 'ryan-dsouza',
    name: 'Ryan D’Souza',
    role: 'Cloud Solutions Architect',
    image: {
      src: techSpeaker3.src,
      width: techSpeaker3.width,
      height: techSpeaker3.height,
      className: '-mt-9 mx-auto',
    },
  },
  {
    id: 'evelyn-carter',
    name: 'Evelyn Carter',
    role: 'Cybersecurity Analyst',
    image: {
      src: techSpeaker4.src,
      width: techSpeaker4.width,
      height: techSpeaker4.height,
      className: '-mt-9 mx-auto',
    },
  },
  {
    id: 'karan-verma',
    name: 'Karan Verma',
    role: 'Full-Stack Developer',
    image: {
      src: techSpeaker5.src,
      width: techSpeaker5.width,
      height: techSpeaker5.height,
      className: '-mt-9 mx-auto',
    },
  },
];

export default function SpeakerSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const prevButtonRef = useRef<HTMLButtonElement | null>(null);
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);

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
    <section className="lg:py-30 py-20 bg-[#f2f2f2] dark:bg-[#1a1a1a] overflow-hidden">
      <div className="container">
        <div className="flex items-center gap-2 flex-wrap justify-between lg:mb-15 mb-12">
          <h2
            className="font-fahkwang md:text-5xl font-semibold leading-snug drop-shadow-[2px_2px_0px_rgba(0,0,0,0.2)]"
            data-sal="slide-right"
            data-sal-duration="800"
            data-sal-delay="200"
          >
            Meet Our Speakers
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
              aria-label="Previous speaker"
            >
              <Image
                src={techSlideLeft.src}
                alt="Previous"
                width={techSlideLeft.width || 40}
                height={techSlideLeft.height || 40}
                className="dark:invert rtl:scale-x-[-1]"
              />
            </button>
            <button
              ref={nextButtonRef}
              className="swiper-button-next-features !block"
              aria-label="Next speaker"
            >
              <Image
                src={techSlideRight.src}
                alt="Next"
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
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 4 },
          }}
          loop
        >
          {speakers.map((speaker) => (
            <SwiperSlide key={speaker.id}>
              <div className="m-4">
                <div className="border border-[#592da8] p-4 relative z-10 bg-white dark:bg-black h-full">
                  <div className="absolute w-full h-full top-0 right-0 [box-shadow:-6px_6px_#592da8]" />
                  <div className="border border-[#592da8] border-t-5 border-l-5 relative text-center">
                    <Image
                      src={speaker.image.src}
                      alt={speaker.name}
                      width={speaker.image.width || 260}
                      height={speaker.image.height || 260}
                      className={speaker.image.className}
                    />
                  </div>
                  <div className="pt-3 relative z-10">
                    <h3>
                      <span className="font-semibold">{speaker.name}</span>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {speaker.role}
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

