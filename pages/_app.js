import '../styles/globals.css';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import Nav from '../components/nav';
import { ACTIVE_CHAIN_ID } from '../config';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={ACTIVE_CHAIN_ID}>
      <Nav />
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}
