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
`;

const ContentContainer = styled.div`
  width: 90%;
  margin-top: 30px;
  .heading,
  .accomDiv {
    width: 85%;
    margin: 2.5rem auto;
    margin-top: 0px;
  }
  .heading {
  }
  .accomDiv,
  .suburbs {
    width: 90%;
    margin-bottom: 60px;
    h2 {
      font-family: "Playfair Display", "serif";
      font-weight: normal;
      text-align: left;
    }
    ul {
      padding-left: 0px;
      width: 85%;
      margin: auto;
      font-size: 18px;
      text-align: left;
    }
  }
  .map {
    margin-top: 40px;
    .iFrame {
      width: 290px;
      height: 250px;
    }
  }
`;

const KiwiKanga = styled.div`
  margin: 2.5rem 0;
`;

const Accommodation = () => {
  return (
    <Layout>
      <PageContainer>
        <Divider />
        <ContentContainer>
          <div className="heading">
            <h1>Accommodation</h1>
          </div>

          <div className="accomDiv">
            <h2>Manly Marina Cove Motel</h2>
            <ul>
              <li>
                There is ample free parking available close to the ceremony
                entrance
              </li>
            </ul>
            <div className="map">
              <iframe
                title="Google maps iframe"
                className="iFrame"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.258189895546!2d153.18846821545213!3d-27.461220222917763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915e2d012cdd87%3A0x5ff5044443030ed2!2sManly%20Marina%20Cove%20Motel!5e0!3m2!1sen!2sau!4v1650535629499!5m2!1sen!2sau"
                style={{ border: 0 + "px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="accomDiv">
            <h2>Manly Marina Cove Motel</h2>
            <ul>
              <li>
                There is ample free parking available close to the ceremony
                entrance
              </li>
            </ul>
            <div className="map">
              <iframe
                title="Google maps iframe"
                className="iFrame"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.258189895546!2d153.18846821545213!3d-27.461220222917763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915e2d012cdd87%3A0x5ff5044443030ed2!2sManly%20Marina%20Cove%20Motel!5e0!3m2!1sen!2sau!4v1650535629499!5m2!1sen!2sau"
                style={{ border: 0 + "px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="suburbs">
            <h2>Suburbs within 20 minutes, if you're looking for an AirBnb:</h2>
            <ul>
              <li>Wynnum</li>
              <li>Manly/Manly West</li>
              <li>Lota</li>
              <li>Carindale</li>
              <li>Morningside</li>
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

export default Accommodation;
