import React, {Component, PropTypes} from 'react';
import cx from 'classnames';


export default class PizzaPart extends Component {

    static propTypes = {
        'data-id': PropTypes.number.isRequired,
    };

    render() {
        const {className, ...otherProps} = this.props;
        const classes = cx('pizza-part', className);

        return (
            <div className={classes} {...otherProps}>
                <span>{this.props.children}</span>
            </div>
        );
    }
}
