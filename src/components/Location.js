import React from 'react';

const Location = (props) => {
    return (
        <div>
            <h3>Please Enter Your Resting Place</h3>
            <div className='form-group'>
            <label htmlFor='address'>Location Name: (e.g. 'Funeral Home')</label>
                <input onChange={(event) => props.handleChange(event)} className='form-control' type='text' name='location_name' value={props.state.value} placeholder={props.state.location_name}/>
                <label htmlFor='address'>Address:</label>
                <input onChange={(event) => props.handleChange(event)} className='form-control' type='text' name='address' value={props.state.value} placeholder={props.state.address}/>
                <label htmlFor='address'>City</label>
                <input onChange={(event) => props.handleChange(event)} className='form-control' type='text' name='city' value={props.state.value} placeholder={props.state.city}/>
                <label htmlFor='address'>State</label>
                <input onChange={(event) => props.handleChange(event)} className='form-control' type='text' name='state' value={props.state.value} placeholder={props.state.state}/>
                <label htmlFor='address'>Zip</label>
                <input onChange={(event) => props.handleChange(event)} className='form-control' type='text' name='zip' value={props.state.value} placeholder={props.state.zip}/>
            </div> 
        </div>
    )
}

export default Location;