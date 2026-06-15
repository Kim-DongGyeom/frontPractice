import type { Metadata } from 'next';
import './globals.css';
import Nav from '../components/header';

export const metadata: Metadata = {
  title: 'うさぎモール',
  description: 'フロントエンドの学習',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`h-full antialiased`}>
      <body>
        <div className=''>
          <Nav />
          <div className='mt-20 h-svh'>{children}</div>
        </div>
      </body>
    </html>
  );
}
