"use client";

export default function ContactForm() {
  return (
    <>
      <section className="lg:py-30 py-20">
        <div className="container">
          <div
            className="border rounded-xl md:p-10 p-2"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="200"
          >
            <div className="grid grid-cols-12 2xl:gap-15 gap-6">
              <div className="col-span-12 lg:col-span-6">
                <div className="rounded-xl overflow-hidden h-full w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193596.26002806186!2d-74.14431244705199!3d40.697284634899496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1766560088241!5m2!1sen!2sin"
                    className="w-full h-full object-cover border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <h2 className="font-bold md:text-6xl leading-none mb-12">
                  Get in Touch for Any Questions
                </h2>
                <form action="#" method="post" className="space-y-6">
                  <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-6">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full border border-black/20 dark:border-white/20 rounded-xl px-5 py-4 text-lg outline-none focus:border-black dark:focus:border-white"
                        required
                      />
                    </div>

                    <div className="col-span-12 md:col-span-6">
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full border border-black/20 dark:border-white/20 rounded-xl px-5 py-4 text-lg outline-none focus:border-black dark:focus:border-white"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number (optional)"
                      className="w-full border border-black/20 dark:border-white/20 rounded-xl px-5 py-4 text-lg outline-none focus:border-black dark:focus:border-white"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full border border-black/20 dark:border-white/20 rounded-xl px-5 py-4 text-lg outline-none focus:border-black dark:focus:border-white"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      rows={6}
                      placeholder="Write your message here..."
                      className="w-full border border-black/20 dark:border-white/20 rounded-xl px-5 py-4 text-lg outline-none resize-none focus:border-black dark:focus:border-white"
                      required
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="relative inline-block text-xl font-semibold bg-black dark:bg-white text-white dark:text-black w-full rounded-full px-7 py-4 overflow-hidden group hover:text-black"
                    >
                      <span className="relative z-10">
                        Send Message <i className="ri-arrow-right-line"></i>
                      </span>
                      <span className="absolute inset-0 bg-[#f2c944] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out rounded-full"></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
