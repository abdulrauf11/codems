function Loader() {
  return <div className='animate-pulse h-9 bg-slate-700 rounded'></div>;
}

export default function Price({ price, quantity, currency }) {
  const totalPrice = (price * quantity) / 1000000000000000000;

  return (
    <div className='border-r p-4'>
      <span>Price</span>
      <div className='text-3xl mt-4'>
        {price && currency ? `${totalPrice} ${currency}` : <Loader />}
      </div>
    </div>
  );
}
