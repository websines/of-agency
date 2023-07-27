import DiscoverSection from "@/components/DiscoverSection";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <section
        className="w-full h-96 flex flex-row items-end justify-end sm:justify-start p-4 sm:py-12 sm:px-32"
        style={{
          backgroundImage: `url('/img-3.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-white p-6 text-black w-full sm:h-full h-auto sm:w-[30%]">
          <h1 className="text-3xl sm:text-4xl  font-extrabold">
            Account Management
          </h1>
          <p className="my-4 text-sm font-medium">
            The EMG Account Management team is responsible for maximizing
            account goals and efficiently executing vital daily account tasks.
          </p>
          <Link
            href="/faqs"
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
      <section className="p-4 sm:p-16 min-h-screen w-full">
        <div className="flex flex-col p-8 mx-auto items-center justify-center">
          <h1 className="font-extrabold text-3xl sm:text-4xl my-2">About Us</h1>
          <p className="sm:w-[80%] overflow-clip text-md font-medium p-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            architecto deserunt et id, impedit quibusdam voluptates eaque sit
            tempore omnis cumque, consequuntur dolore quisquam labore soluta
            accusantium aliquam voluptatum itaque?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Est vel assumenda mollitia minima unde
            quia porro hic dolores, autem ducimus nostrum, quidem voluptatum
            facere aspernatur iusto modi architecto saepe explicabo?Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ipsa tenetur a
            cupiditate! Aperiam maxime, cupiditate nostrum, suscipit ex sequi
            sed eius facere soluta veritatis inventore cumque eaque blanditiis!
            Velit, ullam.
          </p>
        </div>
        <div className="flex flex-col p-8 mx-auto items-center justify-center">
          <h1 className="font-extrabold text-3xl sm:text-4xl my-2">
            Our Vision
          </h1>
          <p className="sm:w-[80%] overflow-clip text-md font-medium p-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            architecto deserunt et id, impedit quibusdam voluptates eaque sit
            tempore omnis cumque, consequuntur dolore quisquam labore soluta
            accusantium aliquam voluptatum itaque?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Est vel assumenda mollitia minima unde
            quia porro hic dolores, autem ducimus nostrum, quidem voluptatum
            facere aspernatur iusto modi architecto saepe explicabo?Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Ipsa tenetur a
            cupiditate! Aperiam maxime, cupiditate nostrum, suscipit ex sequi
            sed eius facere soluta veritatis inventore cumque eaque blanditiis!
            Velit, ullam.
          </p>
        </div>
      </section>
      <DiscoverSection />
    </div>
  );
};

export default page;
