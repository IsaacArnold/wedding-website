import * as React from "react";
import { Helmet } from "react-helmet";

const NotFoundPage = () => (
  <>
    <Helmet>
      <title>404: Page Not Found</title>
    </Helmet>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </>
);

export default NotFoundPage;
