import '../styles/globals.css';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import AlertNetwork from '../components/alert/network';

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Rinkeby;

export default function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Component {...pageProps} />

      <AlertNetwork activeChainId={activeChainId} />
    </ThirdwebProvider>
  );
}
