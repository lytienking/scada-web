import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';

const Home = React.lazy(() => import("./components/Home"));

function App() {
  return (
      <Suspense>
        <BrowserRouter>
          <Switch>
            <Route component={Home} path="/" exact />
          </Switch>
        </BrowserRouter>
      </Suspense>
  );
}

export default App;
