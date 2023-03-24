import React from 'react'
import Logo from '../../components/assets/logo/Logo';
import Link from 'next/link';
import Register from "./Register"

const IndexLoginRegister = () => {
  return (

    <div className='bg-[url("/login-banner.png")] bg-cover bg-center'>   {/* Contenedor GLOBAL / FONDO imagen  */}
    
      <div className="flex flex-wrap h-screen bg-gradient-to-r from-black  place-content-center m-auto ">
        {' '}
     
        {/* LOGO DE LA PAGINA / PARA CUANDO LOGO */}
        <article className="m-auto">
          <Link href={'/'}>
            <Logo variant="yellow" onlyIcon={true} />{' '}
          </Link>
        </article>

        {/* CARD REGIRTER ACA ABAJO */}
    
       <Register></Register>
    
      </div>
    </div>
   
  );
}

export default IndexLoginRegister;
