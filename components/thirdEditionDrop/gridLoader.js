export default function GridLoader() {
  const temp = [1, 2];
  return (
    <>
      {temp.map((item) => (
        <div className='animate-pulse space-y-4' key={item}>
          <div className='image h-[60vh] bg-slate rounded-xl'></div>
          <div className='button h-10 lg:h-16 bg-slate rounded-xl'></div>
        </div>
      ))}
    </>
  );
}
