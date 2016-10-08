import Base from '../Base';


export default class Update extends Base {

    execute(data) {
        return new Promise((resolve, reject) => {
            let pathToPizzasDir,
                jsonFile = this.injector.get('jsonFile');
                pathToPizzasDir = this.injector.get('config').pizzaFilesPath;

            if(!data.name || !data.toppingId) {
                return reject(new Error(1));
            }


            jsonFile.readFile(
                `${pathToPizzasDir}/${data.name}.json`, (err, pizza) => {
                    if(err) {
                        return reject(new Error(2))
                    } else if (!data.remove
                        && pizza.composition.indexOf(data.toppingId) == -1
                    ) {
                        pizza.composition
                            .unshift(data.toppingId);

                        if(pizza.composition.length > 4) {
                            pizza.composition.pop();
                        }
                    } else if (data.remove && pizza.composition.length > 0) {
                        let all = pizza.composition;

                        pizza.composition = all.filter(val => {
                            return val != data.toppingId;
                        })
                    } else {
                        return reject(new Error(3))
                    }

                    jsonFile.writeFile(
                        `${pathToPizzasDir}/${data.name}.json`, pizza, err => {
                            if (err) {
                                reject(new Error(4))
                            } else {
                                resolve({composition: pizza.composition})
                            }
                        }
                    );

                }
            );
        });
    }
}
