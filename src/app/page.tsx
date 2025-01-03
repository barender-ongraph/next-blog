import Banner from "../../components/Banner";
import BannerBottom from "../../components/BannerBottom";
import Posts from "../../components/Posts";

import "slick-carousel/slick/slick.css";

export default function Home() {
  return (
    <>
      {/* Banner */}
      <Banner />
      <div className="max-w-7xl mx-auto h-60 relative">
        <BannerBottom />
      </div>
      <Posts />
    </>
  );
}
