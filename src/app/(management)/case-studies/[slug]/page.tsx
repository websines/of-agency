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

const PortableTextComponent = {
  types: {
    image: ({ value }: { value: any }) => (
      <Image src={urlFor(value).url()} alt="img" height={1000} width={1000} />
    ),
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
