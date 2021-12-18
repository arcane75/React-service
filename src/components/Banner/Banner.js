import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../images/banner-1.jpg';
import banner2 from '../../images/banner-2.jpg';
import banner3 from '../../images/banner-4.jpg';

const Banner = () => {

    return (
        <div>
        <Carousel autoPlay className=" ">
            <div>
                <img className="img-fluid" src={banner1} alt="" />
                <p className="legend">Runyes Portable X-Ray</p>
            </div>
            <div>
                <img className="img-fluid" src={banner2} alt="" />
                <p className="legend">Eighteeth Nanopix</p>
            </div>
            <div>
                <img className="img-fluid" src={banner3} alt="" />
                <p className="legend">Rextr X X-Ray</p>
            </div>
        </Carousel>
        </div>
    )

}

export default Banner;






// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
