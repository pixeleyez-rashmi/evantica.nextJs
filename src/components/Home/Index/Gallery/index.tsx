"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

// Import gallery images
import gallery1 from "../../../../assets/images/business/business-gallery-1.jpg";
import gallery2 from "../../../../assets/images/business/business-gallery-2.jpg";
import gallery3 from "../../../../assets/images/business/business-gallery-3.jpg";
import gallery4 from "../../../../assets/images/business/business-gallery-4.jpg";
import gallery5 from "../../../../assets/images/business/business-gallery-5.jpg";
import gallery6 from "../../../../assets/images/business/business-gallery-6.jpg";

interface GalleryItem {
  id: number;
  image: typeof gallery1;
  title: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: gallery1,
    title: "2024 Conference Highlight",
  },
  {
    id: 2,
    image: gallery2,
    title: "Global Leaders Connected",
  },
  {
    id: 3,
    image: gallery3,
    title: "5,000+ Attendees Joined",
  },
  {
    id: 4,
    image: gallery4,
    title: "Record-Breaking Engagement",
  },
  {
    id: 5,
    image: gallery5,
    title: "Top Industry Keynotes",
  },
  {
    id: 6,
    image: gallery6,
    title: "Innovative Startup Pitches",
  },
];

export default function GallerySection() {
  return (
    <section className="lg:py-30 py-20 text-white">
      <div className="container">
        <div className="grid grid-cols-12 gap-6 items-center mb-15">
          <div
            className="col-span-12 lg:col-span-7 xl:col-span-6"
            data-sal="slide-right"
            data-sal-duration="800"
            data-sal-delay="200"
          >
            <p className="mb-3 text-[#c0f037]">[ Highlights from Last Year ]</p>
            <h2 className="md:text-6xl font-chivo font-medium leading-[1.2]">
              Relive the Moments That Shaped the Conference
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-end-13">
            <div
              className="lg:text-end"
              data-sal="slide-left"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              <Link
                href="#!"
                className="btn text-lg rounded-none group border border-[#c0f037] text-[#c0f037] tracking-[1px] uppercase font-medium relative transition-all duration-300 hover:bg-[#c0f037] hover:text-black inline-block hover:rotate-[2deg]"
              >
                Get Your Ticket
                <span className="bg-[#c0f037] size-3 rotate-[45deg] block absolute ltr:-left-1 rtl:-right-1 -top-1 transition-all duration-300 group-hover:scale-125 group-hover:bg-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div dir="ltr">
        <Swiper
          className="galleryswiper"
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={24}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 3.5,
              spaceBetween: 30,
            },
          }}
        >
          {galleryItems.map((item) => (
            <SwiperSlide key={item.id} className="!w-auto">
              <div
                data-sal="slide-left"
                data-sal-duration="700"
                data-sal-delay="300"
              >
                <div className="relative block transition-all duration-500 ease-in-out z-[1] hover:translate-y-[10px] group">
                  {/* Green background overlay on hover */}
                  <div className="absolute top-[-10px] left-[-10px] right-[-10px] bottom-[90px] bg-[#c0f037] rounded-[20px] origin-right scale-y-0 transition-transform duration-500 ease-in-out group-hover:scale-y-100 -z-[1]"></div>

                  <div className="relative block">
                    {/* Image */}
                    <div className="relative overflow-hidden rounded-[20px] h-95 shadow-lg">
                      <Image
                        src={item.image.src}
                        alt={item.title}
                        width={item.image.width || 400}
                        height={item.image.height || 380}
                        className="w-full h-full object-cover block"
                      />
                    </div>

                    {/* Bottom-right overlay card */}
                    <div className="absolute bottom-0 right-0 bg-[#032530] w-70 text-white shadow-xl rounded-tr-[20px] pt-[32px] px-[28px] pb-[18px] [clip-path:polygon(0_0,90%_0,100%_100%,0_100%)] transition-all duration-500 ease-out translate-y-[30px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 border-l-2 border-[#c0f037]">
                      <div className="transition-all duration-500 ease-out delay-150 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="mb-2 text-sm tracking-wide text-[#c0f037] uppercase">
                          Highlights
                        </p>
                        <h4 className="font-medium">
                          <Link
                            href="#!"
                            className="hover:text-[#c0f037] transition-colors"
                          >
                            {item.title}
                          </Link>
                        </h4>
                      </div>
                    </div>
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
