import React from 'react';
import MovieList from '../components/MovieList';
import {useLocation, useNavigate} from 'react-router-dom';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const MoviesPage = () => {
    const query = useQuery();
    const roomId = query.get('roomId');
    const navigate = useNavigate();

    const handleMovieSelect = (movieId) => {
        navigate(`/seats?movieId=${movieId}`);
    };

    return (
        <div>
            {roomId ? <MovieList roomId={roomId} onMovieSelect={handleMovieSelect}/> : <div>Select a Room First</div>}
        </div>
    );
};

export default MoviesPage;
