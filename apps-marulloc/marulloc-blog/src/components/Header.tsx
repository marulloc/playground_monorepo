import { classNames } from "@/utils/classNames";
import Image from "next/image";
import avatarImage from "./mock.png";
import MainNav from "./Navigation/MainNav";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className=" sticky top-0   ">
      <div className=" grid grid-cols-8 px-16 py-4">
        <div className="col-span-1 flex justify-start">
          <Avatar />
        </div>
        <div className="col-span-6 flex justify-center">
          <Title />
        </div>
        <div className="col-span-1 flex justify-end">
          <ThemeToggle />
        </div>

        <div className="col-span-8 mt-4">{children}</div>
      </div>
    </header>
  );
};

export default Header;

const Avatar = ({ src }: { src?: string }) => {
  return (
    <div className="  ">
      <div
        className={classNames(
          "h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10 pointer-events-auto",
        )}
      >
        <Image
          src={src || avatarImage}
          alt=""
          // sizes={large ? '4rem' : '2.25rem'}
          className={classNames(
            "rounded-full bg-zinc-100 object-cover dark:bg-zinc-800",
            // large ? 'h-16 w-16' : 'h-9 w-9',
          )}
          fill
          priority
        />
      </div>
    </div>
  );
};

const Title = () => {
  return (
    <div className=" ">
      <span className="text-4xl italic font-bold">Marulloc blog</span>
    </div>
  );
};

const ThemeToggle = () => {
  return (
    <div className=" ">
      <div
        className={classNames(
          "h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10 pointer-events-auto",
        )}
      ></div>
    </div>
  );
};
