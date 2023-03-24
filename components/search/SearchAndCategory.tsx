import Link from 'next/link';
import React from 'react'


const SearchAndCategory = () => {
// COMPONENTE buscar categorias y eventos  //



// TAREA --- HACER RESPONSIVE //

//hay que agregarle la funcion de esconder el BUTTONS CONTAINER en mobile y reemplazarlo por un boton de expancion //




  return (
    <div className="flex place-content-center bg-white  shadow-lg shadow-black-500/90 w-screen p-5 app-banner ">

      {/* --- contenedor de los botones y busqueda --- */}
      <div className="flex flex-row gap-10">

        {/* --- BUTTONS CONTAINER / contenedor de botones / este tiene que estar escondido en mobile y sacar un desplegable --- */}
        <div className="flex m-auto items-center justify-center gap-2">
          <Link href={'/category/CategoryPage'}>
            <button className="text-gray-400 border-2 text-xs border-gray-40 bg-white rounded-full p-4 whitespace-nowrap ">
              Marcas y tiendas
            </button>
          </Link>
          <Link href={'/category/marcas-y-tiendas'}>
            <button className="text-gray-400 border-2 border-gray-40 text-xs bg-white rounded-full p-4 whitespace-nowrap ">
              Artistas y conciertos
            </button>
          </Link>
          <Link href={'/category/marcas-y-tiendas'}>
            <button className="text-gray-400 border-2 text-xs border-gray-40 bg-white rounded-full p-4 whitespace-nowrap ">
              Torneos
            </button>
          </Link>
        </div>
       
      {/* --- IMPUT SEARCH / imput de busqueda, este NO se esconde --- */}

        <input
          className="px-6 py-4 rounded-full w-full sm:w-[465px] border-2 border-gray-40"
          type="text"
          placeholder="¿Qué quieres ver en tu ciudad?"
        />
      </div>

    </div>
  );
}

export default SearchAndCategory
