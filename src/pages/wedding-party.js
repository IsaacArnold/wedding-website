import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Divider from "../components/Divider";
import KiwiKangaroo from "../components/KiwiKangaroo";
import Layout from "../components/Layout";

import olivia from "../images/wedding-party/olivia.jpg";
import hannah from "../images/wedding-party/hannah-v2.jpg";
import sophie from "../images/wedding-party/sophie.jpg";
import rachel from "../images/wedding-party/rachel_v2.jpg";
import justin from "../images/wedding-party/justin-og.jpeg";
import wheeler from "../images/wedding-party/wheeler-og.jpeg";
import jordan from "../images/wedding-party/jordan.jpeg";
import nathan from "../images/wedding-party/nathan-v2.jpeg";

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
  h1 {
    font-size: 48px;
  }
  .heading {
    width: 85%;
    margin: 2.5rem auto;
    margin-top: 0px;
  }
`;

const WeddingPartyGrid = styled.div`
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const Person = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 80%;
  margin: 40px auto;
  @media (min-width: 768px) and (max-width: 1023px) {
    display: grid;
    grid-template-columns: 0.35fr 1fr;
    width: 90%;
  }
  @media (min-width: 1024px) {
    width: 80%;
    justify-content: flex-start;
  }
  .img {
    background-size: cover;
    background-position: center;
    width: 120px;
    height: 120px;
    &.rachel {
      background-image: url(${rachel});
      background-position: inherit;
    }
    &.hannah {
      background-image: url(${hannah});
      background-position: inherit;
    }
    &.sophie {
      background-image: url(${sophie});
    }
    &.olivia {
      background-image: url(${olivia});
    }
    &.justin {
      background-image: url(${justin});
      background-position: inherit;
    }
    &.wheeler {
      background-image: url(${wheeler});
      background-position: unset;
    }
    &.jordan {
      background-image: url(${jordan});
    }
    &.nathan {
      background-image: url(${nathan});
    }
  }
  .person-content {
    @media (min-width: 768px) and (max-width: 1023px) {
      display: flex;
      text-align: left;
      .person-title {
        width: 230px;
      }
    }
    .name {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 5px;
    }
    .sub-name {
      margin: 0;
      font-size: 14px;
      font-style: italic;
    }
    .details {
      font-size: 16px;
      width: 90%;
      margin: 20px auto;
      @media (min-width: 768px) and (max-width: 1023px) {
        width: 100%;
      }
    }
  }
`;

const KiwiKanga = styled.div`
  margin: 2.5rem 0;
`;
//#endregion

const WeddingParty = () => {
  return (
    <Layout>
      <Helmet>
        <title>Wedding Party | Isaac & Ness' Wedding Website</title>
      </Helmet>
      <PageContainer>
        <Divider />
        <ContentContainer>
          <div className="heading">
            <h1>Wedding Party</h1>
            <p>Introducing the world's greatest wedding party!</p>
          </div>

          <WeddingPartyGrid>
            <Person>
              <div className="img justin"></div>
              <div className="person-content">
                <div className="person-title">
                  <p className="name">Justin</p>
                  <p className="sub-name">Best man</p>
                </div>
                <p className="details">
                  Isaac’s Iona school friend. Genuine bloke who currently lives
                  in Rockhampton...don't hold it against him. Appreciates a good
                  man-bun.
                </p>
              </div>
            </Person>

            <Person>
              <div className="img rachel"></div>
              <div className="person-content">
                <div className="person-title">
                  <p className="name">Rachel</p>
                  <p className="sub-name">Sister of the Bride</p>
                </div>
                <p className="details">
                  Loves a good chat. All-round good human. Lives on the Gold
                  Coast and is working on her GC tan.
                </p>
              </div>
            </Person>

            <Person>
              <div className="img jordan"></div>
              <div className="person-content">
                <div className="person-title">
                  <p className="name">Jordan</p>
                  <p className="sub-name">The funny one</p>
                </div>
                <p className="details">
                  Isaac’s Iona school friend. Won't shy away from a good laugh
                  and a bit of backyard cricket. Can fit a whole slice of cake
                  in his mouth.
                </p>
              </div>
            </Person>

            <Person>
              <div className="img sophie"></div>
              <div className="person-content">
                <div className="person-title">
                  <p className="name">Sophie</p>
                  <p className="sub-name">Bestie of the Bride</p>
                </div>
                <p className="details">
                  Ness’ friend from school. Visiting from NZ but should move to
                  Brisbane ASAP. Most likely to crack out some killer dance
                  moves.
                </p>
              </div>
            </Person>

            <Person>
              <div className="img wheeler"></div>
              <div className="person-content">
                <div className="person-title">
                  <p className="name">Matt</p>
                  <p className="sub-name">The onto it one</p>
                </div>
                <p className="details">
                  Isaac’s Iona school friend. Always open for a chat and a beer.
                  Don't get him started on cricket and indie music.
                </p>
              </div>
            </Person>

            <Person>
              <div className="img hannah"></div>
              <div className="person-content">
                <div className="person-title">
                  <p className="name">Hannah</p>
                  <p className="sub-name">Future sister-in-law</p>
                </div>
                <p className="details">
                  The shorter (but older) of the two red-heads. Will make anyone
                  feel welcome. Can't say no to an episode of Grey's Anatomy.
                </p>
              </div>
            </Person>

            <Person>
              <div className="img nathan"></div>
              <div className="person-content">
                <div className="person-title">
                  <p className="name">Nathan</p>
                  <p className="sub-name">The loud one</p>
                </div>
                <p className="details">
                  Isaac's Iona school friend. Will happily lend an ear or share
                  a laugh. Go on, ask him about his camping setup.
                </p>
              </div>
            </Person>

            <Person>
              <div className="img olivia"></div>
              <div className="person-content">
                <div className="person-title">
                  <p className="name">Olivia</p>
                  <p className="sub-name">Future sister-in-law</p>
                </div>
                <p className="details">
                  The taller (but younger) of the two red-heads. Three words to
                  describe Liv; sporty, hungry and fun. Not to be underestimated
                  in table tennis.
                </p>
              </div>
            </Person>
          </WeddingPartyGrid>
        </ContentContainer>
        <KiwiKanga>
          <KiwiKangaroo />
        </KiwiKanga>
      </PageContainer>
    </Layout>
  );
};

export default WeddingParty;
