import Wallet from './wallet';

export default function Nav() {
  return (
    <nav className='relative flex items-center justify-between py-10 '>
      <span className='text-md sm:text-xl uppercase font-heading text-green'>
        Codems
      </span>
      <Wallet />
    </nav>
  );
}
