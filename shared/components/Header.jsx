import React, {Component} from 'react';

if(process.env.BROWSER) {
    require('./Header.less');
}

export default class Header extends Component {

    render() {
        return (
            <header>
                <div className="h1">Make your own delicious pizza!</div>
            </header>
        );
    }
}
