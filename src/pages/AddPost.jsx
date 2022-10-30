import React from 'react'
import { ImageLoader, InputBox, TextArea } from '../components'
function AddPost () {
  return (
    <div className='w-screen h-auto flex flex-col justify-center items-center '>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div>
          <h2>Add Post</h2>
          <InputBox text='Title' />
          <TextArea text='Short Description' row={4} />
          <TextArea text='Description' row={10} />
        </div>
        <div>
          <ImageLoader loading={false} imageUrl={true}  />
        </div>
      </div>
    </div>
  )
}

export default AddPost
