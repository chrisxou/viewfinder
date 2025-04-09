// pages/index.tsx
import Head from 'next/head';
// import Header from '@/components/Header'; 
import Header from '../components/Header'; 
import Image from 'next/image';

const Home = () => {
  return (
    <>
      <Head>
        <title>Lens Life - Photography Portfolio</title>
        <meta name="description" content="Photography portfolio showcasing my best work." />
      </Head>

      <Header /> 

      <main className="p-4">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Photography Portfolio</h1>
          <p className="text-xl mb-8">
            A collection of my best works, capturing the beauty of life through the lens.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <Image src="/image1.jpg" alt="Portfolio Image 1" width={500} height={300} className="rounded-lg" />
          </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <Image src="/image2.jpg" alt="Portfolio Image 2" width={500} height={300} className="rounded-lg" />
          </div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <Image src="/image3.jpg" alt="Portfolio Image 3" width={500} height={300} className="rounded-lg" />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
