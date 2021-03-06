export default function Footer() {
  return (
    <footer className=''>
      <h2 className='text-[11vw] leading-[13vw]'>
        Stay
        <br />
        <span className='text-green text-[23vw] leading-[17vw] align-top mr-4'>
          &gt;
        </span>
        in Touch
      </h2>

      <div
        className='
            space-y-8 mt-20 flex flex-col justify-end items-end text-xs
            md:flex-row md:space-y-0 md:space-x-20'
      >
        <span>
          <a
            className='text-green'
            target='_blank'
            rel='noopener noreferrer'
            href='https://opensea.io/collection/codems'
          >
            OpenSea
          </a>
        </span>
        <span>
          built with{' '}
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://thirdweb.com/'
            className='text-green'
          >
            thirdweb
          </a>
          .
        </span>
        <span>© copyright {new Date().getFullYear()}.</span>
      </div>
    </footer>
  );
}
