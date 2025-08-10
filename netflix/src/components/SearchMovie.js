import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { options, SEARCH_MOVIE_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { setSearchMovieDetails } from '../redux/searchSlice';
import { useSelector } from 'react-redux';
import { setLoading } from '../redux/userSlice';
import MovieList from '../components/MovieList';




const SearchMovie = () => {
    const [searchMovie, setSearchMovie] = useState("");
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.user.isLoading);
    const { movieName, searchedMovies } = useSelector((state) => state.searchMovie);


    const submitHandler = async (e) => {
        e.preventDefault();
        dispatch(setLoading(true));
        try {
            const res = await axios.get(`${SEARCH_MOVIE_URL}${searchMovie}&include_adult=false&language=en-US&page=1`, options);
            console.log(res.data.results);
            dispatch(setSearchMovieDetails({ searchMovie, movies: res?.data?.results }))
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(setLoading(false));
        }
        setSearchMovie("");
    }
    return (
        <>
            <div className='flex justify-center pt-[10%] bg-black W-[100%]'>
                <form onSubmit={submitHandler} className='bg-gray-100 p-10 rounded-md shadow-md w-[50%]'>
                    <div className='flex justify-between shadow-md border-2 border-gray-100 rounded-lg w-[100%] p-2'>
                        <input value={searchMovie} onChange={(e) => { setSearchMovie(e.target.value) }} className='w-full outline-none border-none rounded-lg text-lg' type='text' placeholder='Search Movie ' />
                        <button className='bg-red-800 text-white p-2 mx-2 rounded-lg hover:bg-opacity-60'>{isLoading ? "Loading..." : "Search"}</button>
                    </div>
                </form>
            </div>
            {
                searchedMovies.length > 0 ? (<MovieList title={movieName} searchMovie={true} movies={searchedMovies} />) : (<h1>No Movie Found</h1>)
            }

        </>
    )
}

export default SearchMovie
