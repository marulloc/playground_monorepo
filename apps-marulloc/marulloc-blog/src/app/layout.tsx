import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { classNames } from "@/utils/classNames";
import Navigation from "@/components/Navigation";
import Avatar from "@/components/Avatar";
import Link from "next/link";
import Background from "@/components/Background";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kr">
      <body className={classNames(" relative min-h-screen     ", inter.className)}>
        <Background />

        {/* Container */}
        <div className=" relative max-w-7xl mx-auto  ">
          {/* Header */}
          <div className=" isolate sticky  top-0 pb-8 lg:-top-8 lg:py-8 w-full z-30   ">
            <header className="flex items-center    h-16  z-50  backdrop-blur-xl bg-zinc-700 bg-opacity-40     rounded-lg  px-8    ">
              <div className="flex-1">
                <Link href="/" className=" text-2xl font-semibold">
                  marul.log
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <Navigation />
                <Avatar />
              </div>
            </header>
          </div>

          {/* Main */}
          <div className="   relative isolate  bg-zinc-700 bg-opacity-40  h-full   backdrop-blur-lg  rounded-lg min-h-[calc(100vh-160px)] flex flex-col  mb-8 ">
            <main className=" flex-1 h-full flex flex-col w-full ">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
