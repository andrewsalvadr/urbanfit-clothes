import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink, useNavigate} from 'react-router-dom'
import { Navbar, Nav, Container} from 'react-bootstrap';
import Logo from '../Asset/urban-fit-logo.png'
import { useSelector } from 'react-redux';
import { FaShoppingBag } from 'react-icons/fa'
import {MdAccountCircle} from 'react-icons/md'
import {MdLogout} from 'react-icons/md'
import { getAuth } from 'firebase/auth'
import { toast } from 'react-toastify'

function NavbarShop () {

  const cart = useSelector((state)=>state);
  const countCartItems  = cart.length

  const auth = getAuth()

  const navigate = useNavigate()

  let user = auth.currentUser


  const onLogout = () => {
    auth.signOut()
    navigate('/logout')
    toast.success('Logout Successfully')

  }


  return (

  <Navbar collapseOnSelect expand="lg" text="black" fixed="top" className="navbar-container">
  <Container>
  <Navbar.Brand href="/" className="navLogo">
  <a href="/"><img src={Logo} className="main-logo"></img></a>
  </Navbar.Brand>

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <NavLink className="nav-link active" to="/">HOME</NavLink>
         <NavLink className="nav-link active" to="/men">SHOPMEN </NavLink>
         <NavLink className="nav-link active" to="/women"> SHOPWOMEN</NavLink>
         <NavLink className="nav-link active" to="/kids"> SHOPKIDS</NavLink>
         <NavLink className="nav-link active" to="/shopcares">SHOPCARES</NavLink>
    </Nav>
    <Nav>
    <NavLink className="nav-icons nav-link active mx-1 d-flex" to="/cart"><FaShoppingBag className='fs-4'/>{' '} 
    {countCartItems ? ( <p className="badge mx-1">{countCartItems}</p>) : ('' )
    }  
         </NavLink>
      
          <NavLink className="nav-link active" to="/signin">
          {user ? <Link to='/profile'  style={{ textDecoration: 'none' }}><p className='userBadge'>Hi, {user.displayName} </p></Link> : <MdAccountCircle className='fs-3'  style={ user ? { display:'none'} : {display : 'block'} }  />}
          </NavLink>
          <NavLink className="logoutNav nav-link active mx-1" to="/logout" onClick={onLogout}>{user ? <MdLogout className='fs-3'/>  : (' ') }</NavLink>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
)
    }

export default NavbarShop   
