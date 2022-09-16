import React from "react";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

function SignIn(props) {
  const logGoogleUser = async () => {
    try {
      const response = await signInWithGooglePopup();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
}

export default SignIn;
