import Nav from '../components/nav';
import ThirdEditionDrop from '../components/thirdEditionDrop';
import ThirdNFTDrop from '../components/thirdNFTDrop';

export default function Home() {
  return (
    <main>
      <Nav />

      <section className='container mx-auto space-y-10 my-20'>
        <h1 className='text-5xl'>NFT Drop</h1>
        <ThirdNFTDrop />
      </section>

      <section className='container mx-auto space-y-10 my-20'>
        <h1 className='text-5xl'>Edition Drop</h1>
        <ThirdEditionDrop />
      </section>
    </main>
  );
}
