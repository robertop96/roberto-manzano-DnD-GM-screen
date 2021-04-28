import './CharacterSheet.scss';
import React from 'react';
import CharacterStats from '../../components/CharacterSheet/CharacterStats/CharacterStats';
import CharacterStSkills from '../../components/CharacterSheet/CharacterStSkills/CharacterStSkills';
import CharacterSheetProf from '../../components/CharacterSheet/CharacterSheetProf/CharacterSheetProf';
import CharacterSheetDefense from '../../components/CharacterSheet/CharacterSheetDefense/CharacterSheetDefense';
function CharacterSheet() {
  return (
    <section className="character-sheet">
      <form className="cs-form">
        <div className="cs-form__title">
          <h1>PLAYER INFO</h1>
        </div>

        <div className="cs-form__characterInfo">
          <div className="cs-form__characterInfo--duo">
            <CharacterStats />
            <CharacterStSkills />
          </div>
          <CharacterSheetProf />
        </div>
        <div>
          <CharacterSheetDefense />
        </div>
        <div>
          <div>
            <h2>C.Personality</h2>
          </div>
          <div>
            <h2>C.Passive</h2>
          </div>
        </div>

        <div>
          <h2>C.Attack</h2>
        </div>
        <div>
          <h2>C.Actions</h2>
        </div>
      </form>
    </section>
  );
}

export default CharacterSheet;
