import React from 'react';

export const TYPES = {
    primary: '0',
    default: '1',
    warn: '2'
}

export const Button = props => {
    const classNames = classnames('btn', {
        'btn_default': true,
        'btn_primary': props.type === TYPES.primary
    });

    return <button
        className={}
        type={props.type || 'submit'}
        onClick={props.onClick}
        >{props.title}</button>
}