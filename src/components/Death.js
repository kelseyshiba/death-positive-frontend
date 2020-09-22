import React from 'react';

const Death = (props) => {
    return(
    <div>
        <h4>Death number {props.id + 1}</h4>
        <p>Person: {props.attributes.person}</p>
    <p>Date: {props.attributes.date}</p>
    </div>
    )
}

export default Death;