import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './RightNavItemCompo.scss'
function RightLeftNavItems(props) {
    let tmp = props.selected ? "nav-item-selected" : "";
    return (
        <Col className={"no-padding d-flex align-items-center nav-item col-12 "+ tmp }>
            <Col className="no-padding col-12 col-lg-4 nav-item d-flex justify-content-center align-items-center">
                logo
            </Col>
            <Col className="no-padding d-none d-md-flex col-lg-8">
                {props.navItem}
            </Col>
        </Col>
    );
}

export default RightLeftNavItems;