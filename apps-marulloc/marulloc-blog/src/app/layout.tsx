import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { classNames } from '@/components/Marulloc-UI/utils/classNames';
import Link from 'next/link';
import Background from '@/components/Background';
import FallbackBtn from '../components/Fallbackbtn';
import Avatar from '@/components/Avatar';
import Navigation from '@/components/Navigation';
import Paper from '@/components/Marulloc-UI/common/Paper';
import Container from '@/components/Marulloc-UI/common/Container';
import { COLOR_THEME } from '@/components/Marulloc-UI/config';
import Typography from '@/components/Marulloc-UI/common/Typography';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kr" className=" h-full  scroll-smooth ">
      <body
        className={classNames('relative min-h-full  flex flex-col    bg-black', COLOR_THEME.text.base, inter.className)}
      >
        <Background />

        <Container
          defaultProps={{
            className: classNames('isolate sticky  w-full z-30', 'pb-4 pt-4 -top-4'),
          }}
        >
          <Paper as={'header'} defaultProps={{ className: classNames('flex items-center h-16 z-50 px-8') }}>
            <div className="flex-1">
              <Link href="/" className=" text-2xl font-semibold">
                <Typography scale="h5" color="base" hover="base">
                  marullog
                </Typography>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Navigation />
              <Avatar />
            </div>
          </Paper>
        </Container>

        <>{children}</>
      </body>
    </html>
  );
}
