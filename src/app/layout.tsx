import { Jost } from 'next/font/google';
import '../styles/globals.css';
import Header from '../components/header/Header';
import Footer from '../components/Footer';

const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Tools by Vijay',
  description: 'A collection of useful tools.',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div>
          <Header />
          <main className="py-8">
            <div className="mx-auto max-w-5xl px-4">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
