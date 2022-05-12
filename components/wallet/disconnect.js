import { useDisconnect } from '@thirdweb-dev/react';
import PowerSVG from '../svg/powerSVG';

export default function Disconnect() {
  const disconnectWallet = useDisconnect();

  return (
    <button onClick={disconnectWallet}>
      <PowerSVG />
    </button>
  );
}
