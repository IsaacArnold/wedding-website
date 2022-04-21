import React from "react";
import styled from "styled-components";

const DividerDiv = styled.div`
  width: 80px;
  width: ${(props) => props.width};
  height: 1px;
  background-color: var(--weddingGreen);
  margin: auto;
  max-width: 300px;
`;

const Divider = ({ width }) => {
  return <DividerDiv className="divider" width={width} />;
};

export default Divider;
