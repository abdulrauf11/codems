import { useNetwork, useNetworkMismatch } from '@thirdweb-dev/react';
import { ACTIVE_CHAIN_ID, ACTIVE_CHAIN_NAME } from '../../config';
import Alert from '../alert';

export default function NetworkChecker() {
  const isMismatched = useNetworkMismatch();
  const [{}, switchNetwork] = useNetwork();

  async function handleSwitch() {
    if (!switchNetwork) return;
    await switchNetwork(ACTIVE_CHAIN_ID);
  }

  if (!(ACTIVE_CHAIN_ID && isMismatched)) return null;

  return (
    <Alert type='network'>
      <p>
        You are currently connected to the wrong network. Please{' '}
        <button className='underline font-bold' onClick={handleSwitch}>
          switch to the {ACTIVE_CHAIN_NAME} network
        </button>{' '}
        to continue.
      </p>
    </Alert>
  );
}
