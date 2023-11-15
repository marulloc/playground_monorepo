import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import { getRepoStructure, readRepoFile } from "@/services/readRepository";
import MainNav from "@/components/MainNav";
import Header from "@/components/Header";
import { classNames } from "@/utils/classNames";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const rootDir = await readRepoFile();

  return (
    <html lang="en">
      <body className={classNames(inter.className, " relative")}>
        <Header rootNav={rootDir} />
        {/* <MainNav rootNav={rootDir} /> */}
        {children}
      </body>
    </html>
  );
}
