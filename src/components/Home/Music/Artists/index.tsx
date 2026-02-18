"use client";

import {
  RiFacebookBoxLine,
  RiInstagramLine,
  RiPlayFill,
  RiPauseFill,
  RiTwitterLine,
} from "@remixicon/react";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import swipe arrows
import arrowLeft from "../../../../assets/images/music/music-swipe-left.png";
import arrowRight from "../../../../assets/images/music/music-swipe-right.png";

//import background images
import artistBg from "../../../../assets/images/music/music-artist-bg.jpg";

// import artist photos
import artist1 from "../../../../assets/images/music/music-artist-1.jpg";
import artist2 from "../../../../assets/images/music/music-artist-2.jpg";
import artist3 from "../../../../assets/images/music/music-artist-3.jpg";
import artist4 from "../../../../assets/images/music/music-artist-4.jpg";
import artist5 from "../../../../assets/images/music/music-artist-5.jpg";
import artist6 from "../../../../assets/images/music/music-artist-6.jpg";

// artists data
const artistsData = [
  {
    id: 1,
    name: "Martin Garrix",
    genre: "Progressive",
    image: artist1,
  },
  {
    id: 2,
    name: "David Guetta",
    genre: "Electro House",
    image: artist2,
  },
  {
    id: 3,
    name: "Calvin Harris",
    genre: "Dance",
    image: artist3,
  },
  {
    id: 4,
    name: "Armin van",
    genre: "Trance",
    image: artist4,
  },
  {
    id: 5,
    name: "Marshmello",
    genre: "Bollywood",
    image: artist5,
  },
  {
    id: 6,
    name: "Tiësto",
    genre: "House",
    image: artist6,
  },
];

export default function MusicArtistsSection() {
  const [currentPlayingId, setCurrentPlayingId] = useState<number | null>(null);

  const handlePlayPause = (artistId: number) => {
    // if id is null then set null otherwise set id
    setCurrentPlayingId(currentPlayingId === artistId ? null : artistId);
  };

  return (
    <>
      {/* Artists Section start */}
      <section className="lg:py-30 py-20 overflow-hidden relative text-white">
        <div
          className="absolute inset-0  bg-cover bg-fixed opacity-25 "
          style={{ backgroundImage: `url(${artistBg.src})` }}
        ></div>
        <div className="container relative z-10">
          <div className="mb-12 flex items-center flex-wrap justify-between gap-3">
            <div>
              <p
                className="relative mb-4 px-14 inline-block font-semibold tracking-[1px] text-xl"
                data-sal="slide-right"
                data-sal-duration="800"
                data-sal-delay="200"
              >
                <span className="before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-px before:w-11 -before:bg-gradient-to-r before:from-[#e0c3fc] before:via-[#a259ff] before:to-[#4b0082] before:animate-[borderAnim_2s_ease-in-out_infinite_alternate]"></span>
                Our Artist
                <span className="after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-px after:w-11 -after:bg-gradient-to-l after:from-[#e0c3fc] after:via-[#a259ff] after:to-[#4b0082] after:animate-[borderAnim_2s_ease-in-out_infinite_alternate]"></span>
              </p>
              <h2
                className="xl:text-6xl md:text-5xl uppercase"
                data-sal="slide-right"
                data-sal-duration="800"
                data-sal-delay="200"
              >
                The Stars of the Stage
              </h2>
            </div>
            <div
              dir="ltr"
              className="flex items-center gap-6"
              data-sal="slide-left"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              <button className="swiper-button-prev-custom uppercase flex items-center gap-1 text-2xl font-medium">
                <Image src={arrowLeft} alt="Previous" className="invert" /> prv
              </button>
              <button className="swiper-button-next-custom uppercase flex items-center gap-1 text-2xl font-medium">
                <Image src={arrowRight} alt="Next" className="invert" /> nxt
              </button>
            </div>
          </div>

          <div
            dir="ltr"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="200"
          >
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
              }}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 1.5,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2.5,
                },
                1280: {
                  slidesPerView: 4,
                },
              }}
              className="artistSwiper"
            >
              {artistsData.map((artist) => (
                <SwiperSlide key={artist.id}>
                  <div className="border border-purple-400/50 rounded-xl p-6 bg-white/20 backdrop-blur-sm group">
                    <div className="relative overflow-hidden">
                      <Image
                        src={artist.image}
                        alt={artist.name}
                        className="w-full h-96 object-cover rounded-xl"
                        width={400}
                        height={384}
                      />
                      <div className="flex gap-2 items-center flex-col absolute top-5 right-5 opacity-0 -translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        <a
                          href="#!"
                          className="bg-[linear-gradient(120deg,#d9b3ff,#9b5de5,#7209b7)] inline-flex items-center justify-center size-10 rounded-xl"
                        >
                          <RiInstagramLine />
                        </a>
                        <a
                          href="#!"
                          className="bg-[linear-gradient(120deg,#d9b3ff,#9b5de5,#7209b7)] inline-flex items-center justify-center size-10 rounded-xl"
                        >
                          <RiTwitterLine />
                        </a>
                        <a
                          href="#!"
                          className="bg-[linear-gradient(120deg,#d9b3ff,#9b5de5,#7209b7)] inline-flex items-center justify-center size-10 rounded-xl"
                        >
                          <RiFacebookBoxLine />
                        </a>
                      </div>
                    </div>
                    <div className="pt-6 flex items-center justify-between">
                      <div>
                        <h3>
                          <a href="#!">{artist.name}</a>
                        </h3>
                        <p className="text-gray-300">{artist.genre}</p>
                      </div>
                      <button
                        onClick={() => handlePlayPause(artist.id)}
                        className="playPauseBtn shrink-0 size-13 flex items-center justify-center rounded-full border border-white/40 text-white hover:scale-105 transition"
                      >
                        {currentPlayingId === artist.id ? (
                          <RiPauseFill className="text-2xl" />
                        ) : (
                          <RiPlayFill className="text-2xl" />
                        )}
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      {/* artist section end  */}
    </>
  );
}
