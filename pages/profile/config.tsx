import { BiPlus } from 'react-icons/bi';
import BannerBlue from '../../components/banners/BannerBlue';
import { Layout } from '../../components/layout/Layout';
import { NextPageWithLayout } from '../page';

const ConfigPage: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col ">
      
       <div className="flex mt-20 mb-20 w-full z-20 ">
        <div className=" fixed text-white text-4xl w-full p-2 bg-app-blue font-semibold ">
         <h2 className='m-5'>Profile</h2> 
        </div>
      </div>

      <div className="w-full max-w-[90%] h-full flex flex-col mx-auto">
        <section className=" flex flex-col mt-20 justify-center gap-4">
          <div className="flex flex-wrap p-2  ">
            {/* foto perfil */}

            <div className="flex flex-col  gap-2 m-auto ">
              <h3 className="text-2xl font-medium">Información de contacto</h3>
              <div className="flex place-content-center w-60 h-60  bg-gray-300 rounded-lg  ">
                <button>
                  <BiPlus className="text-[40px] text-blue-600" />
                </button>
              </div>
              <p className="text-xl text-gray-500">
                Add a photo for your profile
              </p>
            </div>

            {/* nombre input */}
            <form className="flex flex-col place-content-center   gap-5 m-10 w-[70%] ">
              <div className="grid grid-cols-2 grid-rows-3-min">
                <p
                  className="z-10 bg-white px-2 max-h-6 m-0  w-min whitespace-nowrap text-gray-500 
                  col-start-1 row-span-2 ml-5 row-start-1 text-lg"
                >
                  First Name
                </p>
                <input
                  className="w-full px-2 py-3 rounded-md border-2 text-lg col-span-2 row-start-2 row-span-2 col-start-1 border-gray-400"
                  type="text"
                />
              </div>

              <div className="grid grid-cols-2 grid-rows-3-min">
                <p
                  className="z-10 bg-white px-2 max-h-6 m-0  w-min whitespace-nowrap text-gray-500 
                  col-start-1 row-span-2 ml-5 row-start-1 text-lg"
                >
                  Last name
                </p>
                <input
                  className="w-full px-2 py-3 rounded-md border-2 text-lg col-span-2 row-start-2 row-span-2 col-start-1 border-gray-400"
                  type="text"
                />
              </div>
            </form>
          </div>
        </section>

        <section className="flex flex-col mt-20 mb-20 gap-8   ">
          <h3 className="text-2xl font-medium">Mis intereses</h3>

          <div className="flex  flex-wrap gap-8 place-content-center sm:place-content-end ">
            <div className="flex flex-col gap-4">
              <div className="w-72 h-48 bg-slate-300 rounded-2xl flex justify-center items-center">
                <button>
                  <BiPlus className="text-[40px] text-blue-600" />
                </button>
              </div>
              <p className="text-xl text-center text-gray-500">
                Add a category
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-72 h-48 bg-slate-300 rounded-2xl flex justify-center items-center">
                <button>
                  <BiPlus className="text-[40px] text-blue-600" />
                </button>
              </div>
              <p className="text-xl text-center text-gray-500">
                Add a category
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-72 h-48 bg-slate-300 rounded-2xl flex justify-center items-center">
                <button>
                  <BiPlus className="text-[40px] text-blue-600" />
                </button>
              </div>
              <p className="text-xl text-center text-gray-500">
                Add a category
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button className="px-8 py-3 text-lg text-white bg-blue-600 rounded-3xl">
              Guardar cambios
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ConfigPage;

ConfigPage.getLayout = function getLayout(page) {
  return <Layout classMain='app-container' >{page}</Layout>;
};
