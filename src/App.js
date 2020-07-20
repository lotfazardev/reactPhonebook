import React, { useState } from 'react';
import './App.scss';
import Container from 'react-bootstrap/Container';
import LeftNav from './Components/Navbar/RightNavContainerCompo/RightNavContainer'
import { Row, Col } from 'react-bootstrap';
import ContactContainer from './Components/Contacts/ContactContainerCompo/ContactContainer';
import Swal from 'sweetalert2/src/sweetalert2.js';

function App() {
  const [ContactHeader, setContactHeader] = useState({
    id: "#",
    name: "نام",
    family: "نام خانوادگی",
    tel: "شماره تلفن",
    note: "یادداشت ها",
    accessibility: "دسترسی ها"
  });

  const [ContactData, setContactData] = useState([]);

  const [SearchText, setSearchText] = useState('');

  function handelDelete(itemIndex) {
    setContactData({
      tabelUsers: ContactData.filter((item, index) => index !== itemIndex)
    });
  }

  function handelAdd() {
    Swal.mixin({
      input: 'text',
      confirmButtonText: 'بعدی &rarr;',
      showCancelButton: true,
      cancelButtonText: 'انصراف',
      progressSteps: ['۱', '۲', '۳', '۴']
    }).queue([
      {
        title: 'نام',
        text: 'نام مخاطب خود را وارد کنید !',
        inputPlaceholder: "اینجا بنویسید",
        inputValidator: (value) => {
          if (!value) {
            return 'پرکردن این ورودی الزامی است'
          }
        }
      },
      {
        title: 'نام خانوادگی',
        text: 'فامیلی مخاطب خود را وارد کنید !',
        inputPlaceholder: "اینجا بنویسید",
        inputValidator: (value) => {
          if (!value) {
            return 'پرکردن این ورودی الزامی است'
          }
        }
      },
      {
        input: 'number',
        title: 'شماره تلفن',
        text: 'شماره تماس مخاطب خود را وارد کنید !',
        inputPlaceholder: "اینجا بنویسید",
        inputValidator: (value) => {
          if (!value) {
            return 'پرکردن این ورودی الزامی است'
          }
        }
      },
      {
        title: 'یادداشت',
        text: 'یادداشتی برای مخاطب خود بنویسید (اختیاری) !',
        inputPlaceholder: "اینجا بنویسید"
      },
    ]).then((result) => {
      if (result.value) {
        setContactData([
          ...ContactData, {
            name: result.value[0],
            family: result.value[1],
            tel: result.value[2],
            note: result.value[3]
          }
        ]);
        Swal.fire({
          title: 'عملیات موفق',
          icon: 'success',
          html: `
            مخاطب مورد نظر شما با موفقیت ثبت شد
          `,
          confirmButtonText: 'حله !'
        })
      }
    })
  }

  function searchAlgorithm(objArr = {}, searchText = "") {
    if (searchText.trim()) {
      for (let item in objArr) {
        if (~objArr[item].search(searchText)) {
          return true;
        }
      }
      return false;
    } else {
      return true;
    }
  }

  return (
    <Container fluid>
      <Row id="main-row">
        <Col id="nav" className="col-1 col-lg-2">
          <LeftNav
            title="پنل کاربری"
          />
        </Col>
        <Col id="article" className="col-11 col-lg-10">
          <ContactContainer
            handelAdd={handelAdd}
            handelDelete={handelDelete}
            handelFilter={setSearchText}
            HeaderData={ContactHeader}
            ContactData={ContactData.filter((element) => searchAlgorithm(element, SearchText)
            )} />
        </Col>
      </Row>
    </Container>
  );

}


export default App;
