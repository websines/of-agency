import DiscoverSection from "@/components/DiscoverSection";
import TextBox from "@/components/TextBox";
import Link from "next/link";
import React from "react";

const page = () => {
  const SECTIONS_CONTENT_1 = [
    {
      id: 1,
      title: "Client Manager",
      desc: "The client manager is the point of contact between the Creator and the rest of the operations team.",
    },
    {
      id: 2,
      title: "Account Manager",
      desc: "Every creator we work with has an assigned account manager that ensures your account stays on track with identified goals.",
    },
    {
      id: 3,
      title: "Dedicated Account Staff",
      desc: "What significantly sets EMA apart is a dedicated team. Three – five staff members are focused on 1 account.",
    },
  ];

  const SECTIONS_CONTENT_2 = [
    {
      id: 1,
      title: "Caption Creation",
      desc: "The account team will carefully curate the best performing captions on all content types for the highest open/sell rates.",
    },
    {
      id: 2,
      title: "Selling Content at Scale",
      desc: "The account team focuses on publishing content to produce the highest sales. This includes story, wall posts, PPV, and 1-on-1 content selling.",
    },
    {
      id: 3,
      title: "Custom Requests",
      desc: "When customs are offered, the account team will manage the process of acquiring a high price and communicating the custom request to the creator.",
    },
  ];

  const SECTIONS_CONTENT_3 = [
    {
      id: 1,
      title: "Realtime Metrics",
      desc: "The operations team uses advanced software that ties directly into Onlyfans to provide the team with real-time fan data that identifies dozens of data points allowing the team to make day to day adjustments to strategy.",
    },
    {
      id: 2,
      title: "Financial Projections",
      desc: "EMA monitors financial projections daily, based on historical data on an account, to ensure continued account success and identify roadblocks far in advance.",
    },
  ];

  return (
    <div>
      <section className="w-full h-96 flex flex-row items-end justify-end sm:justify-start p-4 sm:py-12 sm:px-32 relative">
        <video
          src="/video-1.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        />
        <div className="bg-white p-6 text-black w-full sm:h-full h-auto sm:w-[30%]">
          <h1 className="text-3xl sm:text-4xl  font-extrabold">
            Account Management
          </h1>
          <p className="my-4 text-sm font-medium">
            The EMA Account Management team is responsible for maximizing
            account goals and efficiently executing vital daily account tasks.
          </p>
          <Link
            href="/faqs"
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
        <div className="sm:w-[80%] flex flex-col p-4 items-start justify-start">
          <div className="flex flex-col mb-8">
            <h2 className="uppercase text-3xl font-extrabold my-8">
              The TEAM.
            </h2>
            <div className="flex flex-col sm:flex-row">
              {SECTIONS_CONTENT_1.map((content) => (
                <div className="my-4" key={content.id}>
                  <TextBox title={content.title} desc={content.desc} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col my-8">
            <h2 className="uppercase text-3xl font-extrabold my-8">
              The DAILY OPERATIONS.
            </h2>
            <div className="flex flex-col sm:flex-row">
              {SECTIONS_CONTENT_2.map((content) => (
                <div className="my-4" key={content.id}>
                  <TextBox title={content.title} desc={content.desc} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col mt-8">
            <h2 className="uppercase text-3xl font-extrabold my-8">
              SOFTWARE.
            </h2>
            <div className="flex flex-col sm:flex-row">
              {SECTIONS_CONTENT_3.map((content) => (
                <div key={content.id}>
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
