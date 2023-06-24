import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {deselectMovie}from '../features/movies/movieSlice'
const Modal = () => {
    const movies = useSelector((state) => state.movies)
    const dispatch = useDispatch()
    const movieDetails = {
        movieImg: movies.currentSelectedMovie?.poster_path || "",
        title: movies.currentSelectedMovie?.title || "",
        vote_average: movies.currentSelectedMovie?.vote_average || "",
        vote_count: movies.currentSelectedMovie?.vote_count || "",
        overview: movies.currentSelectedMovie?.overview || ""
    }
    const closeModal = () => {
        dispatch(deselectMovie())
        document.body.style.overflow = 'scroll';

    }
    return (
        <>
            {
                movies.isSelected ?
                    <div id="modal_popup" className="modal-popup">
                        <div id="modal-popup-body" className="modal-popup-content">
                            <div className="row justify-content-end">
                                <div className="col-md-1 d-flex justify-content-end ">
                                    <span id="modal-close-icon" onClick={closeModal} className="Close"
                                        data-dismiss="modal"
                                        style={{fontSize: "50px;", cursor:"pointer"}}>&times;</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 p-0 pe-3">
                                    <img id="modal-img" className="img-fluid"
                                        src={`https://image.tmdb.org/t/p/w500${movieDetails.movieImg}`}
                                        alt="card-img" />
                                </div>

                                <div className="col-md-7" style={{padding: "0px 35px;"}}>
                                    <h2 id="modal-title" className="mb-3 mt-3">{movieDetails.title}</h2>
                                    <h3 id="modal-paragraph" className="mt-4"> IMDB Rating:
                                         {movieDetails.vote_average}/10
                                        ({movieDetails.vote_count} votes)
                                    </h3>
                                    <p id="modal-paragraph" className="mt-4">{ movieDetails.overview}</p>
                                </div>

                            </div>

                        </div>
                    </div>
                    
            :""}
        </>
    );
}

export default Modal;
