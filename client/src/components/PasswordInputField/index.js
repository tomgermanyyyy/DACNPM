import React from 'react';
import styles from '../../styles/PasswordInputField.module.css';

const PasswordInputField = ({ label, placeholder, register, id, errors }) => {
  return (
    <div className={styles.passwordInput}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="password" placeholder={placeholder} {...register} />
      {errors[id] && (
        <p className={styles.errorMessage}>{errors[id].message}</p>
      )}
    </div>
  );
};

export default PasswordInputField;
