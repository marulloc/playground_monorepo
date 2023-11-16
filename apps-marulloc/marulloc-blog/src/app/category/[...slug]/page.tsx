import SubNav from "@/components/SubNav";
import { readRepoFile } from "@/services/readRepository";
import Test from "../../Test";
import { getRepoStructure } from "@/services/getRepoSturucture";
import { modifiyFlatRepo, parseRepoStructure } from "@/parsers/parseGithubRepo";
import ConsoleCompo from "@/components/ConsoleCompo";

const Page = async ({ params, children }: any) => {
  // const subDir = await readRepoFile(params.slug.join("/"));

  const flatRepo = await getRepoStructure();
  const modifiedFlatRepo = modifiyFlatRepo(flatRepo.tree);
  const repository = parseRepoStructure(modifiedFlatRepo);

  return (
    <>
      {/* <SubNav subNav={subDir} /> */}
      {/* <ConsoleCompo data={repository} />
      <ConsoleCompo data={decodeURIComponent("/category/" + params.slug.join("/"))} />
      <ConsoleCompo data={repository.routeMap[decodeURIComponent("/category/" + params.slug.join("/"))]} /> */}

      <Test tree={repository.routeMap[decodeURIComponent("/category/" + params.slug.join("/"))]?.subTree || []} />
    </>
  );
};

export default Page;
