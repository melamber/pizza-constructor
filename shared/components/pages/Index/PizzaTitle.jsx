import React, {Component} from 'react';

if(process.env.BROWSER) {
    require('./PizzaTitle.scss');
}


export default class PizzaTitle extends Component {

    render() {
        const {pizza} = this.props;

        return (
            <div className="pizza-name-holder">
                <input type="text" placeholder="Put the name..."/>
                <span>4</span>
                <span>toppings</span>
            </div>
        );
    }
}