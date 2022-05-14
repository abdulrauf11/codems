import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import AlertError from './error';
import AlertNetwork from './network';
import AlertSuccess from './success';

import { motion, AnimatePresence } from 'framer-motion';

export default function Alert({ children, type, isActive = true }) {
  const [open, setOpen] = useState(isActive);

  useEffect(() => {
    setOpen(isActive);
  }, [isActive]);

  // Check if document exists
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);
  if (isSSR) {
    return null;
  }

  function handleClick() {
    setOpen(false);
  }

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0 }}
          exit={{ opacity: 0, scale: 0 }}
          className='px-4 fixed left-0 right-0 bottom-20 z-20 flex justify-center'
        >
          {
            {
              success: (
                <AlertSuccess handleClick={handleClick}>
                  {children}
                </AlertSuccess>
              ),
              error: (
                <AlertError handleClick={handleClick}>{children}</AlertError>
              ),
              network: (
                <AlertNetwork handleClick={handleClick}>
                  {children}
                </AlertNetwork>
              ),
            }[type]
          }
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
