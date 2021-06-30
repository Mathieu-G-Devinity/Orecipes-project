import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

// On importe le BrowserRouter depuis la bibliothèque react-router-dom
import { BrowserRouter as Router } from 'react-router-dom';

import App from 'src/components/App';
import store from 'src/store';

const rootReactElement = (
  <Provider store={store}>
      <Router>
          <App />
      </Router>
  </Provider>
);

const target = document.getElementById('root');

ReactDom.render(rootReactElement, target);
