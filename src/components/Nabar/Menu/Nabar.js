import React, { useState } from "react";
import { MenuItems } from './MenuItems'
import { Button } from '../Button';
import './Navbar.css'
import mName from 'static/member_logo260x80.png'
import mLogo from 'static/member_favicon150x150.png'
import {getLocation} from "components/google-location/GoogleLocation";

const Navbar = () => {
    const [clicked, setClick] = useState(false)
    const [place, setPlace] = useState('')

    const handleClick = () => {
        setClick(!clicked)
    }

    const handleChange =(e) => {
        setPlace(e.target.value);
        // setPlace(p)
    }
    
    getLocation(place).then(data => {
        if(data.results[0]) {
        const { geometry } = data.results[0]
            console.log(geometry.location)

        }
    })

    return (
        <nav className='NavbarItems'>
            <a href='/' className='navbar-logo1'> <img src={mName} alt='Name'/> </a>
            <a href='/' className='navbar-logo2'> <img src={mLogo} alt='Logo'/> </a>

            {/* <div className='search-control'>
                <input placeholder='Enter location' className='form-outline text-10 input-control' onChange={handleChange}/>
                <button className="btn-control" id='search-focus' type='search'>
                    <i className="fas fa-search"></i>
                </button>
            </div>  */}

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
