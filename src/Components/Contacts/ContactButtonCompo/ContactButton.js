import React from 'react';
import './ContactButton.scss';
import { Col } from 'react-bootstrap';

function Contact(props){
    const style={
        backgroundColor: props.buttonColor
    }
    return(
        <div className="ContactButton d-flex justify-content-center align-items-center " style={style}
        onClick={props.handelClick}>
            <Col className="col-12 col-md-3">
                <span className={props.buttonIcon}></span>
            </Col>
            <Col className="d-none d-md-flex col-md-9">
                {props.buttonName}
            </Col>
        </div>
    );
}
export default Contact;