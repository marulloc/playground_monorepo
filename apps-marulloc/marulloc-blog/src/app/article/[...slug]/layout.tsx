import BreadCrumbs from "@/components/BreadCrumbs";
import Container from "@/components/Container";
import SiblingList from "./SiblingList";

const Layout = ({ children, params }: { children: React.ReactNode; params: any }) => {
  // const parentDirPathSegments = params.slug.slice(0, params.slug.length - 1);
  // const parentDirName = parentDirPathSegments.at(-1);
  // const parentDirPath = parentDirPathSegments.join("/");

  const currentFilePathSegments = params.slug;
  const currentFileName = decodeURIComponent(currentFilePathSegments.at(-1) as string);
  const currentFilePath = currentFilePathSegments.join("/");

  return (
    <div className="relative">
      <Container>
        <BreadCrumbs pathSegments={params.slug} />
      </Container>

      <SiblingList path={params.slug.slice(0, params.slug.length - 1).join("/")} pathSegments={params.slug} />

      <Container className="my-12   rounded-lg">
        <div className=" mb-12">
          <h1 className="text-4xl font-bold">{currentFileName}</h1>
        </div>
        {children}
      </Container>
    </div>
  );
};

export default Layout;
