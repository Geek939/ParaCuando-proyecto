import Link from 'next/link';
import React from 'react'
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';


const LoginCard = () => {

 const router = useRouter();
const [NavigatetoLogin, setNavigatetoLogin] = useState('');
let user:any = '' ; 

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    },
  });


  useEffect(() => {
    if (typeof window !== 'undefined') {
      user = JSON.parse(localStorage.getItem('datos') || '');
    }
 
   
  }, [])
  

  const onSubmit = async (data: FormValues) => {
    console.log(data);
  
    
   console.log(user)
  if (user?.email === data.email && user?.password === data.password) {
     setNavigatetoLogin('/')
   } else { swal('correo o contraseña incorrectos') }

    // createUser(data)
    //   .then((resp) => {
    //     console.log(resp);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

 
 



  //--HACER reseponsive --//



  return (
    <div className="flex flex-wrap flex-col  place-content-center m-auto">
      {/*contenedor */}

      <div
        className="grid grid-cols-1 grid-rows-2-min bg-neutral-900/80 border-2 border-gray-letter h-3/6 
       rounded-2xl  items-center justify-center p-5 
         max-w-[350px] m-auto"
      >
        {/* header del register */}
        <div className="flex flex-col font-bold place-content-center  w-auto m-0 mb-2 text-white  ">
          {/* XS */}
          <h1 className="text-2xl m-auto mr-[80%] font-medium   ">
            {/* XS */}
            ¡Hola!
          </h1>
          <p className="font-normal m-auto text-left">
            Inicie sesión con los datos que ingresó durante su registro.
          </p>
        </div>

        {/* ---FORM CONTENEDOR / GRID--- */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" grid grid-cols-2 grid-rows-2-min gap-x-2 gap-y-1 text-white m-0 "
        >
          {/* XS */}
          {/* ---EMAIL--- */}
          <label className="flex flex-col  gap-1 col-span-2 m-0">
            <span className="font-semibold ">Email</span>
            <input
              className="border-2 border-gris-dark 
              p-2 rounded-[5px] bg-neutral-900/0"
              type="text"
              placeholder="ejemplo@gmail.com"
              {...register('email')}
            />
          </label>

          {/* --- PASSWORD--- */}
          <label className="flex flex-col col-span-2">
            <span className="font-semibold ">Password</span> {/* XS */}
            <input
              className="border-2 border-gris-dark  p-2 bg-neutral-900/0 rounded-[5px]"
              type="password"
              {...register('password')}
            />
          </label>

          {/* --- SING UP BUTTON--- */}
          <div className="flex flex-col col-span-2">
            <div className="flex flex-row flex-wrap gap-1 mb-2 text-left">
              <p className=" text-slate-300 text-sm font-normal ">
                ¿Olvidaste tu contraseña?
              </p>{' '}
              <Link
                href="./Recovery"
                className="text-app-yellow text-sm "
              >
                Recupérala aquí
              </Link>
            </div>
            <button
              onClick={() => router.push(NavigatetoLogin)}
              className="bg-app-yellow rounded-sm font-bold h-10 text-black"
            >
              iniciar sesion
            </button>

            {/* Crear cuenta */}
            <Link
              href="./IndexLoginRegister"
              className="text-center app-subtitle-2 text-app-yellow mt-4"
            >
              O crea una cuenta aquí
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginCard;