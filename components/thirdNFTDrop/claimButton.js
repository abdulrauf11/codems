import { useAddress, useNetworkMismatch } from '@thirdweb-dev/react';

function Loader() {
  return (
    <svg
      className='animate-spin h-5 w-5 text-white'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
    >
      <circle
        className='opacity-25'
        cx='12'
        cy='12'
        r='10'
        stroke='currentColor'
        strokeWidth='4'
      ></circle>
      <path
        className='opacity-75'
        fill='currentColor'
        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
      ></path>
    </svg>
  );
}

export default function ClaimButton({ claim, busy }) {
  const isMismatched = useNetworkMismatch();
  const address = useAddress();

  return (
    <div className='w-full px-4 mt-9 pb-9'>
      <button
        className='w-full rounded-md p-4 bg-pink-500 flex items-center justify-center space-x-2 disabled:opacity-50'
        disabled={!address || isMismatched || busy}
        onClick={claim}
      >
        {busy && <Loader />}
        <span>Mint now</span>
      </button>
    </div>
  );
}
