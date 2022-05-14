import { motion } from 'framer-motion';
import StarSVG from './svg/starSVG';

export default function Hero() {
  return (
    <section className='flex space-x-[6vw] items-start'>
      <h1
        className='
        mt-32
        text-[13vw] leading-[13vw]'
      >
        Code is
        <br />
        Poetry.
      </h1>
      <div className='w-[20.9vw]'>
        <StarSVG />
      </div>
    </section>
  );
}
