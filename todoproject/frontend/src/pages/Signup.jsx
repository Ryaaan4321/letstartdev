import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <div className="bg-slate-100 flex flex-col items-center ">
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
            className="border-black text-black  py-2 px-4 rounded-2xl"
          ></input>
          <input
            type="text"
            placeholder="Username"
            className="border-black text-black  py-2 px-4 rounded-2xl"
          ></input>
          <input
            type="email"
            placeholder="Email"
            className="border-black text-black py-2 px-4 rounded-2xl"
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="border-black text-black  py-2 px-4 rounded-2xl"
          ></input>
        </div>
        <div className="flex flex-row justify-between space-x-2 mt-3">
          <h1 className="text-2xl">Register As:</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Admin
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            User
          </button>
          
        </div>
        <div className="flex flex-row justify-around space-x-3">
            <h3 className="text-1xl">Dont have an Account ?</h3>
            <Link to="/login">
              <span className="text-blue-900">Login</span>
            </Link>
          </div>
      </div>
    </>
  );
}
export default Signup;
