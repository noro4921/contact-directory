import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row, Modal, Button } from "react-bootstrap";
import "./App.css";
import Contact from "./Components/Contact";

function App() {
  const [contactDataState, setContactDataState] = useState([]);

  const getApiData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        setContactDataState(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="App">
      <h1 className="header"> Contacts</h1>
      <Row xs={1} md={3} className="g-4">
        {contactDataState.map((contact) => {
          return (
            <Col>
              <Contact contact={contact} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default App;
