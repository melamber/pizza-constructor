import '../public/static/jquery-ui.min.js';

import React            from 'react';
import ReactDOM         from 'react-dom';
import {Provider}       from 'react-redux';
import {Router}         from 'react-router';
import configureStore   from '../shared/store/configureStore';
import routes           from '../shared/routes.jsx';
import {createHistory}  from 'history';

const history = createHistory(),
      initialState = window.__INITIAL_STATE__ || {},
      store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <Router children={routes} history={history} />
    </Provider>,
    document.getElementById('body')
);

