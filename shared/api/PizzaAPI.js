import Base from './BaseAPI';

export default class PizzaAPI extends Base {
    create(params) {
        return this.apiClient.post('pizza', params);
    }

    read(name) {
        return this.apiClient.get(`pizza/${name}`);
    }

    update(params) {
        return this.apiClient.put('pizza', params);
    }

    delete(id) {
        return this.apiClient.delete(`pizza/${id}`);
    }
}
