import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";

//#region Page styles
const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding-left: 10px;
  max-width: 310px;
  .confirm {
    text-align: center;
    margin: auto;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  .form-section {
    margin-bottom: 30px;
    @media (min-width: 1024px) {
      &.messageNotAttending {
        width: 350px;
      }
    }
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
    @media (min-width: 768px) {
      align-self: flex-start;
    }
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
    padding-top: 10px;
  }
`;

const SuccessDiv = styled.div`
  p {
    &.margin {
      margin-bottom: 60px;
    }
  }
  .rsvpButton {
    background-color: var(--weddingGreen);
    color: var(--offWhite);
    border: none;
    padding: 15px 30px;
    align-self: center;
    font-size: 16px;
    text-decoration: none;
    margin-top: 30px;
  }
`;
//#endregion

export default function ContactForm(props) {
  const [state, handleSubmit] = useForm("xzbokydk");
  const [attending, setAttending] = useState(true);

  if (state.succeeded) {
    return attending ? (
      <SuccessDiv>
        <p className="confirm margin">
          Woohoo - we can't wait to celebrate with you!
        </p>
        <Link to="/" className="rsvpButton">
          Return home
        </Link>
      </SuccessDiv>
    ) : (
      <SuccessDiv>
        <p className="confirm">Thank you for letting us know.</p>
        <p className="confirm margin">You will be missed!</p>
        <Link to="/" className="rsvpButton">
          Return home
        </Link>
      </SuccessDiv>
    );
  }

  const onTrigger = () => {
    const { callback } = props;
    callback(false);
  };

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
              onClick={() => setAttending(true)}
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
              onClick={() => setAttending(false)}
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
        {attending && (
          <>
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
                If anyone in your party has any dietary requirements, please
                list them below. Please include the name of the guest and then
                their request.
              </label>
              <textarea
                name="dietary"
                id="dietary"
                placeholder="Isaac - vegetarian and garlic allergy"
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
                placeholder="Eagle Rock - Daddy Cool, Poi E - Patea Maori Club"
                required={true}
              />
            </div>
          </>
        )}

        {!attending && (
          <>
            <div className="form-section messageNotAttending">
              <label htmlFor="messageNotAttending">
                Sorry that you aren't able to make it - we will miss you! If
                you'd like, leave us a message for us to read on our big day.
              </label>
              <textarea
                name="messageNotAttending"
                id="messageNotAttending"
                placeholder="Type your message here..."
              />
            </div>
          </>
        )}

        <button
          type="submit"
          disabled={state.submitting}
          className="submitBtn"
          onClick={() => onTrigger()}
        >
          Submit RSVP
        </button>
      </form>
      <ValidationError errors={state.errors} />
    </FormDiv>
  );
}
