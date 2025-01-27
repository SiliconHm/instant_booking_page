import React from "react"
import { Carousel } from "react-bootstrap"

import first from 'static/first.jpeg'
import second from 'static/second.jpeg'
import third from 'static/third.jpeg'
import fourth from 'static/fourth.jpeg'
import styles from './slider.module.css'

const Slider = () => {

    return (
      <Carousel fade>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={first}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className={`sv_home_subsec text-center`}>
              <h2 className={`banner-title ${styles.banner_margin_bott}`}>Book exclusive room rates </h2>
              <span className="banner-title">powered by word of mouth</span>
              </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={second}
            alt="Second slide"
          />

          <Carousel.Caption>
          <div className={`sv_home_subsec text-center`}>
                                  <h2 className={`banner-title ${styles.banner_margin_bott}`}>Popular places to stay</h2>
                                  <span className="banner-title">by the people for the people</span>
                              </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={third}
            alt="Third slide"
          />

          <Carousel.Caption>
          <div className={`sv_home_subsec text-center`}>
                                  <h2 className={`banner-title ${styles.banner_margin_bott}`}>Online lodging marketplace</h2>
                                  <span className="banner-title">recommended by friends</span>
                              </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src={fourth}
            alt="Third slide"
          />

          <Carousel.Caption>
          <div className={`sv_home_subsec text-center size`}>
                                  <h2 className={`banner-title ${styles.banner_margin_bott}`}>Pre-selected accommodation </h2>
                                  <span className="banner-title">with lowest rates available</span>
                              </div>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    )
}

export default Slider;