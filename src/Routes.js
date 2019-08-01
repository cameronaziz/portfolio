import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-static';
import * as Containers from './containers';

const Routes = ({ toggleArticle }) => (
  <Switch>
    <Route path="/about">
      <Containers.About closeArticle={toggleArticle} />
    </Route>
    <Route path="/contact">
      <Containers.Contact closeArticle={toggleArticle} />
    </Route>
    <Route path="/work">
      <Containers.Work closeArticle={toggleArticle} />
    </Route>
    <Route>
      <Containers.FourOhFour />
    </Route>
  </Switch>
);

Routes.propTypes = {
  toggleArticle: PropTypes.func.isRequired,
};

export default Routes;
