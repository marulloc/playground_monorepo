import Navigation from "../Navigation";
import Link from "next/link";
import Avatar from "../Avatar";
import Container from "../Container";

const Header = ({ routes }: { routes: any[] }) => {
  return (
    <>
      <header className=" ">
        <Container className="border-b border-gray-800">
          <div className="flex items-center py-4  ">
            <div className="flex-1">
              <Link href="/" className=" text-2xl font-semibold">
                Marulloc blog
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Navigation routes={routes} />
              <Avatar />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
