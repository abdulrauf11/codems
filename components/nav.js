import Wallet from './wallet';

export default function Nav() {
  return (
    <nav className='relative container mx-auto flex items-center justify-between py-10'>
      <span className='text-xl uppercase'>Logo</span>
      <Wallet />
    </nav>
  );
}
