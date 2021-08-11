import React from "react";

import SignIn from "../../components/sign-in";
import SignUp from "../../components/sign-up";

import "./sign-in-and-sing-up.styles.scss";

const SingInAndSingUpPage = () => (
  <div className="sign-in-and-sing-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SingInAndSingUpPage;
