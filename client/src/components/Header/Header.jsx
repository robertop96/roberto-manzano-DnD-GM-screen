import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import hero from '../../assets/Images/guess.png';

function Header() {
  return (
    <section className="header">
      <article className="hero">
        <section className="hero__text">
          <h1 className="hero__text--title">Join The Adventure!</h1>
          <p className="hero__text--paragraph">
            Unleash your imagination and join the battle
          </p>
        </section>
        <figure className="hero__figure">
          <img
            className="hero__figure--img"
            src={hero}
            alt="Guess ill die logo"
          />
        </figure>
        <section className="hero__call-to-action">
          <div className="hero__call-to-action--button">
            <Link className="hero__call-to-action--link" to="/signup">
              Join the Adventure
            </Link>
          </div>
        </section>
      </article>
    </section>
  );
}

export default Header;
