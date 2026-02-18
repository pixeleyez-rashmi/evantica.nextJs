"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// Import sponsor images
import sponsor1 from "../../../../assets/images/freelancer/freelancer-sponsor-1.png";
import sponsor2 from "../../../../assets/images/freelancer/freelancer-sponsor-2.png";
import sponsor3 from "../../../../assets/images/freelancer/freelancer-sponsor-3.png";
import sponsor6 from "../../../../assets/images/freelancer/freelancer-sponsor-6.png";
import sponsor7 from "../../../../assets/images/freelancer/freelancer-sponsor-7.png";
import sponsor8 from "../../../../assets/images/freelancer/freelancer-sponsor-8.png";
import sponsor9 from "../../../../assets/images/freelancer/freelancer-sponsor-9.png";
import sponsor10 from "../../../../assets/images/freelancer/freelancer-sponsor-10.png";

const sponsors = [
  sponsor1,
  sponsor2,
  sponsor3,
  sponsor6,
  sponsor7,
  sponsor8,
  sponsor9,
  sponsor10,
];

// Create multiple copies for seamless infinite loop
const duplicatedSponsors = [...sponsors, ...sponsors, ...sponsors];

export default function SponsorsSection() {
  return (
    <section className="bg-[#0B2C36] lg:py-30 py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-15">
          <p
            className="mb-3 text-[#c0f037]"
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-delay="100"
          >
            [ Trusted by Brands ]
          </p>
          <h2
            className="text-white font-chivo font-medium md:text-5xl leading-[1.2]"
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-delay="200"
          >
            Trusted by Thousands of Growing Companies Worldwide
          </h2>
        </div>
      </div>
      <div dir="ltr" className="ps-4">
        <Swiper
          className="sponsorSwiper"
          modules={[Autoplay, FreeMode]}
          slidesPerView={2}
          spaceBetween={30}
          speed={3000}
          freeMode={{
            enabled: true,
            momentum: false,
            sticky: false,
          }}
          loop={true}
          loopAdditionalSlides={10}
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 6.5,
            },
          }}
        >
          {duplicatedSponsors.map((sponsor, index) => (
            <SwiperSlide key={index}>
              <Link
                href="#!"
                className="bg-white/15 backdrop-blur-sm w-full h-20 rounded-xl flex items-center justify-center px-4"
              >
                <Image
                  src={sponsor}
                  alt={`Sponsor ${index + 1}`}
                  width={sponsor.width}
                  height={sponsor.height}
                  className="invert mx-auto object-contain"
                  style={{ height: "auto", maxHeight: "3rem", width: "auto" }}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
