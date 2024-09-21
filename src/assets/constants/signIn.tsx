import { RiGoogleFill, RiAppleFill,RiFacebookFill } from "react-icons/ri";
import {SignIn} from "../shared/types.ts";


 const  forSignIn:Array<SignIn> = [
    {
        icon: <RiGoogleFill/>,
        text:"Sign In with Gmail Account"
    },
    {
        icon: <RiFacebookFill/>,
        text:"Sign In with Facebook"
    },
    {
        icon: <RiAppleFill />,
        text:"Sign In with Apple"
    }

]

export default forSignIn;