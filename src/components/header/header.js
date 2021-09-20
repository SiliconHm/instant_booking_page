import React from "react";
// import { Link, useRouteMatch } from "react-router-dom";

// import CurrencySelect from "components/inputs/currency_select";
// import LocaleSelect from "components/inputs/locale_select";

// import routes from "routing/routes";
import Navbar from "components/Nabar";

// import mLogo from 'static/member_favicon150x150.png'
// import mName from 'static/member_logo260x80.png'

// import HotelLogo from "./hotel_logo";
// import HotelTitle from "./hotel_title";
// import Form from "./Form/Form";

// import styles from "./header.module.css";
// import { style } from "@mui/system";

export default function Header({ property = {} }) {
  // const matchHotelPage = useRouteMatch({
  //   path: routes.hotelPage,
  //   strict: true,
  // });

  // const matchNotFoundPage = useRouteMatch({
  //   path: routes.default,
  //   strict: true,
  // });

  // const isCurrencySelectShown = matchHotelPage?.isExact && !matchNotFoundPage;
  // const { title, logo, hideLogo, hideTitle } = property;
  
  return (
      <div>
        <Navbar/>
      </div>
    )
  }
  
  // <div className={styles.header}>
//     <div className='header_area animated fadeIn homenave'>
//       <div className='main_menu'>
//         <nav className='navbar navbar-expand-lg navbar-light'>
//           <div className='container-fluid container-fluid-90'>
//             <Link className={`navbar-brand logo_h d-none d-sm-block ${styles.logo}`} to='#'> 
//               <img src={mName} alt='logo'/> 
//             </Link>
//             <Link className={`navbar-brand logo_h d-block d-sm-none ${styles.logo}`} to='#'> 
//               <img src={mLogo} alt='Memo'/> 
//             </Link>
//             <a href="#" className="mob-back-btn d-block d-sm-none"><i className="fas fa-chevron-left"></i></a>
// // 				      {/* <!-- Trigger Button --> */}
//                <a href="#" aria-label="navbar" className="navbar-toggler" data-toggle="modal" data-target="#left_modal">
//                  <span className="icon-bar"></span>
//                  <span className="icon-bar"></span>
//                  <span className="icon-bar"></span>
//                        </a>
//             <form id="front-search-form1" method="post" action="" className="mob-search mt-3 mb-3 p-2">
//  			        <input type="hidden" name="_token" value=""/>
//                <div className="row">
//                     <input className="form-control p-3 text-14 ml-3 m-0 text-white" id="front-search-field1" placeholder="Where are you going?" name="location" type="text" required/>

//                     <button type="submit" className="btn vbtn-default p-2 ml-5 text-14">
//                         <i className="fas fa-search"></i>
//                     </button>
//                </div>
//             </form>
//                             <div className={styles.titleSection}>
//                               <HotelLogo logo={logo} title={title} hideLogo={hideLogo} />
//                               <HotelTitle title={title} hideTitle={hideTitle} />
//                             </div>
          
//                             <div className={styles.selectSection}>
//                               {isCurrencySelectShown && <CurrencySelect />}
//                               <LocaleSelect />
//                             </div>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );

//   <header className="header_area  animated fadeIn homenav">
//   <div className="main_menu">
//       <nav className="navbar navbar-expand-lg navbar-light">
//           <div className="container-fluid container-fluid-90">
//               <a className="navbar-brand logo_h d-none d-sm-block" aria-label="logo" href="http://memberbutton.com">
//                 <img src="http://memberbutton.com/public/front/images/logos/1631384234_logo.png" alt="logo" className="img-130x32"/></a> 
//               <a className="navbar-brand logo_h d-block d-sm-none" aria-label="logo" href="http://memberbutton.com">
//                 <img src="http://memberbutton.com/public/front/images/logos/1631382503_favicon.png" alt="logo" className="mob-logo"/></a> 

//               <form id="front-search-form1" method="post" action="http://memberbutton.com/search" className="mob-search mt-3 mb-3 p-2">
//                 <input type="hidden" name="_token" value=""/>
//                 <div className="row">
//                   <input className="form-control p-3 text-14 ml-3 m-0" id="front-search-field1" placeholder="Where are you going?" name="location" type="text" required/>

//                   <button type="submit" className="btn vbtn-default p-2 ml-5 text-14"><i className="fa fa-search"></i></button>
//                 </div>
//               </form>

//               <div className="d-flex align-items-center">
//                 <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
//                   <div className="nav menu_nav">
//                     <ul className="navbar-nav  mb-2 mb-lg-0 justify-content-end">
//                       <li className='nav-item'><a className='nav-link' aria-label="" data-toggle="modal" data-target="#registermodel"  href="#">Sign Up</a></li>
//                       <li className='nav-item'><a className='nav-link' aria-label="" data-toggle="modal" data-target="#loginmodel"  href="#">Log In</a></li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//           </div>
//       </nav>

//   </div>
// </header>