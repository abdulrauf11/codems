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
      <p className='ml-auto mt-10 sm:mt-0 section-text'>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et
      </p>
    </section>
  );
}
