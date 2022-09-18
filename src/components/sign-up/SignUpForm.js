import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import {
  createAuthUserWithEmailPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

function SignUpForm() {
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = setFormFields(defaultFormFields);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailPassword(email, password);

      await createUserDocumentFromAuth(user, { displayName });

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already used");
      }
      console.log(`user creation error: ${error.message}`);
    }
  };
  return (
    <div>
      <h1>Sign Up with email</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          name="displayName"
          value={displayName}
          type="text"
          required
          onChange={handleChange}
        />

        <label>Email Address</label>
        <input
          name="email"
          value={email}
          type="email"
          required
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          name="password"
          value={password}
          type="password"
          required
          onChange={handleChange}
        />

        <label>Confirm Password</label>
        <input
          name="confirmPassword"
          value={confirmPassword}
          type="password"
          required
          onChange={handleChange}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
