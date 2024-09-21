import "./signInWith.scss"

type Props = {
   icon:JSX.Element;
   text:string;
}
const SignInWith = ({icon , text}:Props) => {
    return (
        <div className="sign-in-with">
        <div className="sign-in-icon">
            {icon}
        </div>
        <p className="sing-in-text">{text}</p>
        </div>
    );
};

export default SignInWith;