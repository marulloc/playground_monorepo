import Link from 'next/link';

type TProps = {
  pathSegments: string[];
};

const Breadcrumbs = ({ pathSegments }: TProps) => {
  const parentDirSegment = [...pathSegments];
  const currentPath = parentDirSegment.pop() as string;

  return (
    <div className="flex">
      <Link href={'/'}>Home</Link>
      <>
        {parentDirSegment.map((path, index) => (
          <Link href={`/category/${pathSegments.slice(0, index + 1).join('/')}`} key={path} className="space-x-2 ml-2">
            <span> {'>'}</span>
            <span>{decodeURIComponent(path)}</span>
          </Link>
        ))}

        <div className="cursor-pointer space-x-2 ml-2">
          <span> {'>'}</span>
          <span className="text-white ">{decodeURIComponent(currentPath)}</span>
        </div>
      </>
    </div>
  );
};

export default Breadcrumbs;

const V2 = () => {
  return (
    <div className="hidden sm:flex sm:mb-8   sm:justify-center my-8  ">
      <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
        Announcing our next round of funding.{' '}
        <a href="#" className="font-semibold text-white">
          <span className="absolute inset-0" aria-hidden="true" />
          Read more <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  );
};
