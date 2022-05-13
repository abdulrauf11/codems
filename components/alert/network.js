import { useNetwork, useNetworkMismatch } from '@thirdweb-dev/react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import CrossSVG from '../svg/crossSVG';
import ErrorSVG from '../svg/errorSVG';

export default function AlertNetwork({ activeChainId, activeChainName }) {
  const [open, setOpen] = useState(true);

  const isMismatched = useNetworkMismatch();
  const [{}, switchNetwork] = useNetwork();

  async function handleSwitch() {
    if (!switchNetwork) return;
    await switchNetwork(activeChainId);
  }

  function handleClick() {
    setOpen(false);
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
    <div className='px-4 fixed left-0 right-0 bottom-20 z-20 flex justify-center'>
      <AlertInner handleClick={handleClick}>
        <p>
          You are currently connected to the wrong network. Please{' '}
          <button className='underline font-bold' onClick={handleSwitch}>
            switch to the {activeChainName} network
          </button>{' '}
          to continue.
        </p>
      </AlertInner>
    </div>,
    document.body
  );
}

function AlertInner({ children, handleClick }) {
  return (
    <div className='bg-red text-white rounded-xl flex items-start p-2'>
      <div className='flex space-x-4 p-4 sm:p-6'>
        <div>
          <ErrorSVG />
        </div>
        <div>
          <h6 className='uppercase'>Network Error</h6>
          <div className='text-sm mt-1 max-w-md'>{children}</div>
        </div>
      </div>
      <button onClick={handleClick}>
        <CrossSVG />
      </button>
    </div>
  );
}
