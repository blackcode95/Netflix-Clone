import React, { useEffect } from 'react'
import Header from './Header';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MainContainer from './MainContainer';
import MovieContainer from './MovieContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopluarMovies from '../hooks/usePopluarMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import SearchMovie from './SearchMovie';


const Browser = () => {
    const user = useSelector((state) => state.user.user);
    const toggle = useSelector((state) => state.movie.toggle);
    const navigate = useNavigate();
    //my custom hooks
    useNowPlayingMovies();
    usePopluarMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, []);


    return (
        <div >
            <Header />
            <div>
                {
                    toggle ? <SearchMovie /> : (
                        <>
                            <MainContainer />
                            <MovieContainer />
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Browser
