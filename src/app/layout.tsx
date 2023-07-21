import TopBar from "@/components/TopBar";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
//import { useEffect } from "react";

const poppins = Poppins({
  weight: ["400", "100", "200", "300", "500", "600", "700", "800", "900"],
  preload: false,
});

export const metadata = {
  title: "Management Agency",
  description: "Under Development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-white ${poppins.className} text-black`}>
        <SupabaseProvider>
          <UserProvider>
            <TopBar />
            <NavBar />
            {children}
            <Footer />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
