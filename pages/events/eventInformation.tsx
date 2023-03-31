import { useState } from 'react';
import { Vector } from '../../components/assets/svg/Vector';
import { Layout } from '../../components/layout/Layout';
import SearchAndCategory from '../../components/search/SearchAndCategory';
import { eventsMock } from '../../lib/data/events.mock';
import Interests from '../Interests';
import { NextPageWithLayout } from '../page';



  const EventInformation: NextPageWithLayout = () => {

  
  const [categoria, setcategoria] = useState('Artista / Pop - Rock');
  const [obj, setobj] = useState(eventsMock[0]);

  

  return (
    <div className="h-screen ">
      <div className="flex flex-col absolute top-20">
        {' '}
        <SearchAndCategory></SearchAndCategory>

        
        <section className=" m-auto mt-2 grid grid-cols-2-min grid-rows-3-min gap-x-5 ">
          <div className="flex flex-col w-72  col-start-1 m-0 bg-green-600  ">
            <h2 className="font-medium bg-red-700 ">{categoria}</h2>
            <h1 className="text-2xl h-16 font-black bg-blue-500  ">{obj.title}</h1>
            <h3 className=" mb-10 h-36  bg-orange-500 ">{obj.short_description}</h3>
          </div>

          <article className="col-start-1 bg-emerald-700 ">
            <a
              href="ladygaga.com"
              target={'_blank'}
              className=" font-medium text-link-blue "
            >
              {obj.url}
            </a>

            <div className="flex gap-1  ">
              <div className="m-auto mr-0 ml-0">
                <Vector></Vector>
              </div>
              <h3 className="mt-2 text-xs font-medium text-black-light">
                {obj.votes} votos
              </h3>
            </div>
          </article>
          
          <button className="bg-blue-600 text-white w-full h-full  mt-4 m-0 col-start-1 rounded-2xl ">
            votar
          </button>
           <img src={eventsMock[1].image} alt="event img" className='col-start-2 w-auto h-60 row-span-3 row-start-1' />  
        </section>
       


        <article className="mt-10">
          <Interests></Interests>{' '}
        </article>
      </div>
    </div>
  );
};

export default EventInformation;

EventInformation.getLayout = function getLayout(page) {
  return <Layout classMain='app-container' >{page}</Layout>;
};