import '@/styles/globals.css';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Peddler App',
  description: `Don't miss the ice cream man!`,
  manifest: '/manifest.json',
  themeColor: '#ffffff',
  icons: {
    icon: '/favicon.ico',
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en'>
    <body className={roboto.className}>
      <main>{children}</main>
    </body>
  </html>
);

export default RootLayout;
