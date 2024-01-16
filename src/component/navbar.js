
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './navbar.css'
import About from '../pages/about'
//double dots so thast it canacees the outside document
import Home from '../pages/Home';
// import Contact from '../pages/Contact';
// import ModalOne from './modal';
import Modal from './NewModal';
import { useAuth0 } from '@auth0/auth0-react';
import iio from '../img/empowermendlogo.png'
import LoginButton from '../login';
import LogoutButton from '../logout';
import Profile from '../profile';
import Service from '../pages/service';
import Contact from '../pages/Contact'
import Pricing from '../pages/pricing';
import logo from '../img/empowermendlogo.png'

function Navbar(props) {

const {loginWithRedirect , isAuthenticated , logout , user } = useAuth0()
console.log(isAuthenticated)
    return (
        <Router>
            
<nav class="bg-white border-gray-200 shadow-lg rounded-xl">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between rounded-xl p-2">
    
        <img src={logo} class="h-[65px] w-[65px] mr-3" alt="Flowbite Logo" />
        

    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-3 md:flex-row md:space-x-8 md:mt-0 md:border-0 text-black">
        <li>
        <Link className='block py-2 pl-3 pr-4 text-black' to='/'>Home</Link>
          
        </li>
        <li>
        <Link className='block py-2 pl-3 pr-4 text-black' to='/About'>About</Link>
        
        </li>
        <li>
        <Link className='block py-2 pl-3 pr-4 text-black' to='/service'>Services</Link>
        </li>
        <li>
        <Link className='block py-2 pl-3 pr-4 text-black' to='/pricing'>Pricing</Link>
       
        </li>
        <li>
        {/* <Link className='block py-2 pl-3 pr-4 text-black' to='/contact'>Contact</Link> */}
        </li>
    <li>  {isAuthenticated && (<div><Modal forName='appoint'/></div>)}</li>
    <li>{   isAuthenticated ? (<div><LogoutButton /></div>) : (<div><LoginButton /></div>)
                        }</li>
        <li>{isAuthenticated && (<div className='ms-1 fs-6 colo'>{user.name}</div>)}</li>
      </ul>
    </div>
  </div>
</nav>

            <Routes> 
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/About' element={<About />}></Route>
            <Route exact path='/service' element={<Service />}></Route>
            <Route exact path='/pricing' element={<Pricing />}></Route>
            <Route exact path='/Contact' element={<Contact />}></Route> 
            
            </Routes>
        </Router>
    )
}

export default Navbar;