import {toppings} from '../etc/toppings.json';

const normalizedToppings = {};
const coefficient = parseInt('FFF', 16) / toppings.length;

for(let i in toppings) {
    toppings[i].color = '#' + (
            '00' + (toppings[i].id * coefficient).toString(16)
        ).split('.')[0].substr(-3);

    normalizedToppings[toppings[i].id] = toppings[i];
}

export default normalizedToppings;
