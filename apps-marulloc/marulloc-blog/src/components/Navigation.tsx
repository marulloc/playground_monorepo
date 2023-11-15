"use client";

const Navigation = ({ route }) => {
  console.log(">>>>", route);
  return <nav className=" text-white ">Navigation</nav>;
};

export const Recursive = () => {
  return <></>;
};

Navigation.Recursive = Recursive;

export default Navigation;
