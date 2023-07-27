"use client";

import React from "react";
import { UserNav } from "./UserNav";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { CredentialsModal } from "./CredentialsModal";

const DashboardNav = () => {
  const { session } = useSessionContext();
  return (
    <div className="flex flex-row justify-between items-center mx-8 p-4">
      <div className="flex flex-row justify-between items-center">
        <h1 className="p-2 rounded bg-gray-300 bg-opacity-30 tracking-wide">
          YOUR DASHBOARD
        </h1>
        <div className="z-40">
          <CredentialsModal />
        </div>
      </div>
      <div className="">
        <UserNav email={session?.user?.email} />
      </div>
    </div>
  );
};

export default DashboardNav;
