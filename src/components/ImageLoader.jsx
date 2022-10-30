import React, { useRef } from 'react'
import { BsFillCloudArrowDownFill } from '../icons'
function ImageLoader ({ loading, imageUrl }) {
  const File = useRef()
  return (
    <div className='w-full h-full py-1 border-2 border-solid border-gray-500 flex flex-col items-center justify-center'>
      {loading ? (
        <div>
          <p>Loading</p>
        </div>
      ) : !imageUrl ? (
        <div
          className='w-full h-full flex items-center justify-center'
          onClick={() => {
            File.current.click()
          }}
        >
          <label htmlFor=''>
            <input type='file' name='' id='' className='hidden' ref={File} />
            <BsFillCloudArrowDownFill className='text-6xl text-gray-600' />
          </label>
          <p>Choose Image</p>
        </div>
      ) : (
        <div>Image here</div>
      )}
    </div>
  )
}

export default ImageLoader
