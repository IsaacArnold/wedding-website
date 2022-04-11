import React from "react";
import Layout from "../components/Layout";

const invitationPage = ({ pageContext }) => {
  const { partyName, partyMembers } = pageContext;
  return (
    <Layout>
      <div>
        <h1>{partyName}</h1>
        <p>{partyMembers}</p>
      </div>
    </Layout>
  );
};

export default invitationPage;
