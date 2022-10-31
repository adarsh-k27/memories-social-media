import React, { useRef, useState } from 'react'
import { AiOutlineDelete, BsFillCloudArrowDownFill } from '../icons'
import {
  deleteObject,
  ref,
  getDownloadURL,
  uploadBytesResumable
} from 'firebase/storage'
import { storage } from '../firebase.config'
import { Loading } from '../components'
function ImageLoader ({ setState }) {
  let fileName = ''
  const File = useRef()
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(false)
  const [imageUrl, setImageUrl] = useState(false)
  const deleteImage = () => {
    setLoading(true)
    const deleteRef = ref(storage, fileName && fileName)
    deleteObject(deleteRef).then(() => {
      setImageUrl(false)
      setLoading(false)
    })
  }
  const AddToFirebase = () => {
    setLoading(true)
    console.log('started', loading)
    const fileRef = ref(storage, `images/${Date.now()}-${fileName.name}`)
    const fileUploadTask = uploadBytesResumable(fileRef, fileName)
    fileUploadTask.on(
      'state_changed',
      snapshot => {
        setProgress(
          (Number(snapshot.bytesTransferred) / Number(snapshot.totalBytes)) *
            100
        )
        console.log('snap', snapshot.bytesTransferred)
      },
      error => {
        console.log(error)
        setLoading(false)
      },
      () => {
        getDownloadURL(fileUploadTask.snapshot.ref).then(downloadUrl => {
          console.log('downloadLink', downloadUrl)
          setImageUrl(downloadUrl)
          setState(downloadUrl)
          setLoading(false)
        })
      }
    )
  }
  return (
    <div className='w-full h-[15rem] md:h-full border-2 border-solid border-gray-500 flex flex-col items-center justify-center'>
      {loading ? (
        <div>
          <Loading progress={progress} />
        </div>
      ) : (
        <div
          className='w-full h-full flex items-center justify-center'
          onClick={() => {
            File.current.click()
          }}
        >
          {!imageUrl ? (
            <div>
              <label htmlFor=''>
                <input
                  type='file'
                  name=''
                  id=''
                  className='hidden'
                  ref={File}
                  onChange={e => {
                    e.preventDefault()
                    fileName = e.target.files[0]
                    setState(e.target.files[0])
                    AddToFirebase()
                  }}
                />
                <BsFillCloudArrowDownFill className='text-6xl text-gray-600' />
              </label>
              <p>Choose Image</p>
            </div>
          ) : (
            <div className='relative w-full h-[15rem]'>
              <img
                src={imageUrl && imageUrl}
                alt=''
                srcset=''
                className='w-full h-full object-cover'
              />
              <div className='w-auto h-auto px-1 py-1 bg-white rounded-md z-100 absolute bottom-0 right-3 flex items-center justify-center' 
              onClick={(e)=>{
                e.preventDefault()
                deleteImage()
              }}
              >
                <AiOutlineDelete className='text-xl text-red-500 ' />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default ImageLoader
