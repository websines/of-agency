"use client";
import React, { useEffect } from "react";
import { Card } from "../ui/card";
import Link from "next/link";
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";

import axios from "axios";

const ModelData = () => {
  const supabase = useSupabaseClient();
  const { session } = useSessionContext();

  // const getCookieData = async () => {
  //   const { data, error } = await supabase
  //     .from("auth_cookies")
  //     .select()
  //     .eq("id", session?.user.id);

  //   if (!error) {
  //     return data[0].auth_cookie;
  //   } else {
  //     return null;
  //   }
  // };

  // useEffect(() => {
  //   const getUserData = async () => {
  //     const auth_cookie = await getCookieData();
  //     // const jsonData = JSON.parse(auth_cookie);

  //     const jsonData = {
  //       cookie:
  //         "csrf=qDveBTQ6936afac4575dccb8ff348a4bcf2f0a3b; cookiesAccepted=all; fp=e3f560de2c422e2ed29f4e4b8ab27017; lang=en; sess=5efb6dkplrr5kkoj1pihg0nfrr; auth_id=287357099; ref_src=; st=83f8fb265c63256b4235a5fc1baf68b211c741f2806dfa9cf1e90c7b3fd53adb",
  //       referer: "https://onlyfans.com/",
  //       "user-agent":
  //         "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
  //       accept: "application/json, text/plain, */*",
  //       "app-token": "33d57ade8c02dbc5a333db99ff9ae26a",
  //       "sec-ch-ua":
  //         '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"',
  //       "sec-ch-ua-mobile": "?0",
  //       "sec-ch-ua-platform": '"Windows"',
  //       sign: "9227:627e47d88a9e2fa3612f8bbedd4d37b978559950:787:64babf4b",
  //       time: "1690137758525",
  //       "x-bc": "e4244f1e5c7ac3f8aae9d11158785db56953d9e8",
  //     };

  //     axios
  //       .get("https://onlyfans.com/api2/v2/users/me", {
  //         headers: {
  //           Cookie: jsonData.cookie,
  //           Referer: jsonData.referer,
  //           "User-Agent": jsonData["user-agent"],
  //           Accept: jsonData.accept,
  //           "App-Token": jsonData["app-token"],
  //           "Sec-Ch-Ua": jsonData["sec-ch-ua"],
  //           "Sec-Ch-Ua-Mobile": jsonData["sec-ch-ua-mobile"],
  //           "Sec-Ch-Ua-Platform": jsonData["sec-ch-ua-platform"],
  //           Sign: jsonData.sign,
  //           Time: jsonData.time,
  //           "X-Bc": jsonData["x-bc"],
  //         },
  //       })
  //       .then((response) => {
  //         console.log(response.data);
  //       })
  //       .catch((error) => {
  //         console.error(error.message);
  //       });
  //   };

  //   getUserData();
  // }, []);
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
            href="https://onlyfans.com/onlytamsiaya"
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
