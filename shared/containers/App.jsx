import React, {Component, PropTypes} from 'react';

process.env.BROWSER && require('../assets/styles/style.scss');


export default class App extends Component {
    static propTypes = {
        location: PropTypes.object,
        routes: PropTypes.array,
        children: PropTypes.object,
        history: PropTypes.object
    };

    render() {
        return <div className='App'>{this.props.children}</div>;
    }
}
