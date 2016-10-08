import React, {Component} from 'react';

process.env.BROWSER && require('./PizzaTitle.scss');


export default class PizzaTitle extends Component {

    handlePizzaNameAssigning(e) {
        console.log(e.target);
    }

    render() {
        const {pizza} = this.props;

        return (
            <div className="pizza-name-holder">
                <input type="text"
                       onChange={this.handlePizzaNameAssigning.bind(this)}
                       defaultValue={pizza.name}
                       placeholder="Put the name..."/>
                <span>{pizza.composition.length}</span>
                &nbsp;
                <span>toppings</span>
            </div>
        );
    }
}