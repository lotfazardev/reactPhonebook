import React, { useState } from 'react';
import './ContactContainer.scss';
import ContactButton from '../ContactButtonCompo/ContactButton'
import { Col } from 'react-bootstrap';
import ContactSreachbar from '../ContactSearchbarCompo/ContactSearchbar';
import ContactTabel from '../ContactTabelCompo/ContactTabel';

function ContactContainer(props) {
    return (
        <>
            <Col className="no-padding col-12 d-flex justify-content-between align-items-center mt-1">
                <ContactButton buttonName="افزودن مخاطب" buttonIcon="icon-user-plus" buttonColor="#5DA2D5" />
                <ContactSreachbar />
            </Col>
            <Col className="no-padding col-12 mt-3">
                <ContactTabel header={props.ContactData.tabelHeader}
                    users={props.ContactData.tabelUsers}
                    handelDelete={props.handelDelete}
                />
            </Col>
        </>
    );
}

export default ContactContainer;