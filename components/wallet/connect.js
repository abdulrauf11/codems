import {
  useCoinbaseWallet,
  useMetamask,
  useWalletConnect,
} from '@thirdweb-dev/react';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import useOutsideClick from '../../utils/useOutsideClick';

function Select({ setOpen }) {
  const dropdownRef = useRef(null);
  const click = useOutsideClick(dropdownRef);

  const connectWithMetamask = useMetamask();
  const connectWithWalletConnect = useWalletConnect();
  const connectWithCoinbaseWallet = useCoinbaseWallet();

  useEffect(() => {
    click && setOpen(false);
  }, [click, setOpen]);

  return (
    <div
      className='bg-white text-black text-sm absolute right-0 top-[100%] z-10 w-full border-2 border-black rounded-xl mt-2'
      ref={dropdownRef}
    >
      <button
        className='w-full py-6 flex items-center justify-center space-x-2'
        onClick={connectWithMetamask}
      >
        <Image
          src='/icons/metamask.svg'
          alt='metamask'
          width={20}
          height={20}
        />
        <span>MetaMask</span>
      </button>
      <button
        className='w-full border-y-2 border-black py-6 flex items-center justify-center space-x-2'
        onClick={connectWithWalletConnect}
      >
        <Image
          src='/icons/walletConnect.svg'
          alt='walletConnect'
          width={20}
          height={20}
        />
        <span>WalletConnect</span>
      </button>
      <button
        className='w-full py-6 flex items-center justify-center space-x-2'
        onClick={connectWithCoinbaseWallet}
      >
        <Image
          src='/icons/coinbase.svg'
          alt='walletConnect'
          width={20}
          height={20}
        />
        <span>Coinbase Wallet</span>
      </button>
    </div>
  );
}

export default function Connect() {
  const [open, setOpen] = useState();

  return (
    <div className='relative'>
      <button
        className='w-full rounded-xl bg-green text-black font-heading uppercase
        text-sm pb-2 pt-3
        lg:text-base lg:pb-4 lg:pt-5
        '
        disabled={open}
        onClick={() => setOpen(true)}
      >
        Connect Wallet
      </button>

      {open && <Select setOpen={setOpen} />}
    </div>
  );
}
