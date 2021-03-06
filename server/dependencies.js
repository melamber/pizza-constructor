import Injector          from './utils/Injector';
import services          from './lib/services';
import pizzaModel        from './lib/models/Pizza';
import jsonFile          from 'jsonfile';
import fs                from 'fs';
import serverConfig      from '../etc/server-config.json';


export const injector = new Injector();

injector.register({
    key: 'config',
    type: 'value',
    value: Object.freeze({
        ...serverConfig,
        pizzaFilesPath: __dirname + '/../pizza_files',
    })
}, {
    key: 'services',
    type: 'value',
    value: services
}, {
    key: 'pizzaModel',
    type: 'class',
    value: pizzaModel,
    args: [injector]
}, {
    key: 'jsonFile',
    type: 'value',
    value: jsonFile
}, {
    key: 'fs',
    type: 'value',
    value: fs
});
