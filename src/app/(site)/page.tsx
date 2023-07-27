import BlogsSection from "@/components/BlogsSection";
import HomeFAQ from "@/components/HomeFAQ";
import NewsLetterHero from "@/components/NewsLetterHero";
import Tabs from "@/components/Tabs";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   import("preline");
  // }, []);
  return (
    <main className="bg-white">
      <section id="slide-1" className="w-full min-h-screen relative">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center mx-auto sm:w-[60%] p-16 h-full">
          <p className="mt-12 sm:text-xl text-md text-center text-white font-semibold">
            The Only Professionally Accredited Onlyfans Agency by the BBB™
          </p>
          <h1 className="text-blue-600 my-4 font-semibold text-center text-4xl sm:text-6xl">
            ELITE MODEL AGENCY. <br />
            THE ONLYFANS AGENCY BEHIND THE TOP 0.1%
          </h1>
          <p className="mt-6 font-medium text-white text-xs text-center">
            *EMA Onlyfans Management contracts guarantee 6 figures annually.
          </p>
          <Link
            href="/get-started"
            className="sm:m-2 mt-4 px-12 py-4 sm:px-20 sm:py-6 bg-blue-600 font-medium text-lg hover:bg-black text-white duration-300 ease-in-out"
          >
            Get Started!
          </Link>

          <Link
            href="#slide-2"
            className="hidden sm:block w-16 h-16 rounded-full border-2 border-white relative mt-8 mx-4 hover:bg-blue-600 hover:border-white hover:text-white"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 absolute top-[20px] left-[18px] text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </Link>
        </div>
      </section>
      <div className="w-full hidden sm:block p-16 bg-black"></div>
      <section
        id="slide-2"
        className="hidden sm:block w-full min-h-screen relative"
      >
        <Image
          src="/img-1.jpg"
          alt="test"
          fill
          className="absolute inset-0 object-cover"
        />
        <div className="relative z-10 w-[40%] p-16 h-full">
          <div className="bg-white p-12 mt-6 flex flex-col">
            <h1 className="text-4xl font-bold uppercase">
              ACCOUNT <br />
              MANAGEMENT,
              <br /> WITH BENEFITS
            </h1>
            <p className="my-4 text-lg font-medium text-black">
              Unrivaled Onlyfans Managers. Unparalleled Account Strategy. A
              process that inspires you to achieve and a consistency that keeps
              your account earning 24/7.
            </p>

            <Link
              href="/account-management"
              className="my-4 px-6 py-4 font-semibold flex flex-row space-x-2 border-b-2 border-orange-300 max-w-[80%] hover:scale-90 duration-300 ease-in-out"
            >
              View Management Benefits
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 ml-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </span>
            </Link>
            <Link
              href="#slide-3"
              className="w-16 h-16 rounded-full border-2 border-black relative mt-8 mx-4 hover:bg-black hover:border-white hover:text-white"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 absolute top-[20px] left-[18px]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
      <div className="w-full hidden sm:block p-16 bg-white"></div>
      <section
        id="slide-3"
        className="hidden sm:block w-full min-h-screen relative"
      >
        <Image
          src="/img-2.jpg"
          alt="test"
          fill
          className="absolute inset-0 object-cover"
        />
        <div className="relative z-10 w-[40%] p-16 h-full">
          <div className="bg-white p-12 mt-6 flex flex-col">
            <h1 className="text-4xl font-bold uppercase">
              WHERE VIRAL & <br /> PRACTICAL MEET
            </h1>
            <p className="my-4 text-lg font-medium text-black">
              Fueled by industry experts, the EMA Onlyfans promotion team
              provides unrivaled programs to gain viral exposure, and long-term
              organic strategies…keeping your momentum performing at its finest.
            </p>

            <Link
              href="/account-management"
              className="my-4 px-6 py-4 font-semibold flex flex-row space-x-2 border-b-2 border-orange-300 max-w-[80%] hover:scale-90 duration-300 ease-in-out"
            >
              Learn More About Onlyfans Growth
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 ml-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section
        id="mobile"
        className="bg-white p-8 sm:hidden flex flex-col w-full space-y-6"
      >
        <div className="py-2 px-6 bg-slate-100 drop-shadow-sm flex flex-col items-start justify-center">
          <Image
            src="/img-1.jpg"
            alt="test"
            height={1000}
            width={1000}
            className="w-full h-48 rounded"
          />
          <div className="my-4 flex flex-col space-y-4">
            <h1 className="font-extrabold text-2xl tracking-tighter uppercase">
              Where Viral and Practical Meet
            </h1>
            <p className="text-md tracking-tight font-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
              quae? Illum corporis libero iste consequuntur ut nisi tempore.
              Similique reprehenderit consectetur, porro dolorum quia esse
              voluptate aliquid. Atque, vitae ratione.
            </p>
          </div>
          <div className="my-2">
            <Link
              href="/account-management"
              className="my-4 px-6 py-4 font-semibold flex flex-row space-x-2 border-b-2 border-blue-600  hover:scale-90 duration-300 ease-in-out"
            >
              View Management Benefits
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 ml-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
        <div className="py-2 px-6 bg-slate-100 drop-shadow-sm flex flex-col items-start justify-center">
          <Image
            src="/img-2.jpg"
            alt="test"
            height={1000}
            width={1000}
            className="w-full h-48 rounded"
          />
          <div className="my-4 flex flex-col space-y-4">
            <h1 className="font-extrabold text-2xl tracking-tighter uppercase">
              Where Viral and Practical Meet
            </h1>
            <p className="text-md tracking-tight font-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
              quae? Illum corporis libero iste consequuntur ut nisi tempore.
              Similique reprehenderit consectetur, porro dolorum quia esse
              voluptate aliquid. Atque, vitae ratione.
            </p>
          </div>
          <div className="my-2">
            <Link
              href="/account-management"
              className="my-4 px-6 py-4 font-semibold flex flex-row space-x-2 border-b-2 border-blue-600  hover:scale-90 duration-300 ease-in-out"
            >
              View Growth Benefits
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 ml-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
      <Tabs />
      <HomeFAQ />
      <div className="w-full hidden sm:block p-16 bg-white">
        <NewsLetterHero />
      </div>
      <BlogsSection />
    </main>
  );
}
