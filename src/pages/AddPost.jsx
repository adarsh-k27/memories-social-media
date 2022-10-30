import React from 'react'
import { ImageLoader, InputBox, TextArea } from '../components'
function AddPost () {
  return (
    <div className='w-screen h-auto flex flex-col justify-center items-center '>
      <div className='w-full grid grid-cols-2 gap-5'>
        <h2>Add Post</h2>0
        <div>
          <InputBox text='Title' />
          <TextArea text='Short Description' row={4} />
          <TextArea text='Description' row={10} />
        </div>
        <div>
          <ImageLoader loading={true} />
        </div>
      </div>
    </div>
  )
}

export default AddPost
