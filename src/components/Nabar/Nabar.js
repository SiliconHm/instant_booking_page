import React, { useEffect, useState } from "react";
import styles from './navbar.module.css'
import mName from 'static/member_logo260x80.png'
import mLogo from 'static/member_favicon150x150.png'
import { Link } from "react-router-dom";
import Modal from './Modal/modal'


const Navbar = () => {
    const [click, setClick] = useState(false);
    const [navCol, setNavCol] = useState(false)
    const [showModel, setShowModel] = useState(false)


    const onClick = () => {
        setClick(!click)
    }
    
    const goBack = () => {
        window.history.back();
    }

    const onModelClick = () => {
        setShowModel(!showModel)
    }

    const handleNavbar = () => {
        if(window.scrollY > 100)
            setNavCol(true);
        else
            setNavCol(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleNavbar)
    })

    return (
        <>
            <header className={`header_area animated fadeIn homenav`}>
                <div className="main_menu">
                    <nav className={`navbar navbar-expand-lg ${window.scrollY > 100 ? 'bg-light fixed-top animated fadeIn' : 'navbar-light '}`}  style={{height: '10%'}} >
                        <div className={`container-fluid container-fluid-90 ${navCol ? `${styles.back}` : ''}`}>
                            <a className={`navbar-brand logo_ha dark_logo ${window.scrollY > 100 ? 'd-sm-block' : 'd-none'} ${styles.name_show}`} aria-label="logo" href="https://memberbutton.com/">
                                <img src={mName} alt="logo" className="img-130x32 logo-ht"/>
                            </a>

                            <a className={`navbar-brand logo_h light_logo ${styles.name_show} ${window.scrollY > 100 ? 'd-none' : ''}`} aria-label="logo" href="https://memberbutton.com/">
                                <img src={mName} alt="logo" className="img-130x32 logo-ht"/>
                            </a> 
                            {/*  */}
                            <a className={`navbar-brand logo_h ${styles.logo_show}`} aria-label="logo" href="https://memberbutton.com/">
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
                
                            <form id="front-search-form1" method="post" action="http://app.memberbutton.com/search" className="mob-search mt-3 mb-3 p-2 ml-4 mr-4">
                                <input type="hidden" name="_token" value="jRND7iNgM9Rjw7fjKUAUaQseX1JGrZUcFZvdLrG5"/>
                                <div className="row">
                                    <input autoComplete="off" className="form-control p-3 text-14 m-0" id="front-search-field1" placeholder="Where are you going?" name="location" type="text" required/>
                                    <button type="submit" className="btn vbtn-default p-2 ml-5 text-14">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>
                            </form>

                            
                            <div className="collapse navbar-collapse offset mt-1" id="navbarSupportedContent">
                                <div className="nav navbar-nav menu_nav justify-content-end">
                                    <div className='nav-item'>
                                        <a className='nav-link p-2 mt-3' href='/'>
                                            <button className={`btn ${styles.btn_link} ${styles.btn_active}`}>Home</button>
                                        </a>
                                    </div>
                                    <div className='nav-item'>
                                        <a className='nav-link p-2 mt-3' href='/'>
                                            <button className={`btn ${styles.btn_link}`}>Influencers</button>
                                        </a>                                    
                                    </div>
                                    <div className="nav-item">
                                        <a className="nav-link p-3 mt-3" href="https://extranet.memberbutton.com/sign-up" aria-label="property-create">
                                            <button className="btn button vbtn-default text-10 p-0 pl-4 pr-4 br-50">
                                                <p className="p-2 mb-0 text-white">  Add your Property</p>
                                            </button>
                                        </a>
                                    </div>
                                    
                                    <div className="nav-item">
                                        <Link className="nav-link globe" to='#' aria-label="modalLanguge" data-toggle="modal" data-target="#languageModalCenter"> 
                                            <i className="fas fa-globe text-18" style={window.scrollY > 100 ? {color: '#4F02A4'} : {}}></i> 
                                        </Link>
                                    </div>
                                
                                    <div className="nav-item">
                                        <div className={`dropdown sv_user_login ${click ? 'show':''}`} onClick={onClick}>
                                            <button className="dropdown-toggle" type="button" data-toggle="dropdown">
                                                <i className="fa fa-bars" aria-hidden={click}></i>
                                                <img src="http://app.memberbutton.com/public/images/profile.jpg" className="head_avatar" alt=""/>
                                            </button>
                                            
                                            <ul className={`dropdown-menu ${click ? 'show':''}`}>
                                                <li>
                                                    <a  aria-label="" data-toggle="modal" className={styles.text_color} data-target="#registermodel"  href="https://extranet.memberbutton.com/sign-up">  
                                                        Add Property
                                                    </a>
                                                </li>
                                                <li>
                                                    <a aria-label="" data-toggle="modal" className={styles.text_color} data-target="#loginmodel"  href="https://extranet.memberbutton.com/">
                                                        Extranet Login
                                                    </a>
                                                </li>                                        
                                                    <hr/>
                                                <li><a className={styles.text_color} href="http://app.memberbutton.com/help">Help</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            <Modal showModel={showModel} onModelClick={onModelClick}/>
        </>
    )
}

export default Navbar;