import React, { useState } from 'react'
import { InputBox, ReactButton } from '../components'
import { AiOutlineEye, AiOutlineEyeInvisible, FcGoogle } from '../icons'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { app } from '../firebase.config'
function SignIn () {
  const [signIn, setSignIn] = useState(true)
  const [show, setShow] = useState(false)
  const [showPass, setShowPass] = useState(false)
  const [showConfirmPass, setShowConfirm] = useState(false)

  const firebaseAuth = getAuth(app)
  const provider = new GoogleAuthProvider()

  const LoginWithGoogle = async () => {
    await signInWithPopup(firebaseAuth, provider).then(usercred => {
      console.log('cred', usercred)
    })
  }

  const signInFn = () => {
    return (
      <>
        <InputBox text='Email' type={'email'} />
        <div className='relative'>
          <InputBox text='Password' type={show ? 'text' : 'password'} />
          <div
            className='absolute right-16 bottom-2'
            onClick={() => {
              setShow(prev => !prev)
            }}
          >
            {show ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </div>
        </div>
      </>
    )
  }

  const signUpFn = () => {
    return (
      <>
      <InputBox text="Name" type={"text"} />
        <InputBox text='Email' type={"email"} />
        <div className='relative'>
          <InputBox text='Password' type={showPass ? 'text' : 'password'} />
          <div
            className='absolute right-16 bottom-2'
            onClick={() => {
              setShowPass(prev => !prev)
            }}
          >
            {showPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </div>
        </div>

        <div className='relative'>
          <InputBox
            text='Confirm Password'
            type={showConfirmPass ? 'text' : 'password'}
          />
          <div
            className='absolute right-16 bottom-2'
            onClick={() => {
              setShowConfirm(prev => !prev)
            }}
          >
            {showConfirmPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </div>
        </div>
      </>
    )
  }
  return (
    <div className='w-full h-screen flex flex-col items-center justify-centergap-4 mt-3'>
      <h2 className='text-lg font-bold text-black/60'>
        {signIn ? 'SignIn' : 'SignUp'}
      </h2>

      <div className='w-full md:w-[40%] h-auto flex flex-col gap-3 px-1'>
        {signIn ? signInFn() : signUpFn()}
      </div>
      <div className='w-full h-auto md:w-[30%] mt-4 mr-4 md:mr-6 flex flex-col gap-4 px-[1.6rem] md:px-0'>
        <ReactButton text={SignIn == true ? 'SignIn' : 'SignUp'} />
        {signIn && (
          <div
            className='w-full cursor-pointer h-10 flex gap-4 items-center justify-center bg-black/20 rounded-md'
            onClick={e => {
              e.preventDefault()
              LoginWithGoogle()
            }}
          >
            <FcGoogle className='text-lg' />
            <button className='text-md font-bold text-black/60'>
              {signIn ? 'Google SignIn' : 'Google SignUp'}
            </button>
          </div>
        )}
      </div>
      <div className='flex flex-col mt-2 gap-2'>
        <p className='text-sm font-normal font-serif '>
          {signIn ? 'Are You Not Registered Yet' : 'Already Registered '}
          <span
            className='underline ml-3 cursor-pointer'
            onClick={() => setSignIn(prev => !prev)}
          >
            {!signIn ? 'SignIn' : 'SignUp'}
          </span>{' '}
        </p>
        {signIn && (
          <p className='text-sm font-normal font-serif '>
            Forgot
            <span className='underline ml-3 cursor-pointer'>Password</span>{' '}
          </p>
        )}
      </div>
    </div>
  )
}

export default SignIn
