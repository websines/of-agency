"use client";

import React from "react";
import { UserNav } from "./dashboard/UserNav";
import { useSessionContext } from "@supabase/auth-helpers-react";

const DashboardNav = () => {
  const { session } = useSessionContext();
  return (
    <div className="flex flex-row justify-between items-center mx-8 p-4">
      <div className="flex flex-row justify-between items-center">
        <h1 className="p-2 rounded bg-gray-300 bg-opacity-30 tracking-wide">
          OFFNG
        </h1>
        <div className=""></div>
      </div>
      <div className="">
        <UserNav email={session?.user?.email} />
      </div>
    </div>
  );
};

export default DashboardNav;
