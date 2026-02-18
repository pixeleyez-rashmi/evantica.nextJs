"use client";
import { RiInstagramFill } from "@remixicon/react";
import Image from "next/image";

import image1 from "../../../../assets/images/music/music-insta-1.jpg";
import image2 from "../../../../assets/images/music/music-insta-2.jpg";
import image3 from "../../../../assets/images/music/music-artist-6.jpg";
import image4 from "../../../../assets/images/music/music-insta-3.jpg";
import image5 from "../../../../assets/images/music/music-artist-1.jpg";

// Sample image data (could be fetched dynamically)
const galleryImages = [
  {
    id: 1,
    image: image1,
    width: 300,
    height: 300,
  },
  {
    id: 2,
    image: image2,
    width: 300,
    height: 300,
  },
  {
    id: 3,
    image: image3,
    width: 300,
    height: 300,
  },
  {
    id: 4,
    image: image4,
    width: 300,
    height: 300,
  },
  {
    id: 5,
    image: image5,
    width: 300,
    height: 300,
  },
  // Add more images here if needed
];

export default function MusicGallerySection() {
  return (
    <section>
      <div className="grid grid-cols-1 xl:grid-cols-5 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((image) => (
          <div key={image.id} className="relative group h-90">
            <Image
              src={image.image}
              alt={`Instagram Image ${image.id}`}
              width={image.width}
              height={image.height}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity"></div>
            <a
              href="#!"
              className="absolute size-13 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg opacity-0 scale-150 group-hover:opacity-100 group-hover:scale-100 transition-all duration-400 flex items-center justify-center"
            >
              <RiInstagramFill className="text-xl text-black" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
