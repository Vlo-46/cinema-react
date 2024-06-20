import React from 'react';
import SeatSelection from '../components/SeatSelection';
import {useLocation} from 'react-router-dom';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const SeatsPage = () => {
    const query = useQuery();
    const movieId = query.get('movieId');

    return (
        <div>
            {movieId ? <SeatSelection movieId={movieId}/> : <div>Select a Movie First</div>}
        </div>
    );
};

export default SeatsPage;
