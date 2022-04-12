import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const KiwiKangarooContainer = styled.div`
  display: flex;
  align-items: center;
  .gatsby-image-wrapper {
    width: 38px;
    height: 38px;
    &:first-child {
      margin-top: 3px;
    }
    &:last-child {
      margin-left: 20px;
    }
  }
`;

const KiwiKangaroo = () => {
  return (
    <KiwiKangarooContainer>
      <StaticImage
        src="../images/icons/kiwi.png"
        alt="Kiwi icon"
        placeholder="blurred"
      />
      <StaticImage
        src="../images/icons/kangaroo.png"
        alt="Kangaroo icon"
        placeholder="blurred"
      />
    </KiwiKangarooContainer>
  );
};

export default KiwiKangaroo;
