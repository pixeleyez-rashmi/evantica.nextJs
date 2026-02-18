"use client";
import Image from "next/image";

import RightArrow from "../../../../assets/images/event/event-arrow-right.png";
// blog images
import image1 from "../../../../assets/images/business/business-schedule1.jpg";
import image2 from "../../../../assets/images/business/business-gallery-4.jpg";
import image3 from "../../../../assets/images/freelancer/freelancer-gallery5.jpg";
import image4 from "../../../../assets/images/medical/medical-schedule-8.jpg";
import image5 from "../../../../assets/images/music/music-blog-2.jpg";
import image6 from "../../../../assets/images/business/business-schedule5.jpg";

// recent post image
import image7 from "../../../../assets/images/tech/tech-schedule4.jpg";
import image8 from "../../../../assets/images/education/education-schedule-1.jpg";
import image9 from "../../../../assets/images/education/education-schedule-4.jpg";
export default function BlogListOfBlog() {
  // blog posts data
  const blogPosts = [
    {
      id: 1,
      image: image1,
      date: "Feb 04, 2026",
      author: "Conference Team",
      comments: "12",
      title: "Why You Should Attend This Global Event Conference in 2026",
      description:
        "Discover how this global conference connects industry leaders, sparks innovation, and creates powerful opportunities for collaboration.",
    },
    {
      id: 2,
      image: image2,
      date: "Mar 18, 2026",
      author: "Event Organizers",
      comments: "08",
      title: "Top Speakers You’ll Meet at the 2026 Business Conference",
      description:
        " Meet world-class speakers, explore new business trends, and gain insights that help you stay ahead in a competitive global market.",
    },
    {
      id: 3,
      image: image3,
      date: "Apr 02, 2026",
      author: "Conference Team",
      comments: "15",
      title: "How Global Conferences Help You Build Strong Networks",
      description:
        "Learn how attending international conferences helps professionals build lasting connections and unlock new career opportunities.",
    },
    {
      id: 4,
      image: image4,
      date: " May 10, 2026",
      author: "Event Insights",
      comments: "05",
      title: "Conference Agenda Highlights You Shouldn’t Miss",
      description:
        "Explore must-see sessions, keynote talks, and workshops designed to deliver maximum value throughout the conference.",
    },
    {
      id: 5,
      image: image5,
      date: "Jun 22, 2026",
      author: "Conference Media",
      comments: "21",
      title: "What Makes This Event Conference Worth Attending",
      description:
        "Discover the unique experiences, expert insights, and real-world value that make this conference a must-attend event.",
    },
    {
      id: 6,
      image: image6,
      date: "Jul 14, 2026",
      author: "Conference Updates",
      comments: "09",
      title: "How This Conference Shapes the Future of Global Innovation",
      description:
        "See how this global conference brings together ideas, technology, and leaders to drive the future of innovation worldwide.",
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
  return (
    // blog list start
    <section className="lg:py-30 py-20">
      <div className="container">
        <div className="grid grid-cols-12 2xl:gap-10 gap-6">
          <div className="col-span-12 xl:col-span-8 space-y-6">
            {/* 2. Map through the posts */}
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="flex items-center 2xl:gap-8 gap-6 flex-wrap lg:flex-nowrap pb-10 mb-10 last:border-0"
                data-sal="slide-right"
                data-sal-duration="800"
                data-sal-delay="200"
              >
                {/* Image Container */}
                <div className="relative group overflow-hidden rounded-xl md:w-80 w-full h-60 md:shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-2"
                  />
                  <span className="absolute top-5 ltr:right-5 rtl:left-5 bg-white text-black px-5 py-1 rounded-lg transition-all duration-400 ease-out group-hover:bg-black group-hover:text-white z-10">
                    {post.date}
                  </span>
                </div>

                {/* Content Container */}
                <div className="mt-5">
                  <div className="flex gap-2">
                    <p>
                      <a href="#!">{post.author} .</a>
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Comment ({post.comments})
                    </p>
                  </div>

                  <div className="flex items-center md:gap-8 gap-3 mt-5 flex-wrap md:flex-nowrap">
                    <h2>
                      <a href="#!">{post.title}</a>
                    </h2>
                    <a
                      href="#!"
                      className="relative group size-15 rounded-full inline-flex items-center justify-center overflow-hidden shrink-0"
                    >
                      <span className="absolute top-full left-0 w-full h-full bg-[#f2c944] transition-all duration-500 group-hover:top-0"></span>
                      <Image
                        src={RightArrow}
                        alt="Read more"
                        className="transition-transform ltr:-rotate-45 rtl:rotate-[-136deg] duration-500 group-hover:rotate-y-360 dark:invert dark:hover:invert-0"
                      />
                    </a>
                  </div>

                  <p className="text-gray-600 mt-3 text-[20px] dark:text-gray-400">
                    {post.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* // blog list end */}

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
  );
}
