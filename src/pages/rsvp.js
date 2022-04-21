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
      font-size: 48px;
    }
  }
  .body {
    p {
      margin: 1.25rem 0;
    }
  }
`;

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  width: 90%;
  padding-left: 10px;
  .form-section {
    margin-bottom: 30px;
  }
  .radioDiv {
    display: flex;
    margin-bottom: 15px;
    margin-left: 5px;
    input[type="radio"] {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      -webkit-appearance: none;
      appearance: none;
      background-color: rgba(46, 71, 53, 20%);
      margin: 0;
      margin-right: 15px;
      display: grid;
      place-content: center;
      margin-top: 2px;
      &::before {
        content: "";
        width: 18px;
        height: 18px;
        margin-right: 10px;
        border-radius: 50%;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1.2em 1.2em var(--weddingGreen);
      }
      &:checked::before {
        transform: scale(1);
      }
    }
  }
  .submitBtn {
    background-color: var(--weddingGreen);
    color: var(--offWhite);
    border: none;
    padding: 15px 30px;
    align-self: center;
    font-size: 16px;
  }
  input,
  textarea {
    background-color: rgba(46, 71, 53, 20%);
    border: none;
    border-radius: 0px;
    width: 100%;
    height: 50px;
    margin-top: 10px;
    padding-left: 10px;
    &::placeholder {
      color: var(--offWhite);
      font-size: 14px;
    }
  }
  textarea {
    height: 70px;
    &::placeholder {
      padding-top: 5px;
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
          <p>Please RSVP by ___.</p>
          <p>
            If you have already let us know your RSVP, you won’t need to worry
            about this page.
          </p>
          <p>Please also let us know any dietary requirements.</p>
        </div>
        <FormDiv>
          <form
            name="Contact Form"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="Contact Form" />
            <div className="form-section">
              <p>Attendance</p>
              <div className="radioDiv">
                <input
                  type="radio"
                  name="attendance"
                  id="attendanceYes"
                  value="yes"
                  required={true}
                />
                <label htmlFor="attendanceYes">Yes</label>
              </div>
              <div className="radioDiv">
                <input
                  type="radio"
                  name="attendance"
                  id="attendanceNo"
                  value="yes"
                  required={true}
                />
                <label htmlFor="attendanceNo">No</label>
              </div>
            </div>
            <div className="form-section">
              <label htmlFor="fullName">First Name (first in party)</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Isaac"
                required={true}
              />
            </div>
            <div className="form-section">
              <label htmlFor="lastName">Last Name (first in party)</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Arnold"
                required={true}
              />
            </div>
            <div className="form-section">
              <label htmlFor="partyMembers">
                Please list other party members
              </label>
              <textarea
                name="partyMembers"
                id="partyMembers"
                placeholder="Kit, Sunny"
                required={true}
              />
            </div>
            <div className="form-section">
              <label htmlFor="dietary">
                Please let us know your dietary requirements
              </label>
              <textarea
                name="dietary"
                id="dietary"
                placeholder="Garlic"
                required={true}
              />
            </div>
            <div className="form-section">
              <label htmlFor="songRequest">
                Request a song - one per guest
              </label>
              <textarea
                name="songRequest"
                id="songRequest"
                placeholder="It's Raining Men"
                required={true}
              />
            </div>
          </form>
          <button type="submit" className="submitBtn">
            Submit RSVP
          </button>
        </FormDiv>
      </ContentContainer>
      <KiwiKanga>
        <KiwiKangaroo />
      </KiwiKanga>
    </PageContainer>
  </Layout>
);

export default RSVP;
