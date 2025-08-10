import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        toggle: false,
        trailerMovie: null,
        open: false,
        id: "",
    },
    reducers: {
        getNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        getPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        getTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        getUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        setToggle: (state, action) => {
            state.toggle = !state.toggle;
        },
        getTrailerMovie: (state, action) => {
            state.trailerMovie = action.payload;
        },
        setOpen: (state, action) => {
            state.open = action.payload;
        },
        getId: (state, action) => {
            state.id = action.payload;
        }
    }
});

export const { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies, getId, setOpen, setToggle, getTrailerMovie } = movieSlice.actions;
export default movieSlice.reducer;