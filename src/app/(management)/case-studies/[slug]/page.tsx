import { sanity_client, urlFor } from "@/lib/sanity-client";
import { Blog } from "@/lib/types";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

async function getData(slug: string) {
  const query = `*[_type == "caseStudy" && slug.current == "${slug}"]`;

  const data = await sanity_client.fetch(query);

  return data;
}

export const PortableTextComponent = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt="blog post image"
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl py-10 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl py-10 font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl py-10 font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl py-10 font-bold">{children}</h4>
    ),

    blockquote: ({ children }: any) => (
      <blockquote className="border-l-[#f7ab0a] border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-[#f7ab0a] hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};

const Post = ({ data }: any) => {
  return (
    <div className="bg-white">
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
