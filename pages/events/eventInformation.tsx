import { useState } from 'react';
import { Vector } from '../../components/assets/svg/Vector';
import Header from '../../components/navigation/header/Header';
import SearchAndCategory from '../../components/search/SearchAndCategory';
import { eventsMock } from '../../lib/data/events.mock';
import Interests from '../Interests';

const EventInformation = () => {
  const [categoria, setcategoria] = useState('Artista / Pop - Rock');
  const [obj, setobj] = useState(eventsMock[1]);

  const fun = () => {
    setcategoria('restaurante / local');
  };

  return (
    <div>
      <Header></Header>
      <div className="flex flex-col absolute top-20">
        {' '}
        <SearchAndCategory></SearchAndCategory>
        <section className=" max-w-min m-auto mt-14 grid grid-cols-2-min grid-rows-3-min gap-x-5 ">
          <div className="flex flex-col  col-start-1 m-0   ">
            <h2 className="font-medium">{categoria}</h2>
            <h1 className="text-[30px] font-black  ">{obj.title}</h1>
            <h3 className="  w-[50%]">{obj.short_description}</h3>
          </div>

          <article className="col-start-1">
            <a
              href="ladygaga.com"
              target={'_blank'}
              className=" font-medium text-link-blue "
            >
              {obj.url}
            </a>

            <div className="flex gap-1 ">
              <div className="m-auto mr-0 ml-0">
                <Vector></Vector>
              </div>
              <h3 className="mt-2 text-xs font-medium text-black-light">
                {obj.votes} votos
              </h3>
            </div>
          </article>
          <button className="bg-blue-600 text-white col-start-1 rounded-2xl ">
            votar
          </button>
          <div className=" col-start-2 w-full h-full row-span-3 row-start-1">
            <img src={eventsMock[1].image} alt="event img" />
          </div>
        </section>
        <article className="mt-10">
          <Interests></Interests>
        </article>
      </div>
    </div>
  );
};

export default EventInformation;
