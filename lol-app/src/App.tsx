import { useState } from "react";
import React, { useContext } from "react";
import "./App.css";
import { app, db, auth } from "./components/sign/firebase";
import { AuthContext } from "./components/sign/context/authContext";
import { SignUp } from "./components/sign/sign";
import Header from "./components/header";
import { loginState } from "./recoil";
import { useRecoilValue } from "recoil";
import { getAuth } from "firebase/auth";
function App() {
    const auth = getAuth();
    const user = auth.currentUser;
    console.log(user);
    console.log(app);

    const userInfo = useContext(AuthContext);
    const loginValue = useRecoilValue(loginState);

    return (
        <>
            <Header />
            {loginValue && <SignUp />}
        </>
    );
}

export default App;
