import Link from 'next/link';
import { useState } from 'react';
import Logo from '../components/assets/logo/Logo';
import { Layout } from '../components/layout/Layout';
import { EventSlider } from '../components/sliders/EventSlider/EventSlider';
import { eventsMock } from '../lib/data/events.mock';
import { useCategories } from '../lib/services/categories.services';
import Interests from './Interests';
import { NextPageWithLayout } from './page';


const Home: NextPageWithLayout = () => {
  const { data, error, isLoading } = useCategories();

  const [bool, setbool] = useState(false); //controla cuando estas logeado o no

  console.log({ data, error, isLoading });

  return (
    <div>
      {/* HERO SECTION */}
      <div className='min-h-[488px] flex justify-center items-center flex-col bg-[url("/hero-banner.png")] bg-cover bg-center app-banner -mt-4 gap-5'>
        <div>
          <Logo />
        </div>
        <div className="flex flex-col gap-4">
          <input
            className="px-6 py-4 rounded-3xl w-full sm:w-[465px]"
            type="text"
            placeholder="¿Qué quieres ver en tu ciudad?"
          />
          <div className="flex items-center justify-center gap-2">
            <Link href={'/category/marcas-y-tiendas'}>
              <button className="text-gray-400 border-2 text-xs border-gray-40 bg-white rounded-full p-4 ">
                Marcas y Tiendas
              </button>
            </Link>
            <Link href={'/category/marcas-y-tiendas'}>
              <button className="text-gray-400 border-2 text-xs border-gray-40 bg-white rounded-full p-4 ">
                Artistas y conciertos
              </button>
            </Link>
            <Link href={'/category/marcas-y-tiendas'}>
              <button className="text-gray-400 border-2 text-xs border-gray-40 bg-white rounded-full p-4 ">
                Torneos
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* CONTENIDO */}

      <div className="">
     <section className='m-auto my-10'><Interests></Interests></section> 
     <EventSlider
          title="Populares en Querétaro"
          subtitle="Lo que las personas piden más"
          events={eventsMock}
        ></EventSlider>
      </div>

      
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
