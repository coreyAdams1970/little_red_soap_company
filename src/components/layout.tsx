import React from "react"
import { Link } from "gatsby"
import styled, { ThemeProvider } from "styled-components";
import "./style.scss";
import Logo from "../../static/images/little_red.jpeg";
import classNames from "classnames";

const rootPath = `${__PATH_PREFIX__}/`

const theme = {
  linkRollover: "palevioletred",
  link: "white",
  primary: "#dc1f24"
};

function Header({ location }) {
  return (
    <>
      <div className="col-lg-2 col-4 pl-4">
        <Link className="d-flex logo" to={`/`} >
          <img src={Logo} className="float-left" />
        </Link>
      </div>
      <nav className="col-lg-10 col-8 mb-4 mt-0 text-right mt-5 pr-5">
        <a href="/" className="nav-button" disabled={location.pathname === rootPath}>
          Home
        </a>
        <Link to="/contact/" className="nav-button" disabled={location.pathname === "/contact/"}>
          Contact
        </Link>
      </nav>
    </>
  );
}

export default function Layout(props) {

  const { location, title, children } = props;

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Wrapper >
          <LayoutContainer >
            <HeaderContainer >
              <div className={classNames("header-white row mb-0 justify-content-middle")}>
                <Header location={location} />
              </div>
            </HeaderContainer>
            <MainContainer className="row">
              <main className="col-12">{children}</main>
            </MainContainer>
          </LayoutContainer>
          <Footer>
          </Footer>
        </Wrapper>
      </Container>
    </ThemeProvider>
  )
}

const Container = styled.div`
    margin-left: 15px;
    margin-right: 15px;
`;

const LayoutContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 10rem; 
`;

const HeaderContainer = styled.div`
  .header-white {
    background-color: white;
    border-bottom: 1px solid ${props => props.theme.primary};
    a {
      color: ${props => props.theme.primary};
    }
  }
 
  width: 100%;
  z-index: 10000;

  a {
    text-decoration: none !important;
    box-shadow: none;
    padding: 10px;
    padding-bottom:0px;
  }

  a:hover {
    text-decoration: underline !important;
  }

  .logo {
    img {
      max-height: 160px;
    }
  }

  nav {
    font-weight: 400;
    font-size: 15px;
    letter-spacing: 0px;
    font-style: normal;
  }
`;

const Wrapper = styled.div`
  min-height: 100vh;
`
const MainContainer = styled.div`
  margin: auto;
  margin-top: 40px;
`;

const Footer = styled.footer`
  text-align:center;
  width: 100%;
  height: 2.5rem; 

  a {
    box-shadow: none;
    margin-left:10px;
    height:30px !important;
    width:30px !important;
  }
`