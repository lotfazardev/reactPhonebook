import React, { Component } from 'react';
import './App.scss';
import Container from 'react-bootstrap/Container';
import LeftNav from './Components/Navbar/RightNavContainerCompo/RightNavContainer'
import { Row, Col } from 'react-bootstrap';
import ContactContainer from './Components/Contacts/ContactContainerCompo/ContactContainer';

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Row id="main-row">
          <Col className="no-padding col-1 col-lg-2">
            <LeftNav
              title="پنل کاربری"
            />
          </Col>
          <Col className="no-padding col-11 col-lg-10">
            <ContactContainer/>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default App;
