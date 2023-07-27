"use client";

import { useSessionContext } from "@supabase/auth-helpers-react";
import Link from "next/link";
import React from "react";

const TopBar = () => {
  const { session } = useSessionContext();
  const user = session?.user;
  return (
    <div
      className={`hidden w-full bg-black  ${
        user ? "" : "sm:flex"
      }  items-center justify-center`}
    >
      <div className="w-[80%] flex flex-row px-8 py-[14px] items-center justify-between">
        <div className="flex flex-row text-gray-300 justify-start items-center px-4 text-xs w-1/2 space-x-4">
          <Link
            href="/"
            className="font-semibold hover:text-cyan-300 duration-300"
          >
            EMA <span className="px-2 text-stone-400">|</span>
          </Link>
          <Link
            href="/about"
            className="font-semibold hover:text-cyan-300 duration-300"
          >
            Our Story <span className="px-2 text-stone-400">|</span>
          </Link>
          <Link
            href="/case-studies"
            className="font-semibold hover:text-cyan-300 duration-300"
          >
            Success Stories <span className="px-2 text-stone-400">|</span>
          </Link>
          <Link
            href="/faqs"
            className="font-semibold hover:text-cyan-300 duration-300"
          >
            FAQs <span className="px-2 text-stone-400">|</span>
          </Link>
          <Link
            href="/contact-us"
            className="font-semibold hover:text-cyan-300 duration-300"
          >
            Get Started
          </Link>
        </div>
        <div className="flex flex-row space-x-2 justify-end items-center">
          {/* <Link
            href="/login"
            className="font-semibold hover:text-cyan-300 duration-300 text-xs text-white"
          >
            RM Sign In
          </Link> */}
          <Link
            href="/get-started"
            className="bg-white text-xs px-4 -my-3 py-3 flex flex-row items-center justify-center space-x-2 -py-2 font-semibold hover:bg-blue-400 duration-300"
          >
            Model Sign In
            <span className="ml-1"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
