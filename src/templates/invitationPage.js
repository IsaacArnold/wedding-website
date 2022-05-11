import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Divider from "../components/Divider";
import KiwiKangaroo from "../components/KiwiKangaroo";
import Layout from "../components/Layout";
import { FaGlassCheers } from "react-icons/fa";
import { GiGlassCelebration } from "react-icons/gi";

//#region Page styles
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 30px;
  h1 {
    font-size: 48px;
  }
`;

const ContentContainer = styled.div`
  width: 90%;
  max-width: 680px;
  .body {
    width: 85%;
    margin: 2.5rem auto;
    margin-bottom: 100px;
    p {
      margin: 1.25rem 0;
    }
    .sub-text {
      font-size: 14px;
      width: 85%;
      margin: auto;
    }
  }
  .rsvpButton {
    background-color: var(--weddingGreen);
    color: var(--offWhite);
    border: none;
    padding: 15px 30px;
    align-self: center;
    font-size: 16px;
    text-decoration: none;
  }
`;

const Header = styled.div`
  margin-bottom: 3rem;
  h2 {
    font-family: "Playfair Display", "serif";
    font-weight: 400;
    font-size: 30px;
    margin-bottom: 15px;
  }
  .icons {
    margin-top: 30px;
    svg {
      width: 50px;
      height: 50px;
      margin-left: 5px;
    }
  }
`;

const MembersDiv = styled.div`
  font-size: 28px;
`;

const KiwiKanga = styled.div`
  margin: 2.5rem 0;
  margin-top: 60px;
`;
//#endregion

const InvitationPage = ({ pageContext }) => {
  const { displayName, slug } = pageContext;

  // Stores the slug in localStorage to use elsewhere
  const individualLink = slug;
  typeof window !== "undefined" &&
    window.localStorage.setItem("url", individualLink);

  return (
    <Layout>
      <PageContainer>
        <Divider width="80px" />
        <h1>You're Invited!</h1>
        <Header>
          <h2>Dear,</h2>
          <MembersDiv>{displayName}</MembersDiv>
          <div className="icons">
            <GiGlassCelebration />
          </div>
        </Header>
        <Divider width="80px" />
        <ContentContainer>
          <div className="body">
            <p>We would love for you to join us in celebrating our wedding!</p>
            <p>
              It will be an evening of good food, good drink and good
              (debatable) dance moves.
            </p>
            <p>
              We will exchange vows in an outdoor ceremony beginning at 4:00pm
              at the Wynnum Golf Club on Saturday 22nd October 2022. Our
              ceremony will be followed by canap&eacute;s and a sit-down meal.
            </p>
            <p>
              We ask that you please RSVP with any dietry requirements by 1st
              September 2022.
            </p>
            <p className="sub-text">
              Click on the RSVP button below or click 'Isaac & Vanessa' at the
              top of this page to view the home screen.
            </p>
          </div>
          <Link to="/rsvp" className="rsvpButton">
            RSVP
          </Link>
        </ContentContainer>
        <KiwiKanga>
          <KiwiKangaroo />
        </KiwiKanga>
      </PageContainer>
    </Layout>
  );
};

export default InvitationPage;
