import React from 'react';

import { PasswordInputField, Sidebar } from '../components';

import '../styles/ChangePassword.css';

const ChangePasswordPage = () => {
  return (
    <div className="change-password-container">
      <Sidebar />
      <div className="change-password-content">
        <h1 className="change-password-title">Change Your Password</h1>
        <p>A strong password protect you from security problem</p>
        <PasswordInputField
          label="Current Password"
          placeholder="Enter your current password"
        />
        <PasswordInputField
          label="New Password"
          placeholder="Enter your new password"
        />
        <PasswordInputField
          label="Re-type New Password"
          placeholder="Enter your new password"
        />
        <div className="change-password-buttons">
          <button className="save-btn">Save</button>
          <button className="forgot-password-btn">Forgot password?</button>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
