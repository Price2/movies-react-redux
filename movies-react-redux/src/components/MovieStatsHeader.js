import React from 'react';
import { useSelector } from 'react-redux'

const MovieStatsHeader = () => {
    const movies = useSelector((state) => state.movies)
    const stats = {
        currentPage: movies.currentPage,
        number_of_movies: movies.data.length,
        top_rated_movie: movies.data.length? movies.data.reduce((prev, current) => (prev.vote_average > current.vote_average) ? prev : current).title :[],
        rating: movies.data.length? movies.data.reduce((prev, current) => (prev.vote_average > current.vote_average) ? prev : current).vote_average: []
    }
   

    return (
        <>
            <div className="container movies">
                <h1>Movies</h1>
                <div id="movies-stats" className="mb-5">
                    <h2>Stats</h2>
                    <p className="m-1">Current page: {stats.currentPage}</p>
                    <p className="m-1">Number of movies: {stats.number_of_movies}</p>
                    <p className="m-1">Top rated movie: {stats.top_rated_movie}</p>
                    <p className="m-1">Rating: {stats.rating}</p>
                </div>

            </div>
        </>
    );
}

export default MovieStatsHeader;
