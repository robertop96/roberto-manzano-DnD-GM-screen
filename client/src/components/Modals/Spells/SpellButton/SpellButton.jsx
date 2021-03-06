import './SpellButton.scss';
import { Modal, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import Spell from '../../../Modals/Spells/Spell/Spell';
import Loading from '../../../Loading/Loading';

function SpellButton({ spells }) {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState('');
  const handleClose = () => {
    setShow(false);
    setSearch('');
  };
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} block>
        Spells
      </Button>
      <Modal size="sm" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Spells</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-search">
            <label className="modal-search__label">Search:</label>
            <input className="modal-search__input" onChange={handleChange} type="text" />
          </div>
          <section className="conditions-wrapper">
            {spells
              ?.filter((spell) => spell.name.toLowerCase().includes(search.toLowerCase()))
              .sort()
              .map((spell) => {
                return <Spell index={spell.index} key={Math.floor(Math.random() * 100000)} spell={spell} />;
              })}
          </section>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SpellButton;
