import BaseObject from '../Base';

export default class Base extends BaseObject {

    run(actionName, args) {
        const actionPath = actionName.split('/'),
            action = new this.injector
                .get('services')[actionPath[0]][actionPath[1]](this.injector);

        return action.run(args.params);
    }
}
