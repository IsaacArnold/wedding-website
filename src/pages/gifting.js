import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Divider from "../components/Divider";
import KiwiKangaroo from "../components/KiwiKangaroo";
import Layout from "../components/Layout";
import { ImGift } from "react-icons/im";
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
  .btn {
    display: flex;
    justify-content: center;
    align-item: center;
    width: 200px;
    margin: 20px auto;
    background-color: var(--weddingGreen);
    color: var(--offWhite);
    border: none;
    padding: 15px 30px;
    align-self: center;
    text-align: center;
    font-size: 16px;
    text-decoration: none;
    @media (min-width: 768px) {
      align-self: flex-start;
    }
  }
`;

const KiwiKanga = styled.div`
  margin: 2.5rem 0;
`;

//#endregion

const Gifting = () => {
  return (
    <Layout>
      <Helmet>
        <title>Gifting | Isaac & Ness' Wedding Website</title>
        <meta property="og:image" content={socialImage} />
      </Helmet>
      <PageContainer>
        <Divider width="80px" />
        <ContentContainer>
          <div className="heading">
            <h1>Gifting</h1>
          </div>
          <div className="icons">
            <ImGift />
          </div>
          <div className="body">
            <p>
              The time and effort that you put into being with us on our wedding
              day is a gift in itself.
            </p>
            <p>
              If you would like to give us a gift that will remind us of our
              wedding day, we will have two options available.
            </p>
            <p>
              A Wishing Well, in which you can gift money in an envelope, will
              be set up at the reception.
            </p>
            <p>
              If giving a physical gift is more your style we have set up a gift
              registry - please click on the button below to view.
            </p>
            <a
              href="https://docs.google.com/document/d/1oOUTKTvwO_z6xiVcVlQcPnYWDLTm4dcrHInjezsd0nA/edit?usp=sharing"
              target="_blank"
              className="btn"
              rel="noreferrer"
            >
              View gift registry
            </a>
            <p>If you have any questions, please let us know.</p>
          </div>
        </ContentContainer>
        <KiwiKanga>
          <KiwiKangaroo />
        </KiwiKanga>
      </PageContainer>
    </Layout>
  );
};

export default Gifting;
