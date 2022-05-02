import React from "react";
import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";

//#region Page styles
const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  /* width: 90%; */
  padding-left: 10px;
  form {
    display: flex;
    flex-direction: column;
  }
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
//#endregion

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xzbokydk");

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <FormDiv>
      <form onSubmit={handleSubmit}>
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
              value="No"
              required={true}
            />
            <label htmlFor="attendanceNo">No</label>
          </div>
          <ValidationError
            prefix="Attendance"
            field="attendanceYes"
            errors={state.errors}
          />
          <ValidationError
            prefix="Attendance"
            field="attendanceNo"
            errors={state.errors}
          />
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
          <ValidationError
            prefix="FirstName"
            field="fullName"
            errors={state.errors}
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
          <ValidationError
            prefix="LastName"
            field="lastName"
            errors={state.errors}
          />
        </div>

        <div className="form-section">
          <label htmlFor="partyMembers">Please list other party members</label>
          <textarea
            name="partyMembers"
            id="partyMembers"
            placeholder="Kit, Sunny"
            required={true}
          />
        </div>

        <div className="form-section">
          <label htmlFor="dietary">
            If anyone in your party has any dietary requirements, please list
            them below. Please include the name of the guest and then their
            request.
          </label>
          <textarea
            name="dietary"
            id="dietary"
            placeholder="Isaac - vegetarian and garlic allergy"
            required={true}
          />
        </div>

        <div className="form-section">
          <label htmlFor="songRequest">Request a song - one per guest</label>
          <textarea
            name="songRequest"
            id="songRequest"
            placeholder="Eagle Rock - Daddy Cool, Poi E - Patea Maori Club"
            required={true}
          />
        </div>

        <button type="submit" disabled={state.submitting} className="submitBtn">
          Submit RSVP
        </button>
      </form>
      <ValidationError errors={state.errors} />
    </FormDiv>
  );
}
