import React, { useState, useEffect } from 'react';
import './GameSession.sass';
import axios from 'axios';
import ConditionButton from '../../components/Modals/Conditions/ConditionButton/ConditionButton';
import FeatureButton from '../../components/Modals/Features/FeatureButton/FeatureButton';
import SpellButton from '../../components/Modals/Spells/SpellButton/SpellButton';
import MonstersButton from '../../components/Modals/Monsters/MonsterButton/MonsterButton';

function GameSession() {
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
    <div>
      <ConditionButton conditions={conditions} />
      <FeatureButton features={features} />
      <SpellButton spells={spells} />
      <MonstersButton monsters={monsters} />
    </div>
  );
}

export default GameSession;
