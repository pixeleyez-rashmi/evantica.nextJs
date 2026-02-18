'use client';

import Image from 'next/image';
import Link from 'next/link';
import { RiArrowRightUpLine } from '@remixicon/react';

import freelancerAboutShape from '../../../../assets/images/freelancer/freelancer-about-shape.png';
import freelancerAbout3 from '../../../../assets/images/freelancer/freelancer-about3.jpg';
import freelancerAboutShape1 from '../../../../assets/images/freelancer/freelancer-about-shape1.png';
import freelancerAboutShape2 from '../../../../assets/images/freelancer/freelancer-about-shape2.png';
import freelancerAboutShape3 from '../../../../assets/images/freelancer/freelancer-about-shape3.png';
import freelancerAboutCircle from '../../../../assets/images/freelancer/freelancer-about-circle.png';
import freelancerAbout2 from '../../../../assets/images/freelancer/freelancer-about2.jpg';
import freelancerAbout1 from '../../../../assets/images/freelancer/freelancer-about1.jpg';

export default function AboutSection() {
  return (
    <section className="lg:py-30 py-20 relative z-10">
      {/* Background + floating shapes */}
      <Image
        src={freelancerAboutShape.src}
        alt=""
        width={freelancerAboutShape.width}
        height={freelancerAboutShape.height}
        className="absolute -top-30 right-0 left-0 -z-10"
      />
      <Image
        src={freelancerAbout3.src}
        alt=""
        width={freelancerAbout3.width}
        height={freelancerAbout3.height}
        className="size-40 absolute ltr:right-0 rtl:left-0 top-10 animate-float-up [clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)] object-cover hidden 2xl:block"
      />
      <Image
        src={freelancerAboutShape1.src}
        alt=""
        width={freelancerAboutShape1.width}
        height={freelancerAboutShape1.height}
        className="absolute w-45 ltr:left-10 rtl:right-10 top-85 opacity-60 animate-float-down hidden 2xl:block"
      />
      <Image
        src={freelancerAboutShape2.src}
        alt=""
        width={freelancerAboutShape2.width}
        height={freelancerAboutShape2.height}
        className="absolute w-30 ltr:right-10 rtl:left-10 bottom-60 ltr:rotate-[-30deg] rtl:rotate-[30deg] opacity-50 animate-float-up hidden 2xl:block"
      />
      <Image
        src={freelancerAboutShape3.src}
        alt=""
        width={freelancerAboutShape3.width}
        height={freelancerAboutShape3.height}
        className="absolute ltr:left-15 rtl:right-15 bottom-60 -z-10 opacity-80 animate-float-up hidden 2xl:block dark:invert"
      />

      <div className="container">
        <div className="grid grid-cols-12 gap-6 xl:mb-30 mb-10">
          <div className="col-span-12 lg:col-span-5">
            <h2
              className="xl:text-7xl md:text-5xl uppercase font-anton font-medium tracking-[2px] leading-snug"
              data-sal="slide-right"
              data-sal-duration="800"
              data-sal-delay="200"
            >
              Building Ideas Into Reality.
            </h2>
          </div>

          <div
            className="col-span-12 lg:col-span-6 lg:col-end-13"
            data-sal="slide-left"
            data-sal-duration="800"
            data-sal-delay="200"
          >
            <p className="uppercase font-anton font-medium tracking-[2px] leading-snug text-xl mb-6">
              About Us
            </p>

            <p className="text-gray-600 dark:text-gray-400 mb-7">
              We are a team dedicated to helping creators, freelancers, and brands turn powerful ideas into meaningful outcomes.
              With strategic thinking and refined execution, we transform concepts into real-world impact, empowering individuals
              and teams to elevate their presence, sharpen their skills, and build stronger professional identities in today&apos;s
              evolving digital landscape.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-10">
              Our approach blends creativity, innovation, and precision — ensuring every project achieves measurable success while
              delivering an exceptional experience.
            </p>

            <Link
              href="#!"
              className="relative inline-flex overflow-hidden px-9 py-4 text-xl rounded-full bg-[#af49e5] text-white hover:text-black font-medium group"
            >
              <span className="absolute inset-y-0 left-0 w-1/4 bg-[#a0ffc2] rounded-full translate-y-[150%] transition-all duration-500 group-hover:translate-y-0 group-hover:scale-200" />
              <span className="absolute inset-y-0 left-1/4 w-1/4 bg-[#a0ffc2] rounded-full translate-y-[150%] transition-all duration-500 delay-100 group-hover:translate-y-0 group-hover:scale-200" />
              <span className="absolute inset-y-0 left-2/4 w-1/4 bg-[#a0ffc2] rounded-full translate-y-[150%] transition-all duration-500 delay-200 group-hover:translate-y-0 group-hover:scale-200" />
              <span className="absolute inset-y-0 left-3/4 w-1/4 bg-[#a0ffc2] rounded-full translate-y-[150%] transition-all duration-500 delay-300 group-hover:translate-y-0 group-hover:scale-200" />

              <span className="relative z-10 inline-flex items-center gap-2">
                Learn More <RiArrowRightUpLine />
              </span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          <Image
            src={freelancerAboutCircle.src}
            alt=""
            width={freelancerAboutCircle.width}
            height={freelancerAboutCircle.height}
            className="absolute z-30 2xl:top-75 ltr:2xl:left-1/4 rtl:2xl:right-1/4 xl:top-78 ltr:xl:left-1/6 rtl:xl:right-1/6 ltr:lg:left-1/9 rtl:lg:right-1/9 lg:top-68 hidden lg:block rtl:scale-x-[-1] dark:invert"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="200"
          />

          <div className="col-span-12 md:col-span-4">
            <div
              className="h-full"
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-delay="300"
            >
              <Image
                src={freelancerAbout2.src}
                alt=""
                width={freelancerAbout2.width}
                height={freelancerAbout2.height}
                className="rounded-xl w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-8">
            <div
              data-sal="slide-up"
              data-sal-duration="800"
              data-sal-delay="300"
            >
              <Image
                src={freelancerAbout1.src}
                alt=""
                width={freelancerAbout1.width}
                height={freelancerAbout1.height}
                className="rounded-xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

