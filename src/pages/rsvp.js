import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Layout from "../components/Layout";
import KiwiKangaroo from "../components/KiwiKangaroo";
import Divider from "../components/Divider";
import ContactForm from "../components/contact-form";

//#region Page styles
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
  margin-top: 30px;
  margin-bottom: 30px;
  max-width: 680px;
  .heading,
  .body {
    width: 85%;
    margin: 2.5rem auto;
    margin-top: 0px;
  }
  .heading {
    h1 {
      letter-spacing: 3px;
      font-size: 48px;
    }
  }
  .body {
    p {
      margin: 1.25rem 0;
    }
  }
  .hidden {
    display: none;
  }
`;

const KiwiKanga = styled.div`
  margin: 2.5rem 0;
  @media (min-width: 768px) {
    margin-top: 3.5rem;
  }
`;
//#endregion

const RSVP = () => {
  const handleButtonClick = () => {
    document.querySelector(".body").classList.toggle("hidden");
  };

  return (
    <Layout>
      <Helmet>
        <title>RSVP | Isaac & Ness' Wedding Website</title>
      </Helmet>
      <PageContainer>
        <Divider width="80px" />
        <ContentContainer>
          <div className="heading">
            <h1>RSVP</h1>
          </div>
          <div className="body">
            <p>
              Please RSVP by completing the below forms before 1st September
              2022.
            </p>
            <p>We can't wait to see you!</p>
          </div>
          <ContactForm callback={handleButtonClick} />
        </ContentContainer>
        <KiwiKanga>
          <KiwiKangaroo />
        </KiwiKanga>
      </PageContainer>
    </Layout>
  );
};

export default RSVP;
