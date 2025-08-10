import React from 'react'
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { API_END_POINT } from '../utils/constant';
import { setUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { setToggle } from '../redux/movieSlice';


const Header = () => {
  const user = useSelector((state) => state.user.user);
  const toggle = useSelector((state) => state.movie.toggle);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`, {
        withCredentials: true
      });
      if (res.data.success) {
        toast.success(res.data.message);
      }
      dispatch(setUser(null));
      navigate("/");

    } catch (error) {
      console.log(error);
    }
  }

  const toggleHandler = () => {
    dispatch(setToggle());
  }

  return (
    <div className='absolute z-10 w-full flex justify-between p-5 items-center bg-gradient-to-b from-black '>
      <img className='w-40' src="https://tse1.mm.bing.net/th/id/OIP.V0t4FWxMpw5Ly3pILkW-ngHaEK?pid=Api&P=0&h=220" alt='logo' />
      {
        user && (
          <div className='flex items-center'>
            <IoIosArrowDropdownCircle size={25} color='white' />
            <h1 className='bg-red-800 text-white p-2 hover:bg-opacity-80 rounded-lg'>
              {user.fullName}
            </h1>
            <div className='flex ml-4'>
              <button onClick={logoutHandler} className='bg-red-800 hover:bg-opacity-80 text-white p-2 rounded-lg'>
                Logout
              </button>
              <button onClick={toggleHandler} className='bg-red-800 text-white p-2 hover:bg-opacity-80 rounded-lg ml-4'>
                {toggle ? "Home" : "Search"}
              </button>
            </div>
          </div>
        )
      }

    </div>
  )
}

export default Header
