import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies, searchMovie = false }) => {

    return (
        <div className='px-4 md:px-8 py-4"'>
            <h1 className={`${searchMovie ? "text-black" : "text-white"}text-2xl md:text-3xl mb-4 font-bold `}>
                {title}
            </h1>
            <div className='flex overflow-x-auto space-x-4 no-scrollbar cursor-pointer'>
                {
                    movies?.map((movie) => {
                        return (
                            <MovieCard key={movie.id} posterPath={movie.poster_path} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MovieList
