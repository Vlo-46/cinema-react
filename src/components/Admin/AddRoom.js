import React, {useState} from 'react';
import {axiosInstance} from '../../services/api';
import styles from './AddRoom.module.css';

const AddRoom = () => {
    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await axiosInstance.post('/rooms', {name, color});
            setMessage('Room added successfully');
            setName('');
            setColor('');
        } catch (error) {
            setMessage('Failed to add room');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.addRoom}>
            <h2>Add Room</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Room Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
                </div>
                <div>
                    <label>Color</label>
                    <input type="text" value={color} onChange={(e) => setColor(e.target.value)} required/>
                </div>
                <button type="submit" disabled={loading}>{loading ? 'Adding...' : 'Add Room'}</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default AddRoom;
