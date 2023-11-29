// import { Card } from "ui";

import Container from '@/components/Marulloc-UI/common/Container';
import Paper from '@/components/Marulloc-UI/common/Paper';
import Card from '@/components/Marulloc-UI/components/Card';
import { classNames } from '@/components/Marulloc-UI/utils/classNames';

export default function Home() {
  return (
    <Container as={'main'} defaultProps={{ className: 'w-full flex-1  flex  flex-col pb-8 ' }}>
      <Paper
        defaultProps={{
          className: classNames('isolate  flex-1'),
        }}
      >
        <div>About</div>
        <div>Series (navigation)</div>
      </Paper>
    </Container>
  );
}
