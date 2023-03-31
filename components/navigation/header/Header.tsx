import Link from 'next/link';
import { useState, useEffect } from 'react';
import { IconLogo } from '../../assets/logo/IconLogo';
import { HeartPink } from '../../assets/svg/HeartPink';
import { PlusBlue } from '../../assets/svg/PlusBlue';
import { ConIcon } from '../../assets/svg/ConIcon';
import { UserCircleVector } from '../../assets/svg/UserCircleVector';
import { OffIcon } from '../../assets/svg/OffIcon';


const Header = () => {
  const [bool, setbool] = useState(true); //controla cuando estas logeado o no
  const [show, setshow] = useState('hidden')
  let user = {email:'nada'} ; 

 useEffect(() => {
if (localStorage.getItem('datos')) {
 setbool(false)
  user= JSON.parse(localStorage.getItem('datos') || '')
} else { 
 setbool(true)
}

   
 }, [])
 

const despliegue = () => {
  if (show === 'hidden') {
     setshow('')
  } else {
    setshow('hidden');
  }
    
}




  //hacer responsiv, ocultar

  return (
    <header className="z-50 flex flex-row w-screen fixed  lg:gap-[50%] top-0 left-0 right-0 bg-black h-20">
      <div className="m-auto ">
        <Link href={'/'}>
          {' '}
          <IconLogo></IconLogo>
        </Link>
      </div>

      {/* links header */}
      {bool ? (
        //------LOGEADO -----  cuando esta logeado en responsiv solo tiene que aparecer el correo y una opcion apra ver las otras opciones //
        <article className="flex flex-row m-auto gap-4">
          <div className="flex flex-row place-content-center gap-2 font-medium text-app-blue my-auto whitespace-nowrap ">
            <div className="m-auto">
              <PlusBlue></PlusBlue>
            </div>
            <Link href={'/Create'}>crear publicacion</Link>
          </div>

          <div className="flex flex-row place-content-center gap-2 font-normal  text-white ">
            <div className="m-auto">
              <HeartPink></HeartPink>
            </div>
            <h3 className="text-right m-auto ">Mis favitos</h3>
          </div>

          <div className="flex flex-row place-content-center gap-2 font-normal text-white my-auto mr-20 whitespace-nowrap ">
            <Link href={'/profile/perfil'} className="m-auto">
              <UserCircleVector height={'32'} width={'32'}></UserCircleVector>
            </Link>
            <h3 className="font-normal m-auto ">{user.email}</h3>

            <section className=" flex flex-col place-content-center">
              <button
                onClick={() => despliegue()}
                className=" bg-red-500 h-10 w-10"
              ></button>
              <article
                className={`flex flex-col relative top-16 gap-y-4 p-4 rounded-2xl bg-white text-gris-dark ${show} `}
              >
                <div className="flex flex-row place-content-center  ">
                  <ConIcon className="m-auto"></ConIcon>
                  <Link className="m-auto" href={'/profile/config'}>Configuración</Link>
                </div>
                  
               
                <div className="flex flex-row place-content-center gap-4 border-b-2 p-2 border-b-gris-dark">
                  <OffIcon className="m-auto"></OffIcon>
                  <p className=" m-auto">Cerrar sesión</p>
                </div>
                <p>Ayuda y soporte</p>
              </article>
            </section>
          </div>
        </article>
      ) : (
        // bool / este boleano controla cuando se muestra o no una secion o la otra //
        //---------- NO LOGEADO------------- //
        <article className="flex flex-row m-auto gap-4">
          <div className="flex cursor-pointer flex-row place-content-center gap-1 font-medium text-app-blue my-auto whitespace-nowrap ">
            <div className="m-auto ">
              <PlusBlue></PlusBlue>
            </div>
            <Link href={'/Create'}>crear publicacion</Link>
          </div>

          <Link
            href={'/sign-up/IndexLoginRegister'}
            className="text-white  m-auto font-medium s "
          >
            Log In
          </Link>

          <Link
            href={'/sign-up/LoginCard'}
            className="text-white  mr-1   font-medium"
          >
            Sign Up
          </Link>
        </article>
      )}
    </header>
  );
};

export default Header;
