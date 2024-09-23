import "./globals.css";
import Header from '@/components/Header';
import { Chakra_Petch } from 'next/font/google';


// Added a favicon
export const metadata = {
  title: "SEEBA Movie App",
  description: "This is a movie discovery web app",
  icons: {
    icon: '/favicon.ico',
  },
};

// Found this font on google fonts
const chakraPetch = Chakra_Petch({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // Apply font class
        className={`${chakraPetch.className} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
