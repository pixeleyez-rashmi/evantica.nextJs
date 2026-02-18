"use client";

import Image from "next/image";
import venue1 from "../../../../assets/images/event/event-venue-01.jpg";
import venue2 from "../../../../assets/images/event/event-venue-02.jpg";
import venue3 from "../../../../assets/images/event/event-venue-03.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import {
  RiBuilding4Line,
  RiCalendarEventLine,
  RiCustomerService2Line,
  RiMapPinLine,
} from "@remixicon/react";

const imageData = [venue1, venue2, venue3];

export default function EventVenue() {
  return (
    <>
      <section className="lg:py-30 py-20">
        <div className="container">
          <div className="grid grid-cols-12 gap-6 2xl:gap-10">
            <div className="col-span-12 lg:col-span-5">
              <div
                className="rounded-xl overflow-hidden"
                data-sal="slide-down"
                data-sal-duration="800"
                data-sal-delay="200"
              >
                <Swiper
                  modules={[Autoplay]}
                  dir="ltr"
                  className="venueSwiper"
                  loop={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  speed={800}
                >
                  {imageData.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="h-170">
                        <Image
                          src={image}
                          alt={`Venue ${index + 1}`}
                          className="w-full h-full object-cover"
                          priority={index === 0}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <div
                className="bg-[#F8EBFF] dark:bg-[#4c1d64] md:p-10 p-5 rounded-xl lg:mt-15"
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay="200"
              >
                <p className="mb-2 font-medium uppercase tracking-[1px]">
                  // Event Venue
                </p>

                <h2 className="font-bold xl:text-5xl md:text-3xl leading-snug  mb-4">
                  Grand Horizon Convention Center, London
                </h2>

                <p className="md:text-[20px] text-gray-600 dark:text-gray-400 mb-5">
                  Experience a premium event venue designed for conferences,
                  exhibitions, corporate meetings, and large-scale gatherings.
                  The venue offers modern interiors, advanced audio-visual
                  facilities, comfortable seating, and seamless accessibility
                  for guests.
                </p>

                <div className="flex gap-3">
                  <RiMapPinLine className="text-xl" />
                  <div>
                    <h5>Venue Location</h5>
                    <p className="text-gray-600 dark:text-gray-400">
                      Central London · E14 District · Prime Location
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 mt-4">
                  <RiBuilding4Line className="text-xl" />
                  <div>
                    <h5>Hall Capacity</h5>
                    <p className="text-gray-600 dark:text-gray-400">
                      Up to 1,200 guests · Fully air-conditioned · Stage & LED
                      setup
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 mt-4">
                  <RiCalendarEventLine className="text-xl" />
                  <div>
                    <h5>Event Date & Time</h5>
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="block">23 – 25 April 2026</span>
                      <span className="block">09:00 AM – 10:00 PM</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 mt-4">
                  <RiCustomerService2Line className="text-xl" />
                  <div>
                    <h5>Venue Support</h5>
                    <p className="text-gray-600 dark:text-gray-400">
                      <a href="#!" className="block">
                        +123 456 70995
                      </a>
                      <a href="#!">events@grandhorizon.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
