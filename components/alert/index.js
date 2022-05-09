import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import AlertError from './error';
import AlertNetwork from './network';
import AlertSuccess from './success';

function Wrapper({ children }) {
  return (
    <div className='container mx-auto fixed left-0 right-0 bottom-20 z-10'>
      {children}
    </div>
  );
}

export default function Alert({ children, type, activeChainId }) {
  // const isSSR = typeof window === 'undefined';
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) {
    return null;
  }

  return createPortal(
    <Wrapper>
      {
        {
          network: <AlertNetwork activeChainId={activeChainId} />,
          success: <AlertSuccess>{children}</AlertSuccess>,
          error: <AlertError>{children}</AlertError>,
        }[type]
      }
    </Wrapper>,
    document.body
  );
}
