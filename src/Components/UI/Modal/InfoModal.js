import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "./InfoModal.css";

function InfoModal(contact) {
  // state for the modal visibility
  const [show, setShow] = useState(false);

  // handlers to toggle the modal visibility
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="more-info" variant="dark" onClick={handleShow}>
        More Info
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{contact.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs={12}>
                <h4>{contact.company.name} &copy;</h4>
                <h6 className="info">
                  {contact.company.catchPhrase} to {contact.company.bs}
                </h6>
              </Col>
              <Col xs={12} className="address">
                <h4>Address</h4>
                <h6 className="info">
                  {contact.address.suite} <br />
                  {contact.address.street} <br />
                  {contact.address.city}
                </h6>
              </Col>
            </Row>
          </Container>
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

export default InfoModal;
