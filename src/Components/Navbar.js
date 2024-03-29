import React from 'react'
import Brand from '../Assets/book.png'
import {RxAvatar} from 'react-icons/rx'
import Profile from '../Assets/retrieve.jpg'
const Navbar = () => {
  return (
    <>
    <nav className='navbar navbar-expand-sm'>
        <div className='container-fluid ms-5 ps-5'>
            <a className='navbar-brand text-white h1' style={{fontSize:"30px",fontFamily:"cursive"}} href='/'>
            <img className='rounded-pill me-4 ms-5 mb-2' style={{width:"50px"}} src={Brand} alt="Rank Up"></img>
                Rank Up</a>
        </div>
                <ul className='navbar-nav ms-auto me-2 h4 pe-5' style={{fontFamily:"cursive"}}>
                    <li className='nav-item px-2'>
                        <a className='nav-link text-white' href='/'>Home</a>
                    </li>
                    <li className='nav-item px-2'>
                        <a className='nav-link text-white' href='/signup'>Signup</a>
                    </li>
                    <li className='nav-item px-2'>
                        <a className='nav-link text-white' href='/login'>Login</a>
                    </li>
                    <li className='nav-item px-2'>
                        <a className='nav-link text-white' href='/hqs'>Quizes</a>
                    </li>
                    <li className='nav-item px-2 pe-1'>
                        <a className='nav-link text-white' href='/'>About</a>
                    </li>
                </ul>
        <div className='text-white me-5 pe-5 h1' onClick={() => window.location.replace('/profile')} style={{width:"50px",height:"50px"}}>
                <img className='rounded-pill me-5' src={Profile} style={{width:"50px",height:"50px"}} alt="profile"></img>
        </div>
    </nav>
    </>
  )
}

export default Navbar