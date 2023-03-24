import Link from 'next/link';
import React from 'react';
import  SliderEvent from "./SliderEvent";
import IndexLoginRegister from "./sign-up/IndexLoginRegister";

const HomePrueba = () => {
     
      
    
  return (
    <div className="flex flex-col  place-content-center">

      <header className="flex flex-row gap-10 bg-slate-600 w-auto justify-center text-lg">
        <h2>Home</h2>
        <Link href="/ProfilePage">perfil</Link>
        <Link href="/Login">login</Link>{' '}
      </header>

      
      <IndexLoginRegister></IndexLoginRegister>
     
      
    </div>
  );
};

export default HomePrueba;
