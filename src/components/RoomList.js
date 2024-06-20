import React, { useEffect, useState } from 'react';
import {axiosInstance} from "../services/api";
import Loader from './Loader';

const RoomList = ({ onRoomSelect }) => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosInstance.get('/rooms')
            .then(response => {
                setRooms(response.data);
                setLoading(false);
            })
            .catch(error => console.error('Error fetching rooms:', error));
    }, []);

    if (loading) return <Loader />;

    return (
        <div>
            <h2>Select a Room</h2>
            <ul>
                {rooms.map(room => (
                    <li key={room._id} onClick={() => onRoomSelect(room._id)}>
                        {room.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RoomList;
