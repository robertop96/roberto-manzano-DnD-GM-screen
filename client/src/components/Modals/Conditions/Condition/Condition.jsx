import './Condition.scss';
import { Modal, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../../../Loading/Loading';

function Condition({ condition }) {
  const getCondition = async () => {
    let res = await axios.get(`https://www.dnd5eapi.co${condition.url}`);
    setDescription(res.data.desc);
  };

  const [show, setShow] = useState(false);
  const [description, setDescription] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getCondition();
  }, []);

  return (
    <>
      <Button className="condition" variant="primary" onClick={handleShow}>
        {description ? condition.name : <Loading />}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{condition.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {description?.map((desc) => {
            return <p key={Math.floor(Math.random() * 100000)}>{desc}</p>;
          })}
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
export default Condition;
