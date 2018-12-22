import React from 'react';
import './Input.css';
import classnames from 'classnames';

export const Input = (props) => {
    const classNames = classnames('input', {'input_invalid': props.invalid});
    
    return <div className={classNames}>
        <label className='input__label' htmlFor={props.id}>{props.title}</label>
        <input className='input__native-input'
            onChange={props.onChange}
            onBlur={props.onBlur}
            value={props.value} 
            type={props.type} 
            id={props.id}/>
    </div>
};

export default Input;