import React from 'react';
import AddMovie from '../../components/admin/AddMovie';
import MovieTable from '../../components/admin/MovieTable';
import AdminNav from '../../components/admin/AdminNav';

const AddMoviePage = () => {
    return (
        <div>
            <AdminNav/>
            <h1>Admin Panel - Add Movie</h1>
            <AddMovie/>
            <MovieTable/>
        </div>
    );
};

export default AddMoviePage;
