import { Link } from "react-router-dom";
function Login() {
  return (
    <>
      <div className="bg-slate-100 grid justify-items-center">
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
        </div>
        <div className="flex justify-between space-x-2 mt-3">
          <h1 className="text-2xl">Sign Up As:</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Admin
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            User
          </button>
        </div>
        <div className="flex justify-around space-x-3 text-1xl">
          <h3>Dont have an Account ?</h3>
          <Link to="/signup">
            <span className="text-blue-900">SignUp</span>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Login;
