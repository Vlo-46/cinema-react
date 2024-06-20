import React, { useState, useEffect } from 'react';
import {axiosInstance} from "../../services/api";
import './admin.css'

const AddMovie = () => {
    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [schedule, setSchedule] = useState('');
    const [roomId, setRoomId] = useState('');
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await axiosInstance.get('/rooms');
                setRooms(response.data);
            } catch (error) {
                console.error('Failed to fetch rooms', error);
            }
        };

        fetchRooms();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const scheduleArray = schedule.split(',').map(date => new Date(date).toISOString());
            await axiosInstance.post('/movies', { title, poster, schedule: scheduleArray, room: roomId });
            setMessage('Movie added successfully');
            setTitle('');
            setPoster('');
            setSchedule('');
            setRoomId('');
        } catch (error) {
            setMessage('Failed to add movie', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Add Movie</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div>
                    <label>Poster URL</label>
                    <input type="text" value={poster} onChange={(e) => setPoster(e.target.value)} required />
                </div>
                <div>
                    <label>Schedule (comma separated dates)</label>
                    <input type="date" value={schedule} onChange={(e) => setSchedule(e.target.value)} required />
                </div>
                <div>
                    <label>Room</label>
                    <select value={roomId} onChange={(e) => setRoomId(e.target.value)} required>
                        <option value="">Select a Room</option>
                        {rooms.map(room => (
                            <option key={room._id} value={room._id}>{room.name}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" disabled={loading}>{loading ? 'Adding...' : 'Add Movie'}</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default AddMovie;
