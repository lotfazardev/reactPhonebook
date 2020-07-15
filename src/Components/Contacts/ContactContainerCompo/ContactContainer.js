import React from 'react';
import ContactTitle from '../ContactTitleCompo/ContactTitle';
import './ContactContainer.scss';
import ContactButton from '../ContactButtonCompo/ContactButton'
import { Col } from 'react-bootstrap';

function ContactContainer(props) {
    return (
        <>
            <Col className="no-padding col-12">
                <ContactTitle title="لیست مخاطبین" />
            </Col>
            <Col className="no-padding col-12 d-flex justify-content-between align-items-center">
                <ContactButton buttonName="افزودن مخاطب" buttonIcon="icon-user-plus" buttonColor="#5DA2D5" />
            </Col>
        </>
    );
}

export default ContactContainer;