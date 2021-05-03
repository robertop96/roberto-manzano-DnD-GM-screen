import './CharacterSheet.scss';
import { Modal, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import CharacterSheets from '../../../page/CharacterSheet/CharacterSheet';

function CharacterSheet({ player }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} block>
        {player.name}
      </Button>
      <Modal dialogClassName="my-modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{player.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body bsPrefix="cs-modal-body">
          <CharacterSheets player={player} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CharacterSheet;
