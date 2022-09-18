import SignIn from "./SignIn";
import SignUpForm from "../sign-up/SignUpForm";
import "./Authentication.scss";
function Authentication() {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUpForm />
    </div>
  );
}

export default Authentication;
