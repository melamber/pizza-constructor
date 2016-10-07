import {toppings} from '../../etc/toppings.json'
import {
    PIZZA_UPDATE
} from '../actions/pizza';

const DEFAULT_STATE = {};
const coefficient = parseInt('FFF', 16) / toppings.length;

for(let i in toppings) {
    toppings[i].color = '#' + (
            '00' + (toppings[i].id * coefficient).toString(16)
        ).split('.')[0].substr(-3);

    DEFAULT_STATE[toppings[i].id] = toppings[i];
}

export default function pizza(state = DEFAULT_STATE, action) {
    switch(action.type) {
    case PIZZA_UPDATE: {
        state = {...DEFAULT_STATE};

        action.data.composition.forEach(id => delete state[id]);

        return state;
    }
    default:
        return state;
    }
}
