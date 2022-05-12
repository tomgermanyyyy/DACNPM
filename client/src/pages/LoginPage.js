import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ReactComponent as LoginIcon } from '../assets/login-icon.svg';
import { ReactComponent as LoginScreenFooter } from '../assets/login-screen-footer.svg';
import '../styles/LoginPage.css';
import { login } from '../actions/auth';

const schema = yup
  .object({
    username: yup
      .string()
      .max(255, 'Max length is 255 characters.')
      .required('Username is required.'),
    password: yup
      .string()
      .min(6, 'Password should be at least 6 characters.')
      .max(255, 'Max length is 255 characters.')
      .required('Password is required.'),
  })
  .required();

const Login = () => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  const alerts = useSelector((state) => state.alert);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { username, password } = data;

    dispatch(login(username, password));
  };

  if (loading) {
    return <div>Loading</div>;
  }

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login-container">
      <LoginIcon className="login-icon" />
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="login-title">Smart Farm</h1>
        <p className="login-text">Log in and start managing your farm!</p>
        <input
          className="login-input username"
          type="text"
          {...register('username')}
          placeholder="Username"
        />
        {errors.username && (
          <span className="err-msg">{errors.username.message}</span>
        )}
        {alerts &&
          alerts.length > 0 &&
          alerts.map((alert) => <span className="err-msg">{alert.msg}</span>)}
        <input
          className="login-input password"
          type="password"
          {...register('password')}
          placeholder="Password"
        />
        {errors.password && (
          <span className="err-msg">{errors.password.message}</span>
        )}
        <div className="remember-forgot-pass">
          <label class="remember-me-container">
            Remember me
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          {/* <Link className="forgot-pass" to="#">
            Forgot password?
          </Link> */}
        </div>
        <button type="submit" className="login-button">
          <span>Login</span>
        </button>
      </form>
      <LoginScreenFooter className="login-footer" />
    </div>
  );
};

export default Login;
