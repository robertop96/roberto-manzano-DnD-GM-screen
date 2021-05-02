import './Spells.scss';
import { Modal, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Spell({ spell }) {
  const getSpell = async () => {
    let res = await axios.get(`https://www.dnd5eapi.co${spell.url}`);
    setSpellDetail(res.data);
  };

  const [show, setShow] = useState(false);
  const [spellDetail, setSpellDetail] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getSpell();
  }, []);

  return (
    <>
      <Button className="condition" variant="primary" onClick={handleShow}>
        {spellDetail?.name}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{spellDetail?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section>
            <h2>{spellDetail?.name}</h2>
            <article>
              <h3>Range:</h3>
              <p>{spellDetail?.range}</p>
              <h3>Level:</h3>
              <p>{spellDetail?.level}</p>
              <h3> Duration:</h3>
              <p>{spellDetail?.duration}</p>
              <h3> Duration:</h3>
              <p>{spellDetail?.duration}</p>
              <h3>Description:</h3>
              {spellDetail?.desc.map((paragraph) => {
                return (
                  <p key={Math.floor(Math.random() * 100000)}>{paragraph}</p>
                );
              })}
              <h3>Higher Level:</h3>
              {spellDetail?.higher_level ? (
                spellDetail?.higher_level?.map((paragraph) => {
                  return (
                    <p key={Math.floor(Math.random() * 100000)}>{paragraph}</p>
                  );
                })
              ) : (
                <p>NONE</p>
              )}
            </article>
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

export default Spell;
