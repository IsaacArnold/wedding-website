import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import Divider from "./Divider";

const Navigation = () => {
  const handleClick = () => {
    // Toggle the hidden class
    document.getElementById("dropdown").classList.toggle("hidden");
  };

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
    width: 100%;
    @media (min-width: 1024px) {
      display: flex;
      align-items: center;
      width: auto;
      flex-grow: 0;
    }
    .inner-mobile-nav {
    }
    &.hidden {
      display: none;
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
          <a href="#responsive-header">Your Invitation</a>
          <a href="#responsive-header">RSVP</a>
          <a href="#responsive-header">Venue</a>
          <a href="#responsive-header">Accommodation</a>
          <a href="#responsive-header">Wedding Party</a>
          <a href="#responsive-header">Gifting</a>
        </div>
      </MobileNavContainer>
      <LaptopNavContainer>
        <div className="inner-laptop-nav">
          <Divider width="60px" />
          <LaptopLink to="/invitation">Your Invitation</LaptopLink>
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
