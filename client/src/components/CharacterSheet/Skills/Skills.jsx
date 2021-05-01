import './Skills.scss';
import React from 'react';

function CharacterStSkills() {
  const attributes = [
    { name: 'strength', abbreviation: 'STR', score: 10, modifier: 0 },
    { name: 'dexterity', abbreviation: 'DEX', score: 10, modifier: 0 },
    { name: 'constitution', abbreviation: 'CON', score: 10, modifier: 0 },
    { name: 'intelligence', abbreviation: 'INT', score: 10, modifier: 0 },
    { name: 'wisdom', abbreviation: 'WIS', score: 10, modifier: 0 },
    { name: 'charisma', abbreviation: 'CHA', score: 10, modifier: 0 }
  ];

  const skills = [
    { name: 'acrobatics', attribute: 'dex', value: 0 },
    { name: 'animal handling', attribute: 'wis', value: 0 },
    { name: 'arcana', attribute: 'int', value: 0 },
    { name: 'athletics', attribute: 'str', value: 0 },
    { name: 'deception', attribute: 'cha', value: 0 },
    { name: 'insight', attribute: 'int', value: 0 },
    { name: 'intimidation', attribute: 'cha', value: 0 },
    { name: 'investigation', attribute: 'int', value: 0 },
    { name: 'medicine', attribute: 'wis', value: 0 },
    { name: 'nature', attribute: 'int', value: 0 },
    { name: 'perception', attribute: 'wis', value: 0 },
    { name: 'performance', attribute: 'cha', value: 0 },
    { name: 'persuasion', attribute: 'cha', value: 0 },
    { name: 'religion', attribute: 'int', value: 0 },
    { name: 'sleight of hand', attribute: 'dex', value: 0 },
    { name: 'Stealth', attribute: 'dex', value: 0 },
    { name: 'survival', attribute: 'wis', value: 0 }
  ];

  // player {
  //   stats {
  //     strenth: 15,
  //     dexterity: 10,
  //   }
  //   skills {
  //     acrobatics: 5,
  //     jump: 4:... 0
  //   }
  // }

  return (
    <section className="skills-section">
      <article className="misc-wrapper">
        <div className="misc">
          <input
            className="misc__input"
            type="text"
            name="inspiration"
            defaultValue="0"
          />
          <label className="misc__label" htmlFor="inspiration">
            Inspiration
          </label>
        </div>
        <div className="misc">
          <input
            className="misc__input"
            type="text"
            name="proficiencyBonus"
            defaultValue="0"
          />
          <label className="misc__label" htmlFor="proficiencyBonus">
            proficiency
          </label>
        </div>
      </article>
      <article className="saving-throws-wrapper">
        {attributes.map((savingT) => {
          // bring in database obj
          //check if database has savingT.name property use on line 70 instead.
          return (
            <div className="saving-throws">
              <input
                className="saving-throws__input-check"
                type="checkbox"
                name="savingT.name"
                value="proficient"
              />
              <input
                className="saving-throws__input-text"
                type="text"
                name={savingT.name}
                defaultValue="0"
              />
              <label className="saving-throws__label" htmlFor="savingT.name">
                {savingT.name}
              </label>
            </div>
          );
        })}
        <h4 className="saving-throws__title">Saving Throws</h4>
      </article>
      <article className="skills-wrapper">
        {skills.map((skill) => {
          return (
            <div className="skills">
              <input
                className="skills__input-check"
                type="checkbox"
                name="skill.name"
                value="proficient"
              />
              <input
                className="skills__input-text"
                type="text"
                name={skill.name}
                defaultValue="0"
              />
              <label className="skills__label" htmlFor="skill.name">
                {skill.name}({skill.attribute})
              </label>
            </div>
          );
        })}
        <h4 className="skills__title">Skills</h4>
      </article>
    </section>
  );
}

export default CharacterStSkills;
