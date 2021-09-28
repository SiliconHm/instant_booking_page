import React from "react";
import { Link } from "react-router-dom";
import styles from './footer.module.css'

const Footer = () => {
    return (
      <footer className="main-panel card border footer-bg p-5" id="footer">
        <div className="container-fluid container-fluid-90 pb-3">
          <div className="row">
              <div className="col-6 col-sm-3 mt-0">
                <h2 className={`font-weight-500 m-0 text-uppercase text-10 ${styles.text_color}`}>Popular Cities</h2>
                  <div className="row">
                      <div className="col p-0">
                          <ul className="m-0 p-0">
                                                                                      <li className="pt-3 text-10">
                                  <a href="http://memberbutton.com/search?location=Phuket&checkin=28-09-2021&checkout=28-09-2021&guest=1" className={styles.text_color}>Phuket</a>
                              </li>
                                                          <li className="pt-3 text-10">
                                  <a href="http://memberbutton.com/search?location=Hua Hin&checkin=28-09-2021&checkout=28-09-2021&guest=1" className={styles.text_color}>Hua Hin</a>
                              </li>
                                                          <li className="pt-3 text-10">
                                  <a href="http://memberbutton.com/search?location=Paris&checkin=28-09-2021&checkout=28-09-2021&guest=1" className={styles.text_color}>Paris</a>
                              </li>
                                                          <li className="pt-3 text-10">
                                  <a href="http://memberbutton.com/search?location=Pattaya&checkin=28-09-2021&checkout=28-09-2021&guest=1" className={styles.text_color}>Pattaya</a>
                              </li>
                                                          <li className="pt-3 text-10">
                                  <a href="http://memberbutton.com/search?location=Thailand&checkin=28-09-2021&checkout=28-09-2021&guest=1" className={styles.text_color}>Thailand</a>
                              </li>
                                                          <li className="pt-3 text-10">
                                  <a href="http://memberbutton.com/search?location=Singapore&checkin=28-09-2021&checkout=28-09-2021&guest=1" className={styles.text_color}>Singapore</a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
    
              <div className="col-6 col-sm-3 mt-0">
                  <h2 className="font-weight-500 m-0 text-uppercase text-10">Hosting</h2>
                  <div className="row">
                      <div className="col p-0">
                          <ul className="m-0 p-0">
                                                                                      <li className="pt-3 text-10">
                                  <a href="http://memberbutton.com/about"  className={styles.text_color}>About</a>
                              </li>
  
                                                          <li className="pt-3 text-10">
                                  <a href="http://memberbutton.com/contact-us" className={styles.text_color}>Contact Us</a>
                              </li>
  
                                                          <li className="pt-3 text-10">
                                  <a href="http://memberbutton.com/terms-of-service" className={styles.text_color}>Terms of Service</a>
                              </li>
  
                                                          <li className="pt-3 text-10">
                                  <a href="http://memberbutton.com/become-influencer-host" className={styles.text_color}>Become Influencer Host</a>
                              </li>
  
                                                          
                          </ul>
                      </div>
                  </div>
              </div>
        
              <div className="col-6 col-sm-3 mt-0">
                  <h2 className="font-weight-500 m-0 text-uppercase text-10">Company</h2>
                  <div className="row">
                      <div className="col p-0">
                          <ul className="m-0 p-0">
                                                                                      <li className="pt-3 text-10">
                                  <a href="http://memberbutton.com/policies" className={styles.text_color}>Policies</a>
                              </li>
                                                                                          
                          </ul>
                      </div>
                  </div>
              </div>
        
                  
              <div className="col-6 col-sm-3 mt-2">
                  <div className="row">
                      <div className="col-md-12 text-center">
                          <a href="http://memberbutton.com"><img src="http://memberbutton.com/public/front/images/logos/1632136881_logo.png" className="img-130x32" alt="logo"/></a>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        
        <div className="border-top p-0 mt-4 foot-content">
          <div className="container-fluid container-fluid-90 justify-content-between p-2 foot-padding">
            <div className="row">
              <div className="col-lg-6 col-sm-6 mb-0 mt-4 text-11">
                © 2021 Memberbutton Hotel Booking Engine For Influencers. All Rights Reserved
              </div>
          
          
              <div className="col-lg-6 col-sm-6 mb-0 mt-4 text-10 text-right">
                <div className="text-underline mb-0">
                  <Link to="#" aria-label="modalLanguge" data-toggle="modal" data-target="#languageModalCenter"> <i className="fas fa-globe  text-dark"></i> <u>English </u></Link>
                  <Link to="#" aria-label="modalCurrency" data-toggle="modal" data-target="#currencyModalCenter"> <span className="ml-4  text-dark">&#36; - <u>USD</u> </span></Link>

                  <ul className="list-inline text-center sv_social">
                                                            <li className="list-inline-item">
                                                            {/* target="_blank" */}
                    <a className="social-icon  text-color text-14"  href="https://www.facebook.com/socialhub.center" aria-label="facebook"><i className="fab fa-facebook"></i></a>
                    </li>
                                        <li className="list-inline-item">
                                        {/* target="_blank" */}
                    <Link className="social-icon  text-color text-14" to="#" aria-label="google_plus"><i className="fab fa-google-plus"></i></Link>
                    </li>
                                        <li className="list-inline-item">
                    <Link className="social-icon  text-color text-14" target="_blank" to="#" aria-label="twitter"><i className="fab fa-twitter"></i></Link>
                    </li>
                                        <li className="list-inline-item">
                    <Link className="social-icon  text-color text-14" target="_blank" to="https://www.linkedin.com/showcase/socialhub.center" aria-label="linkedin"><i className="fab fa-linkedin"></i></Link>
                    </li>
                                        <li className="list-inline-item">
                    <Link className="social-icon  text-color text-14" target="_blank" to="#" aria-label="pinterest"><i className="fab fa-pinterest"></i></Link>
                    </li>
                                        <li className="list-inline-item">
                    <Link className="social-icon  text-color text-14" target="_blank" to="#" aria-label="youtube"><i className="fab fa-youtube"></i></Link>
                    </li>
                                        <li className="list-inline-item">
                    <Link className="social-icon  text-color text-14" target="_blank" to="https://www.instagram.com/socialhub.center/" aria-label="instagram"><i className="fab fa-instagram"></i></Link>
                    </li>
                                            
                  </ul>
                </div>         
              </div>
            </div>
          </div>
        </div>
      </footer>
       
    )
}

export default Footer