import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Divider from "../components/Divider";
import KiwiKangaroo from "../components/KiwiKangaroo";
import Layout from "../components/Layout";
import { GiPartyPopper } from "react-icons/gi";
import socialImage from "../images/SEO-image.png";

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
  max-width: 680px;
  .heading {
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
  .icons {
    svg {
      width: 35px;
      height: 35px;
      margin-bottom: 12px;
    }
  }
  .body {
    .map {
      margin-top: 40px;
      .iFrame {
        width: 290px;
        height: 250px;
        @media (min-width: 768px) {
          width: 100%;
        }
      }
    }
  }
`;

const KiwiKanga = styled.div`
  margin: 2.5rem 0;
`;

//#endregion

const Sunday = () => {
  return (
    <Layout>
      <Helmet>
        <title>Sunday Information | Isaac & Ness' Wedding Website</title>
        <meta property="og:image" content={socialImage} />
      </Helmet>
      <PageContainer>
        <Divider width="80px" />
        <ContentContainer>
          <div className="heading">
            <h1>Sunday Information</h1>
          </div>
          <div className="icons">
            <GiPartyPopper />
          </div>
          <div className="body">
            <p>
              We are getting close to our wedding day now!
            </p>
            <p>
              We just wanted to send a quick message to let you know that we
              will be having an informal, post-wedding get-together at the
              Waterloo Bay Hotel on Sunday 23rd October at 1pm.
            </p>
            <p>We would love for you to join us, see you there!</p>
            <p>
              The Waterloo Bay Hotel is located at 75 Berrima Street, Wynnum,
              4178
            </p>
          </div>
        </ContentContainer>
        <KiwiKanga>
          <KiwiKangaroo />
        </KiwiKanga>
      </PageContainer>
    </Layout>
  );
};

export default Sunday;
