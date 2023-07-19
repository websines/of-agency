import TopBar from "@/components/TopBar";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const poppins = Poppins({ weight: "400", preload: false });

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
      <body className={poppins.className}>
        <TopBar />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
