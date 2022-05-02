import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Layout from "../components/Layout";

//#region Page styles

//#endregion

const WeddingParty = () => {
  return (
    <Layout>
      <Helmet>
        <title>Wedding Party | Isaac & Ness' Wedding Website</title>
      </Helmet>
      <div>Wedding Party content</div>
    </Layout>
  );
};

export default WeddingParty;
