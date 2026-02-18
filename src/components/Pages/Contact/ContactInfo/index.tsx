"use client";

import { RiMailFill, RiMapPin2Fill, RiPhoneFill } from "@remixicon/react";

export default function ContactInfo() {
  return (
    <>
      <section className="lg:pb-30 pb-20">
        <div className="container">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-4">
              <div className="text-center">
                <div className="size-19 rounded-full flex items-center justify-center bg-[#6C63FF] text-white mx-auto mb-5">
                  <RiMapPin2Fill className="text-3xl" />
                </div>
                <h3 className="text-3xl mb-3">Event Venue</h3>
                <p className="text-gray-600 text-xl dark:text-gray-400">
                  Grand Convention Center, <br />
                  15 Innovation Drive, Silicon City, CA, USA
                </p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <div className="text-center">
                <div className="size-18 rounded-full flex items-center justify-center bg-[#FF6B6B] text-white mx-auto mb-5">
                  <RiPhoneFill className="text-3xl" />
                </div>
                <h3 className="text-3xl mb-3">Registration Desk</h3>
                <p className="text-gray-600 text-xl dark:text-gray-400">
                  For attendee queries or registration help
                  <br />
                  <a href="tel:+1234567890" className="hover:underline">
                    +1 234 567 890
                  </a>
                </p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <div className="text-center">
                <div className="size-19 rounded-full flex items-center justify-center bg-[#4CAF50] text-white mx-auto mb-5">
                  <RiMailFill className="text-3xl" />
                </div>
                <h3 className="text-3xl mb-3">Email Support</h3>
                <p className="text-gray-600 text-xl dark:text-gray-400">
                  For general inquiries, sponsorships, or media
                  <br />
                  <a
                    href="mailto:info@eventica.com"
                    className="hover:underline"
                  >
                    info@eventica.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
