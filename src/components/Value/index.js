import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import ValuePage from "./pages/Value";
import Layout from "../Layout/Layout";

const Home =() => {
  const match = useRouteMatch();
  return (
    <Layout>
      <Switch>
        <Route exact path={`${match.url}/`} component={ValuePage} />
      </Switch>
    </Layout>
  );
}

export default Home;
