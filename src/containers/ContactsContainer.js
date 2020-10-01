import React from 'react';
import Contacts from '../components/ceremonies/Contacts';
import { connect } from 'react-redux';
import { addContact, deleteContact, fetchContacts } from '../actions/contactActions';

class ContactsContainer extends React.Component {

    state = {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        ceremony_id: this.props.match.params.id
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addContact(this.state, this.props.match.params.id)
        this.setState({new: true})
        this.setState({
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            ceremony_id: ''
        })
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleDelete = (ceremonyId, contactId) => {
        this.props.deleteContact(ceremonyId, contactId)
    }
    
    componentDidMount() {
        this.props.fetchContacts(this.props.match.params.id)
    }

    render () {
        //filtering contacts based on the ceremonyy_id - passed down 
        return (
            <div className='container'>
            <div className='row'>
                <h4 className='text-center'>New Contact</h4>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <form onSubmit={this.handleSubmit} className='form-group'>
                        <label htmlFor='first_name'>First Name:</label>
                        <input onChange={this.handleOnChange} type='text' className='form-control' name='first_name' value={this.state.first_name} placeholder={this.state.first_name}/>
                        <label htmlFor='last_name'>Last Name:</label>
                        <input onChange={this.handleOnChange} type='text' className='form-control' name='last_name' value={this.state.last_name} placeholder={this.state.last_name} /> 
                        <label htmlFor='email'>Email:</label>
                        <input onChange={this.handleOnChange} type='text' className='form-control' name='email' value={this.state.email} placeholder={this.state.email} /> 
                        <label htmlFor='phone'>Phone:</label>
                        <input onChange={this.handleOnChange} type='text' className='form-control' name='phone' value={this.state.phone} placeholder={this.state.phone} /> 
                        <button className='btn btn-success'>Add Contact</button>
                    </form>
                </div>
                <div className='col-md-6'>
                    <h4>Contacts List</h4>
                    <Contacts handleDelete={this.handleDelete} contacts={this.props.contacts}/>
                </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        contacts: state.contacts
    }
}

export default connect(mapStateToProps, { addContact, deleteContact, fetchContacts })(ContactsContainer);

