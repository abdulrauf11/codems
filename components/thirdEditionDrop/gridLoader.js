export default function GridLoader() {
  const temp = [1, 2];
  return (
    <>
      {temp.map((item) => (
        <div className='animate-pulse space-y-4' key={item}>
          <div className='image h-[500px] bg-slate rounded-xl'></div>
          <div className='name h-16 bg-slate rounded-xl'></div>
          <div className='grid grid-cols-2 gap-2'>
            <div className='price h-20 bg-slate rounded-xl'></div>
            <div className='supply h-20 bg-slate rounded-xl'></div>
          </div>
          <div className='button h-16 bg-slate rounded-xl'></div>
        </div>
      ))}
    </>
  );
}
