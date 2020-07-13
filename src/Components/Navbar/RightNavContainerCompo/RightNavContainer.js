import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import LeftNavTitle from '../RightNavTitleCompo/RightNavTitle'
import "./RightNavContainer.scss"
function LeftNavContainer(props) {
    return (
        <>
            <Row className="nav-row" id="nav-row-title">
                <LeftNavTitle title={props.title} />
            </Row>
            <Row className="nav-row" id="nav-row-items">

            </Row>
        </>
    );
}

export default LeftNavContainer;