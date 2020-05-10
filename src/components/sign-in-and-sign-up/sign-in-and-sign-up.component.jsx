import React from "react";

import SignIn from "../sign-in/sing-in.component.jsx";
import "../../components/sign-in-and-sign-up/sign-in-and-sign-up.styles.scss";
import SignUp from "../../components/sign-up/sign-up.component.jsx";


const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
);

export default SignInAndSignUpPage;