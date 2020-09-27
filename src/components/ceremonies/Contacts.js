import React from 'react';

const Contacts = (props) => {
    console.log('in contacts', props)
    return (
        <div>
        {props.ceremony && props.ceremony.attributes.contacts.map(contact => 
            <div key={contact.id}>
                <p>Name: {contact.first_name} {contact.last_name}</p>
                <p>Email: {contact.email}</p>
                <p>Phone: {contact.phone}</p>
                <button className='btn btn-warning'>Edit Button</button>
                <button onClick={() => props.handleDelete(contact.ceremony_id, contact.id)} className='btn btn-danger'>Delete Button</button><br></br>
            </div>) }  
        </div>
    )
}

export default Contacts;