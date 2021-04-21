import './Button.scss';
import React from 'react';
import { Link } from 'react-router-dom';

function Button({ text }) {
  return (
    <section className="call-to-action">
      <div className="call-to-action--button">
        <Link className="call-to-action--link" to="/sign/up">
          {text}
        </Link>
      </div>
    </section>
  );
}

export default Button;
