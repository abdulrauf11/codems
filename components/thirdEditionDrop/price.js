function Loader() {
  return (
    <div className='animate-pulse bg-slate rounded-xl text-black/0'>
      0.01 ETH
    </div>
  );
}

export default function Price({ price, quantity, currency }) {
  const totalPrice = (price * quantity) / 1000000000000000000;

  return (
    <div className='border-r-2 border-green py-2 px-4'>
      <span className='text-xs text-green font-heading uppercase'>Price</span>
      <div className='mt-3 mb-6 text-xl'>
        {price && currency ? `${totalPrice} ${currency}` : <Loader />}
      </div>
    </div>
  );
}
