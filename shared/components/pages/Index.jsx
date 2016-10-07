import React, {Component} from 'react';
import Button             from '../Button.jsx';
import ToppingsBar             from './Index/ToppingsBar.jsx';

if(process.env.BROWSER) {
    require('./Index/Button.scss');
}


export default class App extends Component {

    render() {
        const {toppings, pizza, pizzaList} = this.props;

        return (
            <div>
                <header>
                    <div className="h1">Make your own delicious pizza!</div>
                </header>
                <main>
                    <aside>
                        <div className="caption">Toppings</div>
                        <ToppingsBar list={toppings}/>
                    </aside>
                    <div className="content">
                        <div className="wrap-pizza">
                            <div className="pizza-base ui-widget-header"
                                 id="droppable">
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        );
    }
}
