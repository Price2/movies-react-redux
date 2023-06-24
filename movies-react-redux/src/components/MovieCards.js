import React from 'react';
import store from '../app/store';
import { fetchMovies, incrementPage, decrementPage, selectMovie } from '../features/movies/movieSlice';
import { useSelector, useDispatch } from 'react-redux'
import Loading from './Loading';

const MovieCards = () => {
    const movies = useSelector((state) => state.movies)
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(fetchMovies(movies.currentPage))
    }, [movies.currentPage])

    const nextPage = () => {
        dispatch(incrementPage())
    }
    const prevPage = () => {
        if (movies.currentPage > 1) {
            dispatch(decrementPage())
        }
    }
    const movieSelect = (movie) => {
        dispatch(selectMovie(movie))
        document.body.style.overflow = 'hidden';
    }

    return (
        <>
                <div className="container">
                    <div id="cards-wrapper" className="row align-items-center justify-content-center">
                        {movies.loading ?
                        <Loading />
                        :
                        movies.data.map((movie, idx) => {
                                return (
                                    <div key={idx} className="col-md-3 mb-3">
                                        <div onClick={()=> movieSelect(movie)} className="card h-100" style={{ cursor: "pointer" }}>
                                            <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} className="img-fluid card-img-top" alt="movie card image" />
                                            <div className="card-body">
                                                <h5 className="card-title">{movie.title}</h5>
                                                <p className="card-text">{movie.vote_average}</p>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })}
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-2 d-flex gap-5">

                            <button id="previousBtn" onClick={prevPage} className="btn btn-outline-warning">Previous</button>
                            <button id="nextBtn" onClick={nextPage} className="btn btn-outline-success">Next</button>
                        </div>
                    </div>
                </div>

        </>

    );
}

export default MovieCards;
