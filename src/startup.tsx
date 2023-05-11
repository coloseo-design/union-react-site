/* eslint-disable react/prop-types */
import React from 'react';
import 'core-js';
import {
  HashRouter as Router,
  Switch,
  Route,
  RouteComponentProps,
} from 'react-router-dom';
import { BasePageComponent } from './utils';
import { PagesComponent } from './utils/pages';
import Layout, { menus } from './layout';
import Home from './pages/home';
import Download from './pages/download';
import 'highlight-for-react/lib/highlight/styles/atom-one-light.css';
// import 'highlight.js/styles/atom-one-light.css';

const BaseComponent: React.FC<RouteComponentProps<any>> = (props) => {
  const { match } = props;
  const { name } = match.params;
  return <BasePageComponent name={name} />;
};
const Startup = () => (
  <Router>
    <Layout menus={menus}>
      <Switch>
        <Route path="/develop/components/:name" component={BaseComponent} />
        <Route path="/design/:parent/:child" component={PagesComponent} />
        <Route path="/download" component={Download} />
        <Route path="/" component={Home} />
      </Switch>
    </Layout>
  </Router>
);

export default Startup;
