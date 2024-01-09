import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import { classNames } from '@/styles/utils';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={classNames('font-mono', 'bg-zinc-950 ', 'min-h-screen')}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
