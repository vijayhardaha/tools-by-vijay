import { Jost } from 'next/font/google';

const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={jost.className}>
      <Component {...pageProps} />
    </div>
  );
}
