import React, {useState, useEffect} from 'react';
import {axiosInstance} from '../../services/api';
import styles from './MovieTable.module.css';

const MovieTable = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axiosInstance.get('/movies');
                setMovies(response.data);
            } catch (error) {
                console.error('Failed to fetch movies', error);
            }
        };

        fetchMovies();
    }, []);

    const handleDelete = async (movieId) => {
        try {
            await axiosInstance.delete(`/movies/${movieId}`);
            setMovies(movies.filter(movie => movie._id !== movieId));
        } catch (error) {
            console.error('Failed to delete movie', error);
        }
    };

    return (
        <div className={styles.movieTable}>
            <h2>Movies</h2>
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Schedule</th>
                    <th>Room</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {movies.length ? movies.map(movie => (
                    <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.schedule.map(date => new Date(date).toLocaleString()).join(', ')}</td>
                        <td>{movie.room.name}</td>
                        <td>
                            <button onClick={() => handleDelete(movie._id)}>Delete</button>
                        </td>
                    </tr>
                )) : null}
                </tbody>
            </table>
        </div>
    );
};

export default MovieTable;
