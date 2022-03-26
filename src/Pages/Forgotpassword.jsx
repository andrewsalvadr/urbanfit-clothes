import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { toast } from 'react-toastify'

function ForgotPassword() {
  const [email, setEmail] = useState('')

  const onChange = (e) => setEmail(e.target.value)

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success('Email was sent')
    } catch (error) {
      toast.error('Could not send reset email')
    }
  }

  return (
    <div className='container-container'>
    <div className='container-signpage'>
    <header>
        <p className='page-header'>Forgot Password</p>
      </header>

      <main>
        <form onSubmit={onSubmit}>
          <input
            type='email'
            className='emailInput'
            placeholder='Email'
            id='email'
            value={email}
            onChange={onChange}
          />
            <div className='signInText'>Send Reset Link:
            <button className='signInButton mx-2'>
              Signin
            </button>
            </div>

            <div className='forgot-password-section d-flex justify-content-center'>
          <Link className='forgotPasswordLink' to='/signin'>
            Sign In
          </Link>
          </div>
        </form>

      </main>
    </div>
    </div>
  )
}

export default ForgotPassword