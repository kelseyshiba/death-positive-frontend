import React from 'react';
// import { Link } from 'react-router-dom';
import CeremonyContainer from '../containers/CeremonyContainer';

const Death = (props) => {
    let death = props.deaths.find(death => death.id === props.match.params.id)
    
    // const handleDelete = (id) => {
    //     props.deleteDeath(id)
    //     this.props.history('/deaths')
    // }
    return(
        <div className='container'>
    <div className='row'>
        <div className='col'>
            <h3>Obit {death ? death.id : null}</h3><br></br>
            <h3>Person: {death ? death.attributes.person : null}</h3>
            <h3>Date: {death ? death.attributes.date : null}</h3>
            <hr/>
        </div>
        <div className='col-sm'>
            <button onClick={() => props.deleteDeath(death.id)} className='btn btn-danger'>Delete Death</button>
        </div>
    </div>
    <div className='row'>
        <div className='col'>
        <CeremonyContainer />
        </div>
    </div>
    </div>
    )
}

export default Death;