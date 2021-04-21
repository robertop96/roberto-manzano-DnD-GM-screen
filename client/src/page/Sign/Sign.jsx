import React from 'react';
import Signup from '../../components/Signup/Signup';
import Signin from '../../components/Signin/Signin';
import { useLocation } from 'react-router-dom';
import './Sign.scss';

function SignUp() {
  const location = useLocation();

  const handleSignup = (e) => {
    e.preventDefault();
  };

  const handleSignin = (e) => {
    e.preventDefault();
  };

  return (
    <section className="signup">
      {location.pathname === '/sign/up' ? (
        <Signup handleSignup={handleSignup} />
      ) : (
        <Signin handleSignin={handleSignin} />
      )}
    </section>
  );
}

export default SignUp;
