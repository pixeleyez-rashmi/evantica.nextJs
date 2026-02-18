"use client";

import Image from "next/image";
import { Fragment } from "react";

import image1 from "../../../../assets/images/event/event-blog-main.png";
import image2 from "../../../../assets/images/freelancer/freelancer-gallery6.jpg";
// recent post image
import image7 from "../../../../assets/images/tech/tech-schedule4.jpg";
import image8 from "../../../../assets/images/education/education-schedule-1.jpg";
import image9 from "../../../../assets/images/education/education-schedule-4.jpg";
import {
  RiArrowRightDoubleLine,
  RiCalendar2Line,
  RiChat3Line,
  RiDoubleQuotesR,
  RiEyeLine,
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiUser3Line,
} from "@remixicon/react";

const BlogImageData = [
  {
    image: image1,
    badge: "Business & Innovation",
  },
];

const MetaInfoData = [
  {
    icon: <RiCalendar2Line className="me-2" />,
    info: "February 18, 2026",
  },
  {
    icon: <RiUser3Line className="me-2" />,
    info: "By Conference Team",
  },
  {
    icon: <RiChat3Line className="me-2" />,
    info: "08 Responses",
  },
  {
    icon: <RiEyeLine className="me-2" />,
    info: "1.2k Views",
  },
];

const contentData = [
  {
    Image: image2,
    Title2: "Learning Beyond Traditional Education",
    description:
      "Conferences provide practical knowledge straight from experienced professionals, helping attendees understand real-world challenges and solutions.",
    icon: <RiArrowRightDoubleLine />,
    iconInfo: [
      "Gain insights from industry pioneers",
      "Understand emerging market trends",
      "Learn through expert-led sessions",
      "Participate in panel discussions",
      "Enhance professional decision-making",
    ],
    paragraph:
      "From keynote presentations to interactive workshops, these events create a dynamic learning atmosphere where ideas are exchanged freely and innovation is encouraged.",
  },
];

const TagData = [
  {
    tag: "Business Growth",
  },
  {
    tag: "Professional Events",
  },
  {
    tag: "Innovation",
  },
];

const ShareData = [
  {
    class:
      "border border-[#3b5998] text-[#3b5998] rounded-full size-10 flex items-center justify-center hover:bg-[#3b5998] hover:text-white transition",
    icon: <RiFacebookFill className="text-xl" />,
  },
  {
    class:
      "border border-[#E1306C] text-[#E1306C] rounded-full size-10 flex items-center justify-center hover:bg-[#E1306C] hover:text-white transition",
    icon: <RiInstagramFill className="text-xl" />,
  },
  {
    class:
      "border border-[#0A66C2] text-[#0A66C2] rounded-full size-10 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition",
    icon: <RiLinkedinFill className="text-xl" />,
  },
  {
    class:
      "border border-[#1DA1F2] text-[#1DA1F2] rounded-full size-10 flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition",
    icon: <RiTwitterFill className="text-xl" />,
  },
];

const RelatedContentData = [
  {
    Article: "Why Attending Conferences Boosts Career Confidence",
    description:
      "Understanding the long-term benefits of professional exposure.",
  },
  {
    Article: "Building Strong Business Networks Through Events",
    description: "Strategies to create meaningful professional relationships.",
  },
  {
    Article: "Event Learning vs Online Courses: What Works Best?",
    description:
      "Comparing real-world learning experiences with digital education.",
  },
];

const recentPostData = [
  {
    id: 1,
    image: image7,
    date: "12 Jan 2026",
    title: "Top Trends Shaping Global Tech Conferences",
  },
  {
    id: 2,
    image: image8,
    date: "8 Jan 2026",
    title: "How Networking Sessions Boost Event Value",
  },
  {
    id: 3,
    image: image9,
    date: "02 Jan 2026",
    title: "What Makes a Successful Business Conference?",
  },
];

const BlogData = [
  {
    name: "Upcoming Conferences",
    count: "(6)",
    color: "hover:text-rose-500",
  },
  {
    name: "Event Planning",
    count: "(4)",
    color: "hover:text-green-500",
  },
  {
    name: "Keynote Speakers",
    count: "(8)",
    color: "hover:text-blue-500",
  },
  {
    name: "Networking & Workshops",
    count: "(5)",
    color: "hover:text-yellow-500",
  },
  {
    name: "Event Technology",
    count: "(3)",
    color: "hover:text-purple-500",
  },
];

