import React from 'react';
import AddRoom from '../../components/Admin/AddRoom';
import RoomTable from '../../components/Admin/RoomTable';
import AdminNav from '../../components/Admin/AdminNav';

const AddRoomPage = () => {
    return (
        <div>
            <AdminNav/>
            <h1>Add Room</h1>
            <AddRoom/>
            <RoomTable/>
        </div>
    );
};

export default AddRoomPage;
