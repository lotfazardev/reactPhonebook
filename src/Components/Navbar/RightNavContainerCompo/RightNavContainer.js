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
                <RightLeftNavItems navItemIcon="icon-home" navItem="داشبورد"/> 
                <RightLeftNavItems navItemIcon="icon-users" navItem="مخاطبین" selected="true"/> 
                <RightLeftNavItems navItemIcon="icon-star-full" navItem="ستاره دار ها"/> 
                <RightLeftNavItems navItemIcon="icon-pencil2" navItem="یاداشت ها"/> 
                <RightLeftNavItems navItemIcon="icon-exit" navItem="خروج"/>
            </Row>
        </>
    );
}

export default LeftNavContainer;