'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { RiCameraFill } from '@remixicon/react';

// Import gallery images
import gallery1 from '../../../../assets/images/freelancer/freelancer-gallery1.jpg';
import gallery2 from '../../../../assets/images/freelancer/freelancer-gallery2.jpg';
import gallery3 from '../../../../assets/images/freelancer/freelancer-gallery3.jpg';
import gallery4 from '../../../../assets/images/freelancer/freelancer-gallery4.jpg';
import gallery5 from '../../../../assets/images/freelancer/freelancer-gallery5.jpg';
import gallery6 from '../../../../assets/images/freelancer/freelancer-gallery6.jpg';
import gallery7 from '../../../../assets/images/freelancer/freelancer-gallery7.jpg';
import gallery8 from '../../../../assets/images/freelancer/freelancer-gallery8.jpg';

interface GalleryItem {
  image: typeof gallery1;
  height: string;
  animation: 'slide-right' | 'slide-left' | 'slide-down' | 'slide-up';
}

interface GalleryColumn {
  items: GalleryItem[];
}

const galleryColumns: GalleryColumn[] = [
  {
    items: [
      { image: gallery1, height: '2xl:h-80', animation: 'slide-right' },
      { image: gallery2, height: '2xl:h-80', animation: 'slide-right' },
      { image: gallery3, height: '2xl:h-80', animation: 'slide-right' },
    ],
  },
  {
    items: [
      { image: gallery4, height: '2xl:h-130', animation: 'slide-down' },
      { image: gallery5, height: '2xl:h-100', animation: 'slide-up' },
    ],
  },
  {
    items: [
      { image: gallery6, height: '2xl:h-80', animation: 'slide-left' },
      { image: gallery7, height: '2xl:h-80', animation: 'slide-left' },
      { image: gallery8, height: '2xl:h-80', animation: 'slide-left' },
    ],
  },
];

export default function GallerySection() {
  useEffect(() => {
    // Dynamically import glightbox and CSS only on client side
    let lightboxInstance: any = null;

    const initLightbox = async () => {
      if (typeof window === 'undefined') return;

      // Import CSS dynamically
      await import('glightbox/dist/css/glightbox.css' as any);
      
      // Import GLightbox
      const GLightbox = (await import('glightbox')).default;
      
      lightboxInstance = GLightbox({
        selector: '.glightbox',
        loop: true,
        zoomable: true,
        draggable: true,
        openEffect: 'fade',
        closeEffect: 'fade',
      });
    };

    initLightbox();

    return () => {
      if (lightboxInstance && typeof lightboxInstance.destroy === 'function') {
        lightboxInstance.destroy();
      }
    };
  }, []);

  return (
    <section className="lg:pb-30 pb-20 overflow-hidden">
      <div className="xl:px-20 px-5 lg:px-10">
        <div className="max-w-2xl text-center mx-auto mb-12">
          <h2
            className="xl:text-6xl md:text-5xl uppercase font-anton font-medium tracking-[2px] leading-snug"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="200"
          >
            Explore Moments From Our Freelancer Meetups
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-6 items-center">
          {galleryColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="col-span-12 md:col-span-4 space-y-6">
              {column.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="group relative"
                  data-sal={item.animation}
                  data-sal-duration="800"
                  data-sal-delay="200"
                >
                  <div className={`relative overflow-hidden z-[9] ${item.height} rounded-xl`}>
                    {/* Left overlay */}
                    <span className="absolute inset-0 w-1/2 h-full bg-purple-500/50 ltr:-translate-x-full rtl:translate-x-full ltr:rotate-[15deg] rtl:rotate-[-15deg] opacity-0 invisible transition-all duration-400 ease-in-out group-hover:translate-x-0 group-hover:rotate-0 group-hover:opacity-100 group-hover:visible" />

                    {/* Right overlay */}
                    <span className="absolute inset-0 ltr:right-0 rtl:left-0 ltr:left-auto rtl:right-auto w-1/2 h-full bg-purple-500/50 ltr:translate-x-full rtl:-translate-x-full ltr:rotate-[-15deg] rtl:rotate-[15deg] opacity-0 invisible transition-all duration-400 ease-in-out group-hover:translate-x-0 group-hover:rotate-0 group-hover:opacity-100 group-hover:visible" />

                    {/* Image */}
                    <Image
                      src={item.image.src}
                      alt="Gallery image"
                      width={item.image.width}
                      height={item.image.height}
                      className="w-full h-full object-cover"
                    />

                    {/* Camera icon link */}
                    <a
                      href={item.image.src}
                      className="glightbox absolute left-1/2 top-[-100px] -translate-x-1/2 -translate-y-1/2 opacity-0 invisible text-white z-[999] transition-all duration-400 ease-in-out group-hover:top-1/2 group-hover:opacity-100 group-hover:visible"
                      data-gallery="event-gallery"
                    >
                      <RiCameraFill className="text-4xl" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
