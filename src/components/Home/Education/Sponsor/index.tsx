"use client";

import Image from "next/image";
// title image
import educationTitle from "../../../../assets/images/education/education-title-shape.jpg";
// right images
import image1 from "../../../../assets/images/education/education-sponsor-vector.png";
import image2 from "../../../../assets/images/education/education-arrow1.png";
import image3 from "../../../../assets/images/education/education-sparkle2.png";
import image4 from "../../../../assets/images/education/education-sparkle1.png";
import image5 from "../../../../assets/images/education/education-sparkle4.png";
import image6 from "../../../../assets/images/education/education-effect.png";
// left swiper images
import LSwiperImage1 from "../../../../assets/images/education/education-sponsor-1.png";
import LSwiperImage2 from "../../../../assets/images/education/education-sponsor-2.png";
import LSwiperImage3 from "../../../../assets/images/education/education-sponsor-3.png";
import LSwiperImage4 from "../../../../assets/images/education/education-sponsor-4.png";
import LSwiperImage5 from "../../../../assets/images/education/education-sponsor-5.png";
import LSwiperImage6 from "../../../../assets/images/education/education-sponsor-6.png";
// right swiper images
import RSwiperImage1 from "../../../../assets/images/education/education-sponsor-7.png";
import RSwiperImage2 from "../../../../assets/images/education/education-sponsor-8.png";
import RSwiperImage3 from "../../../../assets/images/education/education-sponsor-9.png";
import RSwiperImage4 from "../../../../assets/images/education/education-sponsor-10.png";
import RSwiperImage5 from "../../../../assets/images/education/education-sponsor-11.png";
import RSwiperImage6 from "../../../../assets/images/education/education-sponsor-12.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
// import "swiper/swiper-bundle.min.css";

export const RightImageData = [
  {
    image: image1,
    className: "mx-auto",
  },
  {
    image: image2,
    className:
      "absolute top-49 left-73 animate-float-up hidden md:block lg:hidden xl:block dark:invert",
  },
  {
    image: image3,
    className:
      "absolute top-46 right-10 animate-float-down hidden md:block lg:hidden xl:block dark:invert",
  },
  {
    image: image4,
    className:
      "absolute left-0 bottom-10 hidden md:block lg:hidden xl:block dark:invert",
  },
  {
    image: image5,
    className:
      "absolute right-44 -top-16 animate-[spin_15s_linear_infinite] hidden md:block lg:hidden xl:block dark:invert",
  },
  {
    image: image6,
    className:
      "absolute left-20 top-15 rotate-[-74deg] hidden md:block lg:hidden xl:block dark:invert",
  },
];

export const LeftSwiperData = [
  {
    divClassName:
      "border rounded-xl p-9 border-r-6 border-b-6 hover:bg-[#6AC3FF] transition-all duration-300",
    image: LSwiperImage1,
  },
  {
    divClassName:
      "border rounded-xl p-9 border-r-6 border-b-6 hover:bg-[#6AFFB7] transition-all duration-300",
    image: LSwiperImage2,
  },
  {
    divClassName:
      "border rounded-xl p-9 border-r-6 border-b-6 hover:bg-[#FFD66A] transition-all duration-300",
    image: LSwiperImage3,
  },
  {
    divClassName:
      "border rounded-xl p-9 border-r-6 border-b-6 hover:bg-[#FF9AA2] transition-all duration-300",
    image: LSwiperImage4,
  },
  {
    divClassName:
      "border rounded-xl p-9 border-r-6 border-b-6 hover:bg-[#B28DFF] transition-all duration-300",
    image: LSwiperImage5,
  },
  {
    divClassName:
      "border rounded-xl p-9 border-r-6 border-b-6 hover:bg-[#6AE3FF] transition-all duration-300",
    image: LSwiperImage6,
  },
];

