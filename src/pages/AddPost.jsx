import React from 'react'
import {InputBox} from '../components'
function AddPost() {
  return (
    <div className='w-screen h-auto flex flex-col justify-center items-center '>
      <div className='flex flex-col gap-5 py-3 px-5'>
          <h2>Add Post</h2>
           <InputBox text="Title"   />
           <InputBox text="Short Description"   />
           <InputBox text="Description" />
           <InputBoxt text="Enter Tags Here" />
      </div>
    </div>
  )
}

export default AddPost