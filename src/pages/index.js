import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import KiwiKangaroo from "../components/KiwiKangaroo";
import nyc from "../images/nyc.jpeg";
import brick from "../images/brick.png";
import chch from "../images/chch-2.png";
import engagement from "../images/engagement-2.png";
import Divider from "../components/Divider";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ImageBanner = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 110px);
  grid-template-rows: 120px;
  grid-gap: 5px;
  .nyc {
    background-image: url(${nyc});
    background-size: cover;
    background-position: center;
  }
  .brick {
    display: none;
  }
  .chch {
    background-image: url(${chch});
    background-size: cover;
    background-position: center;
  }
  .engagement {
    background-image: url(${engagement});
    background-size: cover;
    background-position: center;
  }
  @media (min-width: 500px) {
    grid-template-columns: repeat(4, 110px);
    .brick {
      display: inline;
      background-image: url(${brick});
      background-size: cover;
      background-position: center;
    }
  }
  @media (min-width: 650px) {
    grid-template-columns: repeat(4, 150px);
    grid-template-rows: 150px;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 230px);
    grid-template-rows: 220px;
  }
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
      margin-bottom: 1.25rem;
      font-family: "Playfair Display", "serif";
      font-weight: normal;
    }
    p {
      margin: 5px 0;
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

const IndexPage = () => (
  <Layout>
    <PageContainer>
      <ImageBanner>
        <div className="nyc"></div>
        <div className="brick"></div>
        <div className="chch"></div>
        <div className="engagement"></div>
      </ImageBanner>

      <ContentContainer>
        <div className="heading">
          <h1>We're tying the knot</h1>
          <p>on Saturday 22nd October 2022</p>
          <p>at the Wynnum Golf Club, Brisbane</p>
        </div>
        <Divider width="58%" />
        <div className="body">
          <p>
            Welcome to our wedding website - we can’t wait to celebrate our
            special day with you all.
          </p>
          <p>
            We created this website as a convient and interactive way to share
            all the important details in the lead up to our big day. You can
            find out about our venue, some accommodation options (if you’re from
            out of town) and also meet our amazing bridal party.
          </p>
          <p>Also, don’t forget to RSVP and request a song!</p>
          <p>
            So please have fun, take a look around and if you have any
            questions, please let us know!
          </p>
        </div>
      </ContentContainer>
      <KiwiKanga>
        <KiwiKangaroo />
      </KiwiKanga>
    </PageContainer>
  </Layout>
);

export default IndexPage;
