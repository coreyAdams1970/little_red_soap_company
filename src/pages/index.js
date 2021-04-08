import React, { useEffect, useState, useCallback } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
// import ReactGA from 'react-ga';
import Slideshow from "../components/slideshow";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "images/all_products.jpeg",
  "images/all_lotion.jpeg",
  "images/all_products2.jpeg",
  "images/all_soap1.jpeg",
  "images/aruba_lotion.jpeg",
  "images/all_products4.jpeg"
];

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  lazyLoad: true,
  autoplaySpeed: 5000,
  speed: 3000,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: 'slick-slider-fade',
};

const MainContainer = styled.div`
  
  .main-text {
    text-align: justify;
    background-color: white;
    line-height: 26px;
    font-weight: 400;
    padding: 15px;
  }

`;

export default function IndexPage(props) {

  const siteTitle = "Little Red Soap Company";

  useEffect(() => {
    // if (typeof "window" !== "undefined") {
    //   ReactGA.pageview(window.location.pathname + window.location.search);
    // }
  }, [])

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="Home"
        keywords={[`cbd lotion`, `cbd soap`, `custom soap`, `goats milk cbd soap`]}
      />

      <MainContainer>
        <div className="row mb-5">
          <div className="col-6 px-5">
            <Slideshow images={images} settings={settings} key="image-slider" />
            
          </div>
        </div>
        
      </MainContainer>
    </Layout>
  )
}
