"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiArrowRightLongFill, RiPlayLargeFill } from "@remixicon/react";

// Main images
import educationHomeMain from "../../../../assets/images/education/education-home-main.png";
import educationHomeShadow from "../../../../assets/images/education/education-home-shadow.png";
import educationHomeShape1 from "../../../../assets/images/education/education-home-shape1.png";
import educationHomeCircle from "../../../../assets/images/education/education-home-circle.png";

// Decorative images
import educationSparkle1 from "../../../../assets/images/education/education-sparkle1.png";
import educationSparkle2 from "../../../../assets/images/education/education-sparkle2.png";
import educationSparkle3 from "../../../../assets/images/education/education-sparkle3.png";
import educationOverlapping from "../../../../assets/images/education/education-overlapping.png";
import educationLine1 from "../../../../assets/images/education/education-line1.png";

// Speaker avatars
import educationSpeaker1 from "../../../../assets/images/education/education-speaker-1.png";
import educationSpeaker2 from "../../../../assets/images/education/education-speaker-2.png";
import educationSpeaker3 from "../../../../assets/images/education/education-speaker-3.png";
import educationSpeaker4 from "../../../../assets/images/education/education-speaker-4.png";

export default function EducationHomeSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const openVideoModal = () => {
    // Replace with your actual video URL (YouTube, Vimeo, etc.)
    setVideoUrl("https://www.youtube.com/embed/dQw4w9WgXcQ");
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setVideoUrl("");
  };

  useEffect(() => {
    if (isVideoModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isVideoModalOpen]);

  return (
    <section className="lg:pt-50 py-20 pt-30 lg:pb-60 bg-[#fef3f4] dark:bg-[#ffe9eb] overflow-hidden">
      <div className="2xl:px-30 px-5">
        <div className="grid grid-cols-12 gap-6 2xl:gap-15 items-center">
          {/* Left Column - Content */}
          <div className="col-span-12 lg:col-span-7">
            <h2
              className="2xl:text-[110px] xl:text-[90px] md:text-[70px] font-bold leading-[1.2] mb-5 text-black"
              data-sal="slide-right"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              International Education Forum Summit
            </h2>

            <p
              className="md:text-[25px] mb-15 text-gray-800"
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-delay="300"
            >
              Explore fresh ideas, expert insights, and meaningful connections
              that elevate educators, institutions, and learners.
            </p>

            <div
              className="flex items-center 2xl:gap-15 flex-wrap gap-6"
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              <Link
                href="#!"
                dir="ltr"
                className="btn uppercase text-xl font-bold border bg-white text-black border-black rounded-full border-b-5 px-13 py-4 group relative overflow-hidden z-10"
              >
                <span className="absolute top-1/2 left-1/2 w-0 h-0 bg-[#f5e900] rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:w-[562px] group-hover:h-[562px] -z-10"></span>
                <span>
                  Get Started <RiArrowRightLongFill className="inline ms-1" />
                </span>
              </Link>

              <button
                onClick={openVideoModal}
                className="flex items-center gap-6 uppercase text-xl font-bold text-black"
              >
                <span className="relative flex size-14">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#00000040] opacity-75 animate-ping"></span>
                  <span className="relative inline-flex items-center justify-center size-14 rounded-full bg-[#fff]">
                    <RiPlayLargeFill className="text-2xl" />
                  </span>
                </span>
                watch video
              </button>
            </div>
          </div>

          {/* Right Column - Image with Decorations */}
          <div className="col-span-12 lg:col-span-5">
            <div className="relative">
              {/* Main Image */}
              <Image
                src={educationHomeMain.src}
                alt="Education Forum Summit"
                width={educationHomeMain.width}
                height={educationHomeMain.height}
                className="w-full h-full object-cover"
              />

              {/* Shadow */}
              <Image
                src={educationHomeShadow.src}
                alt=""
                width={educationHomeShadow.width}
                height={educationHomeShadow.height}
                className="absolute -bottom-19 -left-7 hidden xl:block"
              />

              {/* Shape 1 */}
              <Image
                src={educationHomeShape1.src}
                alt=""
                width={educationHomeShape1.width}
                height={educationHomeShape1.height}
                className="absolute -top-9 right-25 hidden xl:block"
              />

              {/* Sparkle 1 */}
              <Image
                src={educationSparkle1.src}
                alt=""
                width={educationSparkle1.width}
                height={educationSparkle1.height}
                className="absolute top-0 left-13 hidden xl:block"
              />

              {/* Sparkle 3 (bottom left) */}
              <Image
                src={educationSparkle3.src}
                alt=""
                width={educationSparkle3.width}
                height={educationSparkle3.height}
                className="absolute bottom-40 -left-5 animate-float-up hidden xl:block"
              />

              {/* Overlapping */}
              <Image
                src={educationOverlapping.src}
                alt=""
                width={educationOverlapping.width}
                height={educationOverlapping.height}
                className="absolute top-13 right-0 rotate-[61deg] animate-float-left hidden xl:block"
              />

              {/* Sparkle 3 (bottom right) */}
              <Image
                src={educationSparkle3.src}
                alt=""
                width={educationSparkle3.width}
                height={educationSparkle3.height}
                className="absolute -bottom-4 right-13 animate-float-down hidden xl:block"
              />

              {/* Sparkle 2 */}
              <Image
                src={educationSparkle2.src}
                alt=""
                width={educationSparkle2.width}
                height={educationSparkle2.height}
                className="absolute bottom-60 -right-7 animate-float-up hidden xl:block"
              />

              {/* Line 1 */}
              <Image
                src={educationLine1.src}
                alt=""
                width={educationLine1.width}
                height={educationLine1.height}
                className="absolute -bottom-2 -left-18 w-30 rotate-[-20deg] hidden xl:block"
              />

              {/* Participants Card */}
              <div className="bg-white p-5 -xl:inline-block rounded-xl absolute top-30 -left-8 shadow-md animate-float-right hidden xl:block">
                <p className="mb-3 font-medium text-black">
                  5000+ Participants
                </p>
                <div className="flex items-center -space-x-2">
                  <div className="bg-[#ff7f49] rounded-full size-10 border-2 border-white overflow-hidden">
                    <Image
                      src={educationSpeaker1.src}
                      alt="Speaker 1"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-[#a095ff] rounded-full size-10 border-2 border-white overflow-hidden">
                    <Image
                      src={educationSpeaker2.src}
                      alt="Speaker 2"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-[#ffb84f] rounded-full size-10 border-2 border-white overflow-hidden">
                    <Image
                      src={educationSpeaker3.src}
                      alt="Speaker 3"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-[#46c1a3] rounded-full size-10 border-2 border-white overflow-hidden">
                    <Image
                      src={educationSpeaker4.src}
                      alt="Speaker 4"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Spinning Circle */}
              <div className="p-3 bg-[#fef3f4] rounded-full absolute bottom-11 right-16 w-40 hidden xl:block">
                <Image
                  src={educationHomeCircle.src}
                  alt=""
                  width={educationHomeCircle.width}
                  height={educationHomeCircle.height}
                  className="object-cover animate-[spin_10s_linear_infinite]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] flex items-center justify-center"
          onClick={closeVideoModal}
        >
          <div
            className="bg-white rounded-xl shadow-xl overflow-hidden w-[90%] max-w-3xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideoModal}
              className="absolute top-3 right-3 bg-white size-10 rounded-xl text-black text-2xl hover:opacity-70"
              aria-label="Close video"
            >
              &times;
            </button>
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src={videoUrl}
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Video player"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
