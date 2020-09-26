import React from 'react';
import { Link } from 'react-router-dom';


const CeremonyCompleted = (props) => {
    
    console.log('in completed ceremony', props.ceremony)
    return (
        <div>
            <div className='row'>
                <div className='col-md-6'>
                    <h4>Your Ceremony Details</h4>
                    <p>Name: {props.ceremony.attributes.name}</p>
                    <p>Location: {props.ceremony.attributes.location_name}</p>
                    <p>Address: {props.ceremony.attributes.address}</p>
                    <p>City: {props.ceremony.attributes.city}</p>
                    <p>State: {props.ceremony.attributes.state}</p>
                    <p>Zip: {props.ceremony.attributes.zip}</p>
                    <p>Type: {props.ceremony.attributes.kind}</p>
                    <p>Speaker: {props.ceremony.attributes.speaker}</p>
                    <p>Schedule: {props.ceremony.attributes.narrative}</p>
                    <p>Cost: {props.ceremony.attributes.cost}</p>
                </div>
                <div className='col-md-6'>
                    <button className='btn btn-warning'>Edit Ceremony</button><br></br><br></br>
                    <Link to={`/ceremonies/${props.ceremony.id}/contacts`}>
                        <button className='btn btn-primary'>Contacts</button>
                    </Link>
                    <p>Who Should We Tell?</p>
                </div>
            </div>
        </div>
    )
}

export default CeremonyCompleted;

