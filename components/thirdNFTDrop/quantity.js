export default function Quantity({ count, max, set, disabled }) {
  const min = 1;

  const increaseQuantity = () => {
    if (count < max) {
      set(count + 1);
    }
  };

  const decreaseQuantity = () => {
    if (count > min) {
      set(count - 1);
    }
  };

  return (
    <div className='border-b p-4'>
      <span>Quantity</span>
      <div className='space-x-6 flex items-center justify-center my-6'>
        <button
          className='px-3 pt-1 text-5xl font-heading disabled:opacity-50'
          onClick={decreaseQuantity}
          disabled={disabled}
        >
          -
        </button>
        <span className='text-8xl pl-1'>0{count}</span>
        <button
          className='px-3 pt-1 text-5xl font-heading disabled:opacity-50'
          onClick={increaseQuantity}
          disabled={disabled}
        >
          +
        </button>
      </div>
    </div>
  );
}
