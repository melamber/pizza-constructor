import React, { Component } from 'react';
import cx from 'classnames';


export default class Button extends Component {
    render() {
        const { className, ...otherProps } = this.props;

        const classes = cx('Button', className);

        return (
            <button className={classes} {...otherProps}>
                {this.props.children}
            </button>
        );
    }
}
