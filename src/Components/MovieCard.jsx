import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ movieInfo }) => {
    return (
        <a href={movieInfo.link} target='_blank' class="movie-card">
            <div to={`/movie/4${movieInfo.id}`
            } class="movie-poster" >
                <img
                    src={movieInfo.image}
                    alt=""
                />
            </div>

            <div class="movie-card-footer">
                <div class="movie-genre">{movieInfo.genre}</div>
                <div class="movie-title">{movieInfo.title}</div>
            </div>
        </a >
    )
}

export default MovieCard
