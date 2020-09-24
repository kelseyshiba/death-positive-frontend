import React from 'react';

const Speaker = (props) => {
    return(
        <div className='form-group'>
            <h4>Enter Your Main Speaker</h4>
            <input onChange={(event) => props.handleChange(event)} type='text' name='speaker' className='form-control' placeholder={props.state.speaker} value={props.state.speaker}/>  
        </div>
    )
}

export default Speaker;