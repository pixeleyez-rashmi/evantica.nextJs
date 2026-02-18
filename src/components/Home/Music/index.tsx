import MusicAboutSection from "./About";
import MusicArtistsSection from "./Artists";
import MusicBlogSection from "./Blog";
import MusicGallerySection from "./Gallery";
import MusicHomeSection from "./Home";
import MusicPlaylistSection from "./Playlist";
import MusicScheduleSection from "./schedule";

export default function MusicHomeIndex() {
  return (
    <>
      <div className="relative font-chakra bg-[#11112c]">
        <MusicHomeSection />
        <MusicArtistsSection />
        <MusicAboutSection />
        <MusicScheduleSection />
        <MusicBlogSection />
        <MusicPlaylistSection />
        <MusicGallerySection />
      </div>
    </>
  );
}
