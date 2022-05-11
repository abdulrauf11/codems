import About from '../components/about';
import Artist from '../components/artist';
import Footer from '../components/footer';
import Hero from '../components/hero';
import Nav from '../components/nav';
import ThirdEditionDrop from '../components/thirdEditionDrop';

export default function Home() {
  return (
    <main className='mx-auto px-4 sm:px-0 sm:w-[90%] lg:w-[83%]'>
      <Nav />

      <div className='my-10'>
        <Hero />
      </div>

      <div className='my-32'>
        <About />
      </div>

      <section
        className='
        my-40 space-y-12
        md:space-y-20 md:my-64
        xl:space-y-32 xl:my-72'
      >
        <h2 className='ml-auto section-heading'>
          We can write some cool shit.
        </h2>
        <ThirdEditionDrop />
      </section>

      <div className='my-48 md:my-64 xl:my-80'>
        <Artist />
      </div>

      <div className='pb-32 mt-64 md:mt-96'>
        <Footer />
      </div>
    </main>
  );
}
