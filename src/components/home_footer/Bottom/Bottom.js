import React from "react";
import { Link } from "react-router-dom";
import Li from "./li";

const Bottom = () => {
    return (
        <div className="border-top p-0 mt-4 foot-content">
          <div className="container-fluid container-fluid-90 justify-content-between p-2 foot-padding">
            <div className="row">
              <div className="col-lg-6 col-sm-6 mb-0 mt-4 text-11">
                © 2021 Memberbutton Hotel Booking Engine For Influencers. All Rights Reserved
              </div>
          
          
              <div className="col-lg-6 col-sm-6 mb-0 mt-4 text-10 text-right">
                <div className="text-underline mb-0">
                    <Link to="#" aria-label="modalLanguge" data-toggle="modal" data-target="#languageModalCenter"> 
                        <i className="fas fa-globe  text-dark"></i> 
                        <u>English </u>
                    </Link>
                  
                    <Link to="#" aria-label="modalCurrency" data-toggle="modal" data-target="#currencyModalCenter"> 
                        <span className="ml-4  text-dark">&#36; - <u>USD</u> </span>
                    </Link>

                  <ul className="list-inline text-center sv_social">
                   

                    <Li link='https://www.facebook.com/socialhub.center' ClassName='fa-facebook' aria='facebook'/>
                    <Li link='#' ClassName='fa-google-plus' aria='google_plus'/>
                    <Li link='#' ClassName='fa-twitter' aria='twitter'/>
                    <Li link='https://www.linkedin.com/showcase/socialhub.center' ClassName='fa-linkedin' aria='linkedin'/>
                    <Li link='#' ClassName='fa-pinterest' aria='pinterest'/>
                    <Li link='#' ClassName='fa-youtube' aria='youtube'/>
                    <Li link='https://www.instagram.com/socialhub.center/' ClassName='fa-instagram' aria='instagram'/>
                                            
                  </ul>
                </div>         
              </div>
            </div>
          </div>
        </div>
    )
}

export default Bottom;