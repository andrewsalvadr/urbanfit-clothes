import { useNavigate} from 'react-router-dom'

function Error() {

const navigate = useNavigate()


const onClick = () => {
navigate('/')
}

  return (
      <div className='container-error'>

        <div className='container-error-text'>
          <h1 className='error-text'>ERROR 404: THE PAGE YOU WERE LOOKING FOR DOES NOT EXIST.</h1>

          <button className='error-text' onClick={onClick}>Back to home</button>
          </div>    
    </div>

  )
}

export default Error