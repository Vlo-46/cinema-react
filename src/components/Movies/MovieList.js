import React, {useEffect, useState} from 'react';
import Loader from '../Shared/Loader';
import BackButton from '../Shared/BackButton';
import {axiosInstance} from '../../services/api';
import styles from './MovieList.module.css';

const MovieList = ({roomId, onMovieSelect}) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosInstance.get(`/rooms/${roomId}/movies`)
            .then(response => {
                setMovies(response.data);
                setLoading(false);
            })
            .catch(error => console.error('Error fetching movies:', error));
    }, [roomId]);

    if (loading) return <Loader/>;

    return (
        <div>
            <BackButton/>
            <h2>Select a Movie</h2>
            <ul>
                {movies.map(movie => (
                    <li key={movie._id} onClick={() => onMovieSelect(movie._id)} className={styles.movieItem}>
                        {movie.title} - {new Date(movie.schedule).toLocaleString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;
