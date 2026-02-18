"use client";

import { RiHome4Line } from "@remixicon/react";
import Bg404 from "../../../../assets/images/event/event-404.jpg";

export default function Home404() {
  return (
    <>
      <section
        className="relative min-h-screen bg-[url('/assets/images/event/event-404.jpg')] bg-cover bg-center flex items-end justify-center"
        style={{ backgroundImage: `url(${Bg404.src})` }}
      >
        <div className="mb-10">
          <a
            href="/"
            className="group relative inline-flex items-center gap-2 text-xl font-semibold
                  bg-[#DC5D66] text-white px-8 py-4 rounded-xl
                  overflow-hidden transition-colors duration-300 hover:text-[#DC5D66]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <i className="ri-home-4-line text-2xl"></i>
              <RiHome4Line className="text-2xl" />
              Back To Home
            </span>
            <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out rounded-xl"></span>
          </a>
        </div>
      </section>
    </>
  );
}
