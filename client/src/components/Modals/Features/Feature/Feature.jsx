import './Feature';
import { Modal, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../../../Loading/Loading';
function Feature({ feature }) {
  const getFeature = async () => {
    let res = await axios.get(`https://www.dnd5eapi.co${feature.url}`);
    setDescription(res.data);
  };

  const [show, setShow] = useState(false);
  const [description, setDescription] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getFeature();
  }, []);

  return (
    <>
      <Button className="condition" variant="primary" onClick={handleShow}>
        {description ? feature.name : <Loading />}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{feature.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section>
            <h2>{feature?.name}</h2>
            <h3>Class: {description?.class?.name}</h3>
            <h3>Level: {description?.level}</h3>
            <article>
              <h3>Description:</h3>
              {description?.desc.map((paragraph) => {
                return (
                  <p key={Math.floor(Math.random() * 100000)}>{paragraph}</p>
                );
              })}
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

export default Feature;
