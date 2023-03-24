import React, { useState } from 'react';
import Logo from '../components/assets/logo/Logo';

const Create = () => {
  const [datos, setdatos] = useState(true);
  const [progresoAzul, setprogresoAzul] = useState('w-3/6')
  const [textButton, settextButton] = useState('siguiente')


  const siguiente = () =>{
    setdatos(false)
    setprogresoAzul('w-full')
    settextButton('publicar')
  };

   const back = () => {
     setdatos(true);
     setprogresoAzul('w-3/6')
     if (textButton === 'publicar') {
      settextButton('siguiente')
     }
    
   };

  return (
    <div className="flex flex-row flex-wrap">
      {/* barra azul */}
      <section className="flex flex-col bg-app-blue max-w-min min-h-screen px-10  ">
        <article className="mt-10">
          <Logo></Logo>
        </article>
        <h2 className="text-app-yellow font-medium text-xl mt-20 ">
          ¡Bienvenido, creador!
        </h2>

        <h3 className="  text-white text-left m-0 p-0 mt-5">
          A continuación puedes completar la info de la marca, artista o torneo
          que quieres cerca.
        </h3>
        <p className="text-white mt-[60%]">Ayuda</p>
      </section>

      {/* contenido */}

      <article className="grid grid-cols-1  grid-rows-2 h-min ">
        <section className="grid grid-cols-3 grid-rows-2 row-start-1 h-min w-4/6 place-content-center mx-auto my-10 ">
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

        {datos ? (
          <article className="flex flex-col m-auto h-[628px] w-[460] row-start-2 ">
            <article>
              <h2 className="font-medium text-xl">Publicación</h2>
              <p className="font-normal text-gris-dark">Información básica</p>
            </article>

            <form className="grid grid-cols-2 w-[600px]  grid-rows-4 gap-4  ">
              <input className=" border-2 border-app-gris rounded-2xl col-span-2 "></input>
              <input className=" border-2 border-app-gris rounded-2xl"></input>
              <input className=" border-2 border-app-gris rounded-2xl"></input>
              <input className=" border-2 border-app-gris rounded-2xl col-span-2 max-h-30 "></input>
              <input className=" border-2 border-app-gris rounded-2xl col-span-2 "></input>
            </form>
          </article>
        ) : (
          <div className="flex flex-col m-auto row-start-2 ">
            <h2 className="font-medium text-2xl">Fotos</h2>
            <h3 className="font-normal my-4 mx-0  text-gris-dark">
              Selecciona máximo tres fotos para crear una galería
            </h3>

            <section className="flex flex-row place-content-center gap-2 p-4 max-w-min   border-2 rounded-2xl">
              <div className="flex place-content-center rounded-2xl h-52 w-48 bg-app-gris ">
                <p className="m-auto text-3xl text-app-blue ">+</p>
              </div>
              <div className="flex place-content-center rounded-2xl h-52 w-48 bg-app-gris ">
                <p className="m-auto  text-3xl text-app-blue ">+</p>
              </div>
              <div className="flex place-content-center rounded-2xl h-52 w-48 bg-app-gris ">
                <p className="m-auto  text-3xl text-app-blue ">+</p>
              </div>
            </section>
          </div>
        )}

       
      </article> <button
          onClick={() => {
            siguiente();
          }}
          className="bg-app-blue w-[20%]  m-auto rounded-2xl mt-10 p-2 text-white row-start-3 "
        >
          {textButton}
        </button>
    </div>
  );
};

export default Create;
