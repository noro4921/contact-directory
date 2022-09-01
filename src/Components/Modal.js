import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Example(contact) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        More Info
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{contact.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>{contact.address.suite}</h6>
          <h6>{contact.address.street}</h6>
          <h6>{contact.address.city}</h6>
          <h6>{contact.company.bs}</h6>
          <h6>{contact.company.catchPhrase}</h6>
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

export default Example;
