import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import AlertError from './error';
import AlertNetwork from './network';
import AlertSuccess from './success';

export default function Alert({ children, type }) {
  const [open, setOpen] = useState(true);

  // Check if document exists
  // const isSSR = typeof window === 'undefined';
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);
  if (isSSR) {
    return null;
  }

  if (!open) {
    return null;
  }

  function handleClick() {
    setOpen(false);
  }

  return createPortal(
    <div className='px-4 fixed left-0 right-0 bottom-20 z-20 flex justify-center'>
      {
        {
          success: (
            <AlertSuccess handleClick={handleClick}>{children}</AlertSuccess>
          ),
          error: <AlertError handleClick={handleClick}>{children}</AlertError>,
          network: (
            <AlertNetwork handleClick={handleClick}>{children}</AlertNetwork>
          ),
        }[type]
      }
    </div>,
    document.body
  );
}
