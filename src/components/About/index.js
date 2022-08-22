import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import AboutPage from "./pages/About";
import Layout from "../Layout/Layout";

const About =() => {
  const match = useRouteMatch();
  return (
    <Layout>
      <Switch>
        <Route exact path={`${match.url}`} component={AboutPage} />
      </Switch>
    </Layout>
  );
}

export default About;
