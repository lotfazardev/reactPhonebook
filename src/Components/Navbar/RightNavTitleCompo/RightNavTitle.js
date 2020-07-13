import React from 'react';
import { Col } from 'react-bootstrap';
import './RightNavTitle.scss'
function LeftNavTitle(props) {
    return (
        <Col className="no-padding d-none d-lg-flex justify-content-md-center" >
            <div className="pt-3">
                <h3 id="nav-title">
                    {props.title}
                </h3>
            </div>
        </Col>);

}

export default LeftNavTitle;