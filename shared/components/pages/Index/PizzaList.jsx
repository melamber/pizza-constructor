import React, {Component} from 'react';


export default class PizzaList extends Component {

    render() {
        const {list} = this.props;

        return (
            <aside className="pizza-examples-bar">
                <div className="caption">Ready pizza</div>
                <ul>
                    <li><p>Item1</p></li>
                    <li><p>Item1</p></li>
                    <li><p>Item1</p></li>
                    <li><p>Item1</p></li>
                    <li><p>Item1</p></li>
                </ul>
            </aside>
        );
    }
}
