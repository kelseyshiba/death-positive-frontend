import React from 'react';
import { Link } from 'react-router-dom';
import Ceremony from './Ceremony';

const Death = (props) => {
    let death = props.deaths.find(death => death.id === props.match.params.id)
    
    return(
        <div className='container'>
    <div className='row'>
        <div className='col'>
            <h3>Obit {death ? death.id : null}</h3><br></br>
            <p>Person: {death ? death.attributes.person : null}</p>
            <p>Date: {death ? death.attributes.date : null}</p>
            <hr/>
        </div>
        <div className='col-sm'>
            <button onClick={() => props.deleteDeath(death.id)} className='btn btn-danger'>Delete Death</button>
        </div>
    </div>
    <div className='row'>
        <div className='col'>
        <h4 className='text-center'>Choose Your Sleeping Arrangements</h4>
        <Ceremony />
        </div>
    </div>
    </div>
    )
}

export default Death;