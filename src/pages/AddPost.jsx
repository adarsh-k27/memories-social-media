import React, { useState } from 'react'
import {
  ImageLoader,
  InputBox,
  ReactButton,
  TextArea,
  Tags
} from '../components'
function AddPost () {
  const [Title, setTitle] = useState('')
  const [shortDesc, setshortDesc] = useState('')
  const [Desc, setDesc] = useState('')
  const [Image, setImage] = useState('')
  const [Tag, setTag] = useState('')
  return (
    <div className='w-screen h-auto flex flex-col justify-center items-center px-1 md:px-[1.5rem] py-1 md:py-[1.5rem]'>
      <h2 className='text-lg font-bold font-[oswald] text-black/60 mb-3'>
        Add Post
      </h2>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div>
          <InputBox text='Title' setState={setTitle} />
          <TextArea text='Short Description' row={4} setState={setshortDesc} />
          <TextArea text='Description' row={10} setState={setDesc} />
        </div>
        <div className='flex flex-col gap-5'>
          <div className='w-full flex gap-4 items-center justify-center'>
            <InputBox text='Tag Names' setState={setTag} />
            <div className='w-[4rem]'>
              <ReactButton text='Add' animate={false} />
            </div>
          </div>
          <div className='w-full h-auto flex items-center gap-4'>
            {/* <Tags />
            <Tags />
            <Tags />
            <Tags /> */}
          </div>
          <ImageLoader loading={true} imageUrl={false} />
        </div>
      </div>
      <div className='mt-5 w-[30%] h-10'>
        <ReactButton text='Add Post' className='mt-5' />
      </div>
    </div>
  )
}

export default AddPost
