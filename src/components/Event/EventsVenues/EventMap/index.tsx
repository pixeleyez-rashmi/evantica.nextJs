"use client";

export default function EventMap() {
  return (
    <>
      <section className="lg:pb-30 pb-20">
        <div className="container">
          <h2
            className="font-bold md:text-5xl leading-snug  mb-12 text-center"
            data-sal="zoom-in"
            data-sal-duration="800"
            data-sal-delay="200"
          >
            Event Location
          </h2>
          <div
            className="w-full h-120 rounded-xl overflow-hidden"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="200"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9581853.80133783!2d-14.999798786966373!3d54.10353482830763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b1142c791a9%3A0xc4f8a0433288257a!2sUnited%20Kingdom!5e0!3m2!1sen!2sin!4v1766388460875!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              className="object-cover w-full h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
