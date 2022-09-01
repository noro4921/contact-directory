import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function ContactsModal(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Modal {...props} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">More Info</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>address</h4>
        <h4>company</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

<>
  <Button onClick={() => setModalShow(true)}>More Info Modal</Button>

  <ContactsModal show={modalShow} onHide={() => setModalShow(false)} />
</>;

export default ContactsModal;
