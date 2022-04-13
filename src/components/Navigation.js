import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";

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
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            Nothing
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            In
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white"
          >
            Here!
          </a>
        </div>
      </MobileNavContainer>
    </NavStyles>
  );
};

export default Navigation;
