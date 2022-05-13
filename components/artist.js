import Image from 'next/image';

export default function Artist() {
  return (
    <section className=''>
      <h2 className='section-heading'>
        Meet the Artist,
        <br />
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://twitter.com/lilcoderman'
          className='text-green'
        >
          @lilcoderman
        </a>
        .
      </h2>

      <div
        className='mt-20 flex flex-col-reverse items-center mx-auto
            md:flex-row md:justify-end md:gap-32 md:items-start
            lg:w-11/12 
            xl:gap-40'
      >
        <p className='section-text mt-20 xl:mt-32'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et
        </p>
        <div className='relative'>
          <div className='relative w-[60vw] h-[67vw] sm:w-[33vw] sm:h-[37vw]'>
            <Image
              src='/avatar.png'
              alt='avatar'
              layout='fill'
              objectFit='cover'
            />
          </div>

          <span className='font-heading text-green text-[18vw] absolute bottom-0 left-0 translate-y-[70%] translate-x-[-50%]'>
            *
          </span>
        </div>
      </div>
    </section>
  );
}
