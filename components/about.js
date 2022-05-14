export default function About() {
  return (
    <section className='flex flex-col mx-auto sm:flex-row lg:w-11/12'>
      <div className='flex'>
        <span
          className='
          font-heading text-green
          text-[17vw] leading-[17vw]'
        >
          #
        </span>
        <span
          className='
          font-heading text-stroke translate-y-[22%]
          text-[17vw] leading-[17vw]'
        >
          #
        </span>
      </div>
      <p className='max-w-xs ml-auto mt-10 sm:mt-0 section-text'>
        Codems is a collection of poems expressed through code. Each piece is
        released as an ERC-1155 token and lives on the Polygon blockchain.
      </p>
    </section>
  );
}
