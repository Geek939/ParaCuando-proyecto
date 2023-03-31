import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
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
  const [NavigatetoLogin, setNavigatetoLogin] = useState('');
  const [dataIsCorrect, setdataIsCorrect] = useState(false);
  const router = useRouter();

  const onSubmit = async (data: FormValues) => {
    console.log(data);

    // --- Local storage --- //

    // --- Validacion si esta bien escrito, Email y Password //
    //---email
    if (EmailValidator.validate(data.email)) {
      sethiddenEmail('');
    } else {
      swal('Correo incorrecto');
      sethiddenEmail('hidden');
      setNavigatetoLogin('');
    }

    //----password
    if (/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S/.test(data.password)) {
      sethiddenPassword('hidden');
    } else {
      sethiddenPassword('');
      swal('La contraseña debe tener mayúsculas, minúsculas y números');
      setNavigatetoLogin('');
    }
    //--------- ********---------//

    if (
      /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S/.test(data.password) &&
      EmailValidator.validate(data.email)
    ) {
      setNavigatetoLogin('./LoginCard');
      localStorage.setItem('datos', JSON.stringify(data));
    } else {
      setNavigatetoLogin('');
    }

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
      }
    };

  return (
    <div className="flex flex-wrap flex-col  place-content-center m-auto">
      {/*contenedor */}

      <div
        className="flex flex-col bg-neutral-900/80 border-2 border-gray-letter h-3/6 
       rounded-2xl    p-8 
         max-w-auto m-auto"
      >
        {/* header del register */}
        <div className="flex flex-col font-bold  m-0  text-white  ">
          {' '}
          {/* XS */}
          <h1 className="text-2xl  font-medium    ">
            {' '}
            {/* XS */}
            Todos votamos :{')'}
          </h1>
          <p className="font-normal my-2">Registratre para ingresar</p>{' '}
        </div>

        {/* ---FORM CONTENEDOR / GRID--- */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 grid-rows-4-min gap-x-2 gap-y-1 w-auto
          sm:max-w-auto
            text-white m-0 "
        >
          {/* XS */}

          {/* ---EMAIL--- */}
          <label className="grid grid-cols-3 grid-rows-2-min  col-span-2 m-0">
            <span className="font-semibold col-1 row-1 m-0 ">Email</span>
            <input
              id="email"
              className="border-2 border-gris-dark p-2
              col-span-3 col-start-1 row-start-2
               rounded-[5px] bg-neutral-900/0"
              type="text"
              placeholder="ejemplo@gmail.com"
              {...register('email')}
            />
            <div className="flex place-content-end col-start-3 row-start-2    ">
              <YellowOk className={` m-3 ${hiddenEmail}`}></YellowOk>
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
              className=" border-2 border-gris-dark p-2 
              bg-neutral-900/0 rounded-[5px]"
              type="text"
              placeholder="Perez"
              {...register('lastName')}
            />
          </label>
          {/* --- PASSWORD--- */}
          <label className="grid grid-cols-5 grid-rows-2-min  col-span-2 m-0">
            <span className="font-semibold col-1 row-1 m-0">Password</span>{' '}
            <input
              className="border-2 border-gris-dark p-2
              col-span-5 col-start-1 row-start-2
               rounded-[5px] bg-neutral-900/0"
              type={SeePassword}
              {...register('password')}
            />
            <section className="flex place-content-end col-start-5 row-start-2">
              {/* Show password button */}
              <div
                onClick={() => {
                  showPassword();
                }}
                className=" col-start-4 row-start-2 m-3"
              >
                {EyeIcon}
              </div>
              {/* Alert Password */}
              <Alert className={`m-3 ${hiddenPassword}`}></Alert>
            </section>
          </label>

          {/* --- SING UP BUTTON--- */}
          <div className="flex flex-col col-span-2">
            <p className="text-left text-slate-300 text-sm mb-4 mt-0 font-normal ">
              {' '}
              {/* XS */}
              La contraseña debe tener mayúsculas, minúsculas y números
            </p>

            <button
              onClick={() => router.push(NavigatetoLogin)}
              className="bg-app-yellow rounded-sm font-bold h-10 text-black"
            >
              {' '}
              Crear cuenta
            </button>

            <Link
              href={'/LoginCard'}
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
