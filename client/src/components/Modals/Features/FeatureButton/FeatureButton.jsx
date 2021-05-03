import './FeatureButton.scss';
import { Modal, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import Features from '../Feature/Feature';

function FeatureButton({ features }) {
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
        Features
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Features</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input onChange={handleChange} type="text" />
          <section className="conditions-wrapper">
            {features
              ?.filter((feature) =>
                feature.name.toLowerCase().includes(search.toLowerCase())
              )
              .sort()
              .map((feature) => {
                return <Features key={feature.index} feature={feature} />;
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

export default FeatureButton;
