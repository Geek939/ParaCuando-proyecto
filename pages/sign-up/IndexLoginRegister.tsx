import React, { useState } from 'react'
import Logo from '../../components/assets/logo/Logo';
import Link from 'next/link';
import Register from "./Register"
import { ExitCircle } from '../../components/assets/svg/ExitCircle';
import LoginCard from './LoginCard';
import loadConfig from 'next/dist/server/config';

const IndexLoginRegister = () => {

 const [LogOrReg, setLogOrReg] = useState(<Register></Register>);
 const [change, setchange] = useState(true)

  const  changePopUp = () => {
      
    if (change) { setchange(false) 
      setLogOrReg(<LoginCard></LoginCard>);
      console.log('registrarrrrrrr ')
    } else { setchange(true)
       console.log('noooooooooopp ');
      setLogOrReg(<Register></Register>);
    }
     
  }




  return (
    <div className='bg-[url("/login-banner.png")] bg-cover bg-center'>
      {' '}
      {/* Contenedor GLOBAL / FONDO imagen  */}
      <div className="flex flex-wrap h-screen bg-gradient-to-r from-black  place-content-center m-auto ">
        {' '}
        {/* LOGO DE LA PAGINA / PARA CUANDO LOGO */}
        <article className="m-auto ">
          <Link href={'/'}>
            <Logo
              variant="yellow"
              height={'auto'}
              width={'auto'}
              onlyIcon={true}
            />{' '}
          </Link>
        </article>
        {/* CARD REGIRTER ACA ABAJO */}
        <article className='m-auto' onClick={() =>{changePopUp()}} >
          <ExitCircle  className="relative mb-4 left-[90%] cursor-pointer "></ExitCircle>
          {LogOrReg}
        </article>
      </div>
    </div>
  );
}

export default IndexLoginRegister;

