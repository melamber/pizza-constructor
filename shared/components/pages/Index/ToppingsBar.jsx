import React, {Component} from 'react';


export default class ToppingsBar extends Component {

    componentDidMount() {
        $('.topping').draggable();
    }

    componentDidUpdate() {
        $('.topping').draggable();
    }

    render() {
        const {list} = this.props,
              toppingsList = [];

        for (let i in list) {
            toppingsList.push(
                <li key={'topping-' + i} id={i}>
                    <div className="topping draggable ui-widget-content"
                         style={{backgroundColor: list[i].color}}
                         data-id={list[i].id}>
                        <p>{list[i].name}</p>
                    </div>
                </li>
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
