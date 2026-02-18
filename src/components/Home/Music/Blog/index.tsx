"use client";

import {
  RiCalendarFill,
  RiExpandRightLine,
  RiRhythmLine,
  RiUserFill,
} from "@remixicon/react";
import Image from "next/image";

import blog1 from "../../../../assets/images/music/music-blog-1.jpg";
import blog2 from "../../../../assets/images/music/music-blog-2.jpg";
import blog3 from "../../../../assets/images/music/music-blog-3.jpg";

export default function MusicBlogSection() {
  // Blog data array with different animation delays for each post
  const blogPosts = [
    {
      id: 1,
      author: "DJ Arjun Patel",
      date: "18 June, 2026",
      title: "How Music Festivals Energize the Crowd",
      image: blog1,
      category: "Mix",
      hoverText: "LIVE MIX",
      animationSide: "slide-right",
      animationDelay: 200, // Custom delay for the first post
    },
    {
      id: 2,
      author: "DJ Sneha Kapoor",
      date: "22 July, 2026",
      title: "The Secrets Behind High-Energy EDM Shows",
      image: blog3,
      category: "EDM",
      hoverText: "EDM VIBES",
      animationSide: "slide-up",
      animationDelay: 300, // Custom delay for the second post
    },
    {
      id: 3,
      author: "DJ Karan Mehta",
      date: "30 August, 2026",
      title: "Transforming Festival Vibes With Live Mashups",
      image: blog2,
      category: "Mix",
      hoverText: "LEARN NOW",
      animationSide: "slide-left",
      animationDelay: 400, // Custom delay for the third post
    },
  ];

  return (
    /* Blog Section start*/
    <section className="lg:py-30 py-20 text-white">
      <div className="container">
        {/* title section */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p
            className="relative mb-4 px-14 inline-block font-semibold tracking-[1px] text-xl"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="200"
          >
            <span className="before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-px before:w-11 before:bg-linear-to-r before:from-[#e0c3fc] before:via-[#a259ff] before:to-[#4b0082] before:animate-[borderAnim_2s_ease-in-out_infinite_alternate]"></span>
            Blog & News
            <span className="after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-px after:w-11 after:bg-linear-to-l after:from-[#e0c3fc] after:via-[#a259ff] after:to-[#4b0082] after:animate-[borderAnim_2s_ease-in-out_infinite_alternate]"></span>
          </p>
          <h2
            className="xl:text-6xl md:text-5xl uppercase"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="500"
          >
            Music Tips & Stories
          </h2>
        </div>
        {/* title section end */}

        {/* body section start */}
        <div className="grid grid-cols-12 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="col-span-12 xl:col-span-4 md:col-span-6"
            >
              <div
                className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-lg"
                data-sal={post.animationSide}
                data-sal-duration="800"
                data-sal-delay={post.animationDelay} // Apply dynamic delay
              >
                <div className="md:p-7 p-5">
                  <div className="flex items-center md:gap-6 mb-5 text-gray-300 flex-wrap gap-3 md:flex-nowrap">
                    <p className="flex items-center gap-1">
                      <a href="#!" className="flex items-center gap-2">
                        <RiUserFill className="w-5 h-5" />
                        {post.author}
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <RiCalendarFill className="w-5 h-5" />
                      {post.date}
                    </p>
                  </div>
                  <h3 className="mb-7 min-h-16">
                    <a href="#!">{post.title}</a>
                  </h3>
                  <div className="relative rounded-xl overflow-hidden group w-full h-70">
                    <Image
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-2"
                    />
                    <span className="absolute inset-0 bg-linear-to-tr from-blue-400/40 to-purple-500/40 transform -translate-x-full -translate-y-full transition-transform duration-700 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                      <h2 className="text-white text-3xl font-bold drop-shadow-lg">
                        {post.hoverText}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="p-7 border-t border-white/20 flex items-center gap-3 justify-between flex-wrap">
                  <a
                    href="#!"
                    className="inline-flex items-center gap-2 text-white font-medium tracking-wide hover:text-purple-500 transition-colors duration-300 group"
                  >
                    Read More
                    <RiExpandRightLine className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  <p className="flex items-center gap-1">
                    <RiRhythmLine className="w-5 h-5" />
                    {post.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* body section end */}
      </div>
    </section>
    // section end
  );
}
