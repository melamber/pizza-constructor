import React, {Component}   from 'react';
import {connect}            from 'react-redux';
import {bindActionCreators} from 'redux';
import * as pizzaActions    from '../actions/pizza';
import IndexPage            from '../components/pages/Index.jsx';


class IndexPageContainer extends Component {

    static mapStateToProps(state) {
        return {
            pizza: state.pizza,
            pizzaList: state.pizzaList,
            toppings: state.toppings,
        };
    }

    static mapDispatchToProps(dispatch) {
        return {
            pizzaActions: bindActionCreators(pizzaActions, dispatch)
        };
    }

    render() {
        const {pizza, pizzaList, toppings} = this.props;

        return (
            <IndexPage
                pizza={pizza}
                pizzaList={pizzaList}
                toppings={toppings}
            />
        );
    }
}

export default connect(
    IndexPageContainer.mapStateToProps,
    IndexPageContainer.mapDispatchToProps
)(IndexPageContainer);
