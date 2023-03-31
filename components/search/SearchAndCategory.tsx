import Link from 'next/link';
import { useState } from 'react';
import { BiFilter } from 'react-icons/bi';
import { categories } from '../../lib/data/categories';
import { Lupa } from '../assets/svg/Lupa';


const SearchAndCategory = () => {
  // COMPONENTE buscar categorias y eventos  //
  const [isShow, setIsShow] = useState<boolean>(false);

  // TAREA --- HACER RESPONSIVE //

  //hay que agregarle la funcion de esconder el BUTTONS CONTAINER en mobile y reemplazarlo por un boton de expancion //

  return (
    <div className="app-banner p-4">
      <div className="flex items-center app-banner bg-white shadow-lg shadow-black-500/90 w-full h-20 z-10 p-4   top-0 left-0 right-0 ">
        {/* --- contenedor de los botones y busqueda --- */}
        <div className="flex justify-evenly md:justify-between w-full  gap-10 relative">
          {/* --- BUTTONS CONTAINER / contenedor de botones / este tiene que estar escondido en mobile y sacar un desplegable --- */}
          <div className="flex items-center">
            <button
              onClick={() => setIsShow(!isShow)}
              className="h-[50px] w-[50px] border-[1px] border-gray-400 rounded-[50%] md:hidden flex justify-center items-center"
            >
              <BiFilter className="text-[35px]" />
            </button>
          </div>

          {/* --- IMPUT SEARCH / imput de busqueda, este NO se esconde --- */}
          <article className="grid grid-cols-3-min p-2 rounded-full  w-[400px] border-2 border-gray-40 md:mr-[5%] lg:mr-[10%] xl:mr-[20%]">
            <input
              className="col-span-2 col-start-1 row-start-1 text-xs"
              type="text"
              placeholder="¿Qué quieres ver en tu ciudad?"
            />
            {/* esta lupa es el icono, podes comentarlo no hace nada */}
            <Lupa className=" col-start-3 col-end-3 row-start-1 m-auto"></Lupa>
          </article>
        </div>
      </div>
      <div
        className={`items-center justify-center gap-2 app-menu transition-transform ${
          isShow && 'translate-y-[70px]'
        } md:app-menu-row lg:left-[15%] xl:left-[20% `}
      >
        {categories?.map((category) => (
          <div key={category.id}>
            <Link href={'/category' + category.url}>
              <button className="text-gray-400 border-2 border-gray-40 text-xs hover:bg-app-gris hover:text-white bg-white rounded-full py-3 px-5 whitespace-nowrap ">
                {category.name}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchAndCategory;
