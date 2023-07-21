"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSessionContext } from "@supabase/auth-helpers-react";

const Footer = () => {
  const ABOUT_EMA_LINKS = [
    {
      id: 1,
      href: "/something",
      label: "About Us",
    },
    {
      id: 2,
      href: "/something",
      label: "About Us",
    },
    {
      id: 3,
      href: "/something",
      label: "About Us",
    },
    {
      id: 4,
      href: "/something",
      label: "About Us",
    },
    {
      id: 5,
      href: "/something",
      label: "About Us",
    },
  ];
  const MANGEMENT_LINKS = [
    {
      id: 1,
      href: "/something",
      label: "About Us",
    },
    {
      id: 2,
      href: "/something",
      label: "About Us",
    },
    {
      id: 3,
      href: "/something",
      label: "About Us",
    },
    {
      id: 4,
      href: "/something",
      label: "About Us",
    },
  ];

  const GET_STARTED_LINKS = [
    {
      id: 1,
      href: "/something",
      label: "About Us",
    },
    {
      id: 2,
      href: "/something",
      label: "About Us",
    },
    {
      id: 3,
      href: "/something",
      label: "About Us",
    },
  ];

  const { session } = useSessionContext();

  const user = session?.user;
  return (
    <footer className="flex flex-col">
      {user ? (
        <div className="bg-black w-full py-2 items-center justify-center">
          <p className="text-orange-200 text-center text-xs p-1 uppercase">
            @{new Date().getFullYear()} Management Agency LLC | ALL RIGHTS
            RESERVED.
          </p>
        </div>
      ) : (
        <div>
          <div className="flex sm:flex-row flex-col justify-evenly items-start sm:items-center space-x-6 text-white bg-black p-16">
            <div className="flex flex-col items-start justify-start p-4">
              <Image src="" height={88} width={200} alt="logo" />
              <span className="font-semibold text-sm text-gray-100 mt-4">
                Corporate Headquarters
              </span>
              <span className="font-medium text-sm my-4">
                9171 Wilshire Boulevard <br />
                STE 500 <br />
                Beverly Hills, CA 90210
              </span>
            </div>
            <div className="flex flex-col items-start justify-start">
              <span className="font-semibold text-md uppercase text-gray-100 ">
                About EMA
              </span>
              <ul className="mt-2 items-start justify-start">
                {ABOUT_EMA_LINKS.map((nav) => (
                  <li
                    key={nav.id}
                    className="text-sm text-gray-500 hover:text-orange-300 p-1"
                  >
                    <Link href={nav.href}>{nav.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start mt-4 sm:mt-0">
              <span className="font-semibold text-md uppercase text-gray-100 ">
                About Management
              </span>
              <ul className="mt-2 items-start justify-start">
                {MANGEMENT_LINKS.map((nav) => (
                  <li
                    key={nav.id}
                    className="text-sm text-gray-500 hover:text-orange-300 p-1"
                  >
                    <Link href={nav.href}>{nav.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start mt-4 sm:mt-0">
              <span className="font-semibold text-md uppercase text-gray-100 ">
                Get Started
              </span>
              <ul className="mt-2 items-start justify-start">
                {GET_STARTED_LINKS.map((nav) => (
                  <li
                    key={nav.id}
                    className="text-sm text-gray-500 hover:text-orange-300 p-1"
                  >
                    <Link href={nav.href}>{nav.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>Newsletter</div>
          </div>
          <div className="bg-black w-full py-2 items-center justify-center">
            <p className="text-orange-200 text-center text-xs p-1 uppercase">
              @{new Date().getFullYear()} Management Agency LLC | ALL RIGHTS
              RESERVED.
            </p>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
