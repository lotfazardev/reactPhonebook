import React from 'react';
import { Col } from 'react-bootstrap';
import './ContactTitle.scss'
function ContactTitle(props) {
    return (
        <h1 id="pageTitle">{props.title}</h1>
    );
}

export default ContactTitle;