import React from "react";
import { useRouteMatch } from "react-router-dom";
import Li from "./li";
import CurrencySelect from "components/inputs/currency_select";
import LocaleSelect from "components/inputs/locale_select";
import routes from "routing/routes";

import styles from './../footer.module.css'

// import FooterLinkContainer from "components/footer/footer_link_container";
// import GetChannelAd from "components/footer/get_channel_ad";
// import PolicyLink from "components/policy_link";

const Bottom = () => {
  const matchHotelPage = useRouteMatch({
    path: routes.hotelPage,
    strict: true,
  });

  const matchNotFoundPage = useRouteMatch({
    path: routes.default,
    strict: true,
  });

  const isCurrencySelectShown = matchHotelPage?.isExact && !matchNotFoundPage;

    return (
        <div className="border-top p-0 mt-4 foot-content">
          <div className="container-fluid container-fluid-90 justify-content-between p-2 foot-padding">
            <div className="row">
              <div className="col-lg-6 col-sm-6 mb-0 mt-4 text-9">
                © 2021 Booking Engine By <a href='https://memberbutton.com/' className={styles.text_color}>Memberbutton</a> | <a href='https://socialhub.center/' className={styles.text_color}>SocialHub.Center Partner</a> | <a href='https://app.memberbutton.com/about' className={styles.text_color}>  Earn Commission For Promoting Us Click Here</a> | All Rights Reserved
              </div>
          
              <div className="col-lg-6 col-sm-6 mb-0 mt-4 text-9 text-right">
                <div className="text-underline mb-0">
                    {/* <Link to="#" aria-label="modalLanguge" data-toggle="modal" data-target="#languageModalCenter"> 
                        <i className="fas fa-globe text-dark"></i> 
                        <u>  English </u>
                    </Link>
                  
                    <Link to="#" aria-label="modalCurrency" data-toggle="modal" data-target="#currencyModalCenter"> 
                        <span className="ml-4  text-dark">&#36; - <u>USD</u> </span>
                    </Link> */}
                    <div className='row '>

                    {isCurrencySelectShown && <CurrencySelect />}
                    <LocaleSelect />

                  <ul className="list-inline text-center sv_social mt-2">
                    <Li link='https://www.facebook.com/socialhub.center' ClassName='fa-facebook' aria='facebook'/>
                    {/* <Li link='#' ClassName='fa-google-plus' aria='google_plus'/> */}
                    <Li link='#' ClassName='fa-twitter' aria='twitter'/>
                    <Li link='https://www.linkedin.com/showcase/socialhub.center' ClassName='fa-linkedin' aria='linkedin'/>
                    {/* <Li link='#' ClassName='fa-pinterest' aria='pinterest'/> */}
                    {/* <Li link='#' ClassName='fa-youtube' aria='youtube'/> */}
                    <Li link='https://www.instagram.com/socialhub.center/' ClassName='fa-instagram' aria='instagram'/>                     
                  </ul>
                    </div>
                </div>         
              </div>
            </div>
          </div>
        </div>
    )
}

export default Bottom;