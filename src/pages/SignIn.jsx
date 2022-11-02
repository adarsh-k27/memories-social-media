import React, { useEffect, useState } from 'react'
import { InputBox, ReactButton } from '../components'
import { AiOutlineEye, AiOutlineEyeInvisible, FcGoogle } from '../icons'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { app } from '../firebase.config'
import { toast, ToastContainer } from 'react-toastify'
import { signInUser, signUpUser } from '../api/user'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function SignIn () {
  //signin and signUp vARIABLES
  const [signIn, setSignIn] = useState(true)
  const [show, setShow] = useState(false)
  const [showPass, setShowPass] = useState(false)
  const [showConfirmPass, setShowConfirm] = useState(false)
  const Navigate = useNavigate()
  // FORM VARIABLES
  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [C_Passsword, setC_Passsword] = useState('')
  const firebaseAuth = getAuth(app)
  const provider = new GoogleAuthProvider()
  //REDUXSTATE
  const { auth } = useSelector(state => state.AUTH)
  console.log('auth', auth)
  const LoginWithGoogle = async () => {
    await signInWithPopup(firebaseAuth, provider).then(usercred => {
      //console.log('cred', usercred)
      const data = {
        name: usercred.user.displayName,
        email: usercred.user.email,
        profile: usercred.user.photoURL,
        method: 'google'
      }
      console.log(data)
      signInUser(data)

      firebaseAuth.onAuthStateChanged(userCred => {
        if (userCred) {
          console.log("updated",userCred);
          userCred.getIdToken().then(token => {
            // LoginUser(`Bearer ${token}`, UserLogin)
          })
          Navigate('/', { replace: true })
        } else {
          // setAuth(false)
          // UserLogin(null)
          // Navigate('/login')
        }
      })
    })
  }
  const ClearAll = () => {
    setName('')
    setEmail('')
    setPassword('')
    setC_Passsword('')
  }
  const handleSubmit = () => {
    if (signIn) {
      if (!Email || !Password) {
        return toast.warning('All Field Must Be Filled')
      }
      const data = {
        email: Email,
        password: Password,
        method: 'email'
      }
      signInUser(data, Navigate)
    } else {
      console.log('enter')
      if (!Name || !Password || !Email || !C_Passsword) {
        return toast.warning('All Field Must Be Filled')
      }
      if (Password !== C_Passsword) {
        return toast.warning('Password Must Be Same')
      }
      const data = {
        name: Name,
        password: Password,
        email: Email,
        method: 'email'
      }
      signUpUser(data, '', setSignIn)
      ClearAll()
    }
  }
  useEffect(()=>{
    if(auth){
      Navigate('/')
    }
  })
  const signInFn = () => {
    return (
      <>
        <InputBox text='Email' type={'email'} setState={setEmail} />
        <div className='relative'>
          <InputBox
            text='Password'
            type={show ? 'text' : 'password'}
            setState={setPassword}
          />
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
        <InputBox text='Name' type={'text'} setState={setName} />
        <InputBox text='Email' type={'email'} setState={setEmail} />
        <div className='relative'>
          <InputBox
            text='Password'
            type={showPass ? 'text' : 'password'}
            setState={setPassword}
          />
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
            setState={setC_Passsword}
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
        <ReactButton
          text={signIn === false ? 'SignUp' : 'SignIn'}
          onClickFn={handleSubmit}
        />
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
            onClick={() => {
              setSignIn(prev => !prev)
              ClearAll()
            }}
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
      <ToastContainer />
    </div>
  )
}

export default SignIn
