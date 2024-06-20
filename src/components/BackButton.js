import React from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './backButton.module.css'

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.back__button__field}>
            <button onClick={() => navigate(-1)} className={styles.back__button}>
                Back
            </button>
        </div>
    );
};

export default BackButton;
