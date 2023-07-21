"use client";

import DashboardNav from "@/components/DashboardNav";
import { useSessionContext } from "@supabase/auth-helpers-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <DashboardNav />
      <div className="p-16">{children}</div>
    </div>
  );
}
