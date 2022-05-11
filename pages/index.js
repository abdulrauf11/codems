import About from '../components/about';
import Artist from '../components/artist';
import Footer from '../components/footer';
import Hero from '../components/hero';
import Nav from '../components/nav';
import ThirdEditionDrop from '../components/thirdEditionDrop';

export default function Home() {
  return (
    <main className='mx-auto px-4 sm:w-[83%] sm:px-0'>
      <Nav />

      <div className='my-10'>
        <Hero />
      </div>

      <div className='my-32'>
        <About />
      </div>

      <section
        className='
        my-64 space-y-12
        md:space-y-20
        xl:space-y-32'
      >
        <h2 className='ml-auto section-heading'>
          We can write some cool shit.
        </h2>
        <ThirdEditionDrop />
      </section>

      <div className='my-32'>
        <Artist />
      </div>

      <div className='mt-96 pb-32'>
        <Footer />
      </div>
    </main>
  );
}
