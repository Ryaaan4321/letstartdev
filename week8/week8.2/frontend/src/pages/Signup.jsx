import { BottomWarning } from "../components/BottomWarning";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { Button } from "../components/Button";
import { useState } from "react";
import axios from "axios";

export function Signup() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Signup"} />
          <SubHeading label={"Enter your credentials"} />
          <InputBox
            onChange={((e)=>{
                setFirstName(e.target.value)
            })}
            label={"FirstName"}
          />
          <InputBox
            onChange={(e) => setLastName(e.target.value)}
            label={"SecondName"}
          />
          <InputBox
            onChange={(e) => setUsername(e.target.value)}
            label={"Email"}
          />
          <InputBox
            onChange={(e) => setPassword(e.target.value)}
            label={"Password"}
          />
          <Button
            onClick={() => {
              axios.post("http:://localhost:3000/api/v2/signup", {
                firstname,
                lastname,
                username,
                password,
              });
            }}
            label={"Sign Up"}
            to={"somepostfunction"}
          />
          <BottomWarning
            label={"Already Have An Account"}
            buttonText={"SignIn"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
}
