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
  "images/all_products_400.jpeg",
  "images/all_product4_400.jpeg",
  "images/all_products5_400.jpeg",
  "images/all_soaps2_400.jpeg",
  "images/all_products2_400.jpeg",
  "images/all_products3_400.jpeg"
];

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  lazyLoad: true,
  autoplaySpeed: 5000,
  speed: 3000,
  fade: true,
  slidesToShow: 2,
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
              {/* <div className="col-12">
                <p>Kick It Up A Notch! Alpine Designs and Desert Designs were grown out of the desire to create outdoor living spaces that not only meet the needs and dreams of our clients but to exceed them while incorporating the surrounding beauty of Mother Nature.
              </p>
                <p>We will incorporate  your families personality and style into the design.  Your property should be a reflection of you providing family memories for years to come.
              <br />Our experienced team prides ourselves on customer service, design innovation and old school business practices.
              </p>
                <p>Kick it Up A Notch! Desert Designs has 14 years of experience with custom home builders and high-end residential remodels in Scottsdale Arizona.
              </p><p>
                  We look forward to bringing our innovation and creativity to the Wasatch and Salt Lake Valley.
              </p>
              </div> */}
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
