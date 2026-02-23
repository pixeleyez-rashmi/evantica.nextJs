"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import image1 from "../../../../assets/images/business/business-about-person1.jpg";
import image2 from "../../../../assets/images/tech/tech-schedule4.jpg";
import { RiArrowRightUpLine, RiPlayLargeFill } from "@remixicon/react";

export default function AboutUSAbout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoFrameRef = useRef<HTMLIFrameElement>(null);

  // Your YouTube video link
  const videoURL = "https://www.youtube.com/embed/dQw4w9WgXcQ";

  // Scroll down handler
  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  // Open modal handler
  const handleOpenModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsModalOpen(true);
    if (videoFrameRef.current) {
      videoFrameRef.current.src = videoURL + "?autoplay=1";
    }
  };
  // Close modal handler
  const handleCloseModal = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) {
      e.stopPropagation(); // ADD THIS CHECK
    }
    setIsModalOpen(false);
    if (videoFrameRef.current) {
      videoFrameRef.current.src = "";
    }
  };
  // Close modal when clicking on backdrop
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      e.stopPropagation(); // ADD THIS LINE
      handleCloseModal();
    }
  };

  return (
    <section className="lg:py-30 py-20">
      <div className="container">
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 xl:col-span-7 2xl:col-span-6">
            <div className="md:flex gap-8 relative hidden">
              <div className="absolute inset-0 md:flex items-center justify-center z-20 hidden">
                <div
                  onClick={handleScrollDown}
                  className="relative w-40 h-40 flex items-center justify-center rounded-full bg-white dark:bg-black cursor-pointer"
                >
                  {/* Play Button  */}
                  <div
                    onClick={handleOpenModal}
                    className="absolute w-12 h-12 flex items-center justify-center bg-black dark:bg-white dark:text-black text-white rounded-full z-10 cursor-pointer"
                  >
                    <RiPlayLargeFill className="text-xl" />
                  </div>

                  {/* Video Modal */}
                  <div
                    onClick={handleBackdropClick}
                    className={`fixed inset-0 bg-black/70 backdrop-blur-sm ${
                      isModalOpen ? "flex" : "hidden"
                    } items-center justify-center z-50`}
                  >
                    <div className="relative w-[90%] max-w-3xl bg-black rounded-xl overflow-hidden">
                      <button
                        onClick={handleCloseModal}
                        className="absolute top-0 right-3 text-white text-3xl font-bold hover:text-red-500 transition z-10"
                      >
                        &times;
                      </button>

                      <div className="w-full h-0 relative pb-[56.25%]">
                        <iframe
                          ref={videoFrameRef}
                          className="absolute top-0 left-0 w-full h-full rounded-b-xl"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>

                  {/* Spinning circular text */}
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full absolute animate-[spin_12s_linear_infinite]"
                  >
                    <defs>
                      <path
                        id="circlePath"
                        d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                      />
                    </defs>

                    <text
                      fontSize="6"
                      fontWeight="600"
                      letterSpacing="2"
                      className="uppercase fill-black dark:fill-white"
                    >
                      <textPath
                        href="#circlePath"
                        startOffset="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        event conference 2026 event conference 2026
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>

              {/* Images Container */}
              <div className="flex gap-8">
                {/* First Image */}
                <div
                  className="h-160 w-80 relative"
                  data-sal="slide-down"
                  data-sal-duration="800"
                  data-sal-delay="200"
                >
                  <Image
                    src={image1}
                    alt="Business person"
                    className="w-full h-full object-cover rounded-xl 
               ltr:rounded-l-[10rem] ltr:rounded-r-none 
          rtl:rounded-r-[10rem] rtl:rounded-l-[10px] rtl:rounded-bl-[5rem]"
                  />

                  {/* Main decorative border */}
                  <div
                    className="absolute size-84 bottom-0 
                  ltr:right-0 rtl:left-0 
                  bg-transparent border-[#fff] dark:border-black 
                  ltr:rounded-b-[10rem] ltr:rounded-br-none 
                  rtl:rounded-b-[10rem] rtl:rounded-bl-none   
                  ltr:border-t-29 ltr:border-l-60 ltr:border-b-50 
                  rtl:border-t-35 rtl:border-r-45 rtl:border-b-50 rtl:border-l-18"
                  ></div>

                  {/* Decorative corners */}
                  <div
                    className="absolute size-10 top-71 
                  ltr:-left-5 rtl:-right-5 
                  ltr:bg-[radial-gradient(circle_at_right_top,transparent_19px,#fff_20px)] 
                  rtl:bg-[radial-gradient(circle_at_left_top,transparent_19px,#fff_20px)]   
                  dark:ltr:bg-[radial-gradient(circle_at_right_top,transparent_19px,#000_20px)] 
                  dark:rtl:bg-[radial-gradient(circle_at_left_top,transparent_19px,#000_20px)]"
                  ></div>
                  <div
                    className="absolute size-10 top-79 
                  ltr:left-7 rtl:right-7 
                  ltr:bg-[radial-gradient(circle_at_right_bottom,transparent_24px,#fff_20px)] 
                  rtl:bg-[radial-gradient(circle_at_left_bottom,transparent_24px,#fff_20px)] 
                  dark:ltr:bg-[radial-gradient(circle_at_right_bottom,transparent_24px,#000_20px)] 
                  dark:rtl:bg-[radial-gradient(circle_at_left_bottom,transparent_24px,#000_20px)]"
                  ></div>
                  <div
                    className="absolute size-10 bottom-9 
                  ltr:-right-4 rtl:-left-4 
                  ltr:bg-[radial-gradient(circle_at_left_top,transparent_25px,#fff_20px)] 
                  rtl:bg-[radial-gradient(circle_at_right_top,transparent_25px,#fff_20px)] 
                  dark:ltr:bg-[radial-gradient(circle_at_left_top,transparent_25px,#000_20px)] 
                  dark:rtl:bg-[radial-gradient(circle_at_right_top,transparent_25px,#000_20px)]"
                  ></div>
                </div>

                {/* Second Image */}
                <div
                  className="h-160 w-80 relative"
                  data-sal="slide-up"
                  data-sal-duration="800"
                  data-sal-delay="200"
                >
                  <Image
                    src={image2}
                    alt="Tech Schedule"
                    className="w-full h-full object-cover 
      ltr:rounded-tr-[10rem] ltr:rounded-br-[10rem] ltr:rounded-tl-[10px] ltr:rounded-bl-[10px]
      rtl:rounded-tl-[10rem] rtl:rounded-bl-[10rem] rtl:rounded-tr-[10px] rtl:rounded-br-[10px]"
                  />
                  {/* Main decorative border */}
                  <div
                    className="absolute size-84 top-0 
                  bg-transparent border-[#fff] dark:border-black 
                  ltr:rounded-t-[10rem] ltr:rounded-tl-none 
                  ltr:border-b-29 ltr:border-r-50 ltr:border-t-50 
                  rtl:rounded-t-[10rem] rtl:rounded-tr-none 
                  rtl:border-b-29 rtl:border-l-50 rtl:border-t-50 rtl:border-r-10"
                  ></div>

                  {/* Decorative corners */}
                  <div className="absolute size-10 top-7 ltr:-left-5 rtl:-right-5 ltr:bg-[radial-gradient(circle_at_right_bottom,transparent_20px,#fff_20px)] rtl:bg-[radial-gradient(circle_at_left_bottom,transparent_20px,#fff_20px)] dark:ltr:bg-[radial-gradient(circle_at_right_bottom,transparent_20px,#000_20px)] dark:rtl:bg-[radial-gradient(circle_at_left_bottom,transparent_20px,#000_20px)]"></div>
                  <div className="absolute size-10 top-71 ltr:right-4 rtl:left-4 ltr:bg-[radial-gradient(circle_at_left_top,transparent_23px,#fff_20px)] rtl:bg-[radial-gradient(circle_at_right_top,transparent_23px,#fff_20px)] dark:ltr:bg-[radial-gradient(circle_at_left_top,transparent_23px,#000_20px)] dark:rtl:bg-[radial-gradient(circle_at_right_top,transparent_23px,#000_20px)]"></div>
                  <div className="absolute size-10 bottom-70 ltr:-right-4 rtl:-left-4 ltr:bg-[radial-gradient(circle_at_left_bottom,transparent_25px,#fff_20px)] rtl:bg-[radial-gradient(circle_at_right_bottom,transparent_25px,#fff_20px)] dark:ltr:bg-[radial-gradient(circle_at_left_bottom,transparent_25px,#000_20px)] dark:rtl:bg-[radial-gradient(circle_at_right_bottom,transparent_25px,#000_20px)]"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 xl:col-span-5 2xl:col-span-6">
            <p className="mb-2 font-medium uppercase tracking-[1px]">
              // About the Event
            </p>

            <h2 className="font-bold xl:text-5xl md:text-3xl leading-snug mb-4">
              Join Us for an Inspiring Conference Experience
            </h2>

            <p className="text-gray-600 dark:text-gray-400 text-xl mb-3">
              Our conference brings together professionals, thought leaders, and
              enthusiasts from various industries to share knowledge, exchange
              ideas, and explore the latest trends shaping the future.
            </p>

            <p className="text-gray-600 dark:text-gray-400 text-xl mb-5">
              Attendees can join sessions, workshops, and networking
              opportunities to learn, connect, and grow.
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-xl mb-7 space-y-2">
              <li>Interactive keynote sessions with industry experts</li>
              <li>Hands-on workshops and practical learning</li>
              <li>Networking opportunities with professionals worldwide</li>
            </ul>
            <a
              href="#!"
              dir="ltr"
              className="relative inline-block text-xl font-semibold border border-black dark:border-white text-black dark:text-white rounded-full px-7 py-3 overflow-hidden group hover:border-[#f2c944] dark:hover:text-black"
            >
              <span className="relative z-10 inline-flex items-center gap-1">
                View Event Schedule <RiArrowRightUpLine />
              </span>
              <span className="absolute inset-0 bg-[#f2c944] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out rounded-full"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
