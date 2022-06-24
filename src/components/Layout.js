import React from "react";
import { Helmet } from "react-helmet";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Beau+Rivage&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <script async src="https://cdn.splitbee.io/sb.js"></script>
      </Helmet>
      <GlobalStyles />
      <Typography />
      <Navigation />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
