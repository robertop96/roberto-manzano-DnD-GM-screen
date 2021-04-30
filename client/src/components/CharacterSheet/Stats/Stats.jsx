import './Stats.scss';
import React from 'react';

export default function CharacterInfo() {
  const attributes = [
    { name: 'strength', abbreviation: 'STR', score: 10, modifier: 0 },
    { name: 'dexterity', abbreviation: 'DEX', score: 10, modifier: 0 },
    { name: 'constitution', abbreviation: 'CON', score: 10, modifier: 0 },
    { name: 'intelligence', abbreviation: 'INT', score: 10, modifier: 0 },
    { name: 'wisdom', abbreviation: 'WIS', score: 10, modifier: 0 },
    { name: 'charisma', abbreviation: 'CHA', score: 10, modifier: 0 }
  ];

  return (
    <div className="attributes">
      {attributes.map((value) => {
        return (
          <div className="attributes__wrapper">
            <div className="attributes__score">
              <label className="attributes__score--label" htmlFor={value.name}>
                {value.name.toUpperCase()}
              </label>
              <input
                className="attributes__score--input"
                name={value.name}
                placeHolder={value.score}
                defaultValue={value.score}
                type="text"
              />
            </div>
            <div className="attributes__modifier">
              <input
                className="attributes__modifier--input"
                name={value.name + 'Mod'}
                placeHolder={value.stat}
                defaultValue={value.modifier}
                type="text"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
