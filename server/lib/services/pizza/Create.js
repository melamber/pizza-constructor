import Base from '../Base';


export default class Create extends Base {

    async execute(data) {
        let pathToPizzasDir, pizza,
            error = 0;

        try {
            pathToPizzasDir = '../../../../pizza_files';

            if (!data.id) {
                data.id = this.injector.get('fs').readdirSync(pathToPizzasDir);
            }

            pizza = this.injector.new('pizzaModel', data);
        } catch (e) {
            error = 2;
        }

        await this.injector('jsonFile')
            .writeFile(
                `${pathToPizzasDir}/${data.name}.json`,
                pizza,
                err => error = 3
            );

        return error > 0 ? {error}: {id: countFiles};
    }
}
