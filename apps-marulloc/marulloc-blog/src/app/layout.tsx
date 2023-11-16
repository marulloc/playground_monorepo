import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { classNames } from "@/utils/classNames";
import BreadCrumb from "@/components/BreadCrumb";
import Header from "@/components/Header";
import Container from "@/components/Container";
import { getRepositoryTree } from "@/services/repository/getRepositoryTree";
import { getDirectoryContents } from "@/services/repository/getDirectoryContents";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const repositoryData = await getRepositoryTree();
  const directoryData = await getDirectoryContents();

  return (
    <html lang="en">
      <body className={classNames(inter.className, " relative")}>
        <Header routes={directoryData} />
        {/* <BreadCrumb /> */}

        <Container className="mt-24 my-12">{children}</Container>
      </body>
    </html>
  );
}
