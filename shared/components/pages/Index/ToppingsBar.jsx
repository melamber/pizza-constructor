import React, {Component} from 'react';


if(process.env.BROWSER) {
    require('./ToppingsBar.scss');
}

export default class ToppingsBar extends Component {

    componentDidMount() {
        if(process.env.BROWSER) {
            $('.draggable').draggable();
            $('#droppable').droppable({
                drop(event) {
                    if (event.target.id == 1) {

                    }
                    $(event.target).addClass('ui-state-highlight');
                }
            });
        }
    }

    render() {
        const {list} = this.props,
              toppingsList = [];

        for (let i in list) {
            toppingsList.push(
                <li key={'topping-' + i} id={i}>
                    <div className="draggable ui-widget-content">
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
