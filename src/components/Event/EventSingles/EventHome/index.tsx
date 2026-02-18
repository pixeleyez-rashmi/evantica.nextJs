"use client";

import SingleBg from "../../../../assets/images/event/event-single-bg.jpg";

export default function EventHome() {
  return (
    <>
      <section
        className="lg:py-90 py-40 lg:mx-7 mx-2 rounded-3xl bg-[url(/assets/images/event/event-single-bg.jpg)] bg-cover bg-center bg-fixed text-center text-white relative mt-5"
        style={{ backgroundImage: `url(${SingleBg.src})` }}
      >
        <div className="absolute bg-[radial-gradient(circle_at_left_bottom,transparent_20px,#fff_20px)]  dark:bg-[radial-gradient(circle_at_left_bottom,transparent_20px,#000_20px)] size-7 2xl:-top-2 2xl:left-46 z-10 md:left-2 md:-top-1 -top-2 left-0"></div>
        <div className="absolute bg-[radial-gradient(circle_at_right_bottom,transparent_20px,#fff_20px)] dark:bg-[radial-gradient(circle_at_right_bottom,transparent_20px,#000_20px)] size-7 2xl:-top-2 2xl:right-46 z-10 md:right-2 md:-top-1 -top-2 right-0"></div>
        <div className="absolute inset-0 w-full h-full bg-black/30 rounded-3xl"></div>
      </section>
    </>
  );
}
