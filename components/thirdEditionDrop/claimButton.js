import { useAddress, useNetworkMismatch } from '@thirdweb-dev/react';
import Connect from '../wallet/connect';

function Loader() {
  return (
    <svg
      className='animate-spin h-5 w-5 text-black'
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

export default function ClaimButton({ claim, busy, otherBusy }) {
  const isMismatched = useNetworkMismatch();
  const address = useAddress();

  return (
    <div className='mt-6'>
      {address ? (
        <button
          className='w-full rounded-xl bg-green text-black font-heading uppercase flex items-center justify-center space-x-2 disabled:opacity-50
          text-sm pb-2 pt-3
          lg:text-base lg:pb-4 lg:pt-5
          '
          disabled={isMismatched || busy || otherBusy}
          onClick={claim}
        >
          {busy && <Loader />}
          <span>Mint now</span>
        </button>
      ) : (
        <Connect />
      )}
    </div>
  );
}
