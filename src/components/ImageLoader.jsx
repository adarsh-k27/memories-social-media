import React, { useRef } from 'react'
import { BsFillCloudArrowDownFill } from '../icons'
import {Loading} from '../components'
import rani from '../assets/rainbow.png'
function ImageLoader ({ loading, imageUrl }) {
  const File = useRef()
  return (
    <div className='w-full h-[15rem] md:h-full py-1 border-2 border-solid border-gray-500 flex flex-col items-center justify-center'>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div
          className='w-full h-full flex items-center justify-center'
          onClick={() => {
            File.current.click()
          }}
        >
          {
            !imageUrl ? (
           <div><label htmlFor=''>
            <input type='file' name='' id='' className='hidden' ref={File} />
            <BsFillCloudArrowDownFill className='text-6xl text-gray-600' />
          </label>
          <p>Choose Image</p></div>
            )
            :(
           <div>
            <img src={rani} alt="" srcset="" />
           </div>
            )
          }
          
        </div>
      ) }
    </div>
  )
}

export default ImageLoader
