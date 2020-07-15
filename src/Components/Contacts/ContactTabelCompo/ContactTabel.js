import React from 'react';
import { Table } from 'react-bootstrap';
import './ContactTabel.scss';
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
                    props.users.map((currentValue, index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{currentValue.name}</td>
                                <td>{currentValue.family}</td>
                                <td>{currentValue.tel}</td>
                                <td>{currentValue.note}</td>
                                <td>under construction</td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </Table>

    );
}

export default ContactTabel;