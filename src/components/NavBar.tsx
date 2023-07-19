"use client";

import React, { useState, useEffect } from "react";
import DropdownMenu from "./DropdownMenu";
import Image from "next/image";
import Link from "next/link";

type DropdownName = "management" | "about" | "updates";

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState({
    management: false,
    about: false,
    updates: false,
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = mobileMenuOpen ? "auto" : "hidden";
  };

  const MANAGEMENT_LINK = [
    {
      href: "/account-management",
      label: "Account Management",
    },
    {
      href: "/growth-management",
      label: "Growth Management",
    },
    {
      href: "/case-studies",
      label: "Case Studies",
    },
    {
      href: "/faqs",
      label: "FAQs",
    },
  ];
  const ABOUTS_LINK = [
    {
      href: "/about-us",
      label: "About Us",
    },
    {
      href: "/careers",
      label: "Careers",
    },
    {
      href: "/partnership",
      label: "Partnership",
    },
  ];

  const NEWS_LINK = [
    {
      href: "/newsletter",
      label: "Newsletter",
    },
    {
      href: "/open-a-franchise",
      label: "Open a Franchise",
    },
    {
      href: "/sell-your-agency",
      label: "Sell Your Agency",
    },
    {
      href: "/invest-in-career",
      label: "Invest in a Model's Career",
    },
  ];

  const handleDropdownToggle = (dropdownName: any) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [dropdownName as DropdownName]: !prevState[dropdownName as DropdownName],
    }));
  };
  return (
    <nav className="flex flex-row justify-center items-center min-w-full bg-gray-100 drop-shadow-sm">
      <div className="hidden sm:flex flex-row justify-between px-4 py-3 items-center w-full">
        <Image
          alt="logo"
          src={""}
          height={88}
          width={200}
          className="mx-6 -my-2"
        />
        <ul className="p-2 flex flex-row justify-evenly w-[60%] mx-6">
          <li className="cursor-pointer">Home</li>
          <li>
            <div className="flex flex-col justify-center items-center relative">
              <div className="inline-flex flex-row">
                <p
                  className="cursor-pointer"
                  onMouseEnter={() => handleDropdownToggle("management")}
                >
                  Management <span>v</span>
                </p>
              </div>
              <div
                className={`${
                  dropdownOpen.management ? "flex flex-col" : "hidden"
                } w-48 mt-4 duration-300 ease-in-out z-50 absolute top-[10px] left-[5px]`}
                onMouseLeave={() => handleDropdownToggle("management")}
              >
                {MANAGEMENT_LINK.map((link) => (
                  <div key={link.label} className="bg-white">
                    <DropdownMenu href={link.href} label={link.label} />
                  </div>
                ))}
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-col justify-center items-center relative">
              <div className="inline-flex flex-row">
                <p
                  className="cursor-pointer"
                  onMouseEnter={() => handleDropdownToggle("about")}
                >
                  About <span>v</span>
                </p>
              </div>
              <div
                className={`${
                  dropdownOpen.about ? "flex flex-col" : "hidden"
                } w-48 mt-4 duration-300 ease-in-out z-50 absolute top-[10px] left-[15px]`}
                onMouseLeave={() => handleDropdownToggle("about")}
              >
                {ABOUTS_LINK.map((link) => (
                  <div key={link.label} className="bg-white">
                    <DropdownMenu href={link.href} label={link.label} />
                  </div>
                ))}
              </div>
            </div>
          </li>
          <li>
            <div className="flex flex-col justify-center items-center relative">
              <div className="inline-flex flex-row">
                <p
                  className="cursor-pointer"
                  onMouseEnter={() => handleDropdownToggle("updates")}
                >
                  Updates & Newsletter <span>v</span>
                </p>
              </div>
              <div
                className={`${
                  dropdownOpen.updates ? "flex flex-col" : "hidden"
                } w-48 mt-4 duration-300 ease-in-out z-50 absolute top-[10px] left-[5px]`}
                onMouseLeave={() => handleDropdownToggle("updates")}
              >
                {NEWS_LINK.map((link) => (
                  <div key={link.label} className="bg-white">
                    <DropdownMenu href={link.href} label={link.label} />
                  </div>
                ))}
              </div>
            </div>
          </li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>
      <div className="min-w-full flex sm:hidden flex-row justify-between items-center p-2">
        <Image src={""} height={70} width={150} alt="logo" className="mx-2" />
        <div className="mx-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
            onClick={handleMobileMenuToggle}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      ></div>
      <div
        className={`sm:hidden fixed inset-y-0 right-0 w-4/5 bg-gray-200 transform transition-transform duration-300 ease-in-out min-h-screen ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-row justify-between items-center p-4">
          <Image alt="logo" src={""} height={88} width={200} className="mx-6" />
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-10 h-10 mr-6 cursor-pointer"
              onClick={handleMobileMenuToggle}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Link
            href="#"
            className="px-12 py-2 text-white hover:scale-90 duration-300 ease-in-out font-semibold hover:text-black hover:bg-white bg-blue-950 w-[80%] flex flex-row space-x-2"
          >
            <p className="ml-6 text-sm"> Start Model Application</p>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </span>
          </Link>
          <ul className="my-12 space-y-4 font-semibold text-black self-start px-12">
            <li>Home</li>
            <hr className="h-[1px] border-1 border-gray-400 w-[60vw]" />
            <li>Management</li>
            <hr className="h-[1px] border-1 border-gray-400 w-[60vw]" />
            <li>About</li>
            <hr className="h-[1px] border-1 border-gray-400 w-[60vw]" />
            <li>News & Updates</li>
            <hr className="h-[1px] border-1 border-gray-400 w-[60vw]" />
            <li>Contact Us</li>
          </ul>

          <Link
            href="#"
            className="px-12 py-2 text-black hover:scale-90 duration-300 ease-in-out font-semibold hover:text-white hover:bg-black bg-white w-[80%] flex flex-row"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </span>
            <p className="ml-16">Sign In</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
