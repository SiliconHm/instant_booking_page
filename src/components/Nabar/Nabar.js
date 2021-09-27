import React, { useEffect, useState } from "react";
import styles from './navbar.module.css'
import mName from 'static/member_logo260x80.png'
import mLogo from 'static/member_favicon150x150.png'
import { Link } from "react-router-dom";


const Navbar = () => {
    const [click, setClick] = useState(false);
    const [showModel, setShowModel] = useState(false)
    const [navCol, setNavCol] = useState(false)

    const onClick = () => {
        setClick(!click)
    }

    const onModelClick = () => {
        setShowModel(!showModel)
        // console.log('event click', showModel) 
    }
    
    const goBack = () => {
        window.history.back();
    }

    const handleNavbar = () => {
        if(window.scrollY > 100)
            setNavCol(true);
        else
            setNavCol(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleNavbar)
    }, [navCol])

    return (
        <>
            <header className={`header_area animated fadeIn homenav`}>
                <div className="main_menu">
                    <nav className={`navbar navbar-expand-lg ${navCol ? 'bg-light fixed-top animated fadeIn' : 'navbar-light '}`}  style={{height: '10%'}} >
                        <div className="container-fluid container-fluid-90">
                            <a className={`navbar-brand logo_h  dark_logo ${navCol ? 'd-sm-block' : 'd-none'} ${styles.name_show} `} aria-label="logo" href="https://search.memberbutton.com/">
                                <img src={mName} alt="logo" className="img-130x32 logo-ht"/>
                            </a>

                            <a className={`navbar-brand logo_h light_logo ${styles.name_show} ${navCol ? 'd-none' : ''}`} aria-label="logo" href="https://search.memberbutton.com/">
                                <img src={mName} alt="logo" className="img-130x32 logo-ht"/>
                            </a> 
                            {/*  */}
                            <a className={`navbar-brand logo_h ${styles.logo_show}`} aria-label="logo" href="https://search.memberbutton.com/">
                                <img src={mLogo} alt="logo" className="mob-logo"/>
                            </a> 
                            
                            <Link to='#' onClick={goBack} className="mob-back-btn d-block d-sm-none">
                                <i className="fas fa-chevron-left"></i>
                            </Link>

                            {/* <!-- Trigger Button --> */}
                            <Link to='#' aria-label="navbar" className="navbar-toggler" data-toggle="modal" data-target="#left_modal"  onClick={onModelClick}>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </Link>
                            
                            {/* <!--<h4 className="sv_header_text mt-3">Make Your Reservation</h4>-->
                                
                            
                            <!--<p className="sv_start_your_search text-14 p-2 pl-4 min-w-250 hide">Start Your Search
                                <button type="submit" className="btn vbtn-default p-2 ml-5 text-14"><i className="fa fa-search"></i> </button>
                            </p>-->
                            */}
                
                            <form id="front-search-form1" method="post" action="http://memberbutton.com/search" className="mob-search mt-3 mb-3 p-2">
                                <input type="hidden" name="_token" value="jRND7iNgM9Rjw7fjKUAUaQseX1JGrZUcFZvdLrG5"/>
                                <div className="row">
                                    <input autoComplete="off" className="form-control p-3 text-14 ml-3 m-0" id="front-search-field1" placeholder="Where are you going?" name="location" type="text" required/>
                                    <button type="submit" className="btn vbtn-default p-2 ml-5 text-14">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>
                            </form>

                            
                            <div className="collapse navbar-collapse offset mt-2" id="navbarSupportedContent">
                                <div className="nav navbar-nav menu_nav justify-content-end">

                                    {/* <!--                                <div className="nav-item">
                                            <a className="nav-link p-2 mt-3" href="http://memberbutton.com/property/create" aria-label="property-create">
                                                <button className="btn button vbtn-default text-14 p-0 mt-2 pl-4 pr-4 br-50">
                                                    <p className="p-3 mb-0">  Add your Member Listing</p>
                                                </button>
                                            </a>
                                        </div>
                                    --> */}
                                    <div className="nav-item">
                                        <a className="nav-link p-2 mt-3" href="http://memberbutton.com/property/create" aria-label="property-create">
                                            <button className="btn button vbtn-default text-12 p-0 pl-4 pr-4 br-50">
                                                <p className="p-3 mb-0 text-white">  Add your Member Listing</p>
                                            </button>
                                        </a>
                                    </div>
                                    
                                    {/* <!--<div className="nav-item">
                                        <a className="nav-link" href="#" aria-label="signup">Become a Host</a>
                                    </div>--> */}
                                    
                                    <div className="nav-item">
                                        <Link className="nav-link globe" to='#' aria-label="modalLanguge" data-toggle="modal" data-target="#languageModalCenter"> 
                                            <i className="fas fa-globe text-18" style={navCol ? {color: '#4F02A4'} : {}}></i> 
                                        </Link>
                                    </div>
                                
                                    <div className="nav-item">
                                        <div className={`dropdown sv_user_login ${click ? 'show':''}`} onClick={onClick}>
                                            <button className="dropdown-toggle" type="button" data-toggle="dropdown">
                                                <i className="fa fa-bars" aria-hidden={click}></i>
                                                <img src="http://memberbutton.com/public/images/profile.jpg" className="head_avatar" alt=""/>
                                            </button>
                                            
                                            <ul className={`dropdown-menu ${click ? 'show':''}`}>
                                                <li>
                                                    <a  aria-label="" data-toggle="modal" data-target="#registermodel"  href="https://search.memberbutton.com/">
                                                        Sign Up
                                                    </a>
                                                </li>
                                                <li>
                                                    <a aria-label="" data-toggle="modal" data-target="#loginmodel"  href="https://search.memberbutton.com/">
                                                        Log In
                                                    </a>
                                                </li>                                        
                                                    <hr/>
                                                <li><a href="http://memberbutton.com/help">Help</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            <div className={`modal fade right ${showModel ? `show ${styles.model}`: ''}`} id="left_modal" tabIndex="-1" role="dialog" aria-labelledby="left_modal" arial-model={`${showModel}`} arial-hidden={`${showModel}`}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header border-0 secondary-bg"> 
                            
                            <button type="button" className="close text-28" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" onClick={onModelClick}>&times;</span>
                            </button>
                        </div>
                        
                        <div className="modal-body p-0">
                            <ul className="mobile-side">
                                <li><a href="http://memberbutton.com">Home</a></li>
                                <li><a href="http://memberbutton.com/become-host">Become Host</a></li>
                                <li><a href="http://memberbutton.com/help">Help</a></li>
                                <li><a href="http://memberbutton.com/signup">Sign Up</a></li>
                                <li><a href="http://memberbutton.com/login">Log In</a></li>
                                <li>
                                    <a href="https://search.memberbutton.com/" aria-label="modalLanguge" data-toggle="modal" data-target="#languageModalCenter"> <i className="fa fa-globe"></i> <u>English </u></a>
                                    <a href="https://search.memberbutton.com/" aria-label="modalCurrency" data-toggle="modal" data-target="#currencyModalCenter"> <span className="ml-4">&#36; - <u>USD</u> </span></a>
                                </li>
                                <a className="mt-3" href="http://memberbutton.com/property/create">
                                    <button className="btn vbtn-outline-success text-14 font-weight-700 pl-5 pr-5 pt-3 pb-3">
                                            Add your Member Listing
                                    </button>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;