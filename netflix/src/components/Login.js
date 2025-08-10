import React, { useState } from 'react'
import Header from './Header'
import axios from 'axios';
import { API_END_POINT } from '../utils/constant';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLoading, setUser } from '../redux/userSlice';
import { useSelector } from 'react-redux';


const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.user.isLoading);


  const loginHandler = () => {
    setIsLogin(!isLogin);
  }

  const getInputData = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    if (isLogin) {
      const user = { email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/login`, user, {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true
        });

        if (res.data.success) {
          toast.success(res.data.message);
        }
        dispatch(setUser(res.data.user));
        navigate("/Browser");
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      }
      finally {
        dispatch(setLoading(false));
      }
    } else {
      dispatch(setLoading(true));
      const user = { fullName, email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/register`, user, {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true
        });

        if (res.data.success) {
          toast.success(res.data.message);
        }
        setIsLogin(true);
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      }
      finally {
        dispatch(setLoading(false));
      }
    }


    setFullName('');
    setEmail('');
    setPassword('');
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img className='w-[100vw] h-[100vh] bg-cover' src='https://cdn.wallpapersafari.com/98/95/oJwbl1.jpg' alt='banner' />
      </div>
      <form onSubmit={getInputData} className='flex flex-col w-3/12 rounded-sm my-36 p-4 left-0 right-0 opacity-80 mx-auto justify-center items-center bg-black absolute'>
        <h1 className='text-center text-white text-2xl font-bold'>{isLogin ? "Sign in" : "Sign up"}</h1>
        <div className='flex flex-col w-full text-white'>
          {!isLogin && <label>Full Name</label>}
          {!isLogin && <input value={fullName} onChange={(e) => setFullName(e.target.value)} type='text' className='rounded-lg p-3 m-2 text-black' />}
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' className='rounded-lg p-3 m-2 text-black' />
          <label>Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' className='rounded-lg p-3 m-2 text-black' />
          <button className='bg-red-800 text-white rounded-lg m-4 font-semibold p-2'>
            {`${isLoading ? "Loading..." : (isLogin ? "Sign in" : "Sign up")}`}
          </button>
          <p>
            {isLogin ? "New to Netflix?" : "Already have an account?"}
            <span className='cursor-pointer hover:text-red-800 ml-1' onClick={loginHandler}>
              {isLogin ? "Sign up" : "Sign in"}
            </span>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login
