function Loader() {
  return <div className='animate-pulse h-6 bg-slate-700 rounded'></div>;
}

export default function Price({ price, quantity, currency }) {
  const totalPrice = (price * quantity) / 1000000000000000000;

  return (
    <div className='border-r p-2'>
      <span className='text-sm'>Price</span>
      <div className='mt-2'>
        {price && currency ? `${totalPrice} ${currency}` : <Loader />}
      </div>
    </div>
  );
}
