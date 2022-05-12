import CrossSVG from '../svg/crossSVG';
import TickSVG from '../svg/tickSVG';

export default function AlertSuccess({ children, handleClick }) {
  return (
    <div className='bg-green text-black rounded-xl flex items-start p-2'>
      <div className='flex space-x-4 p-4 sm:p-6'>
        <div>
          <TickSVG />
        </div>
        <div>
          <h6 className='uppercase'>Minting Successful</h6>
          <div className='text-sm mt-1 max-w-xs'>{children}</div>
        </div>
      </div>
      <button onClick={handleClick}>
        <CrossSVG />
      </button>
    </div>
  );
}

export function RenderSuccess({ hash }) {
  return (
    <p>
      Your transaction just went through 🎉{' '}
      <a
        className='underline font-bold'
        target='_blank'
        rel='noopener noreferrer'
        href={`https://rinkeby.etherscan.io/tx/${hash}`}
      >
        Check it on etherscan here.
      </a>
    </p>
  );
}
