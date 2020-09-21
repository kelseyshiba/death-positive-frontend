import React from 'react';

//new death record

class DeathForm extends React.Component {

    state = {
        person: '',
        date: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createDeath(this.state)
        this.setState({
            person: '',
            date: ''
        })
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render (){
        return (
            <div className='container'>
            <form onSubmit={this.handleSubmit} className='form-group'>
                <label htmlFor='name'>Enter Name of Person Dyin':</label>
                <input onChange={this.handleOnChange} type='text' name='person' value={this.state.name} className='form-control'/><br></br>
                <label htmlFor='date'>Enter Date (YYYY-MM-DD) or Write Enter 'SomeDay In The Future'</label>
                <input onChange={this.handleOnChange} type='text' name='date' value={this.state.date} className='form-control'/><br></br>
                <button type='submit' className='btn btn-success'>Submit</button>
            </form>
            </div>
        )
    }
}

export default DeathForm;