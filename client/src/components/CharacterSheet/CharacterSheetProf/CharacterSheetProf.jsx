import './CharacterSheetProf.scss';

import React from 'react';

function CharacterSheetProf() {
  return (
    <section className="csProf">
      <textarea className="csProf__textarea" name="prof" />
      <h4 className="csProf__title">Proficiency and Language</h4>
    </section>
  );
}

export default CharacterSheetProf;
