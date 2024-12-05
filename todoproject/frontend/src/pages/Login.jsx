function Login() {
  return (
    <>
      <div className="bg-slate-100 grid justify-items-center ">
        <p className="text-black-800 text-4xl  "> Login</p>
        <div className="flex-col mt-4 space-y-3 ">
          <input
            type="email"
            placeholder="Enter your email"
            className="border-black text-black py-2 px-4 rounded-2xl"
          ></input>
          <br />
          <input
            type="password"
            placeholder="Enter your password"
            className="border-black text-black  black py-2 px-4 rounded-2xl"
          ></input>
          <br></br>
          Sign in As:
        </div>
        <div className="flex justify-between space-x-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Admin
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            User
          </button>
        </div>
      </div>
    </>
  );
}
export default Login;
