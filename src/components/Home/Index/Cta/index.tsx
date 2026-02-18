'use client';

import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="lg:-mb-30 -mb-8 relative z-10">
      <div className="container">
        <div className="rounded-lg bg-[#c0f037] p-10">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="md:text-5xl font-chivo font-medium leading-[1.2]">
              Get Started Right Now!
            </h2>
          </div>

          <div className="flex md:gap-6 gap-4 flex-wrap items-center justify-center">
            <div>
              <input
                type="text"
                id="full-name"
                placeholder="Your Full Name"
                className="w-full md:px-10 md:py-3 p-3 rounded-lg bg-white text-black focus:outline-none focus:border-[#c0f037] focus:ring-2 focus:ring-[#c0f037]/40 transition-all"
              />
            </div>

            <div>
              <input
                type="email"
                id="email-address"
                placeholder="Your Email Address"
                className="w-full md:px-10 md:py-3 p-3 rounded-lg bg-white text-black focus:outline-none focus:border-[#c0f037] focus:ring-2 focus:ring-[#c0f037]/40 transition-all"
              />
            </div>

            <div>
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                className="w-full md:px-10 md:py-3 p-3 rounded-lg bg-white text-black focus:outline-none focus:border-[#c0f037] focus:ring-2 focus:ring-[#c0f037]/40 transition-all"
              />
            </div>
          </div>

          <div className="text-center mt-9">
            <Link
              href="#!"
              className="btn text-lg rounded-none group bg-[#032530] tracking-[1px] uppercase font-medium relative text-white transition-all duration-300 inline-block hover:rotate-[2deg]"
            >
              Send Message
              <span className="bg-white size-3 rotate-[45deg] block absolute ltr:-left-1 rtl:-right-1 -top-1 transition-all duration-300 group-hover:scale-125 group-hover:bg-white"></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
