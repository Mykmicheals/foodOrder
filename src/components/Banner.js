import React from 'react'
import Slider from "react-slick";
import banner1 from '../images/banner1.png'
import banner2 from '../images/banner2.png'

import banner from '../images/banner.jpg'

function Banner() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
    };

    return (
        <div className='banner'>
            <Slider {...settings}>

                <div>
                    <img className='banner-img' src={banner1} />
                </div>

                <div>
                    <img className='banner-img' src={banner2} />
                </div>

            </Slider>
        </div>
        // <div className='banner' style={{
        //     backgroundImage: `url(${banner})`,
        //     backgroundPosition: 'center',
        //     backgroundSize: 'cover',
        //     backgroundRepeat: 'noRepeat',
        // }}>
        //     <h2 className='banner-header'>Enjoy Free delivery and cashBack Rewards</h2>
        // </div>
    )
}

export default Banner
