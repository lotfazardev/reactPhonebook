import React from 'react';
import { Table } from 'react-bootstrap';
import './ContactTabel.scss';
import ContactItemButton from '../ContactItemButtonCompo/ContactItemButton';
function ContactTabel(props) {
    return (
        <Table className="tabel" responsive>
            <thead>
                <tr>
                    <th>{props.header.id}</th>
                    <th>{props.header.name}</th>
                    <th>{props.header.family}</th>
                    <th>{props.header.tel}</th>
                    <th>{props.header.note}</th>
                    <th>{props.header.accessibility}</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.users && props.users.map((currentValue, index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{currentValue.name}</td>
                                <td>{currentValue.family}</td>
                                <td>{currentValue.tel}</td>
                                <td>{currentValue.note}</td>
                                <td className="d-flex justify-content-center align-items-center">
                                    <ContactItemButton itemButtonColor="#F8AE45"
                                        itemButtonLabel="ویرایش"
                                        itemButton="icon-pen" 
                                        handelClick={()=>props.handelEdit(index)}    
                                        />
                                    <ContactItemButton itemButtonColor="#FF4141"
                                        itemButtonLabel="حذف"
                                        itemButton="icon-user-minus" 
                                        handelClick={()=>props.handelDelete(index)}
                                        />
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </Table>

    );
}

export default ContactTabel;