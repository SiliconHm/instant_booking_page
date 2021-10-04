import React from "react";
import Column from "./Columns/Columns";
import Li from "./Columns/li";
import Bottom from "./Bottom/Bottom";

const Footer = () => {
    return (
      <footer className="main-panel card border footer-bg p-2" id="footer">
        <div className="container-fluid container-fluid-90 pb-3">
          <div className="row">
                <Column heading='Influencers & Hosts'>
                  <Li Link='https://app.memberbutton.com/' title='Influencers'/>
                  <Li Link='https://app.memberbutton.com/become-influencer-host' title='Become Influencer Host'/>
                </Column>

                <Column heading='Menu'>
                  <Li Link='https://app.memberbutton.com/about' title='About'/>
                  <Li Link='https://app.memberbutton.com/contact-us' title='Contact Us'/>
                  <Li Link='https://extranet.memberbutton.com/' title='Extranet Login'/>
                </Column>
                    
                <Column heading='Company'>
                  <Li Link='/' title='Policies'/>
                </Column>
                  
              <div className="col-6 col-sm-3 mt-2">
                  <div className="row">
                      <div className="col-md-12 text-center">
                          <a href="http://app.memberbutton.com"><img src="http://app.memberbutton.com/public/front/images/logos/1632136881_logo.png" className="img-130x32" alt="logo"/></a>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        
        <Bottom/>
      </footer>
       
    )
}

export default Footer