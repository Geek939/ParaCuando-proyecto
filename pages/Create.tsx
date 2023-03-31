import React, { useState } from 'react';
import Logo from '../components/assets/logo/Logo';

const Create = () => {
  const [datos, setdatos] = useState(true);
  const [progresoAzul, setprogresoAzul] = useState('w-3/6');
  const [textButton, settextButton] = useState('siguiente');
  const [img1, setimg1] = useState('');
  const [img2, setimg2] = useState('');
  const [img3, setimg3] = useState('');
  const [hidden, sethidden] = useState('');

  const siguiente = () => {
    setdatos(false);
    setprogresoAzul('w-full');
    settextButton('publicar');
  };

  const back = () => {
    setdatos(true);
    setprogresoAzul('w-3/6');
    if (textButton === 'publicar') {
      settextButton('siguiente');
    }
  };

  const im1 = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      setimg1(URL.createObjectURL(e.target.files[0]));
      sethidden('hidden');
    } };

   const im2 = (e: any) => {
     if (e.target.files && e.target.files[0]) {
       setimg2(URL.createObjectURL(e.target.files[0]));
       sethidden('hidden');
     }
   };
  const im3 = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      setimg3(URL.createObjectURL(e.target.files[0]));
      sethidden('hidden');
    }
  };

  return (
    <div className="flex flex-row flex-wrap">
      {/* barra azul */}

      <section
        className="flex flex-col  bg-app-blue max-w-full min-h-min px-10 
       
       sm:min-h-screen sm:max-w-min  "
      >
        <article className="mt-10">
          <Logo height={'120'} ></Logo>
        </article>
        <h2 className="text-app-yellow font-medium text-xl mt-20 ">
          ¡Bienvenido, creador!
        </h2>

        <h3 className="  text-white text-left max-w-[80%] m-0 p-0 mt-5">
          A continuación puedes completar la info de la marca, artista o torneo
          que quieres cerca.
        </h3>
        <p className="text-white m-2 mt-[20%] md:mt-[60%] ">Ayuda</p>
      </section>

      {/* contenido */}
      <div className=" m-auto ">
        <section className="grid grid-cols-3 grid-rows-2 row-start-1 h-min w-full place-content-center my-5 ml-5 mr-auto ">
          <h1
            onClick={() => {
              back();
            }}
            className="text-app-blue font-medium text-xl col-start-1 mb-10  cursor-pointer"
          >
            Back
          </h1>
          {/* barra azul */}
          <div className="bg-app-gris  h-2 rounded-2xl w-5/6 col-span-3 row-start-2 m-auto">
            <div
              className={`z-10 bg-app-blue h-2 rounded-2xl ${progresoAzul} `}
            ></div>
          </div>
        </section>
        <article className="grid grid-cols-1-min  grid-rows-3-min h-min m-auto ">
          {datos ? (
            <article className="flex flex-col m-0  w-[300] row-start-2 ">
              <article>
                <h2 className="font-medium text-xl">Publicación</h2>
                <p className="font-normal text-gris-dark">Información básica</p>
              </article>

              <form className="grid grid-cols-2 w-auto grid-rows-4 gap-4  ">
                <div className=" border-2 border-app-gris rounded-2xl col-span-2 "></div>
                <div className=" border-2 border-app-gris rounded-2xl"></div>
                <div className=" border-2 border-app-gris rounded-2xl"></div>
                <div className=" border-2 border-app-gris rounded-2xl col-span-2 max-h-30 "></div>
                <div className=" border-2 border-app-gris rounded-2xl col-span-2 "></div>
              </form>
            </article>
          ) : (
            <div className="flex flex-col m-auto row-start-2 ">
              <h2 className="font-medium text-2xl">Fotos</h2>
              <h3 className="font-normal my-4 mx-0  text-gris-dark">
                Selecciona máximo tres fotos para crear una galería
              </h3>

              <section className="flex flex-row gap-2 border-2 border-l-gris-dark p-4 rounded-2xl ">
                <div className="grid grid-cols-1 h-52 w-48 ">
                  <img
                    src={img1}
                    alt="subida"
                    className="rounded-2xl col-start-1 h-52 w-48 row-start-1 bg-app-gris"
                  />
                  <input
                    onChange={(e) => im1(e)}
                    type="file"
                    className=" rounded-2xl h-52 w-48 col-start-1 row-start-1  "
                    id='1'
                  />
                  

                  <p
                    className={`z-10 m-auto text-3xl col-start-1 row-start-1 text-app-blue ${hidden} `}
                  >
                    +
                  </p>
                </div>

                <div className="grid grid-cols-1 h-52 w-48 ">
                  <img
                    src={img2}
                    alt="subida"
                    className="rounded-2xl col-start-1 h-52 w-48 row-start-1 bg-app-gris"
                  />
                  <input
                    onChange={(e) => im2(e)}
                    type="file"
                    className=" rounded-2xl h-52 w-48 col-start-1 row-start-1"
                  />

                  <p
                    className={`z-10 m-auto text-3xl col-start-1 row-start-1 text-app-blue ${hidden} `}
                  >
                    +
                  </p>
                </div>

                <div className="grid grid-cols-1 h-52 w-48 ">
                  <img
                    src={img3}
                    alt="subida"
                    className="rounded-2xl col-start-1 h-52 w-48 row-start-1 bg-app-gris"
                  />
                  <input
                    onChange={(e) => im3(e)}
                    type="file"
                    className=" rounded-2xl h-52 w-48 col-start-1 row-start-1"
                  />

                  <p
                    className={`z-10 m-auto text-3xl col-start-1 row-start-1 text-app-blue ${hidden} `}
                  >
                    +
                  </p>
                </div>
              </section>
            </div>
          )}

          <button
            onClick={() => {
              siguiente();
            }}
            className="bg-app-blue w-[20%]  m-auto rounded-2xl mt-10 p-2 text-white row-start-3 "
          >
            {textButton}
          </button>
        </article>
      </div>
    </div>
  );
};

export default Create;
