import "./Contact.css";
import { Row, Card } from "react-bootstrap";
import Example from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const Contact = ({ contact }) => {
  const { email, id, name, phone, username, website, address, company } =
    contact;

  return (
    <Card border="dark">
      <Card.Body>
        <div className="contact-image-wrapper">
          <Card.Img
            className="contact-img"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80"
          />
        </div>
        <div className="card-content">
          <Card.Title>{name}</Card.Title>
        </div>

        <Row xs={1} md={1}>
          <div className="card-content company-name">
            <Card.Text>{company.name} &copy;</Card.Text>
          </div>
          <div className="card-content ">
            <FontAwesomeIcon icon={faEnvelope} className="font-i" />
            <Card.Text>{email}</Card.Text>
          </div>
          <div className="card-content phone">
            <FontAwesomeIcon icon={faPhone} className="font-i" />
            <Card.Text>{phone}</Card.Text>
          </div>
          <div className="card-content website">
            <FontAwesomeIcon icon={faGlobe} className="font-i" />
            <Card.Text>
              <a href={`https://${website}`}>{website}</a>
            </Card.Text>
          </div>
        </Row>
      </Card.Body>
      <Example
        username={username}
        address={address}
        company={company}
        name={name}
      />
    </Card>
  );
};

export default Contact;
