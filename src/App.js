import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { Horizon, HorizonProvider } from 'react-hz';

/* eslint-disable */
const horizonInstance = Horizon({ host: '127.0.0.1:8181' });
/* eslint-enable */

ReactDOM.render(
  <HorizonProvider instance={horizonInstance}>
    <Router routes={routes} history={browserHistory} />
  </HorizonProvider>
, document.getElementById('app'));
