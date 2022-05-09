import {
  useCoinbaseWallet,
  useMetamask,
  useWalletConnect,
} from '@thirdweb-dev/react';
import { useState } from 'react';

function Select() {
  const connectWithMetamask = useMetamask();
  const connectWithWalletConnect = useWalletConnect();
  const connectWithCoinbaseWallet = useCoinbaseWallet();

  return (
    <div className='absolute right-0 top-[100%] border border-pink-500 flex flex-col -mt-8 p-4'>
      <button className='border p-2' onClick={connectWithMetamask}>
        Metamask
      </button>
      <button className='border p-2 mt-4' onClick={connectWithWalletConnect}>
        WalletConnect
      </button>
      <button className='border p-2 mt-4' onClick={connectWithCoinbaseWallet}>
        Coinbase Wallet
      </button>
    </div>
  );
}

export default function Connect() {
  const [open, setOpen] = useState();

  return (
    <>
      <button className='border rounded-md p-2' onClick={() => setOpen(!open)}>
        Connect Wallet
      </button>

      {open && <Select />}
    </>
  );
}
