import './CharacterSheetDefense.scss';

import React from 'react';

function CharacterSheetDefense() {
  return (
    <section className="defense">
      <section className="defense__section">
        <article className="box">
          <div className="box__small-wrapper">
            <input className="box__small-input" name="ac" type="text" />
            <h4 className="box__title">AC</h4>
          </div>
          <div className="box__small-wrapper">
            <input className="box__small-input" name="hp" type="text" />
            <h4 className="box__title">HP</h4>
          </div>
          <div className="box__small-wrapper">
            <input className="box__small-input" name="temp-hp" type="text" />
            <h4 className="box__title">Temp. HP</h4>
          </div>
        </article>
        <article className="box__big-wrapper">
          <input className="box__big-input" name="current-hp" type="text" />
          <h4 className="box__title">CURRENT HP</h4>
        </article>
      </section>
      <section className="defense__section">
        <article className="box">
          <div className="box__small-wrapper">
            <input className="box__small-input" name="initiative" type="text" />
            <h4 className="box__title">Init</h4>
          </div>
          <div className="box__small-wrapper">
            <input className="box__small-input" name="speed" type="text" />
            <h4 className="box__title">Speed</h4>
          </div>
          <div className="box__small-wrapper">
            <input className="box__small-input" name="vision" type="text" />
            <h4 className="box__title">Vision</h4>
          </div>
        </article>
        <article className="box__survival-wrapper">
          <div className="box__survival-cont">
            <label className="box__survival-cont--label"> Success</label>
            <input
              className="box__survival-cont--input"
              type="checkbox"
              name="first-success"
            />
            <input
              className="box__survival-cont--input"
              type="checkbox"
              name="second-success"
            />
            <input
              className="box__survival-cont--input"
              type="checkbox"
              name="third-success"
            />
          </div>
          <div className="box__survival-cont">
            <label className="box__survival-cont--label"> Failure</label>
            <input
              className="box__survival-cont--input"
              type="checkbox"
              name="first-failure"
            />
            <input
              className="box__survival-cont--input"
              type="checkbox"
              name="second-failure"
            />
            <input
              className="box__survival-cont--input"
              type="checkbox"
              name="third-failure"
            />
          </div>
          <h4 className="box__title">Death Saves</h4>
        </article>
      </section>
    </section>
  );
}

export default CharacterSheetDefense;
