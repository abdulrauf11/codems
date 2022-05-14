import {
  useCoinbaseWallet,
  useMetamask,
  useWalletConnect,
} from '@thirdweb-dev/react';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import useOutsideClick from '../../utils/useOutsideClick';
import { motion, AnimatePresence } from 'framer-motion';

function Select({ setOpen }) {
  const dropdownRef = useRef(null);
  const click = useOutsideClick(dropdownRef);

  const connectWithMetamask = useMetamask();
  const connectWithWalletConnect = useWalletConnect();
  const connectWithCoinbaseWallet = useCoinbaseWallet();

  const supportedWallets = [
    {
      name: 'MetaMask',
      icon: '/icons/metamask.svg',
      onClick: connectWithMetamask,
    },
    {
      name: 'WalletConnect',
      icon: '/icons/walletConnect.svg',
      onClick: connectWithWalletConnect,
    },
    {
      name: 'Coinbase Wallet',
      icon: '/icons/coinbase.svg',
      onClick: connectWithCoinbaseWallet,
    },
  ];

  useEffect(() => {
    click && setOpen(false);
  }, [click, setOpen]);

  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0, transformOrigin: '50% 0' }}
      exit={{ opacity: 0, scale: 0 }}
      className='bg-white text-black text-sm absolute right-0 top-[100%] z-10 w-full border-2 border-black rounded-xl mt-2'
      ref={dropdownRef}
    >
      {supportedWallets.map((wallet, index) => (
        <button
          key={wallet.name}
          className={`w-full py-6 flex items-center justify-center space-x-2 ${
            index === 1 && 'border-y-2 border-black'
          }`}
          onClick={wallet.onClick}
        >
          <Image src={wallet.icon} alt={wallet.name} width={20} height={20} />
          <span>{wallet.name}</span>
        </button>
      ))}
    </motion.div>
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

      <AnimatePresence>{open && <Select setOpen={setOpen} />}</AnimatePresence>
    </div>
  );
}
