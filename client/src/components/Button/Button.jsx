import './Button.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Button({ text }) {
  return (
    <section className="call-to-action">
      <div className="call-to-action--button">
        <NavLink className="call-to-action--link" to="/sign/up">
          {text}
        </NavLink>
      </div>
    </section>
  );
}

export default Button;
