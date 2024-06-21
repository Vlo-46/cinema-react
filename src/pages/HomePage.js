import React, {useState} from 'react';
import RoomList from '../components/Home/RoomList';
import {useNavigate} from 'react-router-dom';

const HomePage = () => {
    const [selectedRoom, setSelectedRoom] = useState(null);
    const navigate = useNavigate();

    const handleRoomSelect = (roomId) => {
        setSelectedRoom(roomId);
        navigate(`/movies?roomId=${roomId}`);
    };

    return (
        <section>
            <RoomList onRoomSelect={handleRoomSelect}/>
        </section>
    );
};

export default HomePage;
