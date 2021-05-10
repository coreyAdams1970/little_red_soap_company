import React, { useEffect } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import ReactGA from 'react-ga';
import Slideshow from "../components/slideshow";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactGA.initialize(process.env.GOOGLE_ID);

//TODO: move this to a JSON file
const images = [
  "images/all_products_600.jpeg",
  "images/all_lotion1_600.jpeg",
  "images/all_products2_600.jpeg",
  "images/all_soaps2_600.jpeg",
  "images/all_products5_600.jpeg"
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
  pauseOnHover: false,
  className: 'slick-slider-fade',
};

const MainContainer = styled.div`
  .main-text {
    text-align: justify;
    background-color: white;
    line-height: 26px;
    padding-top:10px;

    h3 {
      margin-top: 20px;
    }
  } 

  .you-tube-wrapper {
     padding-left: 20px;
     padding-right: 20px; 
  }

  @media(max-width:700px){
    .you-tube-wrapper {
      iframe {
        width: 100%;
      }
    }
  }

  @media(max-width:500px){
    .main-text{
      padding: 10px;
    }
  }

  .slider-main-container {
    position: relative;
    top: 0;
  }

`;

export default function IndexPage(props) {

  const siteTitle = "Little Red Soap Company";

  useEffect(() => {
    if (typeof "window" !== "undefined") {
      ReactGA.pageview(window.location.pathname + window.location.search);

      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());

      gtag('config', process.env.GOOGLE_ID);

    }
  }, [])

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="Home"
        keywords={[`cbd lotion`, `cbd soap`, `custom soap`, `goats milk cbd soap`]}
      />

      <MainContainer>
        <div className="row mb-5">
          <div className="col-12 col-lg-6 px-5">
            <div className="col-12">
              <h3 className="text-center pb-1">Welcome to Little Red Soap Company</h3>
            </div>
            <div className="row main-text">
             
            </div>
          </div>
          <div className="col-12 col-lg-6 px-5">
            <Slideshow images={images} settings={settings} key="image-slider" />
          </div>
        </div>
      </MainContainer>
    </Layout>
  )
}
