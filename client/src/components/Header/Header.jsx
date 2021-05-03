import React from 'react';
import './Header.scss';
import hero from '../../assets/Images/guess.png';
import Button from '../../components/Button/Button';

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
        <Button text={'Join the Adventure'} />
      </article>
    </section>
  );
}

export default Header;
