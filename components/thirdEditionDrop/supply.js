function Loader() {
  return (
    <div className='animate-pulse bg-slate rounded-xl text-black/0'>
      0/10000
    </div>
  );
}

export default function Supply({ claimed, total }) {
  return (
    <div className='py-2 px-4'>
      <span className='text-xs text-green font-heading uppercase'>Supply</span>
      <div className='mt-3 mb-6 text-xl'>
        {claimed && total ? (
          <>
            <span>{parseInt(claimed)}</span>
            <span>/</span>
            <span>{parseInt(total)}</span>
          </>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}
