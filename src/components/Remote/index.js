import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import RemotePage from "./pages/Remote";
import Layout from "../Layout/Layout";

const Remote =() => {
  const match = useRouteMatch();
  return (
    <Layout>
      <Switch>
        <Route exact path={`${match.url}/`} component={RemotePage} />
      </Switch>
    </Layout>
  );
}

export default Remote;