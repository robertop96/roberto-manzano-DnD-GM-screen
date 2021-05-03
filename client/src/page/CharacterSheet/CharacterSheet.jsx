import './CharacterSheet.scss';
import React from 'react';
import Character from '../../components/CharacterSheet/Character/Character';
import Stats from '../../components/CharacterSheet/Stats/Stats';
import Skills from '../../components/CharacterSheet/Skills/Skills';
import Proficiency from '../../components/CharacterSheet/Proficiency/Proficiency';
import Defense from '../../components/CharacterSheet/Defence/Defence';
import Features from '../../components/CharacterSheet/Features/Features';
function CharacterSheet({ player }) {
  return (
    <section className="character-sheet">
      <form className="sheet-form">
        <div className="sheet-form__character">
          <div className="sheet-form__character--wrapper">
            <Character player={player} />
          </div>
        </div>
        <div className="sheet-form__left-side">
          <div className="sheet-form__left-side--stats">
            <Stats />
            <Skills />
          </div>
          <Proficiency />
        </div>
        <div className="sheet-form__right-side">
          <Defense />
          <Features />
        </div>
      </form>
    </section>
  );
}

export default CharacterSheet;
