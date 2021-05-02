import { Modal, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Monster({ monster }) {
  const getMonster = async () => {
    let res = await axios.get(`https://www.dnd5eapi.co${monster.url}`);
    setMonsterDetail(res.data);
  };

  const [show, setShow] = useState(false);
  const [monsterDetail, setMonsterDetail] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getMonster();
  }, []);

  return (
    <>
      <Button className="condition" variant="primary" onClick={handleShow}>
        {monsterDetail?.name}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{monsterDetail?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section>
            <h2>{monsterDetail?.name}</h2>
            <h3>Size: {monsterDetail?.size}</h3>
            <h3>Hit Die: {monsterDetail?.hit_dice}</h3>
            <h3>Hit Points: {monsterDetail?.hit_points}</h3>
            <h3> Strength: {monsterDetail?.strength}</h3>
            <h3> Dexterity:{monsterDetail?.dexterity}</h3>
            <h3> Constitution:{monsterDetail?.constitution}</h3>
            <h3> Intelligence:{monsterDetail?.intelligence}</h3>
            <h3> Wisdom:{monsterDetail?.wisdom}</h3>
            <h3> Charisma:{monsterDetail?.charisma}</h3>
            <h3> Challenge Rating:{monsterDetail?.challenge_rating}</h3>
            <h3> Experience Points:{monsterDetail?.xp}</h3>
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

export default Monster;
