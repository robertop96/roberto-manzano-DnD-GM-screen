import './Character.scss';
import React from 'react';

function Character() {
  return (
    <section className="character-section">
      {/* <div className="char-name">
        <input className="char-name__input" type="text" name="character" />
        <label className="char-name__label" name="character">
          Character Name
        </label>
      </div> */}
      <div className="char-info-wrapper">
        <div className="char-info">
          <input className="char-info__input" type="text" name="player" />
          <label className="char-info__label" name="player">
            Player's Name
          </label>
        </div>
        <div className="char-info">
          <input className="char-info__input" type="text" name="race" />
          <label className="char-info__label" name="race">
            Race
          </label>
        </div>
        <div className="char-info">
          <input className="char-info__input" type="text" name="Class" />
          <label className="char-info__label" name="Class">
            Class & LvL
          </label>
        </div>
        <div className="char-info">
          <input className="char-info__input" type="text" name="Alignment" />
          <label className="char-info__label" name="Alignment">
            Alignment
          </label>
        </div>
        <div className="char-info">
          <input className="char-info__input" type="text" name="Background" />
          <label className="char-info__label" name="Background">
            Background
          </label>
        </div>
        <div className="char-info">
          <input className="char-info__input" type="text" name="exp" />
          <label className="char-info__label" name="exp">
            Experience
          </label>
        </div>
      </div>
    </section>
  );
}

export default Character;
