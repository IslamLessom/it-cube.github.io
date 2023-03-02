import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import './CarouselAbout.css'

import logo from '../../../assets/images/it-cube-carousel.png'


function CarouselAbout() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <div className="phone-columns">
                <Carousel responsive={responsive}>
                    <div className="card">
                        <img src={logo} />
                    </div>
                    <div className="card">
                        <h2>IT - CUBE</h2>
                        <h4>Это центр образования детей по программам, направленным на ускоренное освоение актуальных и востребованных знаний, навыков и компетенций в сфере информационных технологий.</h4>
                    </div>

                    <div className="card">
                        <img src={logo} />
                    </div>
                    <div className="card">
                        <h2>IT - CUBE</h2>
                        <h4>Это центр образования детей по программам, направленным на ускоренное освоение актуальных и востребованных знаний, навыков и компетенций в сфере информационных технологий.</h4>
                    </div>

                    <div className="card">
                        <img src={logo} />
                    </div>
                    <div className="card">
                        <h2>IT - CUBE</h2>
                        <h4>Это центр образования детей по программам, направленным на ускоренное освоение актуальных и востребованных знаний, навыков и компетенций в сфере информационных технологий.</h4>
                    </div>

                </Carousel>
            </div>

        </>
    )
}

export default CarouselAbout