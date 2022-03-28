import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as LoginIcon } from '../assets/login-icon.svg';
import { ReactComponent as LoginScreenFooter } from '../assets/login-screen-footer.svg';
import '../styles/LoginPage.css';

const Login = () => {
  const login = () => {};

  return (
    <div className="login-container">
      <LoginIcon className="login-icon" />
      <form className="login-form">
        <h1 className="login-title">Smart Farm</h1>
        <p className="login-text">Log in and start managing your farm!</p>
        <input
          className="login-input username"
          type="text"
          placeholder="Username"
        />
        <input
          className="login-input password"
          type="password"
          placeholder="Password"
        />
        <div className="remember-forgot-pass">
          <label class="remember-me-container">
            Remember me
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <Link className="forgot-pass" to="#">
            Forgot password?
          </Link>
        </div>
        <button type="button" className="login-button" onClick={login}>
          <span>Login</span>
        </button>
      </form>
      <LoginScreenFooter className="login-footer" />
    </div>
  );
};

export default Login;
