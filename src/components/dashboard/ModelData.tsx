"use client";
import React, { useEffect, useState } from "react";
import { Card } from "../ui/card";
import Link from "next/link";
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";

import axios from "axios";

const ModelData = () => {
  const supabase = useSupabaseClient();
  const [userData, setUserData] = useState([]) as any;
  const { session } = useSessionContext();
  const [isLoading, setIsLoading] = useState(true);

  const getUsernameData = async () => {
    const { data, error } = await supabase
      .from("user_creds")
      .select()
      .eq("id", session?.user.id);

    if (!error && data && data.length > 0 && data[0].of_username) {
      return data[0].of_username;
    } else {
      return null;
    }
  };

  useEffect(() => {
    const getUserData = async () => {
      const username = await getUsernameData();

      const input = {
        profileIds: username,
        minDelay: 1,
        maxDelay: 5,
      };

      const creds = { input };
      await axios
        .post("/api/getUserData", creds)
        .then((response) => {
          setUserData(response.data.user_data);
          setIsLoading(false);
        })
        .catch((error) => console.log(error));
    };

    getUserData();
  }, [session?.user?.id]);

  if (isLoading) {
    return (
      <div className="bg-white w-full min-h-screen flex justify-center items-center">
        <div className="flex min-h-screen w-full items-center justify-center bg-white">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 animate-spin">
            <div className="h-9 w-9 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <Card className="sm:p-8 p-4">
      {userData && (
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start">
          <div className="flex flex-col items-center justify-center space-y-2">
            <h1 className="px-4 py-2 bg-gray-100 rounded w-full text-center font-semibold hover:bg-black hover:text-white">
              {userData[0].name}
            </h1>
            <img
              src={userData[0].avatarThumbs.c144}
              alt="image"
              className="w-48 h-48 object-cover rounded"
            />
            <Link
              href={`https://onlyfans.com/${userData[0].username}`}
              className="px-4 py-2 bg-black text-white font-semibold text-center w-full rounded"
            >
              {userData[0].username}
            </Link>
          </div>
          <div className="flex flex-col items-center justify-start space-y-2 w-full sm:mx-auto mt-4 sm:w-[60%]">
            <p className="overflow-hidden text-md font-medium">
              {userData[0].rawAbout}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap space-x-2 space-y-2">
              <div className="ml-2 sm:mt-2 p-4 bg-gray-300 bg-opacity-25 rounded font-semibold text-sm text-center">
                Total Posts: {userData[0].postsCount}
              </div>
              <div className="p-4 bg-gray-300 bg-opacity-25 rounded font-semibold text-sm text-center">
                Archived Posts: {userData[0].archivedPostsCount}
              </div>
              <div className="p-4 bg-gray-300 bg-opacity-25 rounded font-semibold text-sm text-center">
                Private Archived Posts: {userData[0].privateArchivedPostsCount}
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default ModelData;
