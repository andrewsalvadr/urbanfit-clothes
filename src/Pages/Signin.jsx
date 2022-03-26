import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import visibilityIcon from '../Asset/visibilityIcon.svg'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'
import OAuth from '../Components/OAuth'

function Signin() {

    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    })
    const { email, password } = formData
  
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
  
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        )
  
        if (userCredential.user) {
          navigate('/')
          toast.success('Login Successfully')
        }
      } catch (error) {
        toast.error('Wrong Email or Password')
      }
    }
  
    return (
      <>
      <div className='container-container'>
      <div className='container-signpage'>
        <header className='d-flex justify-content-center'>
          <p className='pageHeader fs-3'>Welcome!</p>
        </header>


        <div className='container-signin d-flex justify-content-center'>

        <form onSubmit={onSubmit}>
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
              Login
            </button>
          </div>
        </form>
        </div>

        <div className='d-flex justify-content-center'>
        <Link to='/forgotpassword' className='forgotPasswordLink'>
            Forgot Password
          </Link>
          </div>

      <div className='d-flex justify-content-center'>
        <Link to='/signup' className='registerLink'>
         Register
        </Link>
        </div>
      <div  className='d-flex justify-content-center'>
        <OAuth/>
        </div>
        </div>
        </div>

    </>

  )
}
  
  
export default Signin