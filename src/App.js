import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import SeatsPage from './pages/SeatsPage';
import AddRoomPage from "./pages/admin/AddRoomPage";
import AddMoviePage from "./pages/admin/AddMoviePage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage/>}/>
                <Route path="/movies" element={<MoviesPage/>}/>
                <Route path="/seats" element={<SeatsPage/>}/>
                <Route path="/admin/add-room" element={<AddRoomPage/>}/>
                <Route path="/admin/add-movie" element={<AddMoviePage/>}/>
            </Routes>
        </Router>
    );
};

export default App;
