import SubNav from "@/components/Navigation/SubNav";
import { getRepoStructure } from "@/services/getRepoSturucture";
import { readRepoFile } from "@/services/readRepository";

const Layout = async ({ params, children }: any) => {
  const flatRepoStructure = await getRepoStructure();
  const subDir = await readRepoFile(params.slug.join("/"));

  return (
    <>
      <SubNav subNav={subDir} />
      {children}
    </>
  );
};

export default Layout;
