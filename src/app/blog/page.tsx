import { sanity_client } from "@/lib/sanity-client";
import React from "react";
import { Blog } from "@/lib/types";
import Link from "next/link";
import BlogsCard from "@/components/BlogCard";
import DiscoverSection from "@/components/DiscoverSection";

const getData = async () => {
  const query = `*[_type == "blog"]| order(_createdAt desc)`;

  const data = sanity_client.fetch(query);

  return data;
};
const page = async () => {
  const data = (await getData()) as Blog[];
  return (
    <div className="bg-white">
      <section
        className="w-full h-96 flex flex-row items-end justify-end sm:justify-start p-4 sm:py-12 sm:px-32"
        style={{
          backgroundImage: `url('/test.jpg')`,
        }}
      >
        <div className="bg-white p-6 text-black w-full sm:h-full h-auto sm:w-[30%]">
          <h1 className="text-3xl sm:text-4xl  font-extrabold">
            Account Management
          </h1>
          <p className="my-4 text-sm font-medium">
            The EMA Account Management team is responsible for maximizing
            account goals and efficiently executing vital daily account tasks.
          </p>
          <Link
            href="/contact"
            className="my-4 px-6 py-2 sm:py-4 font-semibold flex flex-row space-x-2 border-b-2 border-orange-300 max-w-[80%] hover:scale-90 duration-300 ease-in-out"
          >
            Get Started Now
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
      <section className="p-8 sm:p-8 min-h-screen">
        <div className="my-8">
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
              {data.map((post) => (
                <div key={post._id}>
                  <BlogsCard
                    image={post.image}
                    title={post.title}
                    overview={post.overview}
                    _createdAt={post._createdAt}
                    slug={post.slug}
                  />
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
