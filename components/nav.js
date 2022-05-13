import Wallet from './wallet';

export default function Nav({ activeChainName }) {
  return (
    <div className='mx-auto px-4 sm:px-0 sm:w-[90%] lg:w-[83%]'>
      <nav className='relative flex items-center justify-between py-10 '>
        <span className='text-md sm:text-xl uppercase font-heading text-green'>
          Codems
        </span>
        <div className='flex items-center space-x-8'>
          <span className='text-green text-xs hidden sm:block'>
            {activeChainName}
          </span>
          <Wallet />
        </div>
      </nav>
    </div>
  );
}
