import React from 'react';
import AddMovie from '../../components/Admin/AddMovie';
import MovieTable from '../../components/Admin/MovieTable';
import AdminNav from '../../components/Admin/AdminNav';

const AddMoviePage = () => {
    return (
        <div>
            <AdminNav/>
            <h1>Add Movie</h1>
            <AddMovie/>
            <MovieTable/>
        </div>
    );
};

export default AddMoviePage;
