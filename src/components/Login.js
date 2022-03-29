import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <Link to="/" className="login__logo">
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Logo"
        />
      </Link>
      <div className="login__wrapper">
        <h1>Sign-In</h1>
        <div className="login__inputWrapper">
          <label>Email or mobile phone number</label>
          <input />
        </div>
        <button>Continue</button>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
      </div>
      <p>New to Amazon?</p>
      <button>Create your Amazon account</button>
    </div>
  );
}

export default Login;
