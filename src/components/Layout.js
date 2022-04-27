import React, { useState } from "react";
import { URLContext } from "../context";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
  const [url, setURL] = useState(`/invitation/initialState`);
  const value = { url, setURL };
  return (
    <URLContext.Provider value={value}>
      <div>
        <GlobalStyles />
        <Typography />
        <Navigation />
        <div>{children}</div>
      </div>
    </URLContext.Provider>
  );
};

export default Layout;
