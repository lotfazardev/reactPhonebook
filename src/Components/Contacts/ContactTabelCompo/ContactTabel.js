import React from 'react';
import { Table } from 'react-bootstrap';
import './ContactTabel.scss';
function ContactTabel() {
    return (
        <Table className="tabel" responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>نام</th>
                    <th>نام خانوادگی</th>
                    <th>شماره تلفن</th>
                    <th>یادداشت ها</th>
                    <th>دسترسی ها</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>محمدحسین</td>
                    <td>لطف آذر</td>
                    <td>09038701184</td>
                    <td>دانشجوی کامپیوتر دانشگاه تهران مرکز</td>
                    <td>under construction</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>محمدحسین</td>
                    <td>لطف آذر</td>
                    <td>09038701184</td>
                    <td>دانشجوی کامپیوتر دانشگاه تهران مرکز</td>
                    <td>under construction</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>محمدحسین</td>
                    <td>لطف آذر</td>
                    <td>09038701184</td>
                    <td>دانشجوی کامپیوتر دانشگاه تهران مرکز</td>
                    <td>under construction</td>
                </tr>
            </tbody>
        </Table>

    );
}

export default ContactTabel;