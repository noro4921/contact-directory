import "./Contact.css";
import { Row, CardGroup, Col, Container, Card } from "react-bootstrap";

const Contact = ({ contact }) => {
  const { email, id, name, phone, username, website, address, company } =
    contact;
  return (
    <Card className="contact-card">
      <Card.Body>
        <div className="contact-image-wrapper">
          <Card.Img
            className="contact-img"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          />
        </div>
        <div className="card-content">
          <Card.Title>{name}</Card.Title>
        </div>

        <Row xs={1} md={1}>
          <div className="card-content">
            <Card.Text>{email}</Card.Text>
          </div>
          <div className="card-content">
            <Card.Text>{address.city}</Card.Text>
          </div>
          <div className="card-content">
            <Card.Text>{phone}</Card.Text>
          </div>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Contact;
