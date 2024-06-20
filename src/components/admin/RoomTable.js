import React, {useState, useEffect} from 'react';
import {axiosInstance} from "../../services/api";
import './admin.css'

const RoomTable = () => {
    const [rooms, setRooms] = useState([]);

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

    const handleDelete = async (roomId) => {
        try {
            await axiosInstance.delete(`/rooms/${roomId}`);
            setRooms(rooms.filter(room => room._id !== roomId));
        } catch (error) {
            console.error('Failed to delete room', error);
        }
    };

    return (
        <div>
            <h2>Rooms</h2>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Color</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {rooms.map(room => (
                    <tr key={room._id}>
                        <td>{room.name}</td>
                        <td>{room.color}</td>
                        <td>
                            <button onClick={() => handleDelete(room._id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default RoomTable;
