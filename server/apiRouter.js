import express from 'express';
import routesFunc from './lib/routes';

export default function (injector) {
    const router = new express.Router();
    const routes = routesFunc(injector);

    router.post('/pizza', routes.pizza.create.bind(routes.pizza));
    router.get('/pizza/:id', routes.pizza.read.bind(routes.pizza));
    router.put('/pizza/', routes.pizza.update.bind(routes.pizza));
    router.delete('/pizza/:id', routes.pizza.delete.bind(routes.pizza));

    return router;
}
