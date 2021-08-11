import React, { useState } from "react";

import FormInput from "../form-input";
import CustomButton from "../custom-button";
import "./sign-in.styles.scss";

import { auth, singInWithGoogle } from "../../firebase/firebase.utils";

const SingIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setDefaultState = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      default:
        setPassword(value);
    }
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />

        <div className="buttons">
          <CustomButton type="submit">Sing In</CustomButton>
          <CustomButton onClick={singInWithGoogle} isGoogleSignIn>
            Sing In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SingIn;
