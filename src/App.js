import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';

const Home = React.lazy(() => import("./components/Home"));
const Chart = React.lazy(() => import("./components/Chart"));

function App() {
  return (
      <Suspense>
        <BrowserRouter>
          <Switch>
            <Route component={Home} path="/" exact />
            <Route component={Chart} path="/chart" />
          </Switch>
        </BrowserRouter>
      </Suspense>
  );
}

export default App;
