import React from "react";

const Card = (props) => {
 
    const {title, mem, bed, bath, loc, rat1, rat2, rate} = props
    return (
        <div className="col-md-6 col-lg-4 col-xl-3 pl-3 pr-3 pb-3 mt-4">
            <div className="card h-100 card-shadow card-1">
                <div className="">
                    <a href="properties/lets-hyde-resort-villas-in-pattaya-thailand-1" aria-label="Let&#039;s Hyde Resort &amp; Villas in Pattaya, Thailand">
                        <figure className="">
                            <img src="http://memberbutton.com/public/images/property/66/1631093852_letshyde_grand_deluxe_a25.jpeg" className="room-image-container200" alt="Let&#039;s Hyde Resort &amp; Villas in Pattaya, Thailand"/>
                            <figcaption>
                            </figcaption>     
                        </figure>        
                    </a>
                    <div className="wishicon svwishlist66">
                        <i className="far fa-heart b-login" id="wishlistid66" ></i>
                    </div>
                </div>

                <div className="card-body p-0 pl-1 pr-1">
                    <div className="d-flex">
                        <div className="text">
                            <a className="text-color text-color-hover" href="properties/lets-hyde-resort-villas-in-pattaya-thailand-1">
                                <p className="text-11 font-weight-700 text margin-bottom-zero">
                                    ${title}
                                </p>
                            </a>
                        </div>
                        
                    </div>
                    
                    <div>
                        <ul className="list-inline">
                            <li className="list-inline-item text-dark">
                                <div className="vtooltip">
                                    <span className="text-10 text-muted">${mem}</span>
                                </div>
                            </li>

                            <li className="list-inline-item">
                                <div className="vtooltip">
                                    <span className="text-10 text-muted">${bed}</span>
                                </div>
                            </li>

                            <li className="list-inline-item">
                                <div className="vtooltip"> 
                                    <span className="text-10 text-muted">${bath}</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="review-0">
                        <div className="d-flex justify-content-between">
                            <div>
                                <p className="text-10 mt-0 mb-0 text"><i className="fas fa-map-marker-alt"></i> ${loc}</p>
                            </div>
                            <div>
                                <span>
                                    <i className="fa fa-star text-11 yellow_color"></i> 
                                        ${rat1}(${rat2})
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="svred text-11">
                        <span className="font-weight-700">&#36; ${rate} </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;