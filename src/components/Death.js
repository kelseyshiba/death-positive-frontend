import React from 'react';

const Death = (props) => {
    // console.log(props)
    return(
    <div>
        <h3>Obit {props.deathId}</h3>
        <p>Person: {props.death.person}</p>
        <p>Date: {props.death.date}</p>
        <button className='btn btn-primary'>More..</button>
        <button onClick={() => props.handleDelete(props.deathId)} className='btn btn-danger'>Delete</button>
    </div>
    )
}

export default Death;