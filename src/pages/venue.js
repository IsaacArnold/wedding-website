import React from "react";
import styled from "styled-components";
import Divider from "../components/Divider";
import KiwiKangaroo from "../components/KiwiKangaroo";
import Layout from "../components/Layout";

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
  .heading,
  .venueDiv {
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
  .venueDiv {
    width: 90%;
    h2 {
      font-family: "Playfair Display", "serif";
      font-weight: normal;
    }
    ul {
      padding-left: 0px;
      width: 85%;
      margin: auto;
      font-size: 18px;
    }
  }
  .map {
    margin-top: 30px;
    margin-bottom: 30px;
    .iFrame {
      width: 290px;
      height: 250px;
    }
  }
`;

const KiwiKanga = styled.div`
  margin: 2.5rem 0;
`;
//#endregion

const Venue = () => {
  return (
    <Layout>
      <PageContainer>
        <Divider />
        <ContentContainer>
          <div className="heading">
            <h1>Venue</h1>
          </div>
          <div className="venueDiv">
            <h2>Wynnum Golf Club, Brisbane</h2>
            <p>64 Stradbroke Ave, Wynnum, Qld, 4178</p>
            <div className="map">
              <iframe
                title="Google maps iframe"
                className="iFrame"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.7579733586094!2d153.16250261545173!3d-27.445652522252352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915fab648b4eef%3A0xc116107dc33448f6!2sWynnum%20Golf%20Club!5e0!3m2!1sen!2sau!4v1650527915109!5m2!1sen!2sau"
                style={{ border: 0 + "px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <ul>
              <li>On-site free parking</li>
              <li>Lift access</li>
              <li>Wynnum Central Train Station, within walking distance</li>
            </ul>
          </div>
        </ContentContainer>
        <KiwiKanga>
          <KiwiKangaroo />
        </KiwiKanga>
      </PageContainer>
    </Layout>
  );
};

export default Venue;
