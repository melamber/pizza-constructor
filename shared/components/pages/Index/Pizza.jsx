import React, {Component} from 'react';
import PizzaPart          from './PizzaPart.jsx';
import TOPPINGS           from '../../../toppings'
import cx                 from 'classnames';
import {Droppable}        from 'react-drag-and-drop'

process.env.BROWSER && require('./Pizza.scss');


export default class Pizza extends Component {

    constructor(props) {
        super(props);

        process.env.BROWSER && props.actions.get('current');
    }

    handleDropping(data) {
        this.props.actions.update({
            name: this.props.pizza.name,
            toppingId: data.topping
        })
    }

    render() {
        const {pizza: {composition}} = this.props;
        const count = composition.length;
        const marking = [
            [],
            [''],
            ['half-left', 'half-right'],
            ['third-left', 'third-bottom', 'third-right'],
            ['left-top', 'right-top', 'left-bottom', 'right-bottom'],
        ];
        const toppings = (count != 3)
            ? composition.map((topId, index) => {
                return (
                    <PizzaPart key={'pizzaPart-' + index}
                               className={cx(
                                   `topping-item-${count}`,
                                   marking[count][index]
                               )}
                               type="part"
                               data={topId}
                               style={{backgroundColor: TOPPINGS[topId].color}}
                    >
                        <span>{TOPPINGS[topId].name}</span>
                    </PizzaPart>
                );
            })
            : composition.map((topId, index) => {
                let style = {backgroundColor: TOPPINGS[topId].color};
            return (
                <PizzaPart key={'pizzaPart-' + index}
                           className={cx(
                               `topping-item-${count}`,
                               marking[count][index]
                           )}
                           type="part"
                           data={topId}
                >
                    <div style={style}/>
                    <div style={style} className="second-part"/>
                    <span>{TOPPINGS[topId].name}</span>
                </PizzaPart>
            );
        });

        return (
            <Droppable className="wrap-pizza"
                       types={['topping']}
                       onDrop={this.handleDropping.bind(this)}>
                <div className="pizza-base ui-widget-header">
                    {toppings}
                </div>
            </Droppable>
        );
    }
}
