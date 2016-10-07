import config    from '../config';
import ApiClient from './ApiClient';
import PizzaAPI  from './PizzaAPI';

const api = new ApiClient(config['API_URL']);

export default {
    pizza: new PizzaAPI(api),
};
