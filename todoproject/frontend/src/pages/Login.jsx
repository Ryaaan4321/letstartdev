import { Link } from "react-router-dom";
import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { SocialMediaLoginButton } from "../components/SocialMediaLoginButton";
import { Button } from "../components/Button";

function Login() {
  return (
    <>
      <div className=" flex flex-col items-center ">
        <div className="shadow-md m-4 p-5 mt-12 ">
          <Heading label={"Welcome Again Anon..!"} />
          <SocialMediaLoginButton />
          <SubHeading label={"Let's explore the life again.."} />
          <div className="flex flex-col mt-4 space-y-3 w-96 ">
           
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
          <Button label={"Start Your Journey..."} />
          <div className="flex space-x-1 mt-2">
            <div>
              <h3 className="text-1xl">Don't have an Account ?</h3>
            </div>
            <div>
              <Link to="/signup">
                <span className="text-blue-900">Signup</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
