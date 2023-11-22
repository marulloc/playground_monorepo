import ConsoleCompo from "@/components/ConsoleCompo";
import { getSeriesList } from "@/services/getSeriesList";
import { AsyncFunctionValueType } from "@/utils/conditionalType";
import Image from "next/image";
import Link from "next/link";

const SeriesList = async ({ path }: { path: string }) => {
  const seriesList = await getSeriesList(path);

  return (
    <section className="">
      <ConsoleCompo data={seriesList} />
      <h2 className="text-3xl font-bold tracking-tight text-zinc-200 sm:text-4xl">Series </h2>
      <hr className=" border-zinc-600 border-b my-4" />
      {seriesList.length > 0 && (
        <div className="">
          <div className="grid grid-cols-2   gap-4  ">
            {seriesList.map((node) => (
              <SeriesCard key={node.path} node={node} />
            ))}
          </div>
        </div>
      )}
      {/* {seriesList.length > 0 && (
        <div className="">
          <div className="mb-4">
            <span className=" text-xl border-b">Child Series</span>
          </div>
          <div className="flex gap-4 p-4  bg-gray-900 rounded-lg ">
            {seriesList.map((node) => (
              <Link key={node.path} href={`/category/${node.path}`}>
                <div className="relative h-24 w-48">
                  <Image src={node.firstImgUrl} fill alt={""} />
                </div>
                <div>{node.name}</div>
              </Link>
            ))}
          </div>
        </div>
      )} */}
    </section>
  );
};

export default SeriesList;

const SeriesCard = ({ node }: { node: AsyncFunctionValueType<ReturnType<typeof getSeriesList>>[number] }) => {
  return (
    <article className="relative h-40    overflow-hidden  ">
      <Link key={node.path} href={`/category/${node.path}`}>
        <div className="absolute inset-0 w-full h-full  ">
          <Image src={node.firstImgUrl} fill alt={""} className=" object-cover object-center    rounded-lg p-0.5 " />
        </div>
      </Link>

      {/* <div className="absolute   w-3/4w   inset-0 bg-zinc-900     shadow-xl  bg-gradient-to-r    from-transparent to-black" /> */}
    </article>
  );
  return (
    <article className="  relative">
      <h1>{node.name}</h1>
      <div className="flex">
        <div className="relative h-20 w-20 rounded-full overflow-hidden ">
          <Image src={node.firstImgUrl} fill alt={""} className=" object-cover object-center" />
        </div>
        {/* <div>
          {node.childDir.map((child) => (
            <div key={child.path}>{child.name}</div>
          ))}
        </div> */}
      </div>
    </article>
  );
};
