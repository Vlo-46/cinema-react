import React from 'react';
import {Outlet} from 'react-router-dom';
import Sidebar from '../../components/Admin/Sidebar';
import styles from './AdminDashboard.module.css';

const AdminDashboard = () => {
    return (
        <div className={styles.dashboard}>
            <Sidebar/>
            <div className={styles.content}>
                <Outlet/>
            </div>
        </div>
    );
};

export default AdminDashboard;
