import CrossSVG from '../svg/crossSVG';
import ErrorSVG from '../svg/errorSVG';

export default function AlertNetwork({ children, handleClick }) {
  return (
    <div className='bg-yellow text-black rounded-xl flex items-start p-2'>
      <div className='flex space-x-4 p-4 sm:p-6'>
        <div>
          <ErrorSVG />
        </div>
        <div>
          <h6 className='uppercase'>Network Error</h6>
          <div className='text-sm mt-1 max-w-sm'>{children}</div>
        </div>
      </div>
      <button onClick={handleClick}>
        <CrossSVG />
      </button>
    </div>
  );
}
