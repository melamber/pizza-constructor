import BaseObject from '../Base';

export default class Base extends BaseObject {

    run(actionName, args) {
        const services = this.injector.get('services');
        const actionPath = actionName.split('/');
        const action = new services[actionPath[0]][actionPath[1]](this.injector);

        return action.run(args);
    }
}
