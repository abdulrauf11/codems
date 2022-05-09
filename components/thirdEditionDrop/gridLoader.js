export default function GridLoader() {
  const temp = [1, 2, 3];
  return (
    <>
      {temp.map((item) => (
        <div className='animate-pulse space-y-4' key={item}>
          <div className='image h-[500px] bg-slate-700 rounded'></div>
          <div className='name h-9 bg-slate-700 rounded'></div>
          <div className='grid grid-cols-2 gap-2'>
            <div className='price h-9 bg-slate-700 rounded'></div>
            <div className='supply h-9 bg-slate-700 rounded'></div>
          </div>
          <div className='button h-9 bg-slate-700 rounded'></div>
        </div>
      ))}
    </>
  );
}
