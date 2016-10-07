import Base from './BaseAPI';

export default class PizzaAPI extends Base {
    create(params) {
        return this.apiClient.post('pizza', params);
    }

    read(id) {
        return this.apiClient.get(`pizza/${id}`);
    }

    update(id, params) {
        return this.apiClient.put(`pizza/${id}`, {}, params);
    }

    delete(id) {
        return this.apiClient.delete(`pizza/${id}`);
    }
}
