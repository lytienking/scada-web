import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

const Home = React.lazy(() => import('./components/Home'));
const Chart = React.lazy(() => import('./components/Chart'));
const About = React.lazy(() => import('./components/About'));
const Value = React.lazy(() => import('./components/Value'));
const Remote = React.lazy(() => import('./components/Remote'));
function App() {
  return (
    <Suspense>
      <BrowserRouter>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Chart} path="/chart" />
          <Route component={About} path="/about" />
          <Route component={Value} path="/value" />
          <Route component={Remote} path="/remote" />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
