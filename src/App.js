import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

import "./App.css";
import Contact from "./Components/UI/Card/Contact";

function App() {
  // creating state to store the contact data
  const [contactDataState, setContactDataState] = useState([]);

  // function to fetch contacts data
  const fetchContactsData = () => {
    //using axios to fetch data
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setContactDataState(res.data);
      })
      .catch((error) => {
        alert("Error while fetching data");
      });
  };

  // useEffect to get data on render
  useEffect(() => {
    fetchContactsData();
  }, []);

  return (
    <div className="App">
      <h1 className="header"> Contacts</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {contactDataState.map((contact) => {
          return (
            <Col key={contact.id}>
              <Contact contact={contact} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default App;
