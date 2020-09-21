import React from 'react';

const Death = (props) => {
    console.log(props)
    return(
    <div>
        <h4>Death number??</h4>
        <p>Person: {props.death.attributes.person}</p>
    <p>Date: {props.death.attributes.date}</p>
    </div>
    )
}

export default Death;