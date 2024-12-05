function Signup() {
  return (
    <>
      <div className="bg-slate-100 flex flex-col justify-items-center ">
        <p className="text-black-800 text-4xl "> Signup</p>
        <div className="flex flex-col mt-4 space-y-3 w-96">
          <input
            type="text"
            placeholder="First-Name"
            className="border-black text-black py-2 px-4 rounded-2xl"
          ></input>
          <input
            type="text"
            placeholder="Second-Name"
            className="border-black text-black  black py-2 px-4 rounded-2xl"
          ></input>
          <input
            type="text"
            placeholder="Username"
            className="border-black text-black  black py-2 px-4 rounded-2xl"
          ></input>
          <input
            type="email"
            placeholder="Email"
            className="border-black text-black  black py-2 px-4 rounded-2xl"
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="border-black text-black  black py-2 px-4 rounded-2xl"
          ></input>
          
        </div>
        <div className="flex-col justify-between space-x-2 mt-3">
          <h1 className="text-2xl">Sign In As:</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Admin
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            User
          </button>
        </div>
        <div className="flex-col justify-around space-x-3 text-1xl">
          <h3>Dont have an Account ?</h3>
          <span className="text-blue-900">SignUp</span>
        </div>
      </div>
    </>
  );
}
export default Signup;
