import React, {useState} from 'react';
import RoomList from '../components/RoomList';
import {useNavigate} from 'react-router-dom';

const HomePage = () => {
    const [selectedRoom, setSelectedRoom] = useState(null);
    const navigate = useNavigate();

    const handleRoomSelect = (roomId) => {
        setSelectedRoom(roomId);
        navigate(`/movies?roomId=${roomId}`);
    };

    return (
        <div>
            <RoomList onRoomSelect={handleRoomSelect}/>
        </div>
    );
};

export default HomePage;
