import React from 'react';

const CeremonyCompleted = (props) => {
    console.log('in completed ceremony', props.ceremony)
    return (
        <div>
            <h4>Your Ceremony Details</h4>
            <p>Name: {props.ceremony.name}</p>
            <p>Location: {props.ceremony.location_name}</p>
            <p>Address: {props.ceremony.address}</p>
            <p>City: {props.ceremony.city}</p>
            <p>State: {props.ceremony.state}</p>
            <p>Zip: {props.ceremony.zip}</p>
            <p>Type: {props.ceremony.kind}</p>
            <p>Speaker: {props.ceremony.speaker}</p>
            <p>Schedule: {props.ceremony.narrative}</p>
            <p>Cost: {props.ceremony.cost}</p>
        </div>
    )
}

export default CeremonyCompleted;

