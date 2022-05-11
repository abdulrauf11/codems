import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import AlertError from './error';
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

  return createPortal(
    <div className='container mx-auto fixed left-0 right-0 bottom-20 z-10'>
      <button className='bg-red' onClick={() => setOpen(false)}>
        Close
      </button>
      {
        {
          success: <AlertSuccess>{children}</AlertSuccess>,
          error: <AlertError>{children}</AlertError>,
        }[type]
      }
    </div>,
    document.body
  );
}
