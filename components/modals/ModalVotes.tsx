import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

interface IWeVotes {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const WeVotes: React.FC<IWeVotes> = ({ setIsLogin }) => {
  return (
    <section className="flex flex-col gap-4 mb-auto p-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-white text-4xl">We all vote {':)'}</h2>
        <p className="text-lg text-white">
          All votes are important here. To validate yours you must have an
          account.
        </p>
      </div>
      <button className="bg-yellow-300 p-4 rounded-sm mt-4">
        <Link className="font-medium" href={'/sign-up'}>
          Create Account
        </Link>
      </button>
      <button className="text-yellow-300 underline text-center"  onClick={() => setIsLogin(true)}>
        <p>
          Or log in
        </p>
      </button>
    </section>
  );
};

const FormLogin = () => {
  return (
    <section className="flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-white text-4xl">¡Hello!</h2>
        <p className="text-md text-white">
          Login with the data you entered during your registration.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <form className="flex flex-col gap-4">
          <div>
            <p className="text-md text-white">Email</p>
            <input
              className="w-full text-lg p-3 bg-black border-2 rounded-md border-white text-white"
              type="text"
            />
          </div>
          <div>
            <p className="text-md text-white">Password</p>
            <input
              className="w-full text-lg p-3 bg-black border-2 rounded-md border-white text-white"
              type="password"
            />
          </div>
        </form>
        <p className="text-sm text-white">
          Did you forget your password?
          <Link
            className="text-yellow-300 underline text-center ml-1"
            href={''}
          >
            Get it back here
          </Link>
        </p>
      </div>
      <button className="text-lg bg-yellow-300 py-3 rounded-md">Log in</button>
      <Link href={''} className="text-yellow-300 underline text-center">
        Or create an account here
      </Link>
    </section>
  );
};

const ModalVotes: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isClose, setIsClose] = useState<boolean>(false);
  const path = useRouter();
  console.log(path);

  return (
    <>
      {isClose ? (
        ''
      ) : (
        <div className=" left-0 right-0  fixed flex justify-end z-40">
          <div className="bg-black w-[378px] h-[526px] flex flex-col justify-center items-center p-4 rounded-xl shadow-2xl mr-8">
            <button
              onClick={() => setIsClose(true)}
              className="text-yellow-300 text-lg border-2 border-yellow-300 flex justify-center items-center p-2 rounded-[50%] w-[30px] h-[30px] ml-auto mb-auto"
            >
              ✖
            </button>
            {isLogin ? <FormLogin /> : <WeVotes setIsLogin={setIsLogin} />}
          </div>
        </div>
      )}
    </>
  );
};

export default ModalVotes;
