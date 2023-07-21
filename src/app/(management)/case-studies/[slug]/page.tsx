import { sanity_client, urlFor } from "../../../../lib/sanity";
import { Blog } from "@/lib/types";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

async function getData(slug: string) {
  const query = `*[_type == "caseStudy" && slug.current == "${slug}"]`;

  const data = await sanity_client.fetch(query);

  return data;
}

const PortableTextComponent = {
  types: {
    image: ({ value }: { value: any }) => (
      <Image src={urlFor(value).url()} alt="img" height={1000} width={1000} />
    ),
  },
};

const Post = ({ data }: any) => {
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
      {data.map((post: any) => (
        <section className="p-8 sm:p-16 min-h-screen">
          <div className="flex flex-row justify-between items-center mx-4">
            <p className="font-semibold tracking-tight text-lg">
              {new Date(post._createdAt).toISOString().split("T")[0]}
            </p>
            <Link
              href="/case-studies"
              className="hover:underline text-lg font-semibold"
            >
              Go Back
            </Link>
          </div>
          <div className="flex flex-col justify-center items-center p-8 space-y-4">
            <h1 className="text-2xl tracking-tight font-bold">{post.title}</h1>
            <p>{post.overview}</p>
            <Image
              src={urlFor(post.image.asset._ref).url()}
              alt={post.title}
              height={1000}
              width={1000}
              className="w-auto h-96 rounded-xl"
            />
            <PortableText
              value={post.content}
              components={PortableTextComponent}
            />
          </div>
        </section>
      ))}
    </div>
  );
};

const page = async ({ params }: { params: { slug: string } }) => {
  const data = await getData(params.slug);
  return <Post data={data} />;
};

export default page;
