"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

import sponsor1 from "../../../../assets/images/freelancer/freelancer-sponsor-1.png";
import sponsor2 from "../../../../assets/images/freelancer/freelancer-sponsor-2.png";
import sponsor3 from "../../../../assets/images/freelancer/freelancer-sponsor-3.png";
import sponsor6 from "../../../../assets/images/freelancer/freelancer-sponsor-6.png";
import sponsor7 from "../../../../assets/images/freelancer/freelancer-sponsor-7.png";
import sponsor8 from "../../../../assets/images/freelancer/freelancer-sponsor-8.png";
import sponsor11 from "../../../../assets/images/freelancer/freelancer-sponsor-11.png";
import sponsor12 from "../../../../assets/images/freelancer/freelancer-sponsor-12.png";

//  Duplicate sponsors array for smooth looping
const sponsorList = [
  sponsor1,
  sponsor2,
  sponsor3,
  sponsor6,
  sponsor7,
  sponsor8,
  sponsor11,
  sponsor12,
];

const sponsors = [...sponsorList, ...sponsorList, ...sponsorList]; //  Triple it for smooth loop

export default function MedicalSponsorSection() {
  return (
    <>
      {/* Sponsor Section start */}
      <section
        className="2xl:mx-10 mx-2 lg:mx-5 mt-8 rounded-2xl p-5 bg-[#1FC5B1] text-white"
        data-sal="slide-right"
        data-sal-duration="800"
        data-sal-delay="200"
      >
        <div className="flex items-center gap-5 flex-wrap md:flex-nowrap">
          <h5 className="text-xl text-gray-100 md:shrink-0 font-normal">
            <strong className="text-white underline" id="sponsorCounter">
              Join 30,000+
            </strong>{" "}
            Our Valued Sponsors
          </h5>
          <div className="bg-white w-20 h-px hidden md:block"></div>

          <Swiper
            dir="ltr"
            className="sponsorSwiper w-full"
            modules={[Autoplay, FreeMode]}
            loop={true}
            slidesPerView={2}
            spaceBetween={30}
            speed={3000}
            freeMode={{
              enabled: true,
              momentum: false,
            }}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            allowTouchMove={false}
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
            wrapperClass="swiper-wrapper ps-4"
          >
            {sponsors.map((sponsor, index) => (
              <SwiperSlide
                key={index}
                className="swiper-slide flex items-center justify-center "
              >
                <a
                  href="#!"
                  className="group flex items-center justify-center w-32 h-16"
                >
                  <img
                    src={sponsor.src}
                    alt=""
                    className="max-h-12 max-w-full object-contain invert transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* Sponsor Section end */}
    </>
  );
}
