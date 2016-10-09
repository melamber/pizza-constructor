import React, {Component} from 'react';
import {Draggable} from 'react-drag-and-drop';


export default class ToppingsBar extends Component {

    render() {
        const {list} = this.props,
              toppingsList = [];

        for (let i in list) {
            toppingsList.push(
                <Draggable key={'topping-' + i}
                           type="topping"
                           data={list[i].id}>
                    <li>
                        <div className="topping draggable ui-widget-content"
                             style={{backgroundColor: list[i].color}}>
                            <p>{list[i].name}</p>
                        </div>
                    </li>
                </Draggable>
            );
        }

        return (
            <aside className="toppings-bar">
                <div className="caption">Toppings</div>
                <ul className="toppings-holder">
                    {toppingsList}
                </ul>
            </aside>
        );
    }
}
