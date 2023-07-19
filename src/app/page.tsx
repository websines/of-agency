import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="home">
      <section
        id="slide-1"
        className="w-full min-h-screen relative z-10"
        style={{ backgroundImage: `url('')`, zIndex: -10 }}
      >
        {/* <Image
          src="/test.jpg"
          alt="test"
          fill
          className="absolute inset-0 object-cover z-10"
        /> */}
        <div className="relative z-10 flex flex-col items-start justify-start w-[60%] p-16 h-full">
          <p className="mt-12 text-xl text-orange-400 font-semibold">
            The Only Professionally Accredited Onlyfans Agency by the BBB™
          </p>
          <h1 className="text-gray-900 my-4 font-semibold text-6xl">
            SMART ONLYFANS DEVELOPMENT. <br />― THE ONLYFANS AGENCY BEHIND THE
            TOP 0.1%
          </h1>
          <p className="mt-6 font-bold text-lg">
            *EMA Onlyfans Management contracts guarantee 6 figures annually.
          </p>
          <Link
            href="/get-started"
            className="m-2 px-20 py-6 bg-white font-medium text-lg hover:bg-black hover:text-white duration-300 ease-in-out"
          >
            Get the Offer Details
          </Link>

          <Link
            href="#slide-2"
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
      </section>
      <section id="slide-2" className="w-full min-h-screen relative">
        <Image
          src=""
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
      <section id="slide-3" className="w-full min-h-screen relative">
        <Image
          src=""
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
    </main>
  );
}
