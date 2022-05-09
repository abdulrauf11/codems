function Loader() {
  return <div className='animate-pulse h-6 bg-slate-700 rounded'></div>;
}

export default function Supply({ claimed, total }) {
  return (
    <div className='p-2'>
      <span className='text-sm'>Supply</span>
      <div className='mt-2 space-x-2'>
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
