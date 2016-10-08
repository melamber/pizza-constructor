import Base from '../Base';

export default class Pizza extends Base {

    constructor(injector, data) {
        super(injector);

        this.__name = '';
        this.composition = [];

        Object.assign(this, data);
    }

    set name(val) {
        if(!val) {
            throw new TypeError('Pizza name must not be empty.');
        } else if (typeof val !== 'string') {
            throw new TypeError('Pizza name must be a string.');
        }
        this.__name = val;
    }

    get name() {
        return this.__name;
    }

};
