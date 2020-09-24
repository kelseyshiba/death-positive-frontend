import React from 'react';

const Name = (props) => {
    console.log(props)
    return (
        <div className='form-group'>
            <h4>Please Give A Title for Your Service</h4>
            <input type='text' name='name' className='form-control' placeholder={props.state.name} value={props.state.name} onChange={(event) => {props.handleChange(event)}} />
        </div>
    )
}

export default Name;