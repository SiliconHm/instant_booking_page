import React from "react";

const Card = (props) => {
 
    const {title, pic, mem, bed, bath, loc, rat1, rat2, rate} = props
    return (
        <div class="col-md-6 col-lg-4 col-xl-3 pl-3 pr-3 pb-3 mt-4">
            <div class="card h-100 card-shadow card-1">
                <div class="">
                    <a href="properties/lets-hyde-resort-villas-in-pattaya-thailand-1" aria-label="Let&#039;s Hyde Resort &amp; Villas in Pattaya, Thailand">
                        <figure class="">
                            <img src="http://memberbutton.com/public/images/property/66/1631093852_letshyde_grand_deluxe_a25.jpeg" class="room-image-container200" alt="Let&#039;s Hyde Resort &amp; Villas in Pattaya, Thailand"/>
                            <figcaption>
                            </figcaption>     
                        </figure>        
                    </a>
                    <div class="wishicon svwishlist66">
                        <i class="far fa-heart b-login" id="wishlistid66" ></i>
                    </div>
                </div>

                <div class="card-body p-0 pl-1 pr-1">
                    <div class="d-flex">
                        <div class="text">
                            <a class="text-color text-color-hover" href="properties/lets-hyde-resort-villas-in-pattaya-thailand-1">
                                <p class="text-11 font-weight-700 text margin-bottom-zero">
                                    ${title}
                                </p>
                            </a>
                        </div>
                        
                    </div>
                    
                    <div>
                        <ul class="list-inline">
                            <li class="list-inline-item text-dark">
                                <div class="vtooltip">
                                    <span class="text-10 text-muted">${mem}</span>
                                </div>
                            </li>

                            <li class="list-inline-item">
                                <div class="vtooltip">
                                    <span class="text-10 text-muted">${bed}</span>
                                </div>
                            </li>

                            <li class="list-inline-item">
                                <div class="vtooltip"> 
                                    <span class="text-10 text-muted">${bath}</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="review-0">
                        <div class="d-flex justify-content-between">
                            <div>
                                <p class="text-10 mt-0 mb-0 text"><i class="fas fa-map-marker-alt"></i> ${loc}</p>
                            </div>
                            <div>
                                <span>
                                    <i class="fa fa-star text-11 yellow_color"></i> 
                                        ${rat1}(${rat2})
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="svred text-11">
                        <span class="font-weight-700">&#36; ${rate} </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;