import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import HomePage from "./pages/Home";
import Layout from "../Layout/Layout";

const Home =() => {
  const match = useRouteMatch();
  return (
    <Layout>
      <Switch>
        <Route exact path={`${match.url}/`} component={HomePage} />
      </Switch>
    </Layout>
  );
}

export default Home;
