import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase.config'
import OAuth from '../Components/OAuth'
import visibilityIcon from '../Asset/visibilityIcon.svg'

function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const { name, email, password } = formData

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const auth = getAuth()

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      const user = userCredential.user

      updateProfile(auth.currentUser, {
        displayName: name,
      })

      const formDataCopy = { ...formData }
      delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp()

      await setDoc(doc(db, 'users', user.uid), formDataCopy)

      navigate('/')
    } catch (error) {
      toast.error('Something went wrong with registration')
    }
  }


  

  return (
    <>
      <div className='container-container'>
      <div className='container-signpage'>
        <header className='d-flex justify-content-center'>
          <p className='pageHeader fs-3'>Registration</p>
        </header>


        <div className='container-signin d-flex justify-content-center'>

        <form onSubmit={onSubmit}>
          <div>
        <input
            type='text'
            className='nameInput'
            placeholder='Name'
            id='name'
            value={name}
            onChange={onChange}
          />
          </div>

          <input
            type='email'
            className='emailInput'
            placeholder='Email'
            id='email'
            value={email}
            onChange={onChange}
          />

          <div className='passwordInputDiv'>
            <input
              type={showPassword ? 'text' : 'password'}
              className='passwordInput'
              placeholder='Password'
              id='password'
              value={password}
              onChange={onChange}
            />

            <img
              src={visibilityIcon}
              alt='show password'
              className='showPassword'
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </div>


          <div className='signInBar'>
            <button className='signInButton'>
              Signup
            </button>
          </div>
          </form>
          </div>


        <div className='d-flex justify-content-center'>
        <Link to='/forgotpassword' className='forgotPasswordLink'>
            Forgot Password
          </Link>
          </div>


        <div  className='d-flex justify-content-center'>
        <Link to='/signin' className='register-link'>
          Sign In Instead
        </Link>
        </div>


        <div  className='d-flex justify-content-center'>
        <OAuth />
      </div>
      </div>
      </div>


    </>
  )
}

export default SignUp