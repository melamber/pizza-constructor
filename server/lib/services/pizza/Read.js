import Base from '../Base';


export default class Read extends Base {

    execute(data) {
        return new Promise((resolve, reject) => {
            let pathToPizzasDir,
                jsonFile = this.injector.get('jsonFile');
            pathToPizzasDir = this.injector.get('config').pizzaFilesPath;

            jsonFile.readFile(
                `${pathToPizzasDir}/${data.name}.json`, (err, pizza) => {
                    if(err) {
                        return reject(new Error(1));
                    }
                    resolve(pizza);
                }
            );
        });
    }

}
