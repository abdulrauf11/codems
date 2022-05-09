import { useDisconnect } from '@thirdweb-dev/react';

function PowerSVG() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 24 24'
      fill='none'
      className='stroke-2 stroke-red-600'
    >
      <path d='M18.36 6.64a9 9 0 1 1-12.73 0'></path>
      <line x1='12' y1='2' x2='12' y2='12'></line>
    </svg>
  );
}

export default function Disconnect() {
  const disconnectWallet = useDisconnect();

  return (
    <button onClick={disconnectWallet} className='flex items-center p-2'>
      <PowerSVG />
    </button>
  );
}