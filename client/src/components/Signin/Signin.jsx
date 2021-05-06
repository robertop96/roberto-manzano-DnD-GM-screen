import { Link } from 'react-router-dom';
import React from 'react';

function Signin({ handleSignin }) {
  return (
    <form onSubmit={handleSignin} className="form">
      <h1 className="form__title">Sign In</h1>
      <label className="form__label">Email Address:</label>
      <input className="form__input" type="text" id="email" name="email" />
      <label className="form__label">Password:</label>
      <input
        className="form__input"
        type="password"
        id="password"
        name="password"
      />
      <Link className="form__button" to="/roberto">
        <button className="form__button--button">Start Adventure</button>
      </Link>
      <Link className="form__forgot" to="/">
        Forgot Password?
      </Link>
    </form>
  );
}

export default Signin;
