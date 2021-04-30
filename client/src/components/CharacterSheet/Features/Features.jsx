import './Features.scss';

import React from 'react';

function CharacterSheetExtra() {
  return (
    <section className="features-section">
      <article className="features">
        <textarea className="features__textarea" name="attacks" />
        <h4 className="features__title">Attacks and Spells</h4>
      </article>
      <article className="features">
        <textarea className="features__textarea" name="features" />
        <h4 className="features__title">Features and Traits</h4>
      </article>
      <article className="features">
        <textarea className="features__textarea" name="equipment" />
        <h4 className="features__title">Inventory and Equipment</h4>
      </article>
    </section>
  );
}

export default CharacterSheetExtra;
