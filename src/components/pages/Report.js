import React from "react";
import Login from "./Login";
import "../../styles/Report.css";

function Report() {
    return (
        <div className="login-form">
            <h2>Pleaes login with Facebook to report a crime.</h2>
             <Login />
        </div>
    );
}

export default Report;