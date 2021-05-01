import React from 'react';
import './UserHome.scss';
import Card from '../../components/Card/Card';
import session from '../../assets/Images/Session-background.jpeg';
import { Link } from 'react-router-dom';

function UserHome() {
  const GameSession = [
    {
      image: session,
      title: "Orlando's Session",
      description: "Orlando's First Adventurer's Game"
    },
    {
      image: session,
      title: 'Chris Session',
      description: 'Chris Crazy Adventure'
    },
    {
      image: session,
      title: 'Lenin Last Chance',
      description: 'Will he survive!?'
    }
  ];

  return (
    <section className="welcome-section">
      <article className="welcome-wrapper">
        <article className="welcome">
          <h1 className="welcome__title">Welcome Roberto</h1>
        </article>
        <div className="welcome__buttons">
          <Link to="/game/id" className="welcome__buttons--button">
            Create Game
          </Link>
          <button className="welcome__buttons--button">Join Game</button>
        </div>
      </article>
      <article className="sessions-wrapper">
        <Link className="sessions-wrapper__cards" to="/game/id">
          <Card information={GameSession} />
        </Link>
      </article>
    </section>
  );
}

export default UserHome;
