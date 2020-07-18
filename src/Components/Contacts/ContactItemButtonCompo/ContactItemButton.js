import React from 'react';
import './ContactItemButton.scss';
function ContactItemButton(props) {
    const style = {
        backgroundColor: props.itemButtonColor
    }
    return (
        <div className="contact-item-btn align-items-center d-flex p-2 mr-1 ml-1"
            style={style}>
            <span className={props.itemButton}></span>
            <span className="pr-2">{props.itemButtonLabel}</span>

        </div>

    );
}

export default ContactItemButton;
