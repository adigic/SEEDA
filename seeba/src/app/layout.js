import localFont from "next/font/local";
import "./globals.css";
import Header from '@/components/Header'
import { Chakra_Petch } from 'next/font/google';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "SEEBA Movie App",
  description: "This is a movie discovery web app",
};

const chakraPetch = Chakra_Petch({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${chakraPetch.className}  ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
