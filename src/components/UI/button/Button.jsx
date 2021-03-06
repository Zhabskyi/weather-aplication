import React from 'react';
import classnames from 'classnames';
import './Button.css';

export const TYPES = {
    primary: '0',
    default: '1',
    warn: '2'
};

export const Button = props => {
    const classNames = classnames('btn', {
        'btn_default': props.type === TYPES.default,
        'btn_primary': props.type === TYPES.primary,
				'btn_warn': props.type === TYPES.warn,
    });

    return <button
        className={classNames + ' ' + props.className}
        type={props.type || 'submit'}
        onClick={props.onClick}
        >{props.title}</button>
}

export default Button;