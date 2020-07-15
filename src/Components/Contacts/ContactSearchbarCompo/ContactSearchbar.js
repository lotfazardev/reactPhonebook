import React from 'react';
import './ContactSearchbar.scss'
function ContactSreachbar(props) {
    return (
        <div className="flex-grow-1 pr-3">
            <div className="searchbar-container col-12 d-flex pr-3 align-items-center">
                <div className="filter-icon-div d-flex justify-content-center align-items-center pl-2">
                    <span className="icon-filter"></span>
                </div>
                <input className="border-0 searchbar-input pr-3" placeholder="جست و جو کنید ..." />
            </div>
        </div>
    );
}

export default ContactSreachbar;