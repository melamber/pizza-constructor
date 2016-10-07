import Pizza from './Pizza';

export default function (injector) {
    return {
        pizza: new Pizza(injector),
    };
}
