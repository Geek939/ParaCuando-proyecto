import { useRouter } from 'next/router';
import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';
import SearchAndCategory from '../../components/search/SearchAndCategory';
import { EventSlider } from '../../components/sliders/EventSlider/EventSlider';
import { eventsMock } from '../../lib/data/events.mock';

export const CategoryPage: NextPageWithLayout = () => {

  const router = useRouter();
  const { category_id } = router.query;
  const categoria = 'Marcas y tiendas';


  return (
    <div className="flex flex-col gap-10 ">
      <header className="flex  app-banner   h-[300px] bg-[url('/mock-category.png')] text-white">
        <section className=" relative top-5 left-1  m-auto flex flex-col  gap-y-4  text-white">
          <p className="mb-5 font-normal ">Home / Marcas</p>
          <h1 className="text-2xl">
            <span className="text-app-red font-black text-app-yellow  text-6xl">
              {categoria}{' '}
              {/* agregar esta variable para hacerlo dinamico category_id */}
            </span>{' '}
          </h1>

          <h3 className="font-normal ">
            Descubre las marcas y tiendas que la gente quiere cerca
          </h3>
        </section>
      </header>

      {/* categoria y busqueda / componente */}
      <SearchAndCategory></SearchAndCategory>

      {/* Slider Cards */}
      <EventSlider
        title="Populares en Querétaro"
        subtitle="Lo que las personas piden más"
        events={eventsMock}
      ></EventSlider>
    </div>
  );
};

CategoryPage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default CategoryPage;
