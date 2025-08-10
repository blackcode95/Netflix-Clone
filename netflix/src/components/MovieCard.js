import React from 'react';
import { Banner_Url } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { setOpen } from '../redux/movieSlice';
import { getId } from '../redux/movieSlice';



const MovieCard = (posterPath, movieId) => {
    const dispatch = useDispatch();
    
    if (posterPath.posterPath === null) return null;

    const handleOpen = () => {
        dispatch(getId(movieId));
        dispatch(setOpen(true));
    }

    return (
        <div onClick={handleOpen} className=" movie-card flex-shrink-0 w-[200px] m-2 transition-transform duration-200 hover:scale-105">
            <img src={`${Banner_Url}/${posterPath.posterPath}}`} alt='Movie-banner'/>
        </div>
    )
}

export default MovieCard;
