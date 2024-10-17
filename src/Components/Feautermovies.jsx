import React from 'react'
import { movieData } from '../Data'
import MovieCard from './MovieCard'

const FeatureMovies = () => {
    return (
        <section class="feature-movie-section">
            <div class="feature-movie-header">
                <div class="feature-movie-sub-text">Our works</div>
                <h1>Iyazer Films</h1>
            </div>

            <div class="feature-movie-container">
                {
                    movieData.map((movie) => {
                        return (
                            <MovieCard movieInfo={movie} />
                        )
                    })
                }

            </div>
        </section>
    )
}

export default FeatureMovies
