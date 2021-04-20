import React from 'react';
import './Home.scss';
import Header from '../../components/Header/Header';
import InfoCard from '../../components/Card/Card';
import alley from '../../assets/Images/Dnd-alley.jpg';
import traps from '../../assets/Images/adventure-bg.jpg';
import lore from '../../assets/Images/wizzard-lore.jpg';

function Home() {
  const information = [
    {
      image: alley,
      title: 'Start Your Adventure',
      description:
        'Adventurer is a simple to use, easy to learn application created to simplify the logistic of playing Roleplaying Games over the internet, with such and intuitive UI and stylish design, there is no excuse to miss out.'
    },
    {
      image: traps,
      title: 'Join the Fight',
      description:
        'Create a free account and start a Game Session, invite your friends and enjoy the easy to use UI and features designed to provide the best experience possible to any and all Games Sessions.'
    },
    {
      image: lore,
      title: 'Let Us handle the research',
      description:
        "With a free account you'll have access to unlimited game sessions, character sheets, quick access to our core rules and books database, spend your time playing, not researching!"
    }
  ];

  return (
    <article>
      <Header />
      <article className="cards">
        <InfoCard information={information} />
      </article>
    </article>
  );
}

export default Home;
