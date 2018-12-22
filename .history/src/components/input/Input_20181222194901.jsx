import React from 'react';
import './Input.css';
export const Input = (props) => {
    return <div className='input'>
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