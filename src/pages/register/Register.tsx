import "./register.scss";
import {city} from "../../assets/images/img";
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <div className="register-page">
            <div className="register-container">
                <div className="registration">
                    <h1>Register</h1>
                    <span>New Opportunities.
                     <span> New Work.</span> New You</span>
                    <form>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                        />
                        <input
                            type="text"
                            name="surname"
                            placeholder="Surname"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                        />
                        <button>Register</button>
                    </form>
                    <div className="ref-to-login">
                        <span>Already have an account?</span>
                        <Link to="/login">
                        <button>Log in</button>
                        </Link>
                    </div>
                </div>
            </div>
            <img src={city} alt="City"/>
        </div>
    );
};

export default Register;