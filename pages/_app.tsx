import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../styles/globals.css';

// O Layout envolve todas as páginas: header e footer ficam em um único lugar.
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
