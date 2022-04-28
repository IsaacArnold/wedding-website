import React, { useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import Divider from "./Divider";
// import { useLocation } from "@reach/router";

//#region Page styles
const NavStyles = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 25px;
  @media (min-width: 1024px) {
    flex-direction: column;
  }
`;

const MainLink = styled(Link)`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  margin-right: 25px;
  text-decoration: none;
  color: var(--weddingGreen);
  font-size: 2rem;
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 60px;
  }
  span {
    font-family: "Beau Rivage", cursive;
  }
`;

const HamburgerContainer = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }
  svg {
    width: 25px;
    height: 40px;
    color: var(--weddingGreen);
  }
`;

const MobileNavContainer = styled.div`
  width: 80%;
  margin-left: auto;
  background-shadow: var(--shadow-elevation-medium);
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    width: auto;
    flex-grow: 0;
  }
  .inner-mobile-nav {
    margin-top: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
  }
  &.hidden {
    display: none;
  }
`;

const MobileLink = styled(Link)`
  text-decoration: none;
  color: var(--weddingGreen);
  margin-bottom: 10px;
  font-size: 18px;
  &:nth-child(6) {
    margin-bottom: 20px;
  }
`;

const LaptopNavContainer = styled.div`
  width: 100%;
  display: none;
  margin-top: 30px;
  .inner-laptop-nav {
    display: flex;
    flex-direction: row;
  }
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    width: auto;
    flex-grow: 0;
  }
`;

const LaptopLink = styled(Link)`
  text-decoration: none;
  color: var(--weddingGreen);
  margin-left: 40px;
  font-size: 18px;
  &:nth-child(2) {
    margin-left: 50px;
  }
  &:nth-child(7) {
    margin-right: 50px;
  }
`;
//#endregion

let urlArray = [];

const Navigation = () => {
  // const history = useLocation();
  // const pathname = history.pathname;

  // useEffect(() => {
  //   urlArray.push(pathname);
  // }, []);

  const handleClick = () => {
    // Toggle the hidden class
    document.getElementById("dropdown").classList.toggle("hidden");
  };
  return (
    <NavStyles>
      <div>
        <MainLink to="/">
          <span>Isaac & Vanessa</span>
        </MainLink>
      </div>
      <HamburgerContainer onClick={handleClick}>
        <FiMenu />
      </HamburgerContainer>
      <MobileNavContainer id="dropdown" className="hidden">
        <div className="inner-mobile-nav">
          <MobileLink to="/">Your Invitation</MobileLink>
          <MobileLink to="/rsvp">RSVP</MobileLink>
          <MobileLink to="/venue">Venue</MobileLink>
          <MobileLink to="/accommodation">Accommodation</MobileLink>
          <MobileLink to="/wedding-party">Wedding Party</MobileLink>
          <MobileLink to="/gifting">Gifting</MobileLink>
        </div>
      </MobileNavContainer>
      <LaptopNavContainer>
        <div className="inner-laptop-nav">
          <Divider width="60px" />
          <LaptopLink to="/">Your Invitation</LaptopLink>
          <LaptopLink to="/rsvp">RSVP</LaptopLink>
          <LaptopLink to="/venue">Venue</LaptopLink>
          <LaptopLink to="/accommodation">Accommodation</LaptopLink>
          <LaptopLink to="/wedding-party">Wedding Party</LaptopLink>
          <LaptopLink to="/gifting">Gifting</LaptopLink>
          <Divider width="60px" />
        </div>
      </LaptopNavContainer>
    </NavStyles>
  );
};

export default Navigation;
