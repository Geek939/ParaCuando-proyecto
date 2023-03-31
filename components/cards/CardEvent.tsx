import Link from 'next/link';
import { useState } from 'react';
import { IEvent } from '../../lib/interfaces/event.interface';
import { Heart } from '../assets/svg/Heart';
import { Vector } from '../assets/svg/Vector';

const CardEvent = ({  title, short_description,votes,image,url }: IEvent) => {
  const [bgHeart, setbgHeart] = useState(false);

  //like event funtion
  const likeClickHeart = () => {
    if (bgHeart === true) {
      setbgHeart(false);
    } else {
      setbgHeart(true);
    }
  };

  return (
    <div className="flex h-min w-min m-0 ">
      <article className=" z-0 grid grid-cols-1 grid-rows-2   m-auto bg-white rounded-2xl w-72 max-h-[50rem] shadow-lg shadow-black-500/50">
        {/*Section 1 foto de artista y el boton de votar*/}
        <Link
          href="../events/eventInformation"
          className="col-span-1 row-span-2"
        >
          {/*imagen del evento */}
          <img src={image} alt="event image" className="rounded-t-2xl" />
        </Link>

        {/*Section 2 informacion*/}
        <section className="grid  h-60 gap-2 grid-cols-2 grid-rows-4-min ml-3">
          {/*Name Event*/}
          <h2 className="row-start-1 my-auto  col-span-2 overflow-y-hidden max-w-[80%]  text-black-light font-semibold text-lg m-0 ml-3">
            {title}
          </h2>
          {/*Gradiente blanco para el texto de descripcion*/}
          <div className="z-20 row-start-2 h-24  row-end-3 w-56 bg-gradient-to-t from-white col-start-1 col-span-3 m-auto ml-3"></div>

          {/*Description event*/}
          <div className="row-start-2 h-24 row-end-3 w-56 text-left text-gray-letter text-sm col-start-1 col-span-3 m-auto ml-3 overflow-hidden">
            <p>{short_description}</p>
          </div>

          {/*LINK externo*/}
          <a
            href="ladygaga.com"
            target={'_blank'}
            className=" ml-3 font-medium text-link-blue row-3 col-span-3 my-auto"
          >
            {url}
          </a>

          {/*cantidad de votos*/}
          <div className=" flex text-right col-span-3 m-auto mt-0 ml-2 mb-4 text-sm">
            <div className="m-auto mr-1">
              <Vector></Vector>
            </div>

            <h3 className="m-auto mt-2 text-xs font-medium text-black-light">
              {' '}
              {votes}
            </h3>
          </div>
        </section>
      </article>

      {/*Boton corazon*/}
      <button
        onClick={likeClickHeart}
        className={`absolute z-10 row-span-2 row-start-2 col-1 m-auto mr-0  mt-44 ml-56 h-12 w-12 `}
      >
        <Heart isActive={bgHeart} className="h-12 w-12  m-auto"></Heart>
      </button>
    </div>
  );
};

export default CardEvent;
