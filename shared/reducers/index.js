import {combineReducers} from 'redux';

import pizza     from './pizza';
import pizzaList from './pizzaList';
import toppings  from './toppings';

const rootReducer = combineReducers({
    pizza,
    pizzaList,
    toppings,
});

export default rootReducer;
