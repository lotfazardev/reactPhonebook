import React from 'react';
import { Row } from 'react-bootstrap';
import LeftNavTitle from '../RightNavTitleCompo/RightNavTitle'
import "./RightNavContainer.scss"
import RightLeftNavItems from '../RightNavItemCompo/RightNavItemCompo';
function LeftNavContainer(props) {
    return (
        <>
            <Row className="nav-row" id="nav-row-title">
                <LeftNavTitle title={props.title} />
            </Row>
            <Row className="nav-row d-flex flex-column" id="nav-row-items">
                <RightLeftNavItems navItem="داشبورد"/> 
                <RightLeftNavItems navItem="مخاطبین" selected="true"/> 
                <RightLeftNavItems navItem="ستاره دار ها"/> 
                <RightLeftNavItems navItem="یاداشت ها"/> 
                <RightLeftNavItems navItem="خروج"/>
            </Row>
        </>
    );
}

export default LeftNavContainer;