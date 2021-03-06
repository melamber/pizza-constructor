import React, {Component} from 'react';
import Header             from '../Header.jsx';
import Button             from '../Button.jsx';
import ToppingsBar        from './Index/ToppingsBar.jsx';
import Pizza              from './Index/Pizza.jsx';
import PizzaList          from './Index/PizzaList.jsx';
import PizzaTitle         from './Index/PizzaTitle.jsx';
import {Droppable}        from 'react-drag-and-drop'

process.env.BROWSER && require('./Index/Button.scss');


export default class App extends Component {

    handleDropping(data) {
        this.props.pizzaActions.update({
            name: this.props.pizza.name,
            toppingId: data.part,
            remove: true
        })
    }

    render() {
        const {toppings, pizza, pizzaList, pizzaActions} = this.props;
        const buttons = [
            ['create', 'fa-plus'],
            ['delete', 'fa-trash-o'],
            ['save', 'fa-floppy-o'],
        ].map(data => {
            return (
                <Button key={`button-${data[0]}`} className={data[0]} >
                    <i className={`fa ${data[1]}`} aria-hidden="true"/>
                    {data[0]}
                </Button>
            )
        });

        return (
            <div>
                <Header/>
                <Droppable types={['part']}
                           onDrop={this.handleDropping.bind(this)}>
                    <main>
                        <ToppingsBar list={toppings}/>
                        <div className="content">
                            <PizzaTitle pizza={pizza}/>
                            <Pizza pizza={pizza} actions={pizzaActions}/>
                            <div className="buttons-holder">{buttons}</div>
                        </div>
                        <PizzaList list={pizzaList} actions={pizzaActions}/>
                    </main>
                </Droppable>
            </div>
        );
    }
}
