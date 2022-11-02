import React, { useEffect, useState } from 'react'
import { toast,ToastContainer } from 'react-toastify'
import {
  ImageLoader,
  InputBox,
  ReactButton,
  TextArea,
  Tags
} from '../components'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AddPosts } from '../api/user'
function AddPost () {
  const [loading, setLoading] = useState(false)
  const [Title, setTitle] = useState('')
  const [shortDesc, setshortDesc] = useState('')
  const [Desc, setDesc] = useState('')
  const [Image, setImage] = useState('')
  const [Tag, setTag] = useState('')
  const [tags, setTags] = useState([])
  const {  auth_details } = useSelector(state => state.AUTH)
  //const Navigate = useNavigate()
  const Print = () => {
    console.log(Title,shortDesc,Desc,);
    if (!Title || !shortDesc || !Desc || tags.lengh === 0 || !Image) {
      return toast.warning('All Fields Must be Filled...')
    }
    const data = {
      creater: auth_details._id,
      title: Title,
      shortDesc,
      Desc,
      tags,
      image: Image
    }

    AddPosts(data)
    ClearAll()
  }
  const AddTags = () => {
    if (Tag) {
      setTags([...tags, Tag])
      setTag('')
    }
  }
  const ClearAll = () => {
    setTitle('')
    setshortDesc('')
    setDesc('')
    setTag('')
    setTag([])
  }
  useEffect(() => {
    // if (!auth) return Navigate('/signin')
  })
  return (
    <div className='w-screen h-auto flex flex-col justify-center items-center px-1 md:px-[1.5rem] py-1 md:py-[1.5rem]'>
      <h2 className='text-lg font-bold font-[oswald] text-black/60 mb-3'>
        Add Post
      </h2>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div>
          <InputBox text='Title' setState={setTitle} type={"text"} />
          <TextArea text='Short Description' row={4} setState={setshortDesc} />
          <TextArea text='Description' row={10} setState={setDesc} />
        </div>
        <div className='flex flex-col gap-5'>
          <div className='w-full flex gap-4 items-center justify-center'>
            <InputBox text='Tag Names' setState={setTag} state={Tag} />
            <div className='w-[4rem]'>
              <ReactButton text='Add' animate={false} onClickFn={AddTags} />
            </div>
          </div>
          <div className='w-full h-auto flex items-center gap-4'>
            {tags.length > 0 &&
              tags.map((tag, index) => (
                <Tags key={index} text={tag} setState={setTags} />
              ))}
          </div>
          <ImageLoader loading={false} imageUrl={false} setState={setImage} />
        </div>
      </div>
      <div className='mt-5 w-[30%] h-10'>
        <ReactButton text='Add Post' onClickFn={Print} />
      </div>
      <ToastContainer />
    </div>
  )
}

export default AddPost
