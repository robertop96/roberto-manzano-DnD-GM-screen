import React from 'react';
import './Signup.scss';
import { Link } from 'react-router-dom';

function Signup({ handleSignup }) {
  return (
    <form onSubmit={handleSignup} className="form">
      <h1 className="form__title">Create Account</h1>
      <label className="form__label">First Name:</label>
      <input
        className="form__input"
        type="text"
        id="first_name"
        name="first_name"
      />
      <label className="form__label">Last Name:</label>
      <input
        className="form__input"
        type="text"
        id="last_name"
        name="last_name"
      />
      <label className="form__label">Email Address:</label>
      <input className="form__input" type="text" id="email" name="email" />
      <label className="form__label">Password:</label>
      <input
        className="form__input"
        type="password"
        id="password"
        name="password"
      />
      <label className="form__label">reroll-Password:</label>
      <input
        className="form__input"
        type="password"
        id="confirm_password"
        name="confirm_password"
      />
      <Link to="/sign/in">
        <button className="form__button">Start Adventure</button>
      </Link>
      <Link className="form__forgot" to="/">
        Forgot Password?
      </Link>
    </form>
  );
}

export default Signup;
