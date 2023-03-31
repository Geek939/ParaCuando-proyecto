import Link from 'next/link';
import React from 'react'
import { categories } from '../lib/data/categories';
import { Swiper, SwiperSlide } from 'swiper/react';

const Interests = () => {


// ESTE componente se muestra en alguans paginas, 
// es el que dice hagamoslo mas personal, 
// Hacer mas reponsive





  return (
    <div className=" flex  flex-col bg-gray-100 w-auto overflow-hidden    p-10 ">
      {/* --header titulo -- */}
      <section className="flex flex-col  gap-y-4">
        <h2 className="text-gray-500 text-xl font-medium ">
          ¡Hagámoslo más personal!
        </h2>
        <h3 className="text-gray-500 font-normal ">
          Selecciona tus interes para brindarte sugerencia de acuerdo a tus
          gustos
        </h3>
      </section>
      {/* -- botones -- */}
      <Swiper spaceBetween={5} slidesPerView={3} className="flex flex-row overflow-scroll ">
        {categories?.map((category) => (
          <div key={category.id}>
            <Link href={'/category' + category.url}>
              <button className="text-gray-400 border-2 border-gray-40 text-xs bg-white rounded-full p-2 whitespace-nowrap ">
                {category.name}
              </button>
            </Link>
          </div>
        ))}
      </Swiper>
      <h3 className="text-link-blue mt-4">Ver todos los intereses</h3>{' '}
      {/* link */}
    </div>
  );
}

export default Interests