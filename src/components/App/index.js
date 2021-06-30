import React from 'react';
import PropTypes from 'prop-types';

// Tous les éléments nécessaires au bon fonctionnement du router
import { Route, Switch, Redirect } from 'react-router-dom';

import Menu from 'src/containers/Menu';
import Home from 'src/containers/Home';
import Recipe from 'src/containers/Recipe';
//import Error from 'src/components/Error';

import Loading from './Loading';

import './style.scss';

function App(props) {
  if (props.loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />
     
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/recipe/crepes-raffinees" exact>
          <Recipe />
        </Route>
        <Route path="/error" exact>
          {/*<Error />*/}
        </Route>
      </Switch>
     
    </div>
  );
}

App.propTypes = {
  loading: PropTypes.bool,
};

App.defaultProps = {
  loading: false,
};

export default App;
