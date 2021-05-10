import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classNames from "classnames";

const SlideContainer = styled.div`
  
.slick-slide {
    img {
        display: block;
        max-width:600px;
        border:1px solid black;
    }
}

.slide-container {
    max-height: 600px;
    max-width: 600px;
    overflow-y:hidden;
}
`;

const CustomSlide = ({ index, image }) => {
    return (
        <div>
            <img src={image} />
        </div>
    );
}

export default function Slideshow(props) {
    const { images, settings, wrapperClass } = props;

    return (
        <SlideContainer className={classNames("slide-container", wrapperClass)}>
            <Slider {...settings}>
                {images.map((image, index) => <CustomSlide key={index} image={image} index={index} />)}
            </Slider>
        </SlideContainer>
    )
}