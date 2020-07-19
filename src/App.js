import React, { useState } from 'react';
import './App.scss';
import Container from 'react-bootstrap/Container';
import LeftNav from './Components/Navbar/RightNavContainerCompo/RightNavContainer'
import { Row, Col } from 'react-bootstrap';
import ContactContainer from './Components/Contacts/ContactContainerCompo/ContactContainer';
import Swal from 'sweetalert2/src/sweetalert2.js'

function App() {
  const [ContactData, setContactData] = useState({
    tabelHeader: {
      id: "#",
      name: "نام",
      family: "نام خانوادگی",
      tel: "شماره تلفن",
      note: "یادداشت ها",
      accessibility: "دسترسی ها"
    },
    tabelUsers: [
      { name: "محمدحسین", family: "لطف آذر", tel: "09038701184", note: "دانشجوی کارشناسی کامپیوتر" },
      { name: "نادر", family: "غفوری", tel: "09010000000", note: "ارشد عمران" },
      { name: "سیمین", family: "شکوری", tel: "09020000000", note: "دندون شهید بهشتی" },
      { name: "احمد", family: "ذوقی", tel: "09030000000", note: "همون که خداوکیلی 100 تومن میده" }
    ]
  });
  function handelDelete (itemIndex) {
    setContactData({
      tabelHeader : ContactData.tabelHeader,
      tabelUsers: ContactData.tabelUsers.filter((item,index)=> index !== itemIndex)
    });
  }
  function handelAdd(){
    Swal.fire('Any fool can use a computer')
  }
  return (
    <Container fluid>
      <Row id="main-row">
        <Col className="col-1 col-lg-2">
          <LeftNav
            title="پنل کاربری"
          />
        </Col>
        <Col className="col-11 col-lg-10">
          <ContactContainer 
          handelAdd={handelAdd}
          handelDelete={handelDelete}
           ContactData={ContactData} />
        </Col>
      </Row>
    </Container>
  );

}


export default App;
