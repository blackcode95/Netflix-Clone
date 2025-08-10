import axios from 'axios'
import { Popular_Movie, options } from '../utils/constant'
import { getPopularMovies } from '../redux/movieSlice';
import { useDispatch } from 'react-redux';

const usePopluarMovies = async () => {

    const dispatch = useDispatch();

    try {
        const res = await axios.get(Popular_Movie, options);
        dispatch(getPopularMovies(res.data.results));

    } catch (error) {
        console.log(error);
    }
}

export default usePopluarMovies;
