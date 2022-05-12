import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { PasswordInputField, Sidebar } from '../components';
import '../styles/ChangePasswordPage.css';
import UserAPI from '../services/user.service';
import { openNav } from '../actions/sidebar';
import { useDispatch } from 'react-redux';

const schema = yup
  .object({
    oldPassword: yup
      .string()
      .min(6, 'Password should be at least 6 characters.')
      .max(255, 'Max length is 255 characters.')
      .required('Password is required.'),
    newPassword: yup
      .string()
      .min(6, 'Password should be at least 6 characters.')
      .max(255, 'Max length is 255 characters.')
      .required('Password is required.'),
    confirmPassword: yup
      .string()
      .min(6, 'Password should be at least 6 characters.')
      .max(255, 'Max length is 255 characters.')
      .required('Password is required.')
      .oneOf([yup.ref('newPassword'), null], 'Passwords must match.'),
  })
  .required();

const ChangePasswordPage = () => {
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    const { oldPassword, newPassword } = data;
    try {
      await UserAPI.changePassword('admin', oldPassword, newPassword);
      reset();
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (err) {
      setError(err.response.data.message);
      setTimeout(() => {
        setError('');
      }, 3000);
    }
  };

  return (
    <div className="change-password-container">
      <Sidebar />
      <form
        id="main-content"
        className="change-password-content"
        onSubmit={handleSubmit(onSubmit)}
      >
        <button
          className="openbtn"
          type="button"
          onClick={() => dispatch(openNav())}
        >
          &#9776;
        </button>
        <h1 className="change-password-title">Change Your Password</h1>
        <p>A strong password protect you from security problem</p>
        {success && <span style={{ color: 'green' }}>Success!</span>}
        {error && <span style={{ color: 'red' }}>{error}</span>}
        <PasswordInputField
          label="Current Password"
          id="oldPassword"
          register={register('oldPassword')}
          placeholder="Enter your current password"
          errors={errors}
        />
        <PasswordInputField
          label="New Password"
          id="newPassword"
          register={register('newPassword')}
          placeholder="Enter your new password"
          errors={errors}
        />
        <PasswordInputField
          label="Re-type New Password"
          id="confirmPassword"
          register={register('confirmPassword')}
          placeholder="Enter your new password"
          errors={errors}
        />
        <div className="change-password-buttons">
          <button type="submit" className="save-btn">
            Save
          </button>
          {/* <button disabled className="forgot-password-btn">
            Forgot password?
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default ChangePasswordPage;
