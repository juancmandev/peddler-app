import { Roboto } from 'next/font/google';
import '@/styles/globals.css';

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
