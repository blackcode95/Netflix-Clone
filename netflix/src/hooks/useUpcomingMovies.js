import axios from 'axios'
import { Upcoming_Movie, options } from '../utils/constant'
import { getUpcomingMovies } from '../redux/movieSlice';
import { useDispatch } from 'react-redux';

const useUpcomingMovies = async () => {

    const dispatch = useDispatch();

    try {
        const res = await axios.get(Upcoming_Movie, options);
        dispatch(getUpcomingMovies(res.data.results));

    } catch (error) {
        console.log(error);
    }
}

export default useUpcomingMovies;
