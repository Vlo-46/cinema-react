import React from 'react';
import AddRoom from '../../components/admin/AddRoom';
import RoomTable from '../../components/admin/RoomTable';
import AdminNav from '../../components/admin/AdminNav';

const AddRoomPage = () => {
    return (
        <div>
            <AdminNav/>
            <h1>Admin Panel - Add Room</h1>
            <AddRoom/>
            <RoomTable/>
        </div>
    );
};

export default AddRoomPage;
