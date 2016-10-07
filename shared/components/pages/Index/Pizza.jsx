import React, {Component} from 'react';


export default class Pizza extends Component {

    render() {
        const {pizza} = this.props;

        return (
            <div className="wrap-pizza">
                <div className="pizza-base ui-widget-header" id="droppable">
                    <div className="topping-item-2 half-left"></div>
                    <div className="topping-item-2 half-right"></div>
                    <div className="topping-item-3 third-left"></div>
                    <div className="topping-item-3 third-bottom"></div>
                    <div className="topping-item-3 third-right"></div>
                    <div className="topping-item-4 left-top"></div>
                    <div className="topping-item-4 right-top"></div>
                    <div className="topping-item-4 left-bottom"></div>
                    <div className="topping-item-4 right-bottom"></div>
                </div>
            </div>
        );
    }
}
