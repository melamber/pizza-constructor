import React, {Component} from 'react';
import PizzaPart          from './PizzaPart.jsx';
import TOPPINGS           from '../../../toppings'
import cx                 from 'classnames';

process.env.BROWSER && require('./Pizza.scss');


export default class Pizza extends Component {

    constructor(props) {
        super(props);

        process.env.BROWSER && props.actions.get('current');
    }


    componentDidMount() {
        $('.pizza-part').draggable();
        $('#droppable').droppable({
            drop: (event, ui) => {
                if(!ui.draggable.hasClass('topping')) {
                    return false;
                }

                this.props.actions.update({
                    name: this.props.pizza.name,
                    toppingId: ui.draggable.data('id')
                })
            }
        });
        $('body').droppable({
            drop: (event, ui) => {
                if(!ui.draggable.hasClass('pizza-part')) {
                    return false;
                }
                this.props.actions.update({
                    name: this.props.pizza.name,
                    toppingId: ui.draggable[0].dataset.id,
                    remove: true
                })
            }
        });
        // TODO we need definitely to refuse jQuery
    }

    componentDidUpdate() {
        $('.pizza-part').draggable();
    }

    render() {
        const {pizza, actions: {update}} = this.props;
        const count = pizza.composition.length;
        const marking = [
            [],
            [''],
            ['half-left', 'half-right'],
            ['third-left', 'third-bottom', 'third-right'],
            ['left-top', 'right-top', 'left-bottom', 'right-bottom'],
        ];
        const toppings = pizza.composition.map((topId, index) => {
            return (
                <PizzaPart key={'pizzaPart-' + index}
                           className={cx(
                               `topping-item-${count}`,
                               marking[count][index]
                           )}
                           style={{backgroundColor: TOPPINGS[topId].color}}
                           data-id={parseInt(topId)}
                >
                    {TOPPINGS[topId].name}
                </PizzaPart>
            );
        });

        return (
            <div className="wrap-pizza">
                <div className="pizza-base ui-widget-header" id="droppable">
                    {toppings}
                </div>
            </div>
        );
    }
}