const TagsData = [
  {
    name: "Event 2026",
    color: "hover:bg-rose-500",
    borderColor: "hover:border-rose-500",
  },
  {
    name: "Conference",
    color: "hover:bg-green-500",
    borderColor: "hover:border-green-500",
  },
  {
    name: "Keynote",
    color: "hover:bg-blue-500",
    borderColor: "hover:border-blue-500",
  },
  {
    name: "Workshops",
    color: "hover:bg-yellow-500",
    borderColor: "hover:border-yellow-500",
  },
  {
    name: "Networking",
    color: "hover:bg-purple-500",
    borderColor: "hover:border-purple-500",
  },
  {
    name: "Business Events",
    color: "hover:bg-pink-500",
    borderColor: "hover:border-pink-500",
  },
  {
    name: "Tech Summit",
    color: "hover:bg-indigo-500",
    borderColor: "hover:border-indigo-500",
  },
  {
    name: "Leadership",
    color: "hover:bg-teal-500",
    borderColor: "hover:border-teal-500",
  },
];
export default function BLogDetailsInfo() {
  return (
    <>
      <section className="lg:py-30 py-20">
        <div className="container">
          <div className="grid grid-cols-12 2xl:gap-10 gap-6">
            <div className="col-span-12 xl:col-span-8">
              {/* blog image */}
              {BlogImageData.map((image, index) => (
                <div className="relative" key={index}>
                  <Image
                    src={image.image}
                    alt=""
                    className="w-full h-130 object-cover rounded-2xl"
                  ></Image>
                  <span className="bg-white dark:bg-black rounded-full p-1 px-3 absolute top-4 ltr:left-4 rtl:right-4 w-fit whitespace-nowrap">
                    {image.badge}
                  </span>
                </div>
              ))}

              {/* meta info */}
              <div className="flex items-center lg:gap-7 gap-3 mt-4 flex-wrap">
                {MetaInfoData.map((meta, index) => (
                  <p
                    key={index}
                    className="flex items-center text-gray-600 dark:text-gray-400 text-[20px]"
                  >
                    {meta.icon} {meta.info}
                  </p>
                ))}
              </div>

              {/* Title */}
              <h2
                className="mt-6 leading-snug md:text-4xl mb-4"
                data-sal="slide-right"
                data-sal-duration="800"
                data-sal-delay="100"
              >
                <a href="#!">
                  How Global Conferences Are Shaping the Future of Business
                  Leadership
                </a>
              </h2>

              {/* intro paragraph */}
              <p className="text-gray-600 dark:text-gray-400 md:text-[22px] mb-3">
                Global conferences have become powerful platforms where industry
                voices meet, trends emerge, and future-ready strategies are
                formed. These gatherings offer more than discussions — they
                deliver transformation.
              </p>

              <p className="text-gray-600 dark:text-gray-400 md:text-[22px]">
                Professionals from diverse sectors attend these events to gain
                insights, explore opportunities, and stay ahead in an
                ever-evolving business environment driven by innovation and
                collaboration.
              </p>

              {/* content section */}
              <div className="mt-8">
                <h2
                  className="mb-6"
                  data-sal="slide-right"
                  data-sal-duration="800"
                  data-sal-delay="100"
                >
                  The Growing Impact of Professional Events
                </h2>
                {/* Added container for vertical spacing if you have multiple items */}
                {contentData.map((content, index) => (
                  <Fragment key={index}>
                    <div className="flex items-center flex-wrap lg:flex-nowrap gap-6 mb-6">
                      <Image
                        src={content.Image}
                        alt={content.Title2}
                        className="object-cover size-90 rounded-xl"
                      />
                      <div>
                        <h2 className="mb-3">{content.Title2}</h2>
                        <p className="text-gray-600 dark:text-gray-400 md:text-[20px]">
                          {content.description}
                        </p>

                        <ul className="mt-4 space-y-3">
                          {content.iconInfo.map((item, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="text-primary">
                                {content.icon}
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Accessing pregraf inside the map loop */}
                    <p className="text-gray-600 dark:text-gray-400 md:text-[22px]">
                      {content.paragraph}
                    </p>
                  </Fragment>
                ))}

                {/* quote section */}
                <div className="bg-[#f5f5f5] dark:bg-[#1F1F1F] p-5 mt-7 mb-7 rounded-xl">
                  <p className="italic md:text-[20px] font-semibold mb-4">
                    "Attending industry conferences gave me new perspectives and
                    practical knowledge that completely changed how I approach
                    leadership and growth."
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="11"
                        viewBox="0 0 34 11"
                        className="fill-black dark:fill-white"
                      >
                        <path d="M24.541 4.25H0V6.2334H24.6064L28.791 10.418L34 5.20898L28.791 0L24.541 4.25Z"></path>
                      </svg>
                      <p className="font-medium">
                        Jordan Mitchell, Business Consultant
                      </p>
                    </div>
                    <RiDoubleQuotesR className="text-3xl" />
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 md:text-[22px]">
                  By attending well-structured conferences, professionals can
                  strengthen their skills, expand their vision, and develop
                  long-lasting relationships that benefit both personal and
                  organizational growth.
                </p>

                {/* tag & share section */}
                <div className="mt-7 border-t border-black/20 dark:border-white/20 py-6 pt-8 flex items-center justify-between flex-wrap gap-4">
                  {/* Tags */}
                  <div className="flex gap-3 items-center flex-wrap">
                    <h3>Tags:</h3>
                    {TagData.map((tag, index) => (
                      <a
                        href="#!"
                        key={index}
                        className="border p-1 px-3 rounded-xl text-gray-600 dark:text-gray-400"
                      >
                        {tag.tag}
                      </a>
                    ))}
                  </div>

                  {/* Share */}
                  <div className="flex gap-3 items-center">
                    <h3>Share:</h3>
                    {ShareData.map((share, index) => (
                      <a href="#!" className={share.class} key={index}>
                        {share.icon}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Related Content */}
                <div className="mt-10">
                  <h2
                    className="mb-5"
                    data-sal="slide-right"
                    data-sal-duration="800"
                    data-sal-delay="100"
                  >
                    Related Articles
                  </h2>
                  <ul className="space-y-4">
                    {RelatedContentData.map((relatedContent, index) => (
                      <li key={index}>
                        <a
                          href="#!"
                          className="text-xl font-medium hover:underline"
                        >
                          {relatedContent.Article}
                        </a>
                        <p className="text-gray-600 dark:text-gray-400">
                          {relatedContent.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Writer */}
                <div className="mt-10 bg-[#f5f5f5] dark:bg-[#1F1F1F] p-6 rounded-xl">
                  <h2 className="mb-3">About the Writer</h2>
                  <p className="text-gray-600 dark:text-gray-400 md:text-[20px]">
                    The Conference Team is a group of event professionals and
                    industry analysts dedicated to sharing insights, trends, and
                    knowledge from leading global business forums.
                  </p>
                </div>

                {/* comment form */}
                <div className="mt-10">
                  <h2
                    className="mb-3"
                    data-sal="slide-right"
                    data-sal-duration="800"
                    data-sal-delay="100"
                  >
                    Leave A Comment
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-5">
                    Your email address will remain confidential. Fields marked
                    with * are required.
                  </p>

                  <form action="#" method="post">
                    <div className="grid grid-cols-12 gap-6">
                      <div className="col-span-12 lg:col-span-6">
                        <input
                          type="text"
                          placeholder="Full Name"
                          className="w-full border border-black/20 dark:border-white/20 rounded-xl px-5 py-4 text-lg outline-none focus:border-black"
                        />
                      </div>
                      <div className="col-span-12 lg:col-span-6">
                        <input
                          type="email"
                          placeholder="Email Address"
                          className="w-full border border-black/20 dark:border-white/20 rounded-xl px-5 py-4 text-lg outline-none focus:border-black"
                        />
                      </div>
                      <div className="col-span-12">
                        <textarea
                          rows={6}
                          placeholder="Share your thoughts here..."
                          className="w-full border border-black/20 dark:border-white/20 rounded-xl px-5 py-4 text-lg outline-none resize-none focus:border-black"
                        ></textarea>
                      </div>
                      <div className="col-span-12 flex items-center gap-3">
                        <input
                          type="checkbox"
                          className="w-4 h-4 accent-black"
                        />
                        <label className="text-gray-600 dark:text-gray-400 text-lg">
                          Remember my details for future comments
                        </label>
                      </div>
                      <div className="col-span-12">
                        <button
                          type="submit"
                          className="relative inline-block text-xl font-semibold bg-black text-white dark:bg-white dark:text-black hover:text-black rounded-full px-7 py-3 overflow-hidden group hover:border-[#f2c944] dark:hover:text-black"
                        >
                          <span className="relative z-10">
                            Submit Comment{" "}
                            <i className="ri-arrow-right-up-line"></i>
                          </span>
                          <span className="absolute inset-0 bg-[#f2c944] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out rounded-full"></span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* sidebar ---------------------------------------------*/}
            {/* // sidebar start */}
            <div className="col-span-12 xl:col-span-4">
              <div className="space-y-6 sticky top-5">
                {/* search start*/}
                <div
                  className="border border-black/30 dark:border-white/30 rounded-xl p-7"
                  data-sal="slide-up"
                  data-sal-duration="800"
                  data-sal-delay="200"
                >
                  <h3 className="mb-5">
                    Search Events & Blogs
                    <span className="flex gap-2 mt-1">
                      <span className="h-0.5 w-8 bg-current"></span>
                      <span className="h-0.5 w-4 bg-current"></span>
                    </span>
                  </h3>
                  <form action="#" method="get">
                    <div className="flex items-center gap-2 rounded-xl border border-black/20 dark:border-white/20 p-4">
                      <input
                        type="search"
                        name="search"
                        placeholder="Search conference topics..."
                        className="w-full focus:outline-none shadow-none"
                      />
                      <button type="submit">
                        <i className="ri-search-line text-xl"></i>
                      </button>
                    </div>
                  </form>
                </div>
                {/* search end */}

                {/* recent posts start */}
                <div
                  className="border border-black/30 dark:border-white/30 rounded-xl p-7"
                  data-sal="slide-up"
                  data-sal-duration="800"
                  data-sal-delay="200"
                >
                  <h3 className="mb-5">
                    Recent Conference Posts
                    <span className="flex gap-2 mt-1">
                      <span className="h-0.5 w-8 bg-current"></span>
                      <span className="h-0.5 w-4 bg-current"></span>
                    </span>
                  </h3>

                  <div className="space-y-4">
                    {recentPostData.map((post) => (
                      <div
                        key={post.id}
                        className="flex items-center gap-3 flex-wrap md:flex-nowrap"
                      >
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={88}
                          height={88}
                          className="size-22 object-cover rounded-xl shrink-0"
                        />
                        <div>
                          <p className="text-gray-600 mb-1 dark:text-gray-400">
                            {post.date}
                          </p>
                          <h4>
                            <a href="#!">{post.title}</a>
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* recent posts end */}

                {/* categories start */}
                <div
                  className="border border-black/30 dark:border-white/30 rounded-xl p-7"
                  data-sal="slide-up"
                  data-sal-duration="800"
                  data-sal-delay="200"
                >
                  <h3 className="mb-5">
                    Blog Categories
                    <span className="flex gap-2 mt-1">
                      <span className="h-0.5 w-8 bg-current"></span>
                      <span className="h-0.5 w-4 bg-current"></span>
                    </span>
                  </h3>

                  {/* Move the UL outside the map */}
                  <ul className="space-y-3">
                    {BlogData.map((category, index) => (
                      <li
                        key={index}
                        className={`flex items-center justify-between text-[19px] font-medium border-b border-black/30 dark:border-white/30 pb-3 text-gray-600 dark:text-gray-400 ${category.color} transition-colors duration-300 last:border-0`}
                      >
                        <a href="#!" className="flex items-center gap-2">
                          {category.name}
                        </a>
                        <span>{category.count}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* categories end */}

                {/* Tags start */}
                <div
                  className="border border-black/30 dark:border-white/30 rounded-xl p-7"
                  data-sal="slide-up"
                  data-sal-duration="800"
                  data-sal-delay="200"
                >
                  <h3 className="mb-5">
                    Popular Tags
                    <span className="flex gap-2 mt-1">
                      <span className="h-0.5 w-8 bg-current"></span>
                      <span className="h-0.5 w-4 bg-current"></span>
                    </span>
                  </h3>

                  {/* Flex wrapper stays outside the map */}
                  <div className="flex items-center gap-3 flex-wrap">
                    {TagsData.map((tag, index) => (
                      <a
                        key={index}
                        href="#!"
                        // Wrap the backticks in curly braces {}
                        className={`border border-black/30 dark:border-white/30 rounded-lg p-1 px-3 text-gray-600 dark:text-gray-400 ${tag.color} ${tag.borderColor} hover:text-white transition-colors duration-300`}
                      >
                        {tag.name}
                      </a>
                    ))}
                  </div>
                </div>
                {/* Tags end */}
              </div>
            </div>
            {/* // sidebar end */}
          </div>
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
      </section>
    </>
  );
}
