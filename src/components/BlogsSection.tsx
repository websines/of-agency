import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogsSection = () => {
  return (
    <section className="p-16 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold tracking-tight uppercase my-8">
        ONLYFANS BLOGS
      </h1>
      <div className="sm:m-12 sm:p-12 flex flex-col sm:flex-row justify-evenly items-center space-x-4 space-y-4">
        <Link href={""} className="flex flex-col relative z-10 mt-4">
          <Image
            src={""}
            alt="something"
            height={360}
            width={200}
            className="object-contain w-48 h-48"
          />
          <div className="bg-black p-8 flex flex-col justify-center items-center text-white">
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
              commodi magni, est aut dolorem ipsum saepe officia doloremque
              harum expedita illum eligendi inventore repellat sed non quae.
              Consequatur, iste perferendis.
            </p>
          </div>
          <div className="bg-emerald-600 p-4">July 20,2000</div>
        </Link>
        <Link href={""} className="flex flex-col relative z-10">
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
              commodi magni, est aut dolorem ipsum saepe officia doloremque
              harum expedita illum eligendi inventore repellat sed non quae.
              Consequatur, iste perferendis.
            </p>
          </div>
          <div className="bg-emerald-600 p-4">July 20,2000</div>
        </Link>
        <Link href={""} className="flex flex-col relative z-10">
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
              commodi magni, est aut dolorem ipsum saepe officia doloremque
              harum expedita illum eligendi inventore repellat sed non quae.
              Consequatur, iste perferendis.
            </p>
          </div>
          <div className="bg-emerald-600 p-4">July 20,2000</div>
        </Link>
      </div>
    </section>
  );
};

export default BlogsSection;
