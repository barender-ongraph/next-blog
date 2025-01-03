"use client";
import Image from "next/image";
import Link from "next/link";
import logoDark from "../public/images/logoDark.png";
import bannerImgOne from "../public/images/bannerImgOne.jpg";

const Header = () => {
  return (
    <header className="w-full h-20 border-b-[1px] border-b-black font-titleFont sticky top-0 bg-white z-50 px-4">
      <div className="max-w-7xl h-full mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            width={80}
            height={80}
            src={logoDark}
            alt="logoDark"
            priority
          />
        </Link>

        {/* User Section */}
        <div className="flex items-center gap-8 text-lg">
          <div className="flex items-center gap-1">
            <Image
              className="w-8 h-8 rounded-full"
              src={bannerImgOne}
              alt="user avatar"
              width={32}
              height={32}
            />
            <p className="text-sm font-medium">Hello User!</p>
          </div>

          <button className="uppercase text-sm border-[1px] border-primaryColor hover:border-secondaryColor px-4 py-1 font-semibold hover:text-white rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-yellow-600">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
