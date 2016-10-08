import Base          from './Base';
import renderPromise from '../render';

export default class Pizza extends Base {

    create(req, res) {
        const promise = this.run('pizza/Create', req.body);

        renderPromise(req, res, promise);
    }

    read(req, res) {
        const promise = this.run('pizza/Read', {name: req.params.name});

        renderPromise(req, res, promise);
    }

    update(req, res) {
        const promise = this.run('pizza/Update', req.body);

        renderPromise(req, res, promise);
    }

    delete(req, res) {
        const promise = this.run('pizza/Delete', {id: req.params.id});

        renderPromise(req, res, promise);
    }

}
