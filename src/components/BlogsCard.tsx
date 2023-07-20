import Link from "next/link";
import Image from "next/image";
import React from "react";

type BlogContent = {
  image: string;
  title: string;
  createdAt: string;
  overview: string;
  slug: string;
};

const BlogsCard = ({
  image,
  title,
  createdAt,
  overview,
  slug,
}: BlogContent) => {
  return (
    <Link href={""} className="flex flex-col relative z-10 mt-4">
      <Image
        src={""}
        alt="something"
        height={360}
        width={200}
        className="object-contain"
      />
      <div className="bg-black p-8 flex flex-col justify-center items-center text-white">
        <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
          commodi magni, est aut dolorem ipsum saepe officia doloremque harum
          expedita illum eligendi inventore repellat sed non quae. Consequatur,
          iste perferendis.
        </p>
      </div>
      <div className="bg-emerald-600 p-4">July 20,2000</div>
    </Link>
  );
};

export default BlogsCard;
