import Link from "next/link";
import React from "react";

const DiscoverSection = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white flex flex-col justify-start items-center p-6 sm:p-16">
      <div className="w-[80%]">
        <div className="flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center">
          <span className="text-3xl font-extrabold py-10 sm:p-20">
            DISCOVER MANAGEMENT
          </span>
          <div className="flex flex-col space-y-4 sm:ml-16">
            <p>
              At EMA, we offer a comprehensive approach to account building and
              growth, allowing you to explore various paths towards achieving
              your desired level of success. Our 360 approach enables you to
              optimize your account and reach your full potential on OnlyFans
              and other NSFW platforms.
            </p>
            <Link
              href="/contact-us"
              className="mt-8 px-6 py-2 border-b-2 border-orange-300 hover:scale-90 duration-300 ease-in-out w-[75%] sm:w-[40%]"
            >
              EMA Model Application
            </Link>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-12 sm:gap-12 sm:grid-cols-3 sm:p-20">
          <div
            className="col-span-1 p-4 bg-white hover:scale-110 sm:hover:scale-125 duration-300 ease-in-out flex flex-col justify-center items-center h-[400px] rounded-lg drop-shadow-md group"
            style={{
              backgroundImage: "url('/img-1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className=" flex flex-col items-center group-hover:justify-center h-full">
              <span className="hidden text-lg font-bold text-white text-center translate-y-0 group-hover:block group-hover:duration-700 transition-all group-hover:ease-in-out">
                Account Management
              </span>
              <span className="hidden text-xs font-bold text-white text-center group-hover:block group-hover:duration-300 group-hover:ease-in-out">
                Maximizing revenue inside accounts
              </span>
            </div>
          </div>
          <div
            className="col-span-1 p-4 bg-white hover:scale-110 sm:hover:scale-125 duration-300 ease-in-out flex flex-col justify-center items-center h-[400px] rounded-lg drop-shadow-md group"
            style={{
              backgroundImage: "url('/img-1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className=" flex flex-col items-center group-hover:justify-center h-full">
              <span className="hidden text-lg font-bold text-white text-center translate-y-0 group-hover:block group-hover:duration-700 transition-all group-hover:ease-in-out">
                Account Management
              </span>
              <span className="hidden text-xs font-bold text-white text-center group-hover:block group-hover:duration-300 group-hover:ease-in-out">
                Maximizing revenue inside accounts
              </span>
            </div>
          </div>
          <div
            className="col-span-1 p-4 bg-white hover:scale-110 sm:hover:scale-125 duration-300 ease-in-out flex flex-col justify-center items-center h-[400px] rounded-lg drop-shadow-md group"
            style={{
              backgroundImage: "url('/img-1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Link
              href={"/faqs"}
              className=" flex flex-col items-center group-hover:justify-center h-full"
            >
              <span className="hidden text-lg font-bold text-white text-center translate-y-0 group-hover:block group-hover:duration-700 transition-all group-hover:ease-in-out">
                Account Management
              </span>
              <span className="hidden text-xs font-bold text-white text-center group-hover:block group-hover:duration-300 group-hover:ease-in-out">
                Maximizing revenue inside accounts
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
