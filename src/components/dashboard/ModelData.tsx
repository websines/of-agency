import React from "react";
import { Card } from "../ui/card";
import Link from "next/link";

const ModelData = () => {
  return (
    <Card className="sm:p-8 p-4">
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start">
        <div className="flex flex-col items-center justify-center space-y-2">
          <h1 className="px-4 py-2 bg-gray-100 rounded w-full text-center font-semibold hover:bg-black hover:text-white">
            Tamsiaya ♡
          </h1>
          <img
            src="https://thumbs.onlyfans.com/public/files/thumbs/c144/k/ko/kon/konubetjup5ushmbht6aolz8v16rxix01674651010/287357099/avatar.jpg"
            alt="image"
            className="w-48 h-48 object-cover rounded"
          />
          <Link
            href="onlyfans.com/onlytamsiaya"
            className="px-4 py-2 bg-black text-white font-semibold text-center w-full rounded"
          >
            @onlytamsiaya
          </Link>
        </div>
        <div className="flex flex-col items-center justify-start space-y-2 w-full sm:mx-auto mt-4 sm:w-[60%]">
          <p className="overflow-hidden text-md font-medium">
            Hi i'm Tamsiaya!! Born in 2004 ♡ Love 2 b spoiled and appreciated...{" "}
            Cum chat to me and find out what I like 🥰 Will be posting new
            content on the wall daily 💋
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap space-x-2 space-y-2">
            <div className="ml-2 sm:mt-2 p-4 bg-gray-300 bg-opacity-25 rounded font-semibold text-sm text-center">
              Total Posts: 2
            </div>
            <div className="p-4 bg-gray-300 bg-opacity-25 rounded font-semibold text-sm text-center">
              Archived Posts: 51
            </div>
            <div className="p-4 bg-gray-300 bg-opacity-25 rounded font-semibold text-sm text-center">
              Private Archived Posts: 12
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ModelData;
