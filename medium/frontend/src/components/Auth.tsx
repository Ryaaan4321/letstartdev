import { Link } from "react-router-dom";
import {SignupInput} from "@fuccaryan/meidum-common"
import { ChangeEvent, useState } from "react";
interface labelInput{
    label:string,
    placeholder:string,
    onchange:(e:ChangeEvent<HTMLInputElement>)=>void
}
export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const [postInputs,setPostInputs]=useState<SignupInput>({
        email:"",
        username:"",
        password:"",
        name:""
    })
    return <div className="h-screen  flex justify-center flex-col">
         <div className="flex justify-center">
            <div>
                <div className="text-3xl font-extrabold">
                    Create An Account
                </div>
                <div className="text-slate-400 ">
                    Already have an Account?
                    <Link className="pl-2 underline" to='/signin'>Login</Link>

                </div>
            </div>

         </div>
    </div>
}

function labeledInput({label,placeholder,onchange}:labelInput){
         
}