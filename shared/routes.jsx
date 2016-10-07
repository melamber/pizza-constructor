import React     from 'react';
import {Route}   from 'react-router';
import App       from './containers/App.jsx';
import IndexPage from './containers/IndexPage.jsx';

export default (
    <Route component={App} >
        <Route component={IndexPage} path='/'/>
    </Route>
);
