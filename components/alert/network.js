import { useNetwork, useNetworkMismatch } from '@thirdweb-dev/react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function AlertNetwork({ activeChainId }) {
  const [open, setOpen] = useState(true);

  const isMismatched = useNetworkMismatch();
  const [{}, switchNetwork] = useNetwork();

  async function handleSwitch() {
    if (!switchNetwork) return;
    await switchNetwork(activeChainId);
  }

  // Check if document exists
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);
  if (isSSR) {
    return null;
  }

  if (!(activeChainId && isMismatched && open)) return null;

  return createPortal(
    <div className='container mx-auto fixed left-0 right-0 bottom-20 z-10'>
      <button className='bg-red' onClick={() => setOpen(false)}>
        Close
      </button>
      <div className='border border-red p-2 bg-black'>
        <p>
          You are currently connected to the wrong network. Please switch your
          network to continue.{' '}
          <button className='border' onClick={handleSwitch}>
            SWITCH
          </button>
        </p>
      </div>
    </div>,
    document.body
  );
}
