import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import KiwiKangaroo from "../components/KiwiKangaroo";
import Divider from "../components/Divider";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 30px;
`;

const ContentContainer = styled.div`
  width: 90%;
  .heading,
  .body {
    width: 85%;
    margin: 2.5rem auto;
  }
  .heading {
    h1 {
      letter-spacing: 3px;
    }
  }
  .body {
    p {
      margin: 1.25rem 0;
    }
  }
`;

const KiwiKanga = styled.div`
  margin: 2.5rem 0;
`;

const RSVP = () => (
  <Layout>
    <PageContainer>
      <Divider width="80px" />
      <ContentContainer>
        <div className="heading">
          <h1>RSVP</h1>
        </div>
        <div className="body">
          <p>
            Please RSVP by ___. If you have already let us know your RSVP, you
            won’t need to worry about this page.
          </p>
          <p>Please also let us know any dietry requirements.</p>
        </div>
      </ContentContainer>
      <KiwiKanga>
        <KiwiKangaroo />
      </KiwiKanga>
    </PageContainer>
  </Layout>
);

export default RSVP;
