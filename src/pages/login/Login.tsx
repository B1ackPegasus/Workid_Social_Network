import  "./login.scss"
import forSignIn from "../../assets/constants/signIn";
import SignInWith from "../../components/SignInWith/SignInWith";
import {SignIn} from "../../assets/shared/types";
import { IoIosArrowRoundForward } from "react-icons/io";

const Login = () => {
    return (
        <div className="login-page">
            <div className="login-card">
            <div className="top-card">
                <div className="top-card-center">
                    <div className="top-rounded-text">
                        <div className="top-card-title-center">
                         Are you looking for a job? <span className="grey-text-login">Explore how we can help you. </span>
                        </div>
                        <div className="arrow-login">
                            <IoIosArrowRoundForward/>
                        </div>
                    </div>
                    <p className="login-top-text">Login to Your Account</p>

                </div>
            <div className="login-top-text-bottom">
                Discover New Heights in Your Professional Journey. Unlock hidden Opportunities
            </div>

            </div>
            <div className="bottom-card">
            <div className="bottom-left-part">
                <form className="login-form"
                    target="_blank"
                    method="POST">
                <input
                type="email"
                name="email"
                placeholder="Email"
                className="login-input"/>

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="login-input"/>
                    <button
                        className="login-button">
                        <span className="login-button-text">Login to Your Account</span>
                        <div className="arrow-login-button">
                            <IoIosArrowRoundForward/>
                        </div>
                    </button>
                </form>
            </div>
                <div className="div-slash">
                    <span className="slash">/</span>
            </div>
            <div className="bottom-right-part">
                {
                    forSignIn.map((element:SignIn) => (
                        <SignInWith icon={element.icon} text={element.text}/>
                    ))
                }
            </div>

        </div>
            </div>


        </div>
    );
};

export default Login;