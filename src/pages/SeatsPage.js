import React from 'react';
import SeatSelection from '../components/Seats/SeatSelection';
import {useLocation} from 'react-router-dom';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const SeatsPage = () => {
    const query = useQuery();
    const movieId = query.get('movieId');

    return (
        <section>
            {movieId ? <SeatSelection movieId={movieId}/> : <div>Select a Movie First</div>}
        </section>
    );
};

export default SeatsPage;
