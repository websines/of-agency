import Link from "next/link";
import React from "react";

const TopBar = () => {
  return (
    <div className="hidden w-full bg-black  sm:flex items-center justify-center">
      <div className="w-[80%] flex flex-row px-8 py-[14px] items-center justify-between">
        <div className="flex flex-row text-gray-300 justify-start items-center px-4 text-xs w-1/2 space-x-4">
          <Link
            href="/"
            className="font-semibold hover:text-orange-300 duration-300"
          >
            EMA <span className="px-2 text-stone-400">|</span>
          </Link>
          <Link
            href="/"
            className="font-semibold hover:text-orange-300 duration-300"
          >
            Reviews <span className="px-2 text-stone-400">|</span>
          </Link>
          <Link
            href="/"
            className="font-semibold hover:text-orange-300 duration-300"
          >
            Open a Franchise <span className="px-2 text-stone-400">|</span>
          </Link>
          <Link
            href="/"
            className="font-semibold hover:text-orange-300 duration-300"
          >
            Careers <span className="px-2 text-stone-400">|</span>
          </Link>
          <Link
            href="/"
            className="font-semibold hover:text-orange-300 duration-300"
          >
            Vendor Partners
          </Link>
        </div>
        <div className="flex flex-row space-x-2 justify-end items-center">
          <Link
            href="/my-account"
            className="font-semibold hover:text-orange-300 duration-300 text-xs text-white"
          >
            RM Sign In
          </Link>
          <Link
            href="/get-started"
            className="bg-white text-xs px-4 -my-3 py-3 flex flex-row items-center justify-center space-x-2 -py-2 font-semibold hover:bg-orange-400 duration-300"
          >
            Model Application
            <span className="ml-1">A</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
