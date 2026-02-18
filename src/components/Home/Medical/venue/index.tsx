"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import venue1 from "../../../../assets/images/medical/medical-venue-1.jpg";
import venue2 from "../../../../assets/images/medical/medical-venue-2.jpg";

export default function MedicalVenueSection() {
  return (
    <>
      {/* venue section start */}
      <section className="2xl:mx-10 mx-2 lg:mx-5 mt-8">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-5">
            <div className="rounded-2xl overflow-hidden h-full">
              <Swiper
                data-sal="slide-right"
                data-sal-duration="800"
                data-sal-delay="100"
                modules={[Autoplay]}
                dir="ltr"
                className="venueSwiper"
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                speed={800}
              >
                <SwiperSlide>
                  <div className="h-120">
                    <Image
                      src={venue1}
                      alt=""
                      className="w-full h-full object-cover"
                    ></Image>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="h-120">
                    <Image
                      src={venue2}
                      alt=""
                      className="w-full h-full object-cover"
                    ></Image>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div
              className="rounded-2xl overflow-hidden h-full"
              data-sal="slide-left"
              data-sal-duration="800"
              data-sal-delay="100"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193596.26002806186!2d-74.14431244705199!3d40.697284634899496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1765886300888!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                className="object-cover"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* venue section end */}
    </>
  );
}
