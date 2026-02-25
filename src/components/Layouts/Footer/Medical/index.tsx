import Image from "next/image";
import logo from "../../../../assets/images/medical/medical-logo-light2.png";
import {
  RiArrowRightLongLine,
  RiFacebookBoxFill,
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterLine,
  RiYoutubeLine,
} from "@remixicon/react";

export default function MedicalFooter() {
  return (
    <>
      <footer
        className="2xl:mx-10 lg:mx-5 mx-2 my-8 rounded-2xl relative bg-[#1C2359] text-white overflow-hidden"
        data-sal="slide-up"
        data-sal-duration="800"
        data-sal-delay="200"
      >
        <div className="container">
          <div className="lg:py-30 py-20">
            <div className="grid grid-cols-12 gap-6 2xl:gap-10">
              <div className="col-span-12 xl:col-span-5 lg:col-span-6">
                <h3 className="md:text-5xl font-chivo mb-6">
                  Stay Updated with Conference
                </h3>
                <form
                  action="#"
                  className="relative max-w-2xl flex flex-wrap sm:flex-nowrap items-center gap-7 border-b border-white/60 mt-16 pb-4"
                >
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full h-full outline-none shadow-none text-[22px]"
                  />
                  <button type="submit" className="text-white">
                    <RiArrowRightLongLine className="text-3xl" />
                  </button>
                </form>
              </div>
              <div className="col-span-12 sm:col-span-6  md:col-span-3 xl:col-span-2 lg:mx-auto">
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="relative inline-block group text-gray-300 md:text-[19px] overflow-hidden group"
                    >
                      <span className="relative z-10">Overview</span>
                      <span className="absolute top-0 left-0 w-full h-full text-white opacity-0 transform scale-[1.1] translate-x-2.5 -translate-y-2.5 rotate-[4deg] transition-all duration-300 ease-in-out pointer-events-none group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:rotate-0 group-hover:opacity-100">
                        Overview
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="relative inline-block group text-gray-300 md:text-[19px] overflow-hidden group"
                    >
                      <span className="relative z-10">Agenda</span>
                      <span className="absolute top-0 left-0 w-full h-full text-white opacity-0 transform scale-[1.1] translate-x-2.5 -translate-y-2.5 rotate-[4deg] transition-all duration-300 ease-in-out pointer-events-none group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:rotate-0 group-hover:opacity-100">
                        Agenda
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="relative inline-block group text-gray-300 md:text-[19px] overflow-hidden group"
                    >
                      <span className="relative z-10">Speakers</span>
                      <span className="absolute top-0 left-0 w-full h-full text-white opacity-0 transform scale-[1.1] translate-x-2.5 -translate-y-2.5 rotate-[4deg] transition-all duration-300 ease-in-out pointer-events-none group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:rotate-0 group-hover:opacity-100">
                        Speakers
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="relative inline-block group text-gray-300 md:text-[19px] overflow-hidden group"
                    >
                      <span className="relative z-10">Sponsors</span>
                      <span className="absolute top-0 left-0 w-full h-full text-white opacity-0 transform scale-[1.1] translate-x-2.5 -translate-y-2.5 rotate-[4deg] transition-all duration-300 ease-in-out pointer-events-none group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:rotate-0 group-hover:opacity-100">
                        Sponsors
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="relative inline-block group text-gray-300 md:text-[19px] overflow-hidden group"
                    >
                      <span className="relative z-10">Register</span>
                      <span className="absolute top-0 left-0 w-full h-full text-white opacity-0 transform scale-[1.1] translate-x-2.5 -translate-y-2.5 rotate-[4deg] transition-all duration-300 ease-in-out pointer-events-none group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:rotate-0 group-hover:opacity-100">
                        Register
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-span-12 sm:col-span-6  md:col-span-3 xl:col-span-2 lg:mx-auto">
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="relative inline-block group text-gray-300 md:text-[19px] overflow-hidden group"
                    >
                      <span className="relative z-10">Publications</span>
                      <span className="absolute top-0 left-0 w-full h-full text-white opacity-0 transform scale-[1.1] translate-x-2.5 -translate-y-2.5 rotate-[4deg] transition-all duration-300 ease-in-out pointer-events-none group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:rotate-0 group-hover:opacity-100">
                        Publications
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="relative inline-block group text-gray-300 md:text-[19px] overflow-hidden group"
                    >
                      <span className="relative z-10">Workshops</span>
                      <span className="absolute top-0 left-0 w-full h-full text-white opacity-0 transform scale-[1.1] translate-x-2.5 -translate-y-2.5 rotate-[4deg] transition-all duration-300 ease-in-out pointer-events-none group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:rotate-0 group-hover:opacity-100">
                        Workshops
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="relative inline-block group text-gray-300 md:text-[19px] overflow-hidden group"
                    >
                      <span className="relative z-10">Partners</span>
                      <span className="absolute top-0 left-0 w-full h-full text-white opacity-0 transform scale-[1.1] translate-x-2.5 -translate-y-2.5 rotate-[4deg] transition-all duration-300 ease-in-out pointer-events-none group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:rotate-0 group-hover:opacity-100">
                        Partners
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="relative inline-block group text-gray-300 md:text-[19px] overflow-hidden group"
                    >
                      <span className="relative z-10">FAQs</span>
                      <span className="absolute top-0 left-0 w-full h-full text-white opacity-0 transform scale-[1.1] translate-x-2.5 -translate-y-2.5 rotate-[4deg] transition-all duration-300 ease-in-out pointer-events-none group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:rotate-0 group-hover:opacity-100">
                        FAQs
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-span-12 xl:col-span-3 md:col-span-6 xl:ms-auto">
                <p className="text-gray-300 md:text-[19px] leading-snug mb-1">
                  123 Wellness Avenue,
                </p>
                <p className="text-gray-300 md:text-[19px] leading-snug mb-4">
                  San Francisco, CA 94105, USA
                </p>
                <p className="text-gray-300 md:text-[19px] leading-snug">
                  <a
                    href="#"
                    className="relative inline-block group text-gray-300 md:text-[19px] overflow-hidden group"
                  >
                    <span className="relative z-10">+1 (617) 555-9876</span>
                    <span className="absolute top-0 left-0 w-full h-full text-white opacity-0 transform scale-[1.1] translate-x-2.5 -translate-y-2.5 rotate-[4deg] transition-all duration-300 ease-in-out pointer-events-none group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:rotate-0 group-hover:opacity-100">
                      +1 (617) 555-9876
                    </span>
                  </a>
                </p>
                <div className="flex items-center gap-3 mt-14">
                  <a
                    href="#!"
                    className="relative group border border-white/30 rounded-full inline-flex items-center justify-center size-13 overflow-hidden"
                  >
                    <span className="absolute top-full left-0 w-full h-full bg-[#1FC5B1] transition-all duration-500 group-hover:top-0"></span>
                    <RiFacebookFill className="text-lg group-hover:text-white transition-transform duration-500 group-hover:rotate-y-360" />
                  </a>

                  <a
                    href="#!"
                    className="relative group border border-white/30 rounded-full inline-flex items-center justify-center size-13 overflow-hidden"
                  >
                    <span className="absolute top-full left-0 w-full h-full bg-[#1FC5B1] transition-all duration-500 group-hover:top-0"></span>
                    <RiInstagramLine className="text-lg group-hover:text-white transition-transform duration-500 group-hover:rotate-y-360" />
                  </a>

                  <a
                    href="#!"
                    className="relative group border border-white/30 rounded-full inline-flex items-center justify-center size-13 overflow-hidden"
                  >
                    <span className="absolute top-full left-0 w-full h-full bg-[#1FC5B1] transition-all duration-500 group-hover:top-0"></span>
                    <RiTwitterLine className="text-lg group-hover:text-white transition-transform duration-500 group-hover:rotate-y-360" />
                  </a>

                  <a
                    href="#!"
                    className="relative group border border-white/30 rounded-full inline-flex items-center justify-center size-13 overflow-hidden"
                  >
                    <span className="absolute top-full left-0 w-full h-full bg-[#1FC5B1] transition-all duration-500 group-hover:top-0"></span>
                    <RiYoutubeLine className="text-lg group-hover:text-white transition-transform duration-500 group-hover:rotate-y-360" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Copyright --> */}
          <div className="py-6 flex items-center justify-between gap-3 flex-wrap md:flex-nowrap">
            <p className="text-gray-300">
              <span>
                &copy; <span id="currentYearFooter"></span>2026 Paxvent .
                Crafted & Designed by{" "}
                <a
                  href="https://1.envato.market/srbthemes"
                  target="_blank"
                  className="hover:text-white"
                >
                  SRBThemes
                </a>
              </span>
            </p>
            <a href="index.html">
              <Image
                src={logo}
                alt="logo"
                className="md:h-10 h-8 object-cover w-auto"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
