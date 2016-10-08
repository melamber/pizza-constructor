import TOPPINGS from '../toppings'
import {
    PIZZA_UPDATE
} from '../actions/pizza';



export default function pizza(state = {}, action) {
    switch(action.type) {
    case PIZZA_UPDATE: {
        state = {...TOPPINGS};
        action.data.composition.forEach(id => delete state[id]);

        return state;
    }
    default:
        return state;
    }
}
