import React , {useState} from 'react';
import './ContactContainer.scss';
import ContactButton from '../ContactButtonCompo/ContactButton'
import { Col } from 'react-bootstrap';
import ContactSreachbar from '../ContactSearchbarCompo/ContactSearchbar';
import ContactTabel from '../ContactTabelCompo/ContactTabel';

function ContactContainer(props) {
    const [ContactData, setContactData] = useState({
        tabelHeader:{
            id:"#",
            name:"نام",
            family:"نام خانوادگی",
            tel:"شماره تلفن",
            note:"یادداشت ها",
            accessibility:"دسترسی ها"
        },
        tabelUsers:[
            {name:"محمدحسین",family:"لطف آذر",tel:"09038701184",note:"دانشجوی کارشناسی کامپیوتر"},
            {name:"نادر",family:"غفوری",tel:"09010000000",note:"ارشد عمران"},
            {name:"سیمین",family:"شکوری",tel:"09020000000",note:"دندون شهید بهشتی"},
            {name:"احمد",family:"ذوقی",tel:"09030000000",note:"همون که خداوکیلی 100 تومن میده"}
        ]
    });
    return (
        <>
            <Col className="no-padding col-12 d-flex justify-content-between align-items-center mt-1">
                <ContactButton buttonName="افزودن مخاطب" buttonIcon="icon-user-plus" buttonColor="#5DA2D5" />
                <ContactSreachbar/>
            </Col>
            <Col className="no-padding col-12 mt-3">
                <ContactTabel header={ContactData.tabelHeader} users={ContactData.tabelUsers}/>
            </Col>
        </>
    );
}

export default ContactContainer;