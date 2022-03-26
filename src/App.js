import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './Layout/Navbar'
import Footer from './Layout/Footer'
import Home from './Pages/Home'
import Shopcares from './Pages/Shopcares'
import Cart from './Pages/Cart'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Kids from './Pages/Kids'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import Forgotpassword from './Pages/Forgotpassword'
import Profile from './Pages/Profile'
import PrivateRoute from '../src/Components/PrivateRoute'
import Logout from './Pages/Logout'
import Error from './Pages/Error'
import ScrollToTop from './Components/ScrolltoTop'

function App() {




  return (
<>
    <Router>
      <ScrollToTop/>
      <Navbar/>
      <ToastContainer 
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover      
      />
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path='/logout' element={<Logout/>}/>
        <Route exact path = '/men' element ={<Men/>} />
        <Route exact path = '/women' element ={<Women/>} />
        <Route exact path = '/kids' element ={<Kids/>} />
        <Route exact path = '/shopcares' element ={<Shopcares/>} />
        <Route exact path = '/cart' element ={<Cart/>} />
        <Route path='/profile' element={<Profile />} />
        <Route exact path = '/signin' element ={<Signin/>} />
        <Route exact path = '/signup' element ={<Signup/>} />
        <Route exact path = '/forgotpassword' element ={<Forgotpassword/>} />
        <Route exact path = '*' element ={<Error/>} />
        </Routes>
        <Footer/>

      </Router>

    </>

  );
}

export default App;

