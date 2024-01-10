import './globals.css';
import type { Metadata } from 'next';
import { classNames } from '@/styles/utils';
import { theme } from '@/styles/theme';
import { getMenu } from '@/services/common/service';
import Header from '@/components/layouts/Header';
import Search from '@/components/Search';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headerMenu = await getMenu('custom-storefront-menu');
  // const footerMenu = await getMenu('custom-storefront-menu');

  return (
    <html lang="en" className="h-full">
      <body className={classNames('font-mono', '  min-h-full', theme.bodyBackground)}>
        <Header />

        {/* <div className="sticky top-0 h-80 bg-red-400">
          <Search />
        </div> */}
        <main className={classNames('min-h-full z-0 ')}>
          <Search />
          {children}
        </main>

        <footer className={classNames('h-40', theme.maxSize)}>
          <div className="border-t border-gray-600">
            <p>조병건 footer area</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
