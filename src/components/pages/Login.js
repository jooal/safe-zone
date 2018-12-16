import React from "react";
import "../../styles/Login.css";

function Login() {
    return (
        <div className="login-form">
             <form className = "form-section">
                <a href="#">Login with Facebook</a>
                <p>Warning here about reporting false crimes, discrimation, etc.</p>
             </form>
        </div>
    );
}

export default Login;