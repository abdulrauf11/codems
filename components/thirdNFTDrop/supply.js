function Loader() {
  return <div className='animate-pulse h-9 bg-slate-700 rounded'></div>;
}

export default function Supply({ claimed, total }) {
  return (
    <div className='p-4'>
      <span>Supply</span>
      <div className='space-x-2 text-3xl mt-4'>
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
