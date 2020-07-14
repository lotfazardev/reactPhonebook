import React from 'react';
import { Col } from 'react-bootstrap';

function ContactTitle(props) {
    return (
        <Col className="no-padding col-12">
            <h1 id="pageTitle">{props.title}</h1>
        </Col>
    );
}

export default ContactTitle;