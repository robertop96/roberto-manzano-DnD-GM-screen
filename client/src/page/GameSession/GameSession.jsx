import React, { useState, useEffect } from 'react';
import './GameSession.scss';
import axios from 'axios';
import ConditionButton from '../../components/Modals/Conditions/ConditionButton/ConditionButton';
import FeatureButton from '../../components/Modals/Features/FeatureButton/FeatureButton';
import SpellButton from '../../components/Modals/Spells/SpellButton/SpellButton';
import MonstersButton from '../../components/Modals/Monsters/MonsterButton/MonsterButton';
import CharacterSheet from '../../components/Modals/CharacterSheet/CharacterSheet';

function GameSession() {
  const players = [
    {
      name: 'Roberto',
      race: 'Human',
      class: 'Wizard lvl 1',
      alignment: 'Chaotic Good',
      background: 'Chef',
      experience: '0'
    },
    {
      name: 'Orlando',
      race: 'Half-Orc',
      class: 'Barbarian',
      lvl: '1',
      alignment: 'Neutral Good',
      background: 'Trainer',
      experience: '0'
    },
    {
      name: 'Chris',
      race: 'Half-Elf',
      class: 'Ranger',
      lvl: '1',
      alignment: 'Lawful Good',
      background: 'Electrician',
      experience: '0'
    },
    {
      name: 'Lenin',
      race: 'Halfling',
      class: 'Bard',
      lvl: '1',
      alignment: 'Lawful Neutral',
      background: 'Manager',
      experience: '0'
    }
  ];

  const getConditions = async () => {
    let res = await axios.get('https://www.dnd5eapi.co/api/conditions');
    setConditions(res.data.results);
  };

  const getFeatures = async () => {
    let res = await axios.get('https://www.dnd5eapi.co/api/features');
    setFeatures(res.data.results);
  };

  const getSpells = async () => {
    let res = await axios.get('https://www.dnd5eapi.co/api/spells');
    setSpells(res.data.results);
  };

  const getMonsters = async () => {
    let res = await axios.get('https://www.dnd5eapi.co/api/monsters');
    setMonsters(res.data.results);
  };

  const [conditions, setConditions] = useState(null);
  const [features, setFeatures] = useState(null);
  const [spells, setSpells] = useState(null);
  const [monsters, setMonsters] = useState(null);

  useEffect(() => {
    getConditions();
    getFeatures();
    getSpells();
    getMonsters();
  }, []);

  return (
    <section className="game-session">
      <h1 className="game-session__title">Welcome To Your Adventure!</h1>
      <article className="aids-wrapper">
        <article className="information">
          <h2 className="information__title">Game Session Aid</h2>
          <div className="information__modals">
            <div className="information__modals--modal">
              <ConditionButton conditions={conditions} />
            </div>
            <div className="information__modals--modal">
              <FeatureButton features={features} />
            </div>
            <div className="information__modals--modal">
              <SpellButton spells={spells} />
            </div>
            <div className="information__modals--modal">
              <MonstersButton monsters={monsters} />
            </div>
          </div>
        </article>
        <article className="information">
          <h2 className="information__title">Players Character Sheets</h2>
          <article className="information__modals">
            {players.map((player) => (
              <div className="information__modals--modal">
                <CharacterSheet player={player} />
              </div>
            ))}
          </article>
        </article>
      </article>
    </section>
  );
}

export default GameSession;
