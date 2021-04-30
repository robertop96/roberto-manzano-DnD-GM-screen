import './CharacterSheet.scss';
import React from 'react';
import Stats from '../../components/CharacterSheet/Stats/Stats';
import Skills from '../../components/CharacterSheet/Skills/Skills';
import Proficiency from '../../components/CharacterSheet/Proficiency/Proficiency';
import Defense from '../../components/CharacterSheet/Defence/Defence';
import Features from '../../components/CharacterSheet/Features/Features';
function CharacterSheet() {
  return (
    <section className="character-sheet">
      <form className="sheet-form">
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
