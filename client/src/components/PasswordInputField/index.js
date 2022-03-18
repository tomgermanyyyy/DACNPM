import React from 'react';

const PasswordInputField = ({ label, placeholder }) => {
  return (
    <div className="password-input">
      <label htmlFor="password">{label}</label>
      <input id="password" type="password" placeholder={placeholder} />
    </div>
  );
};

export default PasswordInputField;
