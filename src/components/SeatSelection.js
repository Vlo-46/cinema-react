import React, {useEffect, useState} from 'react';
import {axiosInstance} from "../services/api";
import Loader from './Loader';
import BackButton from "./BackButton";
import styles from './seatSelection.module.css'

const SeatSelection = ({movieId}) => {
    const [seats, setSeats] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosInstance.get(`/movies/${movieId}/seats`)
            .then(response => {
                setSeats(response.data);
                setLoading(false);
            })
            .catch(error => console.error('Error fetching seats:', error));
    }, [movieId]);

    const bookSeat = (data) => {
        axiosInstance.post('/book', {movie: movieId, seat: data.seat, isBooked: true})
            .then(response => {
                const updatedBooking = response.data;
                setSeats(prevSeats =>
                    prevSeats.map(s =>
                        s._id === updatedBooking._id ? { ...s, isBooked: true } : s
                    )
                );
            })
            .catch(error => console.error('Error booking seat:', error));
    };

    if (loading) return <Loader/>;

    const renderSeat = (data) => {
        const seatClass = data.isBooked ? styles.booked : styles.available;
        return (
            <button
                key={`${data.seat.row}-${data.seat.number}`}
                onClick={() => bookSeat(data)}
                disabled={data.isBooked}
                className={`${styles.seat} ${seatClass}`}
            >
                {data.seat.row}-{data.seat.number}
            </button>
        );
    };

    return (
        <div>
            <BackButton />
            <h2>Select a Seat</h2>
            <div className={styles.seats}>
                {
                    seats.length
                        ? seats.map(row => (
                            <div key={row._id} className={styles.seat__row}>
                                {renderSeat(row)}
                            </div>
                        ))
                        : null
                }
            </div>
        </div>
    );
};

export default SeatSelection;
