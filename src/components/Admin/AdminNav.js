import React from 'react';
import {Link} from 'react-router-dom';
import styles from './AdminNav.module.css';

const AdminNav = () => {
    return (
        <nav className={styles.nav}>
            <Link to="/admin">Dashboard</Link>
        </nav>
    );
};

export default AdminNav;
