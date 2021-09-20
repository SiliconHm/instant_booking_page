import React, { useState } from "react";
import { MenuItems } from './MenuItems'
import { Button } from '../Button';
import './Navbar.css'
import mName from 'static/member_logo260x80.png'
import mLogo from 'static/member_favicon150x150.png'

const Navbar = () => {
    const [clicked, setClick] = useState(false)

    const handleClick = () => {
        setClick(!clicked)
    }

    return (
        <nav className='NavbarItems'>
            {/* <h1 className='navbar-logo'>memberbutton <i className='fab fa-react'></i> </h1> */}
            <a href='#' className='navbar-logo1'> <img src={mName} alt='Name'/> </a>
            <a href='#' className='navbar-logo2'> <img src={mLogo} alt='Logo'/> </a>
            <div className='menu-icon' onClick={handleClick}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, i) => {
                        return (
                            <li key={i}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            <Button>Signup</Button>
        </nav>
    )
}

export default Navbar
