import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "thegr8saroj",
  description: "Portolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[#0e100f] text-[#ffffe3] min-h-screen">
          <MaxWidthWrapper>
            <Navbar/>
            {children}
            <Footer/>
          </MaxWidthWrapper>
        </div>
        </body>
    </html>
  );
}
