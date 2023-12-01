import Link from 'next/link';
import Typography from './Marulloc-UI/common/Typography';

type TProps = {
  pathSegments: string[];
};

const Breadcrumbs = ({ pathSegments }: TProps) => {
  const parentDirSegment = [...pathSegments];
  const currentPath = parentDirSegment.pop() as string;

  // return <V2 />;
  return (
    <div>
      <div className="flex  items-center  px-3 rounded-full ring-1 ring-white/10 hover:ring-white/20 w-fit ">
        <Link href={'/'} className="group  h-full py-1">
          <Typography size="caption" color="muted" hover="base">
            Home
          </Typography>
        </Link>
        <>
          {parentDirSegment.map((path, index) => (
            <Link
              href={`/category/${pathSegments.slice(0, index + 1).join('/')}`}
              key={path}
              className=" h-full py-1  ml-2"
            >
              <Typography size="caption" color="muted">
                <Typography>{'>'}</Typography>
                <Typography hover="base">{decodeURIComponent(path)}</Typography>
              </Typography>
            </Link>
          ))}

          <div className="cursor-pointer  ml-2">
            <Typography size="caption" color="muted">
              <Typography>{'>'}</Typography>
              <Typography color="base">{decodeURIComponent(currentPath)}</Typography>
            </Typography>
          </div>
        </>
      </div>
    </div>
  );
};

export default Breadcrumbs;
