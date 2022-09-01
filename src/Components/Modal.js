import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Modal.css";

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
          <Container>
            <Row>
              <Col xs={12} md={8}>
                <h4>{contact.company.name} &copy;</h4>
                <h6>
                  {`${contact.company.catchPhrase} to ${contact.company.bs}`}
                </h6>
              </Col>
              <Col xs={6} md={4}>
                <h4>Address</h4>
                <h6>{contact.address.suite}</h6>
                <h6>{contact.address.street}</h6>
                <h6>{contact.address.city}</h6>
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

export default Example;
