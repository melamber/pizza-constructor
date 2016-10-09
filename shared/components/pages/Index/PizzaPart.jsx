import React, {Component, PropTypes} from 'react';
import {Draggable}                   from 'react-drag-and-drop'
import cx                            from 'classnames';


export default class PizzaPart extends Component {

    render() {
        const {className, ...otherProps} = this.props;
        const classes = cx('pizza-part', className);

        return (
            <Draggable className={classes} {...otherProps}>
                {this.props.children}
            </Draggable>
        );
    }
}
