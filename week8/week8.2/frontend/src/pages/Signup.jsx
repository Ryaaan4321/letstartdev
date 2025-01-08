import { BottomWarning } from "../components/BottomWarning";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { Button } from "../components/Button";


export function Signup(){
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Signup"}/>
                <SubHeading label={"Enter your credentials"}/>
                <InputBox label={"FirstName"}/>
                <InputBox label={"SecondName"}/>
                <InputBox label={"Email"}/>
                <InputBox label={"Password"}/>
                <Button label={"Sign Up"} to={'somepostfunction'}/>
                <BottomWarning label={"Already Have An Account"} buttonText={"SignIn"} to={'/signin'}/>
            </div>
        </div>

    </div>
}