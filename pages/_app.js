import '../styles/globals.css';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import AlertNetwork from '../components/alert/network';
import Nav from '../components/nav';

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Rinkeby;
const activeChainName = ChainId[activeChainId];

export default function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Nav activeChainName={activeChainName} />

      <Component {...pageProps} />

      <AlertNetwork
        activeChainId={activeChainId}
        activeChainName={activeChainName}
      />
    </ThirdwebProvider>
  );
}
