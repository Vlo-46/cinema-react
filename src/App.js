import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import SeatsPage from './pages/SeatsPage';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AddRoomPage from "./pages/Admin/AddRoomPage";
import AddMoviePage from "./pages/Admin/AddMoviePage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/movies" element={<MoviesPage/>}/>
                <Route path="/seats" element={<SeatsPage/>}/>
                <Route path="/admin" element={<AdminDashboard/>}>
                    <Route path="add-room" element={<AddRoomPage/>}/>
                    <Route path="add-movie" element={<AddMoviePage/>}/>
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
