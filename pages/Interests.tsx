import Link from 'next/link';
import React from 'react'

const Interests = () => {


// ESTE componente se muestra en alguans paginas, 
// es el que dice hagamoslo mas personal, 
// Hacer mas reponsive





  return (
    <div className=" flex  flex-col bg-gray-100 w-[100%]    p-10 ">
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
      <div className="flex flex-row place-content-center m-auto gap-10 ml-0 mt-4">
        <div className="flex place-content-center gap-2 m-auto ">
          <Link href={'/category/CategoryPage'}>
            <button className="text-gray-400 border-2  text-xs border-gray-40 bg-white rounded-full p-4 ">
              Restaurantes
            </button>
          </Link>
          <Link href={'/category/marcas-y-tiendas'}>
            <button className="text-gray-400 border-2 border-gray-40 text-xs bg-white rounded-full p-4 ">
              tiendas de ropa
            </button>
          </Link>
          <Link href={'/category/marcas-y-tiendas'}>
            <button className="text-gray-400 border-2 text-xs border-gray-40 bg-white rounded-full p-4 ">
              Rock
            </button>
          </Link>
          <Link href={'/category/marcas-y-tiendas'}>
            <button className="text-gray-400 border-2 text-xs border-gray-40 bg-white rounded-full p-4 ">
              eventos
            </button>
          </Link>
        </div>
      </div>
      <h3 className="text-link-blue mt-4  ">Ver todos los intereses</h3>{' '}
      {/* link */}
    </div>
  );
}

export default Interests