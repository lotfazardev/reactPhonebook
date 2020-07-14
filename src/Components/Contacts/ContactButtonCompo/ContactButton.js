import React from 'react';
import './ContactButton.scss';
import RightLeftNavItems from '../../Navbar/RightNavItemCompo/RightNavItemCompo';
import { Col } from 'react-bootstrap';

function Contact(props){
    const style={
        backgroundColor: props.buttonColor
    }
    return(
        <div className="ContactButton d-flex justify-content-center align-items-center " style={style}>
            <Col className="col-3">
                <span className={props.buttonIcon}></span>
            </Col>
            <Col className="col-9">
                {props.buttonName}
            </Col>
        </div>
    );
}
export default Contact;