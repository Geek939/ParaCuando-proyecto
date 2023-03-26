import Link from 'next/link';
import { useState, useEffect } from 'react';
import { IconLogo } from '../../assets/logo/IconLogo';
import { HeartPink } from '../../assets/svg/HeartPink';
import { PlusBlue } from '../../assets/svg/PlusBlue';
import { UserCircleVector } from '../../assets/svg/UserCircleVector';

const Header = () => {
  const [bool, setbool] = useState(true); //controla cuando estas logeado o no
  let user = {email:'nada'} ; 

 useEffect(() => {
if (localStorage.getItem('datos')) {
  setbool(false)
  user= JSON.parse(localStorage.getItem('datos') || '')
} else { 
 setbool(true)
}

   
 }, [])
 






  //hacer responsiv, ocultar

  return (
    <header className="z-50 flex flex-row w-screen fixed gap-[20%] lg:gap-[50%]     top-0 left-0 right-0 bg-black h-20">
      <div className="m-auto ">
        <IconLogo></IconLogo>
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
            <div className="m-auto">
              <UserCircleVector height={'32'} width={'32'}></UserCircleVector>
            </div>
            <h3 className="font-normal m-auto ">{user.email}</h3>
          </div>
        </article>
      ) : (
        // bool / este boleano controla cuando se muestra o no una secion o la otra //
        //---------- NO LOGEADO------------- //
        <article className="flex flex-row m-auto gap-4">
          <div className="flex cursor-pointer flex-row place-content-center gap-2 font-medium text-app-blue my-auto whitespace-nowrap ">
            <div className="m-auto ">
              <PlusBlue></PlusBlue>
            </div>
            <Link href={'/Create'}>crear publicacion</Link>
          </div>

          <Link
            href={'/sign-up/IndexLoginRegister'}
            className="text-white mx-2 my-auto font-medium "
          >
            Login
          </Link>

          <Link
            href={'/sign-up/LoginCard'}
            className="text-white mr-4  my-auto font-medium"
          >
            Sign Up
          </Link> 

        </article>
      )}
    </header>
  );
};

export default Header;
