import './Defence.scss';

import React from 'react';

function CharacterSheetDefense() {
  return (
    <section className="defense-section">
      <section className="defense-wrapper">
        <article className="small-box-wrapper">
          <div className="small-box">
            <input className="small-box__input" name="ac" type="text" />
            <h4 className="small-box__title">AC</h4>
          </div>
          <div className="small-box">
            <input className="small-box__input" name="hp" type="text" />
            <h4 className="small-box__title">HP</h4>
          </div>
          <div className="small-box">
            <input className="small-box__input" name="temp-hp" type="text" />
            <h4 className="small-box__title">Temp. HP</h4>
          </div>
        </article>
        <article className="big-box-wrapper">
          <div className="big-box">
            <input className="big-box__input" name="current-hp" type="text" />
            <h4 className="big-box__title">CURRENT HP</h4>
          </div>
        </article>
      </section>
      <section className="defense-wrapper">
        <article className="small-box-wrapper">
          <div className="small-box">
            <input className="small-box__input" name="initiative" type="text" />
            <h4 className="small-box__title">Init</h4>
          </div>
          <div className="small-box">
            <input className="small-box__input" name="speed" type="text" />
            <h4 className="small-box__title">Speed</h4>
          </div>
          <div className="small-box">
            <input className="small-box__input" name="vision" type="text" />
            <h4 className="small-box__title">Vision</h4>
          </div>
        </article>
        <article className="death-wrapper">
          <div className="death-box">
            <label className="death-box__label"> Success</label>
            <input
              className="death-box__input"
              type="checkbox"
              name="first-success"
            />
            <input
              className="death-box__input"
              type="checkbox"
              name="second-success"
            />
            <input
              className="death-box__input"
              type="checkbox"
              name="third-success"
            />
          </div>
          <div className="death-box">
            <label className="death-box__label"> Failure</label>
            <input
              className="death-box__input"
              type="checkbox"
              name="first-failure"
            />
            <input
              className="death-box__input"
              type="checkbox"
              name="second-failure"
            />
            <input
              className="death-box__input"
              type="checkbox"
              name="third-failure"
            />
          </div>
          <h4 className="death-box__title">Death Saves</h4>
        </article>
      </section>
    </section>
  );
}

export default CharacterSheetDefense;
