import { useNavigate} from 'react-router-dom'

function Logout() {

const navigate = useNavigate()


const onClick = () => {
navigate('/')
}

  return (
      <div className='container-logout'>

        <div className='container-thankyou'>
          <h1 className='ty-text'>Thank you for shopping!</h1>

          <button className='ty-text' onClick={onClick}>Back to home</button>
          </div>    
    </div>

  )
}

export default Logout