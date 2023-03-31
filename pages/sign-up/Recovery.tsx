const RecoverPasswordPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="bg-black/80 w-[80%] max-w-[557px] h-[529px] flex flex-col justify-center px-8 shadow-2xl gap-12 rounded-xl border-1">
        <h3 className="text-white text-3xl">Choose a new password</h3>
        <form action="" className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-white text-lg">new password</p>
            <input
              className="w-full text-white bg-black/10 border-[1px] border-white rounded-md text-lg p-2"
              type="password"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-white text-lg">Write it again</p>
            <input
              className="w-full text-white bg-black/10 border-[1px] border-white rounded-md text-lg p-2"
              type="password"
            />
          </div>
        </form>
        <button className="w-full bg-yellow-300 rounded-md p-3 text-lg">
          Change Password
        </button>
      </div>
    </div>
  );
};

export default RecoverPasswordPage;
