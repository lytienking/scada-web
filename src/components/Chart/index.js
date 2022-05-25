import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import ChartPage from "./pages/Chart";
import Layout from "../Layout/Layout";

const Home =() => {
  const match = useRouteMatch();
  return (
    <Layout>
      <Switch>
        <Route exact path={`${match.url}`} component={ChartPage} />
      </Switch>
    </Layout>
  );
}

export default Home;
