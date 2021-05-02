import { Modal, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Monster from '../../../Modals/Monsters/Monster/Monster';
import axios from 'axios';

function MonsterButton({ monsters }) {
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
      <Button variant="primary" onClick={handleShow}>
        Monsters
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Monsters</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input onChange={handleChange} type="text" />
          <section className="conditions-wrapper">
            {monsters
              ?.filter((monster) =>
                monster.name.toLowerCase().includes(search.toLowerCase())
              )
              .sort()
              .map((monster) => {
                return (
                  <Monster
                    key={Math.floor(Math.random() * 10000000)}
                    monster={monster}
                  />
                );
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

export default MonsterButton;
