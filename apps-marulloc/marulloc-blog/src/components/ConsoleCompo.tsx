"use client";
import { useEffect } from "react";

const ConsoleCompo = ({ data }: { data: any }) => {
  useEffect(() => {
    console.log("Console\n", data);
  });
  return null;
};

export default ConsoleCompo;
