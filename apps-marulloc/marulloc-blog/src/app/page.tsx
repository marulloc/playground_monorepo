// import { Card } from "ui";

import ConsoleCompo from '@/components/ConsoleCompo';
import Container from '@/components/Marulloc-UI/common/Container';
import SPACE_THEME from '@/components/Marulloc-UI/space-theme';
import { classNames } from '@/components/Marulloc-UI/utils/classNames';

export default function Home() {
  return (
    <div className=" h-screen bg-purple-500  ">
      <Container
        className=" bg-red-400 "
        spacing={[
          { type: 'my', level: '4' },
          { type: 'mx', level: '4' },
          { type: 'py', level: '8' },
          { type: 'px', level: '8' },
        ]}
      >
        <div className=" bg-blue-400 h-8">asd</div>
      </Container>
      {/* <div className="h-48 w-80  fixed my-auto mx-auto left-0 right-0 top-0 bottom-0 bg-red-500  ">asd</div> */}
    </div>
  );
}
