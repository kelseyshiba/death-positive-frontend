import React from 'react';

const Narrative = (props) => {
    return (
        <div className='form-group'>
            <h4>How would you like your ceremony to go? (Timings, events, readings)</h4>
            <label htmlFor='narrative'>Narrative</label>
            <textarea onChange={(event) => props.handleChange(event)} name='narrative' className="form-control rounded-0" placeholder={props.state.narrative} value={props.state.narrative} rows="10"/>
        </div>
    )
}

export default Narrative;