import React from "react";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
