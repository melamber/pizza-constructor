import React, {Component} from 'react';


export default class Button extends Component {
    render() {
        const {className, ...otherProps} = this.props;

        return (
            <button className={className} {...otherProps}>
                {this.props.children}
            </button>
        );
    }
}
