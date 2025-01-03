"use client";
import Image from "next/image";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import bannerImgOne from "../public/images/bannerImgOne.jpg";
import bannerImgTwo from "../public/images/bannerImgTwo.jpg";
import bannerImgThree from "../public/images/bannerImgThree.jpg";
import bannerImgFour from "../public/images/bannerImgFour.jpg";

const BANNER_IMAGES = [
  {
    src: bannerImgOne,
    alt: "bannerImgOne",
    loading: "eager",
  },
  {
    src: bannerImgTwo,
    alt: "bannerImgTwo",
    loading: "lazy",
  },
  {
    src: bannerImgThree,
    alt: "bannerImgThree",
    loading: "lazy",
  },
  {
    src: bannerImgFour,
    alt: "bannerImgFour",
    loading: "lazy",
  },
] as const;

const ARROW_COMMON_STYLES =
  "w-44 h-8 absolute bottom-32 z-30 border-[1px] border-gray-900 px-2 hover:border-gray-800 bg-black/50 overflow-hidden";
const IMAGE_STYLES = "w-full h-auto md:h-[650px] object-cover";

interface ArrowProps {
  onClick?: () => void;
}

const NavigationArrow = ({
  direction,
  onClick,
}: ArrowProps & {
  direction: "next" | "prev";
}) => {
  const isNext = direction === "next";
  const Icon = isNext ? FaChevronRight : FaChevronLeft;
  const text = isNext ? "next" : "previous";
  const position = isNext ? "right-10" : "left-10";
  const translateX = isNext ? "-translate-x-28" : "translate-x-20";
  const translateXText = isNext ? "-translate-x-28" : "translate-x-24";
  const justify = isNext ? "justify-end" : "justify-between";

  return (
    <div className={`${ARROW_COMMON_STYLES} ${position}`} onClick={onClick}>
      <div
        className={`w-full h-full text-gray-300 text-sm uppercase relative flex items-center ${justify} cursor-pointer group`}
      >
        {!isNext && (
          <span className="text-lg">
            <Icon />
          </span>
        )}
        <span
          className={`absolute ${translateX} translate-y-0 group-hover:-translate-y-7 transition-transform duration-500`}
        >
          {text}
        </span>
        <span
          className={`absolute ${translateXText} translate-y-7 group-hover:translate-y-0 transition-transform duration-500`}
        >
          {text}
        </span>
        {isNext && (
          <span className="text-lg">
            <Icon />
          </span>
        )}
      </div>
    </div>
  );
};

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NavigationArrow direction="next" />,
    prevArrow: <NavigationArrow direction="prev" />,
  };

  return (
    <div className="w-full h-auto md:h-[650px] relative">
      <Slider {...settings}>
        {BANNER_IMAGES.map(({ src, alt, loading }) => (
          <div key={alt}>
            <Image
              className={IMAGE_STYLES}
              src={src}
              loading={loading}
              alt={alt}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
