import React from 'react';

export const Input = (props) => {
    return <div className='input'>
        <label className='input__label' htmlFor={this.props.id}>{this.props.title}</label>
        <input className='input__native-input'
            onChange={this.props.onChange}
            onBlur={this.props.onBlur}
            value={this.state.name} 
            type={this.props.type} 
            id={this.props.id}/>
    </div>
};