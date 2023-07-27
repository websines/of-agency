import DiscoverSection from "@/components/DiscoverSection";
import Link from "next/link";
import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const page = () => {
  const ACCORDION_CONTENT = [
    {
      id: 1,
      title: "Client Manager",
      desc: "The client manager is the point of contact between the Creator and the rest of the operations team.",
    },
    {
      id: 2,
      title: "Client Manager",
      desc: "The client manager is the point of contact between the Creator and the rest of the operations team.",
    },
    {
      id: 3,
      title: "Client Manager",
      desc: "The client manager is the point of contact between the Creator and the rest of the operations team.",
    },
    {
      id: 3,
      title: "Client Manager",
      desc: "The client manager is the point of contact between the Creator and the rest of the operations team.",
    },
    {
      id: 3,
      title: "Client Manager",
      desc: "The client manager is the point of contact between the Creator and the rest of the operations team.",
    },
    {
      id: 3,
      title: "Client Manager",
      desc: "The client manager is the point of contact between the Creator and the rest of the operations team.",
    },
    {
      id: 3,
      title: "Client Manager",
      desc: "The client manager is the point of contact between the Creator and the rest of the operations team.",
    },
    {
      id: 3,
      title: "Client Manager",
      desc: "The client manager is the point of contact between the Creator and the rest of the operations team.",
    },
  ];

  return (
    <div>
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
            href="/account-management"
            className="my-4 px-6 py-2 sm:py-4 font-semibold flex flex-row space-x-2 border-b-2 border-orange-300 max-w-[80%] hover:scale-90 duration-300 ease-in-out"
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
        <div className="sm:w-[80%] flex flex-col p-4 ">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <h2 className="uppercase text-2xl font-extrabold">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-sm m-4 text-right">
              Have a question not shown? Please{" "}
              <Link
                href="/contact-us"
                className="px-2 sm:px-4 py-2 mt-4 sm:mt-0 bg-gray-300 rounded-3xl hover:bg-black hover:text-white"
              >
                contact us.
              </Link>
            </p>
          </div>
          <div className="my-8 flex flex-col p-6 items-center justify-center w-full">
            {ACCORDION_CONTENT.map((item) => (
              <div className="w-full" key={item.id}>
                <Accordion type="single" collapsible className="m-2">
                  <AccordionItem value="faq">
                    <AccordionTrigger className="text-lg font-semibold p-4 bg-cyan-100 rounded hover:no-underline">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="p-4">
                      {item.desc}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>
      <DiscoverSection />
    </div>
  );
};

export default page;
