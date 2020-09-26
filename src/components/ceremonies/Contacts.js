import React from 'react';

const Contacts = (props) => {
    console.log('in contacts', props.death)
    return (
        <div>HI
        {/* {props.death.attributes && props.death.attributes.ceremony.contacts.map(contact => 
            <div>
                <p>Name: {contact.first_name} {contact.last_name}</p>
                <p>Email: {contact.email}</p>
                <p>Phone: {contact.phone}</p>
                <button className='btn btn-warning'>Edit Button</button>
                <button className='btn btn-danger'>Delete Button</button>
            </div>) }   */}
        </div>
    )
}

export default Contacts;