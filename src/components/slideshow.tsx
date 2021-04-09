import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classNames from "classnames";

const SlideContainer = styled.div`
  

.slide-container {
    max-height: 400px;
    max-width: 600px;
    overflow-y:hidden;

    slick-slide {
        img {
            display: block;
            max-width:600px;
            max-height:400px;
        }
        
    }

    .slide-img {
      max-height: 400px;
      max-width:400px;

      img {
       
      }
    }
}

`;

const CustomSlide = ({ index, image }) => {
    return (
        <div key={index}>
            <img src={image} />
        </div>
    );
}

export default function Slideshow(props) {
    const { images, settings, wrapperClass } = props;

    return (
        <SlideContainer className={classNames("slide-container", wrapperClass)}>
            <Slider {...settings}>
                {images.map((image, index) => <CustomSlide image={image} index={index} />)}
                
            </Slider>
        </SlideContainer>
    )
}