"use client";

import image1 from "../../../../assets/images/business/business-schedule1.jpg";
import image2 from "../../../../assets/images/business/business-gallery-4.jpg";
import image3 from "../../../../assets/images/freelancer/freelancer-gallery5.jpg";
import image4 from "../../../../assets/images/medical/medical-schedule-8.jpg";
import image5 from "../../../../assets/images/music/music-blog-2.jpg";
import image6 from "../../../../assets/images/business/business-schedule5.jpg";
import Image from "next/image";

import arrow from "../../../../assets/images/event/event-arrow-right.png";
const ourBlogData = [
  {
    image: image1,
    date: "Feb 04, 2026",
    event: "Conference Team .",
    comment: "(12)",
    title: "Why You Should Attend This Global Event Conference in 2026",
  },
  {
    image: image2,
    date: "Mar 18, 2026",
    event: "Event Organizers .",
    comment: "(08)",
    title: "Top Speakers You’ll Meet at the 2026 Business Conference",
  },
  {
    image: image3,
    date: "Apr 02, 2026",
    event: "Conference Team .",
    comment: "(15)",
    title: "How Global Conferences Help You Build Strong Networks",
  },
  {
    image: image4,
    date: "May 10, 2026",
    event: "Event Insights .",
    comment: "(05)",
    title: "Conference Agenda Highlights You Shouldn’t Miss",
  },
  {
    image: image5,
    date: " Jun 22, 2026",
    event: "Conference Media .",
    comment: "(21)",
    title: "What Makes This Event Conference Worth Attending",
  },
  {
    image: image6,
    date: "Jul 04, 2026",
    event: "Conference Updates .",
    comment: "(09)",
    title: "How This Conference Shapes the Future of Global Innovation",
  },
];

export default function BlogGridOurBlog() {
  return (
    <>
      <section className="lg:py-30 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-15">
            <p
              className="mb-2 font-medium uppercase tracking-[1px]"
              data-sal="zoom-in"
              data-sal-duration="800"
              data-sal-delay="100"
            >
              // From Our Blog
            </p>

            <h2
              className="font-bold md:text-5xl leading-snug "
              data-sal="zoom-in"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              News, Ideas & Highlights From the Conference
            </h2>
          </div>
          <div className="grid grid-cols-12 gap-6">
            {ourBlogData.map((item, index) => (
              <div
                key={index}
                className="col-span-12 md:col-span-6 lg:col-span-4"
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay="200"
              >
                <div className="relative group overflow-hidden rounded-xl h-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-2"
                  />
                  <span className="absolute top-5 ltr:end-5 rtl:left-5 bg-white text-black px-5 py-1 rounded-lg transition-all duration-400 ease-out group-hover:bg-black group-hover:text-white">
                    {item.date}
                  </span>
                </div>
                <div className="mt-5">
                  <div className="flex gap-2">
                    <p>
                      <a href="#!">{item.event}</a>
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Comment {item.comment}
                    </p>
                  </div>
                  <div className="flex items-center gap-8 mt-5">
                    <h3>
                      <a href="#!">{item.title}</a>
                    </h3>
                    <a
                      href="#!"
                      className="relative group size-15 rounded-full inline-flex items-center justify-center overflow-hidden shrink-0"
                    >
                      <span className="absolute top-full left-0 w-full h-full bg-[#f2c944] transition-all duration-500 group-hover:top-0"></span>
                      <Image
                        src={arrow}
                        alt=""
                        className="relative z-10 transition-transform ltr:-rotate-45 rtl:rotate-[-136deg] duration-500 group-hover:rotate-y-360 dark:invert"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* pagination start */}
          <div className="flex justify-center mt-30">
            <nav
              className="inline-flex items-center flex-wrap gap-1"
              aria-label="Pagination"
            >
              {/* <!-- Previous --> */}
              <a
                href="#!"
                className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 bg-white dark:bg-black border border-gray-300 rounded-md hover:bg-gray-100 hover:text-black transition-colors duration-300"
              >
                &laquo; Previous
              </a>

              {/* <!-- Page Numbers --> */}
              <a
                href="#!"
                className="px-4 py-2 text-sm font-medium text-white bg-black dark:bg-white dark:text-black border border-black rounded-md transition-colors duration-300"
              >
                1
              </a>
              <a
                href="#!"
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-black border border-gray-300 rounded-md hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white transition-colors duration-300"
              >
                2
              </a>
              <a
                href="#!"
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-black border border-gray-300 rounded-md hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white transition-colors duration-300"
              >
                3
              </a>
              <span className="px-4 py-2 text-sm font-medium text-gray-500 bg-white dark:bg-black border border-gray-300 rounded-md">
                ...
              </span>
              <a
                href="#!"
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-black border border-gray-300 rounded-md hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white transition-colors duration-300"
              >
                10
              </a>

              {/* <!-- Next --> */}
              <a
                href="#!"
                className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 bg-white dark:bg-black border border-gray-300 rounded-md hover:bg-gray-100 hover:text-black transition-colors duration-300"
              >
                Next &raquo;
              </a>
            </nav>
          </div>
          {/* pagination end */}
        </div>
      </section>
    </>
  );
}
