import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import {
  createAuthUserWithEmailPassword,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/Button";
import FormInput from "../form-input/FormInput";
import "./SignIn.scss";

function SignIn() {
  const defaultFormFields = {
    email: "",
    password: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user);

      setCurrentUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);
      resetFormFields();
    } catch (error) {
      alert("unable to login");
      console.log(`user creation error: ${error.message}`);
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an Account?</h2>
      <span>Sign in with email and password or a Provider</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email Address"
          name="email"
          value={email}
          type="email"
          required
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          name="password"
          value={password}
          type="password"
          required
          onChange={handleChange}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            Google Sign-In
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
