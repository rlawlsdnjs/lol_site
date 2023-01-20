import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthProvider from "./components/sign/provider/authProvider";
import "./reset.css";

import { BrowserRouter } from "react-router-dom";

import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from "recoil";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RecoilRoot>
            <AuthProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </AuthProvider>
        </RecoilRoot>
    </React.StrictMode>
);
