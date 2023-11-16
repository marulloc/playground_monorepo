import SubNav from "@/components/SubNav";
import { readRepoFile } from "@/services/readRepository";

const Page = async ({ params, children }: any) => {
  const subDir = await readRepoFile(params.slug.join("/"));
  return (
    <>
      <SubNav subNav={subDir} />
    </>
  );
};

export default Page;
