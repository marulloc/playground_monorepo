// import { Card } from "ui";

import Container from '@/components/Marulloc-UI/common/Container';
import Paper from '@/components/Marulloc-UI/common/Paper';
import Typography from '@/components/Marulloc-UI/common/Typography';
import Card from '@/components/Marulloc-UI/components/Card';
import { SCALE_SET } from '@/components/Marulloc-UI/theme-config';
import { classNames } from '@/components/Marulloc-UI/utils/classNames';

export default function Home() {
  return (
    <>
      <Container as={'main'} className=" w-full flex-1  flex  flex-col ">
        <Paper as="section" bgColor="base" bgGlassy className="isolate flex-1">
          <div className="flex flex-col">
            <Typography scale="h1" color="accent" className=" text-blue-500">
              h1 들어갑니다
              <span>asdasd</span>
            </Typography>
            <Typography scale="h2" color="base">
              h2 들어갑니다
            </Typography>
            <Typography scale="h3" color="muted">
              h3 들어갑니다
            </Typography>
            <Typography scale="h4">h4 들어갑니다</Typography>
            <Typography scale="h5">h5 들어갑니다</Typography>
            <Typography scale="h6">h6 들어갑니다</Typography>
            <Typography scale="body1">
              body1 들어갑니다
              <Typography scale="body2">body2 들어갑니다</Typography>
              <Typography scale="caption" color="accent">
                About
              </Typography>
              asdasdad
            </Typography>
          </div>

          <h1 className={SCALE_SET.text.h1}>Heading 1</h1>
          <h1 className={SCALE_SET.text.h2}>Heading 1</h1>
          <h1 className={SCALE_SET.text.h3}>Heading 1</h1>
          <h1 className={SCALE_SET.text.h4}>Heading 1</h1>
          <h1 className={SCALE_SET.text.h5}>Heading 1</h1>
          <h1 className={SCALE_SET.text.h6}>Heading 1</h1>
          <h1 className={SCALE_SET.text.body1}>Heading 1</h1>
          <h1 className={SCALE_SET.text.body2}>Heading 1</h1>
          <h1 className={SCALE_SET.text.caption}>Heading 1</h1>
        </Paper>
      </Container>
    </>
  );
}