export const RightSwiperData = [
  {
    divClassName:
      "border rounded-xl p-9 border-r-6 border-b-6 hover:bg-[#FFB86A] transition-all duration-300",
    image: RSwiperImage1,
  },
  {
    divClassName:
      "border rounded-xl p-9 border-r-6 border-b-6 hover:bg-[#7CFF6A] transition-all duration-300",
    image: RSwiperImage2,
  },
  {
    divClassName:
      "border rounded-xl p-9 border-r-6 border-b-6 hover:bg-[#FF6AD5] transition-all duration-300",
    image: RSwiperImage3,
  },
  {
    divClassName:
      "border rounded-xl p-9 border-r-6 border-b-6 hover:bg-[#6A7BFF] transition-all duration-300",
    image: RSwiperImage4,
  },
  {
    divClassName:
      "border rounded-xl p-9 border-r-6 border-b-6 hover:bg-[#FFE66A] transition-all duration-300",
    image: RSwiperImage5,
  },
  {
    divClassName:
      "border rounded-xl p-9 border-r-6 border-b-6 hover:bg-[#6AFFE8] transition-all duration-300",
    image: RSwiperImage6,
  },
];

export default function SponsorSection() {
  return (
    <>
      <section className="lg:py-30 py-20">
        <div className="container">
          <div className="grid grid-cols-12 gap-6 2xl:gap-15 items-center">
            <div className="col-span-12 lg:col-span-6">
              <div
                className="relative inline-block mb-7"
                data-sal="slide-down"
                data-sal-duration="800"
                data-sal-delay="200"
              >
                <h2 className=" lg:text-7xl md:text-5xl font-bold">
                  Our Sponsors & Partners
                </h2>
                <Image
                  alt=""
                  src={educationTitle}
                  className="absolute -top-12  ltr:right-20 rtl:left-20 rtl:scale-x-[-1] hidden xl:block dark:invert"
                ></Image>
              </div>
              <p
                className="text-gray-700 text-[22px] mb-10 dark:text-gray-300"
                data-sal="slide-down"
                data-sal-duration="800"
                data-sal-delay="200"
              >
                Supported by leading institutions, edtech brands, and education
                partners worldwide, Powered by trusted education and edtech
                partners.
              </p>

              <div
                className="xl:mt-30 border-b mt-10 relative"
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay="200"
              >
                {Object.values(RightImageData).map((image, index) => (
                  <Image
                    key={index}
                    alt={`Image ${index + 1}`}
                    src={image.image}
                    className={image.className}
                  />
                ))}
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <div className="flex gap-6">
                {/* Left swiper */}
                <Swiper
                  modules={[Autoplay]}
                  className="sponsorSwiperLeft xl:h-200 h-80 md:h-120 lg:h-150 overflow-hidden"
                  direction="vertical"
                  loop={true}
                  centeredSlides={true}
                  slidesPerView={2.8}
                  spaceBetween={30}
                  speed={900}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                >
                  {LeftSwiperData.map((image, index) => (
                    <SwiperSlide key={index} className="h-auto!">
                      <div className={image.divClassName}>
                        <Image
                          alt={`Image ${index + 1}`}
                          src={image.image}
                          className="dark:invert"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                {/* right swiper */}
                <Swiper
                  modules={[Autoplay]}
                  className="sponsorSwiperRight xl:h-200 h-80 md:h-120 lg:h-150 overflow-hidden"
                  direction="vertical"
                  loop={true}
                  centeredSlides={true}
                  slidesPerView={2.8}
                  spaceBetween={30}
                  speed={900}
                  autoplay={{
                    delay: 2500,
                    reverseDirection: true,
                    disableOnInteraction: false,
                  }}
                >
                  {RightSwiperData.map((image, index) => (
                    <SwiperSlide key={index} className="h-auto!">
                      <div className={image.divClassName}>
                        <Image
                          alt={`Image ${index + 1}`}
                          src={image.image}
                          className="dark:invert"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
