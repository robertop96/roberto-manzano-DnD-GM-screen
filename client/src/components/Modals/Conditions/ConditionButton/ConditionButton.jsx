import './ConditionButton.scss';
import { Modal, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import Condition from '../Condition/Condition';

function ConditionButton({ conditions }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} block>
        Conditions
      </Button>
      <Modal contentClassName="modal-title" size="sm" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Conditions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section className="conditions-wrapper">
            {conditions?.map((condition) => {
              return <Condition index={condition.index} key={condition.index} condition={condition} />;
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
export default ConditionButton;
