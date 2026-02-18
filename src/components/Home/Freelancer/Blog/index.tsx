'use client';

import Image from 'next/image';
import Link from 'next/link';
import { RiUser3Line, RiCalendarLine, RiTimeLine } from '@remixicon/react';

// Import blog images
import blog1 from '../../../../assets/images/freelancer/freelancer-blog-1.jpg';
import blog2 from '../../../../assets/images/freelancer/freelancer-blog-2.jpg';
import blog3 from '../../../../assets/images/freelancer/freelancer-blog-3.jpg';
import blogShape from '../../../../assets/images/freelancer/freelancer-blog-shape.jpg';

interface BlogPost {
  image: typeof blog1;
  title: string;
  description: string;
  author: string;
  date: string;
  time: string;
  badgeColor: string;
}

const blogPosts: BlogPost[] = [
  {
    image: blog1,
    title: 'Connect With Top Web Development',
    description: 'Join an incredible community of skilled developers, designers, and tech creators.',
    author: 'Admin',
    date: '14 Nov 2024',
    time: '3:00 PM',
    badgeColor: '#ffb84c',
  },
  {
    image: blog2,
    title: 'Creative UI/UX Designers Meetup',
    description: 'Explore new design trends, share creative ideas, and collaborate with innovative creators.',
    author: 'Admin',
    date: '22 Nov 2024',
    time: '11:00 AM',
    badgeColor: '#ff94ff',
  },
  {
    image: blog3,
    title: 'Business & Networking Event',
    description: 'Connect with entrepreneurs, share insights, and discover valuable growth strategies.',
    author: 'Admin',
    date: '30 Nov 2024',
    time: '5:00 PM',
    badgeColor: '#77dcb1',
  },
];

export default function BlogSection() {
  return (
    <section className="lg:py-30 py-20">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2
            className="xl:text-6xl md:text-5xl uppercase font-anton font-medium tracking-[2px] leading-snug"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="200"
          >
            Explore Our Latest Insights
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="col-span-12 xl:col-span-4 md:col-span-6">
              <div
                className="rounded-xl border border-black/10 dark:border-white/20 p-8"
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay="200"
              >
                <div className="relative mb-4">
                  <Image
                    src={post.image.src}
                    alt=""
                    width={post.image.width}
                    height={post.image.height}
                    className="rounded-t-xl w-full h-70 object-cover"
                  />
                  <Image
                    src={blogShape.src}
                    alt=""
                    width={blogShape.width}
                    height={blogShape.height}
                    className="absolute -bottom-1 w-full dark:invert"
                  />
                </div>

                <h4>
                  <Link
                    href="#!"
                    className="uppercase font-anton font-medium tracking-[1px] leading-snug"
                  >
                    {post.title}
                  </Link>
                </h4>

                <p className="text-gray-600 dark:text-gray-400 mt-2">{post.description}</p>

                <div
                  className="flex flex-wrap gap-2 xl:flex-nowrap justify-between p-3 mt-4 text-white"
                  style={{ backgroundColor: post.badgeColor }}
                >
                  <p className="flex items-center gap-1">
                    <RiUser3Line />
                    {post.author}
                  </p>
                  <span className="border border-white/20" />
                  <p className="flex items-center gap-1">
                    <RiCalendarLine />
                    {post.date}
                  </p>
                  <span className="border border-white/20" />
                  <p className="flex items-center gap-1">
                    <RiTimeLine />
                    {post.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
