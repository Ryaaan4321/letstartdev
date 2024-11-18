function Login() {
  return (
    <>
      <div>
        <p className="text-black-800 text-3xl flex align-items ml-72">
          {" "}
          hmlo hmlo
        </p>
        <div className="flex flex-col">
          <input
            type="email"
            placeholder="Enter your email"
            className="border-black text-black"
          ></input>
          <br />
          <input
            type="password"
            placeholder="Enter your password"
            className="border-black text-black"
          ></input>
          <br></br>
          Sign in As:
          <div className="flex flex-row space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Admin
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              User
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
