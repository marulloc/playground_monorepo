// import { Card } from "ui";

import Container from '@/components/Marulloc-UI/common/Container';
import Paper from '@/components/Marulloc-UI/common/Paper';
import Typography from '@/components/Marulloc-UI/common/Typography';
import Card from '@/components/Marulloc-UI/components/Card';
import { classNames } from '@/components/Marulloc-UI/utils/classNames';

export default function Home() {
  return (
    <>
      <Container as={'main'} defaultProps={{ className: 'w-full flex-1  flex  flex-col pb-8 ' }}>
        <Paper
          as="section"
          defaultProps={{
            className: classNames('isolate  flex-1'),
          }}
        >
          <div className="flex flex-col">
            <Typography variant="h1" color="accent">
              h1 들어갑니다
            </Typography>
            <Typography variant="h2" color="base">
              h2 들어갑니다
            </Typography>
            <Typography variant="h3" color="muted">
              h3 들어갑니다
            </Typography>
            <Typography variant="h4">h4 들어갑니다</Typography>
            <Typography variant="h5">h5 들어갑니다</Typography>
            <Typography variant="h6">h6 들어갑니다</Typography>
            <Typography variant="p">
              p 들어갑니다
              <Typography variant="a">a 들어갑니다</Typography>
              <Typography variant="span">span 들어갑니다</Typography>
              <Typography variant="code" color="accent">
                About
              </Typography>
              asdasdad
            </Typography>
          </div>

          <div>Series (navigation)</div>
        </Paper>
      </Container>
    </>
  );
}
