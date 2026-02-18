import Image from "next/image";
import musicLogo from "../../../../assets/images/music/music-logo-light.png";
import footrBg from "../../../../assets/images/music/music-footer-bg.jpg";
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiMailLine,
  RiMapPin2Line,
  RiPhoneLine,
  RiTwitterFill,
  RiYoutubeFill,
} from "@remixicon/react";

export default function MusicFooter() {
  return (
    <>
      <footer className="relative text-white lg:py-30 py-20 relative font-chakra bg-[#11112c]">
        <div className="container">
          <div
            className=" bg-fixed bg-cover md:px-15 px-5 rounded-xl relative overflow-hidden "
            style={{ backgroundImage: `url(${footrBg.src})` }}
          >
            <div className="absolute bg-[linear-gradient(rgba(0,0,0,0.9)_25%,rgba(0,0,0,0.30)_100%)] w-full h-full inset-0"></div>
            <div className="text-center relative z-10 border-b border-white/50 py-15">
              <a href="index.html" className="inline-block shrink-0">
                <Image src={musicLogo} alt="Logo" className="h-10 mx-auto" />
              </a>
              <form
                action="#"
                className="relative max-w-2xl mx-auto mt-7 flex-wrap md:flex-nowrap flex items-center gap-7 border rounded-xl  p-2 ps-6"
              >
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full h-full outline-none shadow-none font-semibold text-[20px] pe-20 placeholder:text-white"
                />
                <button
                  type="submit"
                  className="btn bg-purple-700 text-white transition-all duration-300 hover:bg-purple-800 shrink-0 text-xl"
                >
                  subscribe now
                </button>
              </form>
            </div>
            <div className="grid grid-cols-12 gap-6 relative py-15">
              <div className="col-span-12 md:col-span-7 lg:col-span-6 xl:col-span-4">
                <p className="text-[20px] mb-8">
                  Join our energetic music community of artists, DJs, producers,
                  and fans celebrating rhythm, creativity, and live sound
                  experiences!
                </p>
                <h3 className="mb-4">Follow the Beat</h3>
                <div className="flex items-center gap-3">
                  <a
                    href="#!"
                    className="group relative bg-white rounded-full size-13 inline-flex items-center justify-center text-black transition-all duration-300 ease-out hover:rotate-6 hover:scale-110 hover:shadow-xl"
                  >
                    <span className="absolute inset-0 rounded-full border border-black/20 scale-75 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300"></span>
                    {/* <i className="ri-facebook-fill relative z-10 group-hover:animate-bounce"></i> */}
                    <RiFacebookBoxFill className=" relative z-10 group-hover:animate-bounce" />
                  </a>

                  <a
                    href="#!"
                    className="group relative bg-white rounded-full size-13 inline-flex items-center justify-center text-black transition-all duration-300 ease-out hover:rotate-6 hover:scale-110 hover:shadow-xl"
                  >
                    <span className="absolute inset-0 rounded-full border border-black/20 scale-75 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300"></span>
                    {/* <i className="ri-twitter-fill relative z-10 group-hover:animate-bounce"></i> */}
                    <RiTwitterFill className=" relative z-10 group-hover:animate-bounce" />
                  </a>

                  <a
                    href="#!"
                    className="group relative bg-white rounded-full size-13 inline-flex items-center justify-center text-black transition-all duration-300 ease-out hover:rotate-6 hover:scale-110 hover:shadow-xl"
                  >
                    <span className="absolute inset-0 rounded-full border border-black/20 scale-75 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300"></span>
                    {/* <i className="ri-instagram-fill relative z-10 group-hover:animate-bounce"></i> */}
                    <RiInstagramFill className=" relative z-10 group-hover:animate-bounce" />
                  </a>

                  <a
                    href="#!"
                    className="group relative bg-white rounded-full size-13 inline-flex items-center justify-center text-black transition-all duration-300 ease-out hover:rotate-6 hover:scale-110 hover:shadow-xl"
                  >
                    <span className="absolute inset-0 rounded-full border border-black/20 scale-75 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300"></span>
                    {/* <i className="ri-youtube-fill relative z-10 group-hover:animate-bounce"></i> */}
                    <RiYoutubeFill className=" relative z-10 group-hover:animate-bounce" />
                  </a>
                </div>
              </div>

              <div className="col-span-12 md:col-span-5 lg:col-span-3 xl:col-span-2 xl:mx-auto">
                <h3 className="mb-4">Music Hub</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#!"
                      className="relative inline-block text-gray-200 group"
                    >
                      Latest Tracks
                      <span className="absolute left-0 bottom-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="relative inline-block text-gray-200 group"
                    >
                      Artist Stories
                      <span className="absolute left-0 bottom-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="relative inline-block text-gray-200 group"
                    >
                      Live Sessions
                      <span className="absolute left-0 bottom-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="relative inline-block text-gray-200 group"
                    >
                      Music Events
                      <span className="absolute left-0 bottom-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="relative inline-block text-gray-200 group"
                    >
                      Fan Support
                      <span className="absolute left-0 bottom-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-3 xl:col-span-2 xl:mx-auto">
                <h3 className="mb-4">Quick Beats</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#!"
                      className="relative inline-block text-gray-200 group"
                    >
                      About Festival
                      <span className="absolute left-0 bottom-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="relative inline-block text-gray-200 group"
                    >
                      Lineup
                      <span className="absolute left-0 bottom-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="relative inline-block text-gray-200 group"
                    >
                      Gallery
                      <span className="absolute left-0 bottom-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="relative inline-block text-gray-200 group"
                    >
                      Tickets
                      <span className="absolute left-0 bottom-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="relative inline-block text-gray-200 group"
                    >
                      Contact Team
                      <span className="absolute left-0 bottom-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4 xl:ms-auto">
                <h3 className="mb-4">Event Contact</h3>
                <ul className="space-y-4 text-gray-200">
                  <li className="flex gap-3">
                    <span className="bg-white/30 backdrop-blur-sm rounded-full inline-flex items-center justify-center size-11 shrink-0">
                      {/* <i className="ri-map-pin-2-line"></i> */}
                      <RiMapPin2Line />
                    </span>
                    EchoTech Arena, 45 Melody Street, Los Angeles, CA 90015
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="bg-white/30 backdrop-blur-sm rounded-full inline-flex items-center justify-center size-11 shrink-0">
                      {/* <i className="ri-mail-line"></i> */}
                      <RiMailLine />
                    </span>
                    <a
                      href="#!"
                      className="relative inline-block text-gray-200 group"
                    >
                      hello@musicevent.com
                      <span className="absolute left-0 bottom-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="bg-white/30 backdrop-blur-sm rounded-full inline-flex items-center justify-center size-11 shrink-0">
                      {/* <i className="ri-phone-line"></i> */}
                      <RiPhoneLine />
                    </span>
                    <a
                      href="#!"
                      className="relative inline-block text-gray-200 group"
                    >
                      +1 888 996 7890
                      <span className="absolute left-0 bottom-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* <!-- Copyright --> */}
            <div className="border-t border-white/70 py-8 relative">
              <div className="text-center text-gray-200">
                <span>
                  &copy; <span id="currentYearFooter"></span>2026 Evantica .
                  Crafted & Designed by{" "}
                  <a
                    href="https://1.envato.market/srbthemes"
                    target="_blank"
                    className="hover:text-white"
                  >
                    SRBThemes
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
