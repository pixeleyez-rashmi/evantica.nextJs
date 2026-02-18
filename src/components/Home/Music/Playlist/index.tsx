"use client";

import { useRef, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import playlistBg from "../../../../assets/images/music/music-playlist-bg.jpg";
import { RiPlayLargeFill, RiPauseFill, RiVolumeUpFill } from "@remixicon/react";

import image1 from "../../../../assets/images/music/music-artist-1.jpg";
import image2 from "../../../../assets/images/music/music-artist-2.jpg";
import image3 from "../../../../assets/images/music/music-artist-3.jpg";
import image4 from "../../../../assets/images/music/music-artist-4.jpg";
import image9 from "../../../../assets/images/music/music-insta-3.jpg";
import image10 from "../../../../assets/images/music/music-play-1.jpg";
import image11 from "../../../../assets/images/music/music-play-2.jpg";
import image12 from "../../../../assets/images/music/music-about-main.jpg";

// Type definitions
interface PlaylistItem {
  id: number;
  image: StaticImageData;
  alt: string;
  singer: string;
  studio: string;
  audio: string;
}

interface MusicCardProps {
  data: PlaylistItem;
  currentPlaying: number | null;
  onPlay: (id: number) => void;
  index: number;
}

// Sample playlist data
const playlistData: PlaylistItem[] = [
  {
    id: 1,
    image: image1,
    alt: "Artist 1",
    singer: "Ariana Grande",
    studio: "Republic Records",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: 2,
    image: image4,
    alt: "Artist 2",
    singer: "The Weeknd",
    studio: "XO Records",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    id: 3,
    image: image2,
    alt: "Artist 3",
    singer: "Taylor Swift",
    studio: "Republic Records",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    id: 4,
    image: image9,
    alt: "Artist 4",
    singer: "Drake",
    studio: "OVO Sound",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  },
  {
    id: 5,
    image: image3,
    alt: "Artist 5",
    singer: "Ed Sheeran",
    studio: "Atlantic Records",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
  },
  {
    id: 6,
    image: image12,
    alt: "Artist 6",
    singer: "Billie Eilish",
    studio: "Interscope Records",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    id: 7,
    image: image10,
    alt: "Artist 7",
    singer: "Dua Lipa",
    studio: "Warner Records",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
  },
  {
    id: 8,
    image: image11,
    alt: "Artist 8",
    singer: "Post Malone",
    studio: "Republic Records",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
  },
];

function MusicCard({ data, currentPlaying, onPlay, index }: MusicCardProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<string>("0:00");
  const [duration, setDuration] = useState<string>("0:00");
  const [progress, setProgress] = useState<number>(0);
  const [volume, setVolume] = useState<number>(1);

  // Set the animation direction for each card, alternating left and right
  const animationDirection = index % 2 === 0 ? "slide-right" : "slide-left";

  // Apply animation delay based on the index
  const animationDelay = (index + 1) * 100;

  const formatTime = (time: number): string => {
    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60);
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      const percent = (audio.currentTime / audio.duration) * 100 || 0;
      setProgress(percent);
      setCurrentTime(formatTime(audio.currentTime));
      setDuration(formatTime(audio.duration || 0));
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleTimeUpdate);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleTimeUpdate);
    };
  }, []);

  useEffect(() => {
    if (currentPlaying !== data.id && isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    }
  }, [currentPlaying, data.id, isPlaying]);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      onPlay(data.id);
      audio.play().catch((error) => {
        console.error("Playback error:", error);
        setIsPlaying(false);
      });
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const newProgress = parseFloat(e.target.value);
    audio.currentTime = (newProgress / 100) * audio.duration;
    setProgress(newProgress);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const newVolume = parseFloat(e.target.value);
    audio.volume = newVolume;
    setVolume(newVolume);
  };

  return (
    <div className="col-span-12 xl:col-span-6 space-y-6">
      <div
        className="grid grid-cols-12 gap-6 items-center music-card bg-white/10 backdrop-blur-sm md:p-5 p-2 rounded-xl"
        data-sal={animationDirection}
        data-sal-duration="800"
        data-sal-delay={animationDelay.toString()}
      >
        <div className="col-span-12 md:col-span-5">
          <div className="flex items-center gap-4 ltr:md:border-r rtl:md:border-l">
            <Image
              src={data.image}
              alt={data.alt}
              width={64}
              height={64}
              className="size-16 rounded-full object-cover"
            />
            <div>
              <h4>
                <a href="#!">{data.singer}</a>
              </h4>
              <p className="text-gray-300">{data.studio}</p>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-7">
          <div className="flex items-center gap-5">
            <button
              onClick={handlePlayPause}
              className="playBtn size-12 rounded-full inline-flex items-center justify-center bg-white/20 shrink-0 hover:bg-white/30 transition-colors"
            >
              {isPlaying ? <RiPauseFill /> : <RiPlayLargeFill />}
            </button>
            <audio ref={audioRef} src={data.audio}></audio>
            <div className="flex items-center w-full text-xs mt-1">
              <span className="currentTime">{currentTime}</span>
              <input
                className="progress mx-2 w-full h-1 bg-white/30 rounded-lg accent-white cursor-pointer"
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleProgressChange}
              />
              <span className="duration">{duration}</span>
            </div>
            <div className="flex items-center mt-2 text-xs">
              <span className="mr-2">
                <RiVolumeUpFill />
              </span>
              <input
                className="volume w-full h-1 bg-white/30 rounded-lg accent-white cursor-pointer"
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MusicPlaylistSection() {
  const [currentPlaying, setCurrentPlaying] = useState<number | null>(null);

  return (
    <section className="lg:py-30 py-20 relative text-white">
      {/* Background Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20"
        style={{ backgroundImage: `url(${playlistBg.src})` }}
      />

      {/* Content Layer */}
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p
            className="relative mb-4 px-14 inline-block font-semibold tracking-[1px] text-xl"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="200"
          >
            <span className="before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-px before:w-11 before:bg-linear-to-r before:from-[#e0c3fc] before:via-[#a259ff] before:to-[#4b0082] before:animate-[borderAnim_2s_ease-in-out_infinite_alternate]"></span>
            Playlist
            <span className="after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:h-px after:w-11 after:bg-linear-to-l after:from-[#e0c3fc] after:via-[#a259ff] after:to-[#4b0082] after:animate-[borderAnim_2s_ease-in-out_infinite_alternate]"></span>
          </p>
          <h2
            className="xl:text-6xl md:text-5xl uppercase"
            data-sal="slide-up"
            data-sal-duration="800"
            data-sal-delay="500"
          >
            Trending Weekly Playlists
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {playlistData.map((list, index) => (
            <MusicCard
              key={list.id}
              data={list}
              currentPlaying={currentPlaying}
              onPlay={setCurrentPlaying}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
