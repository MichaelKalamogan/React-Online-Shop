import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../sign-up/SignUpForm";

function SignIn(props) {
  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm />
    </div>
  );
}

export default SignIn;
