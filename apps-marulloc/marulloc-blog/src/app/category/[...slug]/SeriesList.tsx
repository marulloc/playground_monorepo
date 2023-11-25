import ConsoleCompo from "@/components/ConsoleCompo";
import { getSeriesList } from "@/services/getSeriesList";
import { AsyncFunctionValueType } from "@/utils/conditionalType";
import Image from "next/image";
import Link from "next/link";

const SeriesList = async ({ path }: { path: string }) => {
  const seriesList = await getSeriesList(path);

  return (
    <section className="">
      {seriesList.length > 0 && (
        <div className="">
          <div className="grid grid-cols-2   gap-4  ">
            {seriesList.map((node) => (
              <SeriesCard key={node.path} node={node} />
            ))}
          </div>
        </div>
      )}
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
    </article>
  );
};
