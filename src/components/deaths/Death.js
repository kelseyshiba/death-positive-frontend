import React from 'react';
import CeremonyContainer from '../../containers/CeremonyContainer';

const Death = (props) => {
    console.log('in death', props.deaths)
    let death = props.deaths.find(death => death.id === props.match.params.id)

    const handleDelete = (id) => {
        props.deleteDeath(id)
        props.history.push('/deaths')
    }
    console.log(2)
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h3>Obituary Number {death ? death.id : null}</h3><br></br>
                    <h4>Person: {death ? death.attributes.person : null}</h4>
                    <h4>Date: {death ? death.attributes.date : null}</h4>
                    <hr/>
                </div>
                <div className='col-sm'>
                    <button onClick={() => handleDelete(death.id)} className='btn btn-danger'>Delete Death</button>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                <CeremonyContainer death={death}/>
                </div>
            </div>
        </div>
    )
}

export default Death;