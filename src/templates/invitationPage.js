import React from "react";
import styled from "styled-components";
import Divider from "../components/Divider";
import Layout from "../components/Layout";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const invitationPage = ({ pageContext }) => {
  const { partyName, partyMembers } = pageContext;
  return (
    <Layout>
      <PageContainer>
        <h1>You're Invited!</h1>
        <div>
          <h2>Dear</h2>
          <div>
            {partyMembers.map((member) => (
              <p>{member}</p>
            ))}
          </div>
        </div>
        <Divider width="80px" />
        <div>
          <p>
            We would love for you to join us in celebrating our wedding, with an
            evening of good food, good drink and good (debatable) dance moves.
          </p>
          <p>
            We will exchange vows in an outdoor ceremony beginning at 4:00pm at
            the Wynnum Golf Club on Saturday 22nd October 2022. Our ceremony
            will be followed by canapes and a sit-down meal.
          </p>
          <p>
            We ask that you please RSVP with any dietry requirements by ___.
          </p>
        </div>
      </PageContainer>
    </Layout>
  );
};

export default invitationPage;
