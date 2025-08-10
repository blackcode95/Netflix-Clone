import React from 'react'
import { FaPlayCircle } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-[vw] absolute text-white font-serif pt-[18%] p-12'>
      <h1 className='text-3xl font-bold '>{title}</h1>
      <p className='w-1/3 m-4'>{overview}</p>
      <div className='flex items-center'>
        <button className='flex items-center px-6 py-2 bg-red-800 rounded-lg hover:bg-opacity-60'>
          <FaPlayCircle />
          <span className='ml-1'>Play</span>
        </button>
        <button className='flex items-center px-6 py-2 bg-red-800 rounded-lg hover:bg-opacity-60 m-2'>
          <FaCircleInfo />
          <span className='ml-1'>Watch more</span>
        </button>
      </div>
    </div>
  )
}

export default VideoTitle
