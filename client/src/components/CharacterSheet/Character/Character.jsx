import './Character.scss';
import React from 'react';

function Character({ player }) {
  return (
    <section className="character-section">
      <div className="char-info-wrapper">
        <div className="char-info">
          <input
            className="char-info__input"
            type="text"
            name="player"
            defaultValue={player?.name}
          />
          <label className="char-info__label" name="player">
            Player's Name
          </label>
        </div>
        <div className="char-info">
          <input
            className="char-info__input"
            type="text"
            name="race"
            defaultValue={player?.race}
          />
          <label className="char-info__label" name="race">
            Race
          </label>
        </div>
        <div className="char-info">
          <input
            className="char-info__input"
            type="text"
            name="Class"
            defaultValue={player?.class}
          />
          <label className="char-info__label" name="Class">
            Class & LvL
          </label>
        </div>
        <div className="char-info">
          <input
            className="char-info__input"
            type="text"
            name="Alignment"
            defaultValue={player?.alignment}
          />
          <label className="char-info__label" name="Alignment">
            Alignment
          </label>
        </div>
        <div className="char-info">
          <input
            className="char-info__input"
            type="text"
            name="Background"
            defaultValue={player?.background}
          />
          <label className="char-info__label" name="Background">
            Background
          </label>
        </div>
        <div className="char-info">
          <input
            className="char-info__input"
            type="text"
            name="exp"
            defaultValue={player?.experience}
          />
          <label className="char-info__label" name="exp">
            Experience
          </label>
        </div>
      </div>
    </section>
  );
}

export default Character;
