import { useNetwork, useNetworkMismatch } from '@thirdweb-dev/react';

export default function AlertNetwork({ activeChainId }) {
  const isMismatched = useNetworkMismatch();
  const [{}, switchNetwork] = useNetwork();

  async function handleSwitch() {
    if (!switchNetwork) return;
    await switchNetwork(activeChainId);
  }

  if (activeChainId && !isMismatched) return null;

  return (
    <div className='border border-red-600 p-2 bg-black'>
      <p>
        You are currently connected to the wrong network. Please switch your
        network to continue.{' '}
        <button className='border' onClick={handleSwitch}>
          SWITCH
        </button>
      </p>
    </div>
  );
}
