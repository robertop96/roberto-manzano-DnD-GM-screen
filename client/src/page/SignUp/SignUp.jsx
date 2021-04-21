import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.scss';

function SignUp() {
  return (
    <section className="signup">
      <h1 className="signup__title">Create Account</h1>
      <form className="form">
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
          type="text"
          id="password"
          name="password"
        />
        <label className="form__label">reroll-Password:</label>
        <input
          className="form__input"
          type="text"
          id="confirm_password"
          name="confirm_password"
        />
        <button className="form__button">Start Adventure</button>
        <Link className="form__forgot" to="/">
          Forgot Password
        </Link>
      </form>
      <div></div>
    </section>
  );
}

export default SignUp;
