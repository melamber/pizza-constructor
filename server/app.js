import express               from 'express';
import cookieParser          from 'cookie-parser';
import bodyParser            from 'body-parser';
import session               from 'express-session';
import apiRouter             from './apiRouter';
import {fetchComponentsData} from './utils';
import {injector}            from './dependencies';
import renderFullHTML        from './utils/renderFullHTML';

import React                   from 'react';
import ReactDOM                from 'react-dom/server';
import {Provider}              from 'react-redux';
import {RoutingContext, match} from 'react-router';
import routes                  from '../shared/routes.jsx';
import configureStore          from '../shared/store/configureStore';
import clientConfig            from '../etc/client-config.json';


const app = express();

app.use(bodyParser.json({
    limit: 1024 * 1024,
    verify(req, res, buf) {
        try {
            JSON.parse(buf);
        } catch (e) {
            res.send({
                status: 0,
                error: {
                    code: 'BROKEN_JSON',
                    message: 'Please, verify your json'
                }
            });
        }
    }
}));

app.use('/api', apiRouter(injector));
app.use('/static', express.static('public/static'));
app.use(cookieParser());
app.use(session(injector.get('config')['SESSION_OPTIONS']));
app.use((req, res) => {
    const store = configureStore();

    match({
        routes,
        location: req.url
    }, (error, redirectLocation, renderProps) => {
        if (redirectLocation) {
            res.redirect(
                301, redirectLocation.pathname + redirectLocation.search
            );
        } else if (error) {
            res.status(500).send(error.message);
        } else if (!renderProps) {
            res.status(404).send('Not found');
        } else {
            fetchComponentsData(
                store.dispatch,
                renderProps.components,
                renderProps.params,
                renderProps.location.query
            )
            .then(() => {
                const componentHTML = ReactDOM.renderToString(
                    <Provider store={store}>
                        <RoutingContext {...renderProps}/>
                    </Provider>
                ),
                    initialState = store.getState();

                return renderFullHTML(
                    componentHTML,
                    initialState,
                    {...clientConfig}
                );
            })
            .then(html => res.end(html))
            .catch(err => {
                console.log(err.stack);
                res.end(err.message);
            });
        }
    });
});

const PORT = process.env['PORT'] || injector.get('config')['HTTP_PORT'];

app.listen(PORT, () => console.info(`Server listening on: ${PORT}`));
