import React from "react";

const Footer = () => {
    return (
        // <!-- Footer -->
        <footer className="page-footer font-small mdb-color pt-4">
        
          {/* <!-- Footer Links --> */}
          <div className="container text-center text-md-left">
        
            {/* <!-- Footer links --> */}
            <div className="row text-center text-md-left mt-3 pb-3">
        
              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">MemberButton</h6>
                <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                  consectetur
                  adipisicing elit.</p>
              </div>
              {/* <!-- Grid column --> */}
        
              <hr className="w-100 clearfix d-md-none"/>
        
              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Popular Cities</h6>
                <p>
                  <a href="#!">Paris</a>
                </p>
                <p>
                  <a href="#!">Phuket</a>
                </p>
                <p>
                  <a href="#!">Hua Hin</a>
                </p>
                <p>
                  <a href="#!">Singapore</a>
                </p>
                <p>
                  <a href="#!">Bangkok</a>
                </p>
              </div>
              {/* <!-- Grid column --> */}
        
              <hr className="w-100 clearfix d-md-none"/>
        
              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Hosting</h6>
                <p>
                  <a href="#!">Help</a>
                </p>
                <p>
                  <a href="#!">About</a>
                </p>
                <p>
                  <a href="#!">Contact Us</a>
                </p>
                <p>
                  <a href="#!">Terms of Services</a>
                </p>
                <p>
                  <a href="#!">Become Influencer Host</a>
                </p>
              </div>
        
              {/* <!-- Grid column --> */}
              <hr className="w-100 clearfix d-md-none"/>
        
              {/* <!-- Grid column --> */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p>
                  <i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
                <p>
                  <i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                <p>
                  <i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
              </div>
              {/* <!-- Grid column --> */}
        
            </div>
            {/* <!-- Footer links --> */}
        
            <hr/>
        
            {/* <!-- Grid row --> */}
            <div className="row d-flex align-items-center">
        
              {/* <!-- Grid column --> */}
              <div className="col-md-7 col-lg-8">
        
                {/* <!--Copyright--> */}
                <p className="text-center text-md-left">© 2021 Copyright:
                  <a href="/">
                    <strong>  Memberbutton.com. All Rights Reserved</strong>
                  </a>
                </p>
        
              </div>
              {/* <!-- Grid column --> */}
        
              {/* <!-- Grid column --> */}
              <div className="col-md-5 col-lg-4 ml-lg-0">
        
                {/* <!-- Social buttons --> */}
                <div className="text-center text-md-right">
                  <ul className="list-unstyled list-inline">
                    <li className="list-inline-item">
                      <a className="btn-floating btn-sm rgba-white-slight mx-1" href='/'>
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="btn-floating btn-sm rgba-white-slight mx-1"  href='/'>
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="btn-floating btn-sm rgba-white-slight mx-1"  href='/'>
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="btn-floating btn-sm rgba-white-slight mx-1"  href='/'>
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
        
              </div>
              {/* <!-- Grid column --> */}
        
            </div>
            {/* <!-- Grid row --> */}
        
          </div>
          {/* <!-- Footer Links --> */}
        
        </footer>
       
    )
}

export default Footer