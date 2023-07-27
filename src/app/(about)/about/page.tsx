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
      <section className="p-4 sm:p-16 min-h-screen w-full bg-white">
        <div className="flex flex-col p-8 mx-auto items-center justify-center">
          <h1 className="font-extrabold text-3xl sm:text-4xl my-2">About Us</h1>
          <p className="sm:w-[80%] overflow-clip text-md font-medium p-4">
            We are lucky ones. We live in a period of time, where so many things
            are possible that were even impossible to think of in previous
            generations. We live in a time, where personal freedom, personal
            expression, and personal connections are possible for a steadily
            growing number of people across the world. EMG is a Hamburg-based
            agency with like-minded people, who share the same values and
            dreams. Our goal is to empower OF creators to reach their personal
            goals by unleashing their full potential. Regardless if one thrives
            for financial freedom, personal freedom, or just wants to enjoy the
            ride. We are a proven team of experts in our designated fields and
            want to be the professional foundation in a business that often
            lacks exactly that. Even though we have to regularly say no to
            applicants, our behavior, our thinking, and our actions are driven
            by kindness and respect. We are thankful and proud to have so many
            amazing people who trust us and love to work with us. If you like to
            get to know us better, feel free to reach out to us any time.”
          </p>
        </div>
        <div className="flex flex-col p-8 mx-auto items-center justify-center">
          <h1 className="font-extrabold text-3xl sm:text-4xl my-2">
            Our Vision
          </h1>
          <p className="sm:w-[80%] overflow-clip text-md font-medium p-4">
            The key to a successful life always lies in the connection one
            creates, invests, and cares for. At EMG that is exactly what we do.
            We believe in the power of personal connection and therefore heavily
            invest in building up a strong, durable connection with you. Trust,
            respect, and reliabilty are our core values and guide us throughout
            all our actions. It is essential for us, to invest time to get to
            know you and your personal goals. We know that one can only reach
            maximum success when our plans and priorities are aligned. Your
            privacy is a crucial element in how we work. Absolutely no details
            about any of our partner models are going public unless we have
            their signed approval. We respect all your personal motivations and
            asks, and will be open and honest in discussing all potential
            opportunities before moving forward. After getting to know you, we
            define concrete goals and next steps together, empowering you and us
            to grow your fan base and establish a new level of connection to
            your fans. While our actions are driven by absolute passion and
            enthusiasm, we are trying to base our actions as much as possible on
            unbiased data instead of personal opinions. If you share those same
            values, we would love for you to apply and see if we can work
            together.
          </p>
        </div>
      </section>
      <DiscoverSection />
    </div>
  );
};

export default page;
