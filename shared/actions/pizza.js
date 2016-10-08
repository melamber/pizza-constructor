import api from '../api';

export const PIZZA_REQUEST = 'PIZZA_REQUEST';
export const PIZZA_UPDATE  = 'PIZZA_UPDATE';
export const PIZZA_FAIL    = 'PIZZA_FAIL';
export const PIZZA_DELETE  = 'PIZZA_DELETE';


export function createNew() {
    return dispatch => {
        dispatch({type: PIZZA_REQUEST});

        let data = {
            id: 0,
            name: 'current',
        };

        return api.pizza
            .create(data)
            .then(data => dispatch({
                type: PIZZA_UPDATE,
                data,
            }))
            .catch(err => dispatch({type: PIZZA_FAIL}));
    };
}

export function save(data) {
    return dispatch => {
        dispatch({type: PIZZA_REQUEST});

        return api.pizza
            .create(data)
            .then(data => dispatch({
                type: PIZZA_UPDATE,
                data,
            }))
            .catch(err => dispatch({type: PIZZA_FAIL}));
    };
}

export function get(name) {
    return dispatch => {
        dispatch({type: PIZZA_REQUEST});

        return api.pizza
            .read(name)
            .then(data => dispatch({
                type: PIZZA_UPDATE,
                data,
            }))
            .catch(err => dispatch({type: PIZZA_FAIL}));
    };
}

export function update(data) {
    return dispatch => {
        dispatch({type: PIZZA_REQUEST});

        return api.pizza
            .update(data)
            .then(data => dispatch({
                type: PIZZA_UPDATE,
                data,
            }))
            .catch(err => dispatch({type: PIZZA_FAIL}));
    };
}

export function remove(id) {
    return dispatch => {
        dispatch({type: PIZZA_REQUEST});

        return api.pizza
            .delete(id)
            .then(data => dispatch({
                type: PIZZA_DELETE,
                data: {id}
            }))
            .catch(err => dispatch({type: PIZZA_FAIL}));
    };
}
