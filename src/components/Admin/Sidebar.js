import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <h2>Admin Panel</h2>
            <ul>
                <li><Link to="/admin/add-room">Add Room</Link></li>
                <li><Link to="/admin/add-movie">Add Movie</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
