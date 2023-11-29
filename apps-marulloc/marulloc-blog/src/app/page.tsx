// import { Card } from "ui";

import Card from '@/components/Marulloc-UI/components/Card';
import { classNames } from '@/components/Marulloc-UI/utils/classNames';

export default function Home() {
  return (
    <>
      <Card.Paper as="section">
        <Card.Container
          as="div"
          defaultProps={
            {
              // className: classNames('bg-red-50'),
            }
          }
        >
          <div>About</div>
          <div>Series (navigation)</div>
        </Card.Container>
      </Card.Paper>
    </>
  );
}
