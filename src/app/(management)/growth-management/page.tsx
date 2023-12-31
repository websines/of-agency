import DiscoverSection from "@/components/DiscoverSection";
import TextBox from "@/components/TextBox";
import Link from "next/link";
import React from "react";

const page = () => {
  const GROWTH_CONTENT_1 = [
    {
      id: 1,
      title: "Paid Campaigns",
      desc: "EMG is uniquely partnered with marketing firms and platforms to boost visibility instantly.",
    },
    {
      id: 2,
      title: "Paid Shoutouts",
      desc: "EMG has a large network of Onlyfans creators that actively seek to sell their fans to other creators, for a fee.",
    },
  ];

  const GROWTH_CONTENT_2 = [
    {
      id: 1,
      title: "Organic Viral Growth",
      desc: "The EMG promotion team has a systemized solution to get clips to gain organic viral attraction on Tiktok and Instagram Reels that are then converted to Onlyfans subscribers.",
    },
    {
      id: 2,
      title: "Mutual Collaborations",
      desc: "EMG has a large network of Onlyfans creators that actively seek similarly sized accounts to cross promote in a shout for shout strategy.",
    },
  ];

  return (
    <div>
      <section className="w-full h-96 flex flex-row items-end justify-end sm:justify-start p-4 sm:py-12 sm:px-32 relative">
        <video
          src="/video-2.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        />
        <div className="bg-white p-6 text-black w-full sm:h-full h-auto sm:w-[30%]">
          <h1 className="text-3xl sm:text-4xl  font-extrabold">
            Growth Management
          </h1>
          <p className="my-4 text-sm font-medium">
            The EMA Account Management team is responsible for maximizing
            account goals and efficiently executing vital daily account tasks.
          </p>
          <Link
            href="/account-management"
            className="my-4 px-6 py-2 sm:py-4 font-semibold flex flex-row space-x-2 border-b-2 border-cyan-300 max-w-[80%] hover:scale-90 duration-300 ease-in-out"
          >
            View the FAQs
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
      </section>
      <section className="flex flex-col bg-gray-100 p-8 sm:p-16 justify-center items-center">
        <div className="w-[80%] flex flex-col p-4 items-start justify-start">
          <div className="flex flex-col mb-8">
            <h2 className="uppercase text-3xl font-extrabold mb-8">
              PAID PROMO.
            </h2>
            <div className="flex flex-col sm:flex-row">
              {GROWTH_CONTENT_1.map((content) => (
                <div className="my-4" key={content.id}>
                  <TextBox title={content.title} desc={content.desc} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col my-8">
            <h2 className="uppercase text-3xl font-extrabold mb-8">
              FREE PROMO.
            </h2>
            <div className="flex flex-col sm:flex-row">
              {GROWTH_CONTENT_2.map((content) => (
                <div className="my-4" key={content.id}>
                  <TextBox title={content.title} desc={content.desc} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <DiscoverSection />
    </div>
  );
};

export default page;
