'use client';

import Link from 'next/link';
import Image from 'next/image';
import { RiAddLine } from '@remixicon/react';

// Import images
import teamShape from '../../../../assets/images/business/business-team-shape.png';
import user01 from '../../../../assets/images/avatar/user-01.jpg';
import user02 from '../../../../assets/images/avatar/user-02.jpg';
import user03 from '../../../../assets/images/avatar/user-03.jpg';
import user04 from '../../../../assets/images/avatar/user-04.jpg';

interface Speaker {
  id: number;
  name: string;
  role: string;
  image: typeof user01;
}

const speakers: Speaker[] = [
  {
    id: 1,
    name: 'Jonathan Reed',
    role: 'Conference Chair',
    image: user01,
  },
  {
    id: 2,
    name: 'Alicia Martinez',
    role: 'Keynote Speaker',
    image: user02,
  },
  {
    id: 3,
    name: 'Samuel Lee',
    role: 'Panel Moderator',
    image: user03,
  },
  {
    id: 4,
    name: 'Priya Sharma',
    role: 'Event Logistics',
    image: user04,
  },
];

export default function SpeakerSection() {
  return (
    <section className="lg:py-30 py-20 text-white text-center">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-15">
          <p
            className="mb-3 text-[#c0f037]"
            data-sal="slide-up"
            data-sal-duration="700"
            data-sal-delay="100"
          >
            [ Meet the Visionaries ]
          </p>
          <h2
            className="md:text-5xl font-chivo font-medium leading-[1.2]"
            data-sal="slide-up"
            data-sal-duration="700"
            data-sal-delay="200"
          >
            Industry Leaders Shaping the Future of Innovation
          </h2>
        </div>
        <div className="grid grid-cols-12 gap-6">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-6"
            >
              <div
                className="text-center group relative inline-block"
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay="200"
              >
                <Image
                  src={teamShape.src}
                  alt=""
                  width={teamShape.width || 270}
                  height={teamShape.height || 270}
                  className="absolute -top-2 -left-1 w-[270px] h-[270px] transition-transform duration-500 group-hover:rotate-12"
                />

                <div className="relative w-[270px] h-[270px] mx-auto rounded-full border border-[#E6E8E7] overflow-hidden transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="absolute inset-[15px] rounded-full overflow-hidden">
                    <Image
                      src={speaker.image.src}
                      alt={speaker.name}
                      width={speaker.image.width || 240}
                      height={speaker.image.height || 240}
                      className="w-full h-full object-cover rounded-full"
                    />

                    <div className="absolute inset-0 bg-black/30 rounded-full scale-75 opacity-0 transition-all duration-500 group-hover:opacity-70 group-hover:scale-100"></div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <Link
                        href="#!"
                        className="bg-[#c0f037] text-black size-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                      >
                        <RiAddLine className="text-xl" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="font-semibold hover:text-[#c0f037] transition-colors">
                    <Link href="#!">{speaker.name}</Link>
                  </h3>
                  <p className="text-gray-400 mt-1">{speaker.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

