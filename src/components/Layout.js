import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      <Typography />
      <Navigation />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
