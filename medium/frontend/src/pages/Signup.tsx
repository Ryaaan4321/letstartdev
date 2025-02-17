import { Auth } from "../components/Auth";
import { Quote } from "../components/Quote";

export default function Signup() {
    return <div className="grid grid-cols-2">
        <div className="flex justify-center"><Auth type="signup"/></div>
        <div className="invisible lg:visible">
            <Quote maintitle="hmlo hmlo from the quote the support that u want is always over here" descreption="hmlo hmlo from the descreption" context="hmlo hmlo from the context"/>
        </div>
    </div>
}