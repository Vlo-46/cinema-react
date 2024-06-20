import React from 'react';
import { Link } from 'react-router-dom';
import './admin.css'

const AdminNav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/admin/add-room">Add Room</Link>
                </li>
                <li>
                    <Link to="/admin/add-movie">Add Movie</Link>
                </li>
            </ul>
        </nav>
    );
};

export default AdminNav;
