import React from 'react';
import {
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

import App from './App';
import HomePage from './components/home';

/**
 * @returns {JSX} JSX element
*/

const routes = [
  {
    path: '/',
    component: HomePage,
    protected: false
  },
  {
    path: '/services',
    component: HomePage,
    protected: false
  },
  {
    path: '/about',
    component: HomePage,
    protected: false,
    routes: [
      {
        path: 'about/board-of-directors',
        component: HomePage,
        protected: false,
      },
      {
        path: 'about/management',
        component: HomePage,
        protected: false,
      },
    ]
  }
]


function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

function Main() {
  return (
    <Router>
      <App>
        {routes.map((route, idx) => {
          if (route.protected) {
            return (null);
          }
          return (<RouteWithSubRoutes
            key={idx}
            {...route} />)
        })}
      </App>
    </Router>
  );
}
export default Main;
