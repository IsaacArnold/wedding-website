import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Divider from "../components/Divider";
import KiwiKangaroo from "../components/KiwiKangaroo";
import Layout from "../components/Layout";
import { ImGift } from "react-icons/im";

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
            <p>A Wishing Well will be set up at the reception. </p>
            <p>
              If giving a physical gift is more your style we will be setting up
              a small gift registary with Myer. A link for this will be
              available on this page in August.
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

export default Gifting;
