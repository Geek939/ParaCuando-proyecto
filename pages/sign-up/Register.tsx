import { useForm } from 'react-hook-form';
import { ExitCircle } from '../../components/assets/svg/ExitCircle';
import { Alert } from '../../components/assets/svg/Alert';
import { EyeHidden } from '../../components/assets/svg/EyeHidden';
import { YellowOk } from '../../components/assets/svg/YellowOk';
import Link from 'next/link';
import { useState } from 'react';
import * as EmailValidator from 'email-validator';
import { Eye } from '../../components/assets/svg/Eye';
import swal from 'sweetalert';

//----COMPONENTE PARA CREAR USUARIO------//

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
export default function Register() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  });

  const [hiddenEmail, sethiddenEmail] = useState('hidden'); // -----ESCONDE EL ICONO DE ALERTA DEL EMAIL----- //
  const [hiddenPassword, sethiddenPassword] = useState('hidden'); // -----ESCONDE EL ICONO DE ALERTA DEL PASSWORD----- //
  const [SeePassword, setSeePassword] = useState('password');
  const [EyeIcon, setEyeIcon] = useState(<EyeHidden></EyeHidden>);

  const onSubmit = async (data: FormValues) => {
    console.log(data);
    // --- Validacion si esta bien escrito, Email y Password //

    //---email
    if (EmailValidator.validate(data.email)) {
      sethiddenEmail('');
      
    } else {
      swal('Correo incorrecto');
      sethiddenEmail('hidden');
    }

    //----password
    if (/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S/.test(data.password)) {
      sethiddenPassword('hidden');
     
    } else {
      sethiddenPassword(''); swal('La contraseña debe tener mayúsculas, minúsculas y números');
    }
    //--------- ********---------//

    // createUser(data)
    //   .then((resp) => {
    //     console.log(resp);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  const showPassword = () => {
    if (SeePassword === 'password') {
      setSeePassword('show');
      setEyeIcon(<EyeHidden></EyeHidden>);
    } else {
      setSeePassword('password');
      setEyeIcon(<Eye></Eye>);
      console.log(EyeIcon);
    }
  };

  return (
    <div className="flex flex-wrap flex-col  place-content-center m-auto">
      {/*contenedor */}
      <article className="relative mb-4 left-[94%]">
        <ExitCircle></ExitCircle>
      </article>

      <div
        className="flex flex-col bg-neutral-900/80 border-2 border-gray-letter h-3/6 
       rounded-2xl  items-center justify-center p-10 
         max-w-auto m-auto"
      >
        {/* header del register */}
        <div className="flex flex-col font-bold   m-0 mr-44  mb-2 text-white  ">
          {' '}
          {/* XS */}
          <h1 className="text-[32px] text-right m-auto font-medium whitespace-nowrap   ">
            {' '}
            {/* XS */}
            Todos votamos :{')'}
          </h1>
          <p className="font-normal">Registratre para ingresar</p>{' '}
        </div>

        {/* ---FORM CONTENEDOR / GRID--- */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" grid grid-cols-2 grid-rows-4-min gap-x-2 gap-y-1 text-white m-0 "
        >
          {/* XS */}

          {/* ---EMAIL--- */}
          <label className="flex flex-col  gap-1 col-span-2 m-0">
            <span className="font-semibold ">Email</span>
            <input
              id="email"
              className="border-2 border-gris-dark p-2 rounded-[5px] bg-neutral-900/0"
              type="text"
              placeholder="ejemplo@gmail.com"
              {...register('email')}
            />
            <div className="absolute ml-[23rem] mt-9  ">
              <YellowOk className={hiddenEmail}></YellowOk>
            </div>
          </label>

          {/* --- FIRST NAME --- */}
          <label className="flex flex-col col-start-1">
            <span className="font-semibold">First Name</span>
            <input
              className=" border-2 border-gris-dark p-2 bg-neutral-900/0 rounded-[5px]"
              type="text"
              placeholder="Erik"
              {...register('firstName')}
            />
            {/* --- LAST NAME */}
          </label>
          <label className="flex flex-col col-start-2 ">
            <span className="font-semibold ">Last Name</span> {/* XS */}
            <input
              className=" border-2 border-gris-dark p-2 bg-neutral-900/0 rounded-[5px]"
              type="text"
              placeholder="Perez"
              {...register('lastName')}
            />
          </label>
          {/* --- PASSWORD--- */}
          <label className="flex flex-col col-span-2">
            <span className="font-semibold ">Password</span> {/* XS */}
            <input
              className="border-2 border-gris-dark  p-2 bg-neutral-900/0 rounded-[5px]"
              type={SeePassword}
              {...register('password')}
            />
            <div
              onClick={() => {
                showPassword();
              }}
              className="absolute ml-[20rem] mt-9 cursor-pointer  "
            >
              {EyeIcon}
            </div>
            <div className="absolute ml-[23rem] mt-9  ">
              <Alert className={hiddenPassword}></Alert>
            </div>
          </label>

          {/* --- SING UP BUTTON--- */}
          <div className="flex flex-col col-span-2">
            <p className="text-left text-slate-300 text-sm mb-4 mt-0 font-normal ">
              {' '}
              {/* XS */}
              La contraseña debe tener mayúsculas, minúsculas y números
            </p>
            <button className="bg-app-yellow rounded-sm font-bold h-10 text-black">
              Crear cuenta
            </button>
            <Link
              href={'./LoginCard'}
              className="text-center app-subtitle-2 text-app-yellow mt-4"
            >
              o inicia sesion
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
