import React from "react";
import styled from "styled-components";
import Divider from "../components/Divider";
import KiwiKangaroo from "../components/KiwiKangaroo";
import Layout from "../components/Layout";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 30px;
  h1 {
    font-size: 2.5em;
  }
`;

const ContentContainer = styled.div`
  width: 90%;
  .body {
    width: 85%;
    margin: 2.5rem auto;
    p {
      margin: 1.25rem 0;
    }
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
`;

const MembersDiv = styled.div`
  font-size: 20px;
`;

const KiwiKanga = styled.div`
  margin: 2.5rem 0;
`;

const invitationPage = ({ pageContext }) => {
  const { partyName, partyMembers, displayName } = pageContext;
  return (
    <Layout>
      <PageContainer>
        <Divider width="80px" />
        <h1>You're Invited!</h1>
        <Header>
          <h2>Dear,</h2>
          <MembersDiv>{displayName}</MembersDiv>
        </Header>
        <Divider width="80px" />
        <ContentContainer>
          <div className="body">
            <p>
              We would love for you to join us in celebrating our wedding, with
              an evening of good food, good drink and good (debatable) dance
              moves.
            </p>
            <p>
              We will exchange vows in an outdoor ceremony beginning at 4:00pm
              at the Wynnum Golf Club on Saturday 22nd October 2022. Our
              ceremony will be followed by canapes and a sit-down meal.
            </p>
            <p>
              We ask that you please RSVP with any dietry requirements by ___.
            </p>
          </div>
          {/* RSVP button */}
        </ContentContainer>
        <KiwiKanga>
          <KiwiKangaroo />
        </KiwiKanga>
      </PageContainer>
    </Layout>
  );
};

export default invitationPage;
