import React from 'react'
import { BsFillCloudArrowDownFill } from '../icons'

function ImageLoader({loading,imageUrl}) {
  return (
    <div className='w-full h-full py-1 border-2 border-solid border-gray-500 flex flex-col items-center justify-center'>
      {
        loading ? (
            <div><p>Loading</p></div>
        )
        : !imageUrl ? (
            <div className=''>
                <label htmlFor=''>
                <input type='file' name='' id='' className='hidden' />
                <BsFillCloudArrowDownFill />
                </label>

            </div>
        )
        :(
            <div>Image here</div>
        )
      }
    </div>
  )
}

export default ImageLoader