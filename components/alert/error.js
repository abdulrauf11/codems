import CrossSVG from '../svg/crossSVG';
import ErrorSVG from '../svg/errorSVG';

export default function AlertError({ children, handleClick }) {
  return (
    <div className='bg-red text-white rounded-xl flex items-start p-2'>
      <div className='flex space-x-4 p-4 sm:p-6'>
        <div>
          <ErrorSVG />
        </div>
        <div>
          <h6 className='uppercase'>Minting Error</h6>
          <div className='text-sm mt-1 max-w-sm'>{children}</div>
        </div>
      </div>
      <button onClick={handleClick}>
        <CrossSVG />
      </button>
    </div>
  );
}

export function RenderError({ code }) {
  if (code === 4001) {
    return <p>Transaction was rejected.</p>;
  } else if (code === -32000) {
    return <p>Insufficient funds.</p>;
  }
  return <p>Something went wrong. Please try again.</p>;
}
