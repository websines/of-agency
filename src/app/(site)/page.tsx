import BlogsSection from "@/components/BlogsSection";
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
      <div className="w-full hidden sm:block p-16 bg-black"></div>
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
      <section className="p-8 sm:p-16">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="relative p-6 md:p-16">
            <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
              <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
                <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-gray-200">
                  Fully customizable rules to match your unique needs
                </h2>

                <nav
                  className="grid gap-4 mt-5 md:mt-10"
                  aria-label="Tabs"
                  role="tablist"
                >
                  <button
                    type="button"
                    className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 active"
                    id="tabs-with-card-item-1"
                    data-hs-tab="#tabs-with-card-1"
                    aria-controls="tabs-with-card-1"
                    role="tab"
                  >
                    <span className="flex">
                      <svg
                        className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
                        <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      </svg>
                      <span className="grow ml-6">
                        <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                          Advanced tools
                        </span>
                        <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                          Use Preline thoroughly thought and automated libraries
                          to manage your businesses.
                        </span>
                      </span>
                    </span>
                  </button>

                  <button
                    type="button"
                    className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700"
                    id="tabs-with-card-item-2"
                    data-hs-tab="#tabs-with-card-2"
                    aria-controls="tabs-with-card-2"
                    role="tab"
                  >
                    <span className="flex">
                      <svg
                        className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"
                        />
                      </svg>
                      <span className="grow ml-6">
                        <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                          Smart dashboards
                        </span>
                        <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                          Quickly Preline sample components, copy-paste codes,
                          and start right off.
                        </span>
                      </span>
                    </span>
                  </button>

                  <button
                    type="button"
                    className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700"
                    id="tabs-with-card-item-3"
                    data-hs-tab="#tabs-with-card-3"
                    aria-controls="tabs-with-card-3"
                    role="tab"
                  >
                    <span className="flex">
                      <svg
                        className="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z" />
                      </svg>
                      <span className="grow ml-6">
                        <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">
                          Powerful features
                        </span>
                        <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">
                          Reduce time and effort on building modern look design
                          with Preline only.
                        </span>
                      </span>
                    </span>
                  </button>
                </nav>
              </div>

              <div className="lg:col-span-6">
                <div className="relative">
                  <div>
                    <div
                      id="tabs-with-card-1"
                      role="tabpanel"
                      aria-labelledby="tabs-with-card-item-1"
                    >
                      <img
                        className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                        src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80"
                        alt="Image Description"
                      />
                    </div>

                    <div
                      id="tabs-with-card-2"
                      className="hidden"
                      role="tabpanel"
                      aria-labelledby="tabs-with-card-item-2"
                    >
                      <img
                        className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                        src="https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80"
                        alt="Image Description"
                      />
                    </div>

                    <div
                      id="tabs-with-card-3"
                      className="hidden"
                      role="tabpanel"
                      aria-labelledby="tabs-with-card-item-3"
                    >
                      <img
                        className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]"
                        src="https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80"
                        alt="Image Description"
                      />
                    </div>
                  </div>
                  <div className="hidden absolute top-0 right-0 translate-x-20 md:block lg:translate-x-20">
                    <svg
                      className="w-16 h-auto text-orange-500"
                      width="121"
                      height="135"
                      viewBox="0 0 121 135"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                        stroke="currentColor"
                        stroke-width="10"
                        stroke-linecap="round"
                      />
                      <path
                        d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                        stroke="currentColor"
                        stroke-width="10"
                        stroke-linecap="round"
                      />
                      <path
                        d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                        stroke="currentColor"
                        stroke-width="10"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 grid grid-cols-12 w-full h-full">
              <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-white/[.075]"></div>
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className="p-8 sm:p-16">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-2">
              <div className="max-w-xs">
                <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                  Frequently
                  <br />
                  asked questions
                </h2>
                <p className="mt-1 hidden md:block text-gray-600 dark:text-gray-400">
                  Answers to the most frequently asked questions.
                </p>
              </div>
              <div className="mt-8 ">
                <Link
                  href="/account-management"
                  className="my-4 px-6 py-4 font-semibold flex flex-row space-x-2 border-b-2 border-orange-300 w-[60%] sm:max-w-[80%] hover:scale-90 duration-300 ease-in-out"
                >
                  Learn More
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

            <div className="md:col-span-3">
              <div className="hs-accordion-group divide-y divide-gray-200 dark:divide-gray-700">
                <div
                  className="hs-accordion pb-3 active"
                  id="hs-basic-with-title-and-arrow-stretched-heading-one"
                >
                  <button
                    className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
                    aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
                  >
                    Can I cancel at anytime?
                    <svg
                      className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </button>
                  <div
                    id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                    aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                  >
                    <p className="text-gray-600 dark:text-gray-400">
                      Yes, you can cancel anytime no questions are asked while
                      you cancel but we would highly appreciate if you will give
                      us some feedback.
                    </p>
                  </div>
                </div>

                <div
                  className="hs-accordion pt-6 pb-3"
                  id="hs-basic-with-title-and-arrow-stretched-heading-two"
                >
                  <button
                    className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
                    aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
                  >
                    My team has credits. How do we use them?
                    <svg
                      className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </button>
                  <div
                    id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                    className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                    aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
                  >
                    <p className="text-gray-600 dark:text-gray-400">
                      Once your team signs up for a subscription plan. This is
                      where we sit down, grab a cup of coffee and dial in the
                      details.
                    </p>
                  </div>
                </div>
                <div
                  className="hs-accordion pt-6 pb-3"
                  id="hs-basic-with-title-and-arrow-stretched-heading-five"
                >
                  <button
                    className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
                    aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five"
                  >
                    How do I get access to a theme I purchased?
                    <svg
                      className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </button>
                  <div
                    id="hs-basic-with-title-and-arrow-stretched-collapse-five"
                    className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                    aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five"
                  >
                    <p className="text-gray-600 dark:text-gray-400">
                      If you lose the link for a theme you purchased, don't
                      panic! We've got you covered. You can login to your
                      account, tap your avatar in the upper right corner, and
                      tap Purchases. If you didn't create a login or can't
                      remember the information, you can use our handy Redownload
                      page, just remember to use the same email you originally
                      made your purchases with.
                    </p>
                  </div>
                </div>

                <div
                  className="hs-accordion pt-6 pb-3"
                  id="hs-basic-with-title-and-arrow-stretched-heading-six"
                >
                  <button
                    className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
                    aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six"
                  >
                    Upgrade License Type
                    <svg
                      className="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </button>
                  <div
                    id="hs-basic-with-title-and-arrow-stretched-collapse-six"
                    className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                    aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six"
                  >
                    <p className="text-gray-600 dark:text-gray-400">
                      There may be times when you need to upgrade your license
                      from the original type you purchased and we have a
                      solution that ensures you can apply your original purchase
                      cost to the new license purchase.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BlogsSection />
    </main>
  );
}
