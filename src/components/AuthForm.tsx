"use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Database } from "@/lib/supabase";
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthForm() {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  return (
    <Auth
      supabaseClient={supabaseClient}
      magicLink
      appearance={{
        theme: ThemeSupa,
        variables: {
          default: {
            colors: {
              brand: "#2563eb",
              brandAccent: "#22d3ee",
            },
          },
        },
      }}
      theme="light"
      providers={[]}
      redirectTo="/auth/callback"
    />
  );
}
