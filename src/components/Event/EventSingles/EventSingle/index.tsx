"use client";

import Image from "next/image";
import user from "../../../../assets/images/avatar/user-09.jpg";

export default function EventSingle() {
  return (
    <>
      <section className="text-center md:p-14 p-5 lg:-mt-25 rounded-xl bg-white dark:bg-black relative z-10 max-w-6xl mx-auto">
        <p
          className="bg-[#f4f4f4] dark:bg-[#f4f4f429] p-1 px-4 rounded-xl inline-block"
          data-sal="zoom-in"
          data-sal-duration="800"
          data-sal-delay="100"
        >
          Event Insights
        </p>

        <h2
          className="md:text-5xl leading-snug mt-5 max-w-4xl mx-auto"
          data-sal="zoom-in"
          data-sal-duration="800"
          data-sal-delay="200"
        >
          <a href="#!">
            How AI & Digital Innovation Are Transforming Modern Business Events
          </a>
        </h2>

        <div
          className="flex items-center justify-center md:gap-5 mt-4 flex-wrap gap-2"
          data-sal="zoom-in"
          data-sal-duration="800"
          data-sal-delay="100"
        >
          <div className="flex items-center gap-3">
            <Image
              src={user}
              alt="Author"
              className="size-11 rounded-full object-cover"
            />
            <a href="#!" className="font-medium">
              Michael Anderson
            </a>
          </div>

          <p className="text-gray-600 dark:text-gray-400">March 18, 2026</p>

          <p className="text-gray-600 dark:text-gray-400">12 Discussions</p>
        </div>
      </section>
    </>
  );
}
