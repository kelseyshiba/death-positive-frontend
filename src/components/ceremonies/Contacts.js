import React from 'react';

const Contacts = (props) => {
    return (
        <div>
        {props && props.contacts.map(contact => 
            <div key={contact.id}>
                <p>Name: {contact.attributes.first_name} {contact.attributes.last_name}</p>
                <p>Email: {contact.attributes.email}</p>
                <p>Phone: {contact.attributes.phone}</p>
                <button className='btn btn-warning'>Edit Button</button>
                <button onClick={() => props.handleDelete(contact.attributes.ceremony_id, contact.id)} className='btn btn-danger'>Delete Button</button><br></br>
            </div>) }  
        </div>
    )
}


export default Contacts;